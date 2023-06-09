import React from 'react';
import ReactDOM from 'react-dom/client';
// import cn from 'classnames'

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




// // task 8
// //
// import BtnGroup from './tasks/8th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<BtnGroup />)





// class Button extends React.Component {
//   render() {
//     return (
//       <button type='btn' className='btn btn-warning' onClick={(e) => console.log(e.target.className)}>
//         click
//       </button>
//     )
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Button />)






// // task 9
// //
// import Carousel from './tasks/9th_task.jsx'

// const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];
// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Carousel images={images} />)





// class ShowButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {shownState: 'hidden'}
//   }

//   toggleText = () => {
//     const {shownState} = this.state
//     this.setState({shownState: shownState === 'hidden' ? 'shown' : 'hidden'})
//   }

//   render() {
//     const {shownState} = this.state
//     const contentToShow = (shownState === 'shown') ? <p>&#127775;&#127775;&#127775;</p> : ''
//     const buttonText = this.state.shownState === 'hidden' ? 'show' : 'hide'

//     return (
//       <div>
//         <button type='button' onClick={this.toggleText}>{buttonText}</button>
//         {contentToShow}
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<ShowButton />)






// // task 10
// //
// import Collapse from './tasks/10th_task.jsx'

// const text = 'Some placeholder content for the collapse component'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Collapse text={text} opened={false} />)







// class TextInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {text: '', mesages: []}
//   }

//   handleChange = (e) => {
//     this.setState({text: e.target.value.toUpperCase()})
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     const newArrayMessages = this.state.mesages
//     const inputText = this.state.text

//     if (!newArrayMessages.includes(inputText)) {
//       newArrayMessages.push(inputText)
//       this.setState({mesages: newArrayMessages, text: ''})
//     }
//   }

//   closeMessage = (e) => {
//     const newArrayMessages = this.state.mesages.filter((elem, id) => Number(e.target.id) !== id)
//     console.log(newArrayMessages);
//     this.setState({mesages: newArrayMessages})
//   }

//   render() {
//     const mesagesArray = this.state.mesages
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleChange} value={this.state.text} />
//           <input type='submit' />
//         </form>
//         <div>
//           {mesagesArray.map((elem, id) => {
//             return (
//               <div key={id}>
//                 <button id={id} style={{ color: 'red', fontSize: '12px', marginRight: 10 }} onClick={this.closeMessage}>
//                   x
//                 </button>
//                 {elem}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<TextInput />)


// class Checks extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {listValue : "", isChecked: false}
//   }

//   changeList = () => {
//     this.setState({listValue: "nope"})
//   }

//   changeCheck = () => {
//     this.setState({isChecked: !this.state.isChecked})
//   }

//   render() {
//     return (
//       <div>
//         <select value={this.state.listValue} onChange={this.changeList}>
//           <option value="">Select a fruit</option>
//           <option value="grapefruit">Grapefruit</option>
//           <option value="nope">Nope!!!</option>
//           <option value="coconut">Coconut</option>
//           <option value="mango">Mango</option>
//         </select>
//         <hr/>
//         <input name="isGoing" type="checkbox" checked={this.state.isChecked} onChange={this.changeCheck} />
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Checks />)





// // task 11
// //
// import MyForm from './tasks/11th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<MyForm />)





// // task 12
// //
// import Component from './tasks/12th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Component />)





// class Parent extends React.Component {
//   render() {
//     const {children} = this.props
//     return <h1>{children}</h1>
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Parent><hr/><a href=''>dfsfsdf</a></Parent>)






// // task 13
// //
// import TodoBox from './tasks/13th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<TodoBox />)





// const Title = (props) => <h1 className='card-title'>{props.children}</h1>
// const Body = (props) => <b className='card-body'>{props.children}</b>

// class Card extends React.Component {
//   static Title = Title
//   static Body = Body
//   render() {
//     return <div className='card card-block'>{this.props.children}</div>
//   }
// }

// const vdom = (
//   <Card>
//     <Card.Body>
//       <Card.Title>This is title</Card.Title>
//       Body containing some text to show
//     </Card.Body>
//   </Card>
// )

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(vdom)






// // task 14
// //
// import Card from './tasks/14th_task.jsx'

// const vdom = (
//   <Card>
//     <Card.Body>
//       <Card.Title>Title</Card.Title>
//       <Card.Text>Text</Card.Text>
//     </Card.Body>
//   </Card>
// )

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(vdom)







// const UserContext = React.createContext({})

// class GreetingsComponent extends React.Component {
//   static contextType = UserContext
//   render() {
//     const {name} = this.context
//     return <div>Hello, {name}</div>
//   }
// }

// class App extends React.Component {
//   render() {
//     return <GreetingsComponent />
//   }
// }

// const vdom = (
//   <UserContext.Provider value={{name: 'Simon'}}>
//     <App />
//   </UserContext.Provider>
// )

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(vdom)



// const CompanyContext = React.createContext({})

// class CompanyAddressComponent extends React.Component {
//   static contextType = CompanyContext

//   render() {
//     const {address} = this.context
//     return (
//       <>
//       {address.street}
//       <br />
//       {address.post} {address.city} {address.country}
//       </>
//     )
//   }
// }

// class CompanyNameComponent extends React.Component {
//   static contextType = CompanyContext

//   render() {
//     const {name} = this.context
//     return (
//       <>
//       {name}
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <CompanyNameComponent />
//         <br />
//         <CompanyAddressComponent />
//       </>
//     )
//   }
// }

// const company = {
//   name: 'SuperCorp',
//   address: {
//     street: '1st Soviet, 22',
//     post: '34009',
//     city: 'Ulianovsk',
//     country: 'Zimbabve'
//   }
// }

// const vdom = (
//   <CompanyContext.Provider value={company}>
//     <App />
//   </CompanyContext.Provider>
// )

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(vdom)








// // task15
// //
// import App from './tasks/15th_task/App.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<App />)







// // task 16
// //
// import Component from './tasks/16th_task/Component.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Component />)






// import reactTestRenderer from 'react-test-renderer';

// const renderer = reactTestRenderer.create(
//   <a href="https://www.facebook.com/">Facebook</a>
// );

// console.log(renderer.toJSON());




// import axios from 'axios';

// class Loader extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {url: null}
//     this.path = './image'
//   }

//   handleClick = async () => {
//     const res = await axios.get(this.path)
//     this.setState({url: res.data})
//   }

//   render() {
//     const {url} = this.state
//     const img = `${this.path}/${url}`
//     return (
//       <div>
//         <button onClick={this.handleClick}>Load Logo</button>
//         {url && <img alt='' src={img} />}
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<Loader />)






// // task 17
// //
// import Autocomplete from './tasks/17th_task.jsx'

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Autocomplete />)






// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {date: new Date()}
//   }
  
//   componentDidMount() {
//     this.timerId = setInterval(() => this.setState({date: new Date()}), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId)
//   }

//   render() {
//     const {date} = this.state
//     reimport Todoturn (
//       <div>{date.toLocaleTimeString()}</div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Clock />)







// task 18
//
import TodoBox from './tasks/18th_task/TodoBox.jsx';

const root = ReactDOM.createRoot(document.querySelector('.container'))
root.render(<TodoBox />)

