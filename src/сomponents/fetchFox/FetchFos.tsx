import { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import MyButton from "../myButton/MyButton";
import './fetchFos.css'

// * 5. протипизировали данные с сервера
interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox(): JSX.Element {

  // * 3. создали переменную состояния и функцию для ее изменения с помощью useState(). в ней будет храниться картинка с сервера
  const [foxImg, setFoxImg] = useState<string>('');

  // * 7. создаем переключатель для отображения элемента сигнализирующего о загрузке - loader на странице
  const [loading, setLoading] = useState<boolean>(true);

  // * 1. создали функцию получения данных с сервера
  const fetchFox = async (): Promise<void> => {
    const res = await fetch('https://randomfox.ca/floof/');
    const data: IFoxData = await res.json();
    // * 4. записываем данные в переменную состояния для последующего использования и изменения
    setFoxImg(data.image);
    // выключаем loader перезаписав значение переключателя на false
    setLoading(false);
  };


  // * 8 создаем функцию обработчик для кнопки, которая включает loader и с небольшой задержкой посылает запрос за данными на сервер
  const handleGetFox = () => {
    setLoading(true);
    // setTimeout не обязателен, но за счет него loader крутится дольше и не обрывается резко
    setTimeout(() => {
      fetchFox();
    }, 1000);
  };

  // * 2. поместили вызов функции обращения к серверу в useEffect() с пустым массивом зависимостей, чтобы она вызывалась только в начале жизненного цикла
  useEffect(() => {
    fetchFox();
  }, []);

  return (
    <div className="lesson-container">
      <h2>Fetch fox 🦊</h2>
      {/* 6. добавили в верстку картинку и кнопу с обработчиком onClick для функции */}
      <MyButton text="get fox!" func={handleGetFox} />
      {/* контейнер-обертка под размеры которого будет обрезаться картинка, как фотография под размеры рамки */}

      {/* если в loading true мы покажем Loader, если false - показываем данные */}
      {loading ? <Loader /> : (
        <div className="fox-wrapper">
          <img src={foxImg} alt="" />
        </div>
      )}

    </div>
  );
}