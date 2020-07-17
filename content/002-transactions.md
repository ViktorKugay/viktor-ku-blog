---
id: transactions
title: The Price of The Transactions
date: '2020-05-03T00:00:00. 000Z'
image: https://images.unsplash.com/photo-1478031706604-bb4b7b0b4e9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
description: Combine separated transactions every where you can and even more
---

When I started learning Nestjs I had no time to explore docs enough or graduate the courses. Unfortunately, I knew absolutely nothing about PostgreSql and Nestjs. It was time for discovery so I received issues, deadlines and no more. After that I quickly explored main features, forked examples and wrote several modules. "Not so difficult": I thought. _Guards_, _Strategies_, _Validators_, _Typeorm_ - all worked fine. I even read _transaction_ section of the official nestjs docs [docs. nestjs. com/techniques/database#transactions](https://docs.nestjs.com/techniques/database#transactions) and ...

## "It's a trap!"

<div align='center'>

    <img src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F000%2F157%2Fitsatrap.jpg' />

</div>

Yes, It was a trap. Unfortunately, all examples that I found were small applications implements only simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionalities like this

```javascript
public async createCar(catName: string) {
    return await this.catsRepository.save({
        catName
    });
}
```

so all my methods did not combine siparated transactions. For example:

```javascript
public async createPostComment(postId: string, value: string) {
    const [post] = await this.postsRepository.query(`
    SELECT "posts"."id"
    FROM "posts"
    WHERE "id" = $1
  `, [postId]);

    if (!post) {
        throw new CustomError(errorNames.POST_DOESNT_EXIST);
    }

    return await this.commentsRepository.query(`
    INSERT INTO "comments"
    VALUES(DEFAULT, $1, DEFAULT, DEFAULT, $2)
    RETURNING *
  `, [value, post.id]);
}
```

What happened next? Ofcourse high loading, transactions queue and fatal increased response time. If you want to avoid it you need to read about object-relational database management systems specificities before deploy your application to the production.

## Transactions

The relational database is a digital database based on the relational model of data (I used [PostgreSql](https://www.postgresql.org) but this also applies to other [RDBMS](https://en.wikipedia.org/wiki/Relational_database#RDBMS)). Transactional integrity is one of the most important features of RDBMS and one of the main reason why RDBM systems the most common databases in the world. According to open [resources](https://medium.com/@kristi.anderson/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use-df11dbd981f3) almost **60%** users use RDBMS right now.

PostgreSql has useful [documentation](https://www.postgresql.org/docs/manuals) so let's check it to find the most important sections to get started with RDBMS.

> Transactions are a fundamental concept of all database systems. The essential point of a transaction is
> that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between
> the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the
> transaction from completing, then none of the steps affect the database at all.

...

> Another important property of transactional databases is closely related to the notion of atomic
> updates: when multiple transactions are running concurrently, each one should not be able to see the
> incomplete changes made by others.

Transactions provide entities integrity and even your application high loaded you can be sure that all database entities will have valid state. Every function of your code will communicate with prepared, valid entity. If something goes wrong during code execution transaction will be reverted and you doesn't save broken entity. Let's see examples:

```javascript
public async payUnderTheContract(customer: string, contractor: string, value: number) {
    await this.clientsRepository.query(`
    UPDATE "clients" SET "balance" = "balance" - $1
    WHERE "id" = $2;
  `, [value, senderId]);

    await this.clientsRepository.query(`
    UPDATE "clients" SET "balance" = "balance" + $1
    WHERE "id" = $2;
  `, [value, receiverId]);
}
```

This two operations linked. So if will not be increased accordingly
