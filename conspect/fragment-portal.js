export const fragmentPortal = ''


//https://ru.reactjs.org/docs/fragments.html#short-syntax
// Фрагменты
// Возврат нескольких элементов из компонента является распространённой практикой в React. 
//Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.

// render() {
//   return (
//     <React.Fragment>
//       <ChildA />
//       <ChildB />
//       <ChildC />
//     </React.Fragment>
//   );
// }


//Также существует сокращённая запись.
class Columns extends React.Component {
    render() {
      return (
        <>
          <td>Привет</td>
          <td>Мир</td>
        </>
      );
    }
  }

//https://ru.reactjs.org/docs/portals.html
//   Порталы
//   Порталы позволяют рендерить дочерние элементы в DOM-узел, который находится вне 
//DOM-иерархии родительского компонента.
//   ReactDOM.createPortal(child, container)
//   Первый аргумент (child) — это любой React-компонент, который может быть отрендерен, 
//такой как элемент, строка или фрагмент. Следующий аргумент (container) — это DOM-элемент.

//https://nuancesprog.ru/p/11039/

//пример
//https://codesandbox.io/s/react-portals-l0sy5?file=/src/PortalModal.jsx

// Обычно, когда вы возвращаете элемент из рендер-метода компонента, он монтируется в DOM 
//как дочерний элемент ближайшего родительского узла:

// render() {
//   // React монтирует новый div и рендерит в него дочерние элементы
//   return (
//     <div>
//       {this.props.children}
//     </div>
//   );
// }

// Но иногда требуется поместить потомка в другое место в DOM:
// render() {
//   // React *не* создаёт новый div. Он рендерит дочерние элементы в `domNode`.
//   // `domNode` — это любой валидный DOM-узел, находящийся в любом месте в DOM.
//   return ReactDOM.createPortal(
//     this.props.children,
//     domNode
//   );
// }

// Примечание:
// При работе с порталами, помните, что нужно уделить внимание управлению фокусом при помощи клавиатуры.
// Для модальных диалогов, убедитесь, что любой пользователь будет способен взаимодействовать с 
//ними, следуя практикам разработки модальных окон WAI-ARIA.

// Всплытие событий через порталы
// Как уже было сказано, портал может находиться в любом месте DOM-дерева. Несмотря на это, 
//во всех других аспектах он ведёт себя как обычный React-компонент. Такие возможности, как контекст, 
//работают привычным образом, даже если потомок является порталом, поскольку сам портал всё ещё 
//находится в React-дереве, несмотря на его расположение в DOM-дереве.
// Так же работает и всплытие событий. Событие, сгенерированное изнутри портала, будет распространяться 
//к родителям в содержащем React-дереве, даже если эти элементы не являются родительскими в DOM-дереве.





