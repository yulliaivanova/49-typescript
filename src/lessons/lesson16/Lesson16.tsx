import Store from "../../сomponents/store/Store";
import StoreCard from "../../сomponents/storeCard/StoreCard";

export default function Lesson16() {
  return (
    <div>
      <h2>
        {/* Lesson16. Самостоятельная работа в группе ### Задание Добавьте в
        приложение на React следующий функционал: 1. **Компонент `Store.tsx`:**
        - Загружает данные товаров из API `https://dummyjson.com/products`. -
        Отображает их в виде карточек, используя отдельный компонент
        `StoreCard.tsx`. - Реализуйте форму с использованием библиотеки `Yup`
        для указания параметра `limit` в запросе
        (`https://dummyjson.com/products?limit=2`). Передавайте кол-во товаров в
        форме, сделайте проверку.
         2. **Компонент `StorePage.tsx`:** - Данные о
        конкретном товаре должны подгружаться через динамический роутинг
        (`https://dummyjson.com/products/1`). 
        3. **Роутинг:** - Добавьте ссылку
        на компонент `Store.tsx` в header, используя `react-router-dom`. 4.
        **Стилизация:** - Для стилизации компонентов `Store.tsx`,
        `StoreCard.tsx`, `StorePage.tsx` используйте CSS модули. */}
      </h2>
      
      <Store/>
    </div>
  );
}
