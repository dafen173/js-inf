export const memoSelectors = 'https://medium.com/devschacht/neil-fenton-improving-react-and-redux-performance-with-reselect-40f1d3efba89'


// Рассмотрим следующую проблему. Мы создаем корзину покупок с тремя типами входящих данных:
// Товары в корзине
// Количество товаров
// Налог (зависящий от региона)
// Проблема состоит в том, что всякий раз, когда изменяется 
//состояние любого из пунктов (добавляется новый элемент, 
//изменяется количество или изменяется состояние выбора), 
//все нужно будет пересчитать и повторно отрисовать. Вы можете
// увидеть, как это будет проблематично, если в нашей корзине 
//есть сотни предметов. Изменение процента налога приведет к 
//пересчету позиций в корзине, но не должно. Процент налога — 
//это просто изменение в полученных данных. Только общая сумма 
//и общая сумма налога должны меняться и запускать последующую 
//перерисовку. Давайте посмотрим, как мы можем исправить эти 
//проблемы.
// Решение — reselect
// Reselect — это библиотека для создания мемоизированных 
//селекторов (memoized selectors). Мы определяем селекторы как
// функции, извлекающие фрагменты состояния Redux для наших 
//компонентов React. Используя мемоизацию, мы можем 
//предотвратить ненужные перерисовки и пересчеты полученных 
//данных, что, в свою очередь, ускорит наше приложение.

// Рассмотрим следующий пример:
// Если бы у нас было несколько сотен или тысяч вещей, 
//перерисовка всех предметов в нашей корзине была бы 
//дорогостоящей, даже если бы менялся только процент налога. 
//А если бы мы реализовали поиск? Должны ли мы повторно 
//пересчитывать все элементы и налоги каждый раз, когда 
//пользователь ищет что-то в корзине? Мы можем предотвратить 
//эти дорогостоящие операции, перемещая их использование 
//в мемоизированные селекторы. При использовании мемоизированных 
//селекторов, если дерево состояний велико, нам не нужно 
//беспокоиться о том, что дорогие вычисления выполняются 
//каждый раз при изменении состояния. Мы также можем добавить 
//дополнительную гибкость для нашего интерфейса, разбив их на 
//отдельные компоненты.
// В приведенном выше примере, мы разбили нашу функцию поиска 
//товаров в корзине на две функции. Первая функция (строка 3) 
//просто получит все элементы в корзине, а вторая функция 
//является мемоизированным селектором. Reselect предоставляет 
//createSelector API, позволяющий нам создать мемоизированный
// селектор. Это означает, что getItemsWithTotals будет 
//вычисляться при первом запуске функции. Если эта же функция 
//вызывается снова, но входные данные (результат getItems) 
//не изменились, функция просто вернет кешированный расчет 
//элементов и их итогов. Если элементы изменены (например, 
//добавлен элемент, изменилось количество, любые манипуляции 
//с результатом getItems), функция снова будет выполнена.
//Это мощная концепция, позволяющая нам полностью оптимизировать 
//те компоненты, которые должны быть перерисованы, и когда их 
//производное состояние должно быть пересчитано. Это означает, 
//что нам больше не нужно беспокоиться о getItems: общая 
//стоимость каждого элемента начинает рассчитываться, 
//когда операции не зависят от изменений состояния.


//пример useMemo

//https://codepen.io/dafen/pen/XWePGNB




