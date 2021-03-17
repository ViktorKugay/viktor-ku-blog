import React, {useEffect, useState, Suspense} from 'react';
import {MainPage} from '../components/pages/Main/MainPage';
import {Seo} from '../components/seo/Seo';

const Main: React.FC = () => {
  // сначала рендерим, а затем монтируем содержимое страницы,
  // потому что threejs не может сразу подтянуть свои утилиты
  // приходится использовать такой хак, когда мы сначала рендерим на сервере страницу
  // без графики, а затем у клиента дорендериваем графику
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Seo />
      {isMounted && (
        // используем Suspense, потому что nextjs некорректно билдит three/example на сервере,
        // поэтому динамически импортируем скрипт с графикой на главной странице, а тут используем Suspense,
        // чтобы отложить основной рендер приложения
        <Suspense fallback={null}>
          <div id="root">
            <MainPage />
          </div>
        </Suspense>
      )}
    </>
  );
};

export default Main;
