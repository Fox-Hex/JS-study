import React from 'react';
import ReactDOM from 'react-dom/client';
import cn from 'classnames'

// task 2
//
// import getCard from './tasks/2nd_task.jsx'
// const Code = getCard({ title: 'hi', text: 'how are you?' });
// // <div className="card">
// //   <div className="card-body">
// //     <h4 className="card-title">hi</h4>
// //     <p className="card-text">how are you?</p>
// //   </div>
// // </div>
// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Code />);



// theory
// const name = 'Eva';
// class HelloMessage extends React.Component {
//   render() {
//     return <div {...this.props}>{name}</div>
//   }
// }
// const mountNode = document.getElementById('container');
// const root = ReactDOM.createRoot(mountNode);
// root.render(<HelloMessage className='row' title='name'/>);

// class Header extends React.Component {
//   render() {
//     const {text} = this.props
//     return (
//       <h1>{text}</h1>
//     )
//   }
// }
// Header.defaultProps = { text: 'Hello Juke!'}
// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Header />);



// // task 3
// //
// import Card from './tasks/3rd_task.jsx'
// const root = ReactDOM.createRoot(document.getElementById('container'));

// // const title = "title 11111";
// // const text = "text 11111";
// // root.render(<Card title={title} text={text} />);

// // без пропсов
// root.render(<Card />);



// const arra = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6']
// class List extends React.Component {
//   render() {
//     let key = 1
//     return (
//       <ul>
//         {arra.map(elem => <li key={key+=1}>{elem}</li>)}
//         <li>Элемент без key</li>
//         <li>Ещё один элемент без key</li>
//       </ul>
//     )
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<List />);

// class Article extends React.Component {
//   render() {
//     const { header, body } = this.props;

//     return (
//       <article>
//         <h1>Late news:</h1>
//         <Section header={header} body={body}/>
//       </article>
//     );
//   }
// }
// class Section extends React.Component {
//   render() {
//     const { header, body } = this.props;

//     return (
//       <>
//         <h2>{header}</h2>
//         <div>{body}</div>
//       </>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Article header='Important' body='Something very important just happened...' />);

// class Component extends React.Component {
//   render() {
//     return [
//       <div key='one'>one</div>,
//       <div key='two'>two</div>
//     ];
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Component />);



// // task 4
// //
// import DefinitionsList from './tasks/4th_task.jsx'

// const definitions = [
//   { dt: 'one', dd: 'two', id: 1 },
//   { dt: 'another term', dd: 'another description', id: 2 },
// ];

// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<DefinitionsList data={definitions} />);




// task 5
//
// import Progress from './tasks/5th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Progress percentage={65} />);




// class Button extends React.Component {
//   render() {
//     const { isPressed, isHovered, label } = this.props;
//     let btnClass = 'btn'
//     if (isPressed) {
//       btnClass += ' btn-pressed'
//     } else if (isHovered) {
//       btnClass += ' btn-over'
//     }
//     return <button className={btnClass}>{label}</button>
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Button label='simple button' isHovered/>);



// import cn from 'classnames'

// class Button extends React.Component {
//   render() {
//     const { isDark, isPressed, isHovered, label } = this.props;
//     const btnClass = cn('btn', {
//       'btn-pressed': isPressed,
//       'btn-over': !isPressed && isHovered,
//       'btn-dark': isDark
//     })
//     return <button className={btnClass}>{label}</button>
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Button label='simple button' isHovered isDark/>);




// // 6 task
// //
// import Alert from './tasks/6th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<Alert type="primary" text="what is love?" />);





// class Alert extends React.Component {
//   render() {
//     const { children } = this.props;
//     return (<div className="alert alert-primary">
//       {children}
//     </div>);
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('container'));
// const vdom = <Alert>
//   <p>Aww yeah, you successfully read this important alert message.
//     This example text is going to run a bit longer so that you can
//     see how spacing within an alert works with this kind of content.</p>
//   <hr />
//   <p class="mb-0">Whenever you need to, be sure to use margin utilities
//     to keep things nice and tidy.</p>
// </Alert>
// root.render(vdom);


// class Counter extends React.Component {
//   render() {
//     const {children} = this.props
//     return <p>children count = {React.Children.count(children)}</p>
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// const vdom = <Counter>
//   <div></div>
//   <div></div>
//   <div></div>
// </Counter>
// root.render(vdom)





// // 7 task
// //
// import ListGroup from './tasks/7th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'));
// const vdom =
//   <ListGroup>
//     <p>one</p>
//     <p>two</p>
//   </ListGroup>;

// root.render(vdom);



// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { date: new Date() }
//   }
//   handleCLick = () => {
//     this.setState({ date: new Date() })
//   }
//   render() {
//     return (
//       <div>
//         <p>
//           {this.state.date.toLocaleTimeString()}
//         </p>
//         <button onClick={this.handleCLick}>
//           Refresh
//         </button>
//       </div>
//     )
//   }
// }

// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { count: props.count }
//   }
//   handleCLick = () => {
//     this.setState((state, props) => {
//       const {count} = state
//       return {count: count+1}
//     })
//   }
//   render() {
//     return (
//       <button onClick={this.handleCLick}>
//         Count: {this.state.count}
//       </button>
//     )
//   }
// }
// Counter.defaultProps = { count: 10 }

// class Buttons extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {count: 1, primary: false}
//   }

//   changeButton = () => {
//     this.setState(({count}) => ({count: count + 1}))
//     this.setState(({primary}) => ({primary: !primary}))
//   }

//   render() {
//     const buttonClass = cn([
//       'btn',
//       this.state.primary ? 'btn-primary' : 'btn-secondary'
//     ])
//     return (
//       <div>
//         <button className={buttonClass} onClick={this.changeButton}>
//           count: {this.state.count}
//         </button>
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render([
//   <Clock />,
//   <hr></hr>,
//   <Counter />,
//   <hr></hr>,
//   <Buttons />,
// ])




// task 8
//
// import BtnGroup from './tasks/8th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<BtnGroup />)



class Button extends React.Component {
  render() {
    return (
      <button type='btn' className='btn btn-warning' onClick={(e) => console.log(e.target.className)}>
        click
      </button>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('container'))
root.render(<Button />)
