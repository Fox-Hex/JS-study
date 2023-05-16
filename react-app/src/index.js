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



// task 3
//

import Card from './tasks/3rd_task.jsx'
const root = ReactDOM.createRoot(document.getElementById('container'));

// const title = "title 11111";
// const text = "text 11111";
// root.render(<Card title={title} text={text} />);

// без пропсов
root.render(<Card />);
