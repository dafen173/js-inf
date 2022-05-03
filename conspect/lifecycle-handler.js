export const lifecycleHandler = ''

//https://github.com/harryheman/React-Total/blob/main/md/questions_react-v2.md#%D0%B2119-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%82-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B-%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D0%BA%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9-%D0%BA-%D1%8D%D0%BA%D0%B7%D0%B5%D0%BC%D0%BF%D0%BB%D1%8F%D1%80%D1%83
// Какие существуют способы привязки обработчика событий к экземпляру?
// bind() в конструкторе

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     console.log('Кнопка была нажата')
//   }
//   render() {
//     return <button onClick={this.handleClick}>Нажми на меня</button>
//   }
// }



// bind() в render()

// class App extends Component {

//   handleClick() {
//     console.log('Кнопка была нажата')
//   }
//   render() {
//     return <button onClick={this.handleClick.bind(this)}>Нажми на меня</button>
//   }
// }




// Когда вы определяете компонент, используя ES6-класс, общий паттерн таков: обработчик события должен быть методом класса. 



// componentWillUnmount
// Используйте эту функцию для «очистки» после компонента, если он использует таймеры (setTimeout, setInterval), открывает сокеты или производит любые операции, которые нуждаются в закрытии или удалении.

// ДЕЛАЙТЕ:
// Удаляйте таймеры и слушателей (listeners) созданных во время жизни компонента.

// НЕ ДЕЛАЙТЕ:
// Не вызывайте this.setState, не стартуйте новых слушателей или таймеры.