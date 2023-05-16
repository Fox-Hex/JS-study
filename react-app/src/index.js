import React from 'react';
import ReactDOM from 'react-dom/client';

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
