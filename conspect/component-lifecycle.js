export const componentLifecycle = ''


// тут настал момент поговорить про жизненный цикл компонента 
//каждый компонент обладает своим жизненным
// циклом и он проходит в три этапа 

// МОНТИРОВАНИЕ
// первый этап Монтирование это когда создается
// компонент и монтируется в дом дерево 

// ОБНОВЛЕНИЕ
// второй этап Обновление компонента например мы изменили состояние или произошел
// перерендер - перерисовка компонента, эта стадия называется апдейт или же Обновление 
// то есть это стадия как раз
// активной жизни компонента когда он работает когда мы его видим когда он живет 

// РАЗМОНТИРОВАНИЕ
// третья стадия это unMount
// размонтирование компонента, когда он больше не нужен и по какой-то причине мы его удаляем 
// например мы хотим его скрыть
// или же мы переходим на другую страницу и за ненадобностью react его уничтожает 

// и получается что у нас есть три стадии и
// за каждой из этих стадий мы можем наблюдать 

// Монтирование нам интересно в том случае когда мы хотим сделать
// первичную подгрузку данных повесить какие-то слушатели события 
// вот у нас есть свежий компонент с ним еще ничего
// не происходило он только создался мы сразу можем отправить запрос на сервер 
// повесить слушайтели событий, в общем
// сделать все что нам необходим при первом старте 

// на стадии Обновления мы можем следить за изменением
// каких-либо зависимостей и производить какие-то нужные для нас действия 

// а на стадии Размонтирования
// мы делаем различную чистку - отписываемся от слушателей события очищаем глобальное
// хранилище в общем все что нам необходимо удалить после того как компонент уничтожится 

// и сразу же возникает вопрос
// как за этими стадиями следить для этого предназначен хук useEffect который мы
// можем использовать столько раз в компоненте сколько нам необходимо 
//один хук следит за одними данными 
// другой хук следит за изменением других данных 
// третий хук отрабатывает только при первичной отрисовке и т.д.

//https://github.com/harryheman/React-Total/blob/main/md/questions_react-v2.md#%D0%B228-%D0%BD%D0%B0%D0%B7%D0%BE%D0%B2%D0%B8%D1%82%D0%B5-%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%B8-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%86%D0%B8%D0%BA%D0%BB%D0%B0-lifecycle-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0
// React предоставляет несколько методов, уведомляющих нас о происходящих процессах. 
//Эти методы называются методами жизненного цикла компонента. Они вызываются в определенном порядке. 
//Жизненный цикл компонента делится на 3 стадии.

// 1. Mounting (монтирование)
// При создании и встраивании компонента в DOM вызываются следующие методы:
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()


// constructor() вызывается при инициализации компонента. Это отличное место для присвоения 
//начального значения объекту состояния и других настроек компонента.
// constructor() вызывается с props в качестве аргумента и мы всегда должны начинать с вызова super(props), 
//инициализирующего родительский конструктор, что позволяет потомку наследовать поля и методы 
//предка (React.Component).

// getDerivedStateFromProps()
// getDerivedStateFromProps() вызывается сразу после рендеринга элемента в DOM. В качестве аргумента он 
//принимает состояние и возвращает объект с его изменениями.

// Пример
// class Color extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {color: "red"}
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {color: props.favcol }
//   }
//   render() {
//     return (
//       <h1>Мой любимый цвет - {this.state.color}</h1>
//     )
//   }
// }

// ReactDOM.render(<Color favcol="yellow"/>, document.getElementById('root'))


// render()
// Данный метод является единственным обязательным методом. Как следует из его названия, 
//он рендерит разметку для DOM.

// componentDidMount()
// componentDidMount() вызывается после монтирования компонента.


// 2. Updating (обновление)

// Следующей стадией жизненного цикла компонента является его обновление. Компонент обновляется при 
//изменении его состояния или пропов.
// При обновлении компонента вызываются следующие методы:
// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// getDerivedStateFromProps()
// Это первый метод, вызываемый при обновлении компонента. Это подходящее место для установки 
//объекта состояния на основе начальных пропов.

// Пример
// class Color extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { color: "red" }
//   }
//   static getDerivedStateFromProps(props, state) {
//     return { color: props.favcol }
//   }
//   changeColor = () => {
//     this.setState({ color: "blue" })
//   }
//   render() {
//     return (
//       <div>
//       <h1>Мой любимый цвет - {this.state.color}</h1>
//       <button type="button" onClick={this.changeColor}>Изменить цвет</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Color favcol="yellow"/>, document.getElementById('root'))

// shouldComponentUpdate()
// shouldComponentUpdate() возвращает логическое значение, определяющее должен ли React продолжать 
//рендеринг компонента. Значением по умолчанию является true.

// class Color extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { color: "red" }
//   }
//   shouldComponentUpdate() {
//     return false
//   }
//   changeColor = () => {
//     this.setState({ color: "blue" })
//   }
//   render() {
//     return (
//       <div>
//       <h1>Мой любимый цвет - {this.state.color}</h1>
//       <button type="button" onClick={this.changeColor}>Изменить цвет</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Color />, document.getElementById('root'))

// render()
// Данный метод осуществляет повторный рендеринг компонента с учетом изменений.

// getSnapshotBeforeUpdate()
// В getSnapshotBeforeUpdate() мы получаем доступ к props и state компонента перед обновлением. 
//Это означает, что даже после обновления мы можем увидеть, какими были пропы и состояние.
// getSnapshotBeforeUpdate() должен использоваться совместно с componentDidUpdate(). 
//В противном случае, будет выброшено исключение.

// Пример
// class Color extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { color: "red" }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: "yellow" })
//     }, 1000)
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "До обновления значением 'color' было " + prevState.color
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "После обновления значением 'color' стало " + this.state.color
//   }
//   render() {
//     return (
//       <div>
//         <h1>Мой любимый цвет - {this.state.color}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Color />, document.getElementById('root'))

// componentDidUpdate()
// componentDidUpdate() вызывается после применения обновлений к DOM.

// Пример
// class Color extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { color: "red" }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: "yellow" })
//     }, 1000)
//   }
//   componentDidUpdate() {
//     document.getElementById("mydiv").innerHTML =
//     "Обновленным значением 'color' является " + this.state.color
//   }
//   render() {
//     return (
//       <div>
//       <h1>Мой любимый цвет - {this.state.color}</h1>
//       <div id="mydiv"></div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Color />, document.getElementById('root'))



// 3. Unmounting (размонтирование)

// Следующей стадией жизненного цикла компонента является его удаление из DOM или размонтирование 
//в терминологии React.

// componentWillUnmount()
//используется для отмены сетевых запросов или удаления обработчиков событий, связанных с компонентом

// Пример
// Нажатие кнопки удаляет header:
// class Container extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { show: true }
//   }
//   delHeader = () => {
//     this.setState({ show: false })
//   }
//   render() {
//     let myheader
//     if (this.state.show) {
//       myheader = <Child />
//     }
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Удалить "шапку"</button>
//       </div>
//     )
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("Компонент под названием Header будет размонтирован.")
//   }
//   render() {
//     return (
//       <h1>Привет, народ!</h1>
//     )
//   }
// }

// ReactDOM.render(<Container />, document.getElementById('root'))







