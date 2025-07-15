import { urlencoded, json } from 'express';
import path from 'path';
import cors from 'cors'; //* библиотека для настройки CORS-политики
import morgan from 'morgan'; //* библиотека позволяющая выводить запросы в лог
import cookieParser from 'cookie-parser'; //* библиотека для работы с куками

//Note: конфигурация для библиотеки cors
const corsOptions = {
  origin: [process.env.CLIENT_URL], //* разрешенный источник для CORS-запросов
  credentials: true, //* разрешает передачу учетных данных (cookies, headers)
};

//NOTE: функция serverConfig, принимающая экземпляр приложения и возвращающая обученный экземпляр
const serverConfig = (app) => {
  //NOTE промежуточные обработчики, работающие глобально для всего приложения (системные мидлварки)
  //* позволяет работать с телом запроса
  app.use(urlencoded({ extended: true }));

  //* парсит JSON
  app.use(json());

  //* логирует данные о запросах на сервер
  app.use(morgan('dev'));

  //* настройка CORS с указанными опциями
  app.use(cors(corsOptions));

  //* парсит куки
  app.use(cookieParser());

  //* настройка статики, папка public ассоциирована с маршрутом запроса
  //* позволяет получить доступ к статическим файлам (изображениям) по указанному пути
  // app.use(
  //   '/static/images',
  //   express.static(path.resolve(__dirname, '..', 'public', 'images'))
  // );
};

//* экспорт конфигурационной функции
export default serverConfig;
