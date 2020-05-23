---
id: transactions
title: The Value of RDBMS Transactions
date: '2020-05-03T00:00:00.000Z'
image: https://images.unsplash.com/photo-1478031706604-bb4b7b0b4e9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
description: Use transactions every where you can and even more
---

When I started learning Nestjs I had no time to explore docs enough or graduate the courses. It was my first work. I received tasks, deadline and no more. Unfortunately, I knew absolutely nothing about Nestjs. What did I do first? I quickly explored main features, forked examples, created several modules and wrote end-to-end tests. "Not so difficult": I thought. _Guards_, _strategies_, _validators_, _Typeorm_ - worked perfectly. I had a time and even read transaction section [docs.nestjs.com/techniques/database#transactions](https://docs.nestjs.com/techniques/database#transactions).

## "It's a trap!"

<div align='center'>
    <img src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F000%2F157%2Fitsatrap.jpg' />
</div>

Yes, It was a trap. Unfortunately, all examples that I found were small applications implements only simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionalities. Consequently all my methods did not use transactions. What happen next? Stress loading, transactions queue and fatal increase in response time. The main reason why it happens is an object-relational database management systems specificity and insufficient experience.

## Transactions

A relational database is a digital database based on the relational model of data. I used [PostgreSql](https://www.postgresql.org) but this also applies to other [RDBMS](https://en.wikipedia.org/wiki/Relational_database#RDBMS). Transactional integrity is one of the most important features of RDBMS and one of the main reason why RDBM systems the most common databases in the world. According to open [resources](https://medium.com/@kristi.anderson/2019-database-trends-sql-vs-nosql-top-databases-single-vs-multiple-database-use-df11dbd981f3) almost **60%** users use RDBMS right now.

If you use postgreSql you can learn more reading documentation [manuals](https://www.postgresql.org/docs/manuals). Let's check this.

> Transactions are a fundamental concept of all database systems. The essential point of a transaction is
> that it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between
> the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the
> transaction from completing, then none of the steps affect the database at all.

And next important quote.

> Another important property of transactional databases is closely related to the notion of atomic
> updates: when multiple transactions are running concurrently, each one should not be able to see the
> incomplete changes made by others.

Transactions provide integrity of entities and work fine with stress loading. Every request will communicate with prepared entity and we can be sure that all actions will be completed or reverted under control. Yes, it's one of the most important features and I highly recommend you read about transactions and train it.
