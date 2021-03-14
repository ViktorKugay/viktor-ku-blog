import React, {useEffect, useState, Suspense} from 'react';
import {MainPage} from '../components/pages/Main/MainPage';
import {Seo} from '../components/seo/Seo';

const Main = () => {
  // сначала рендерим, а затем монтируем содержимое страницы,
  // потому что three.js не может сразу подтянуть свои утилиты
  // приходится использовать такой хак, когда мы сначала рендерим на сервере страницу
  // без графики, а затем у клиента дорендериваем графику
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <Seo />
      {hasMounted && (
        <Suspense fallback={null}>
          <MainPage />
        </Suspense>
      )}
    </>
  );
}

export default Main;
