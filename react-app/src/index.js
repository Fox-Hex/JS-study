import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import cn from 'classnames'




// task 2
//
// import getCard from './tasks/react/2nd_task.jsx'
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
// import Card from './tasks/react/3rd_task.jsx'
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
// import DefinitionsList from './tasks/react/4th_task.jsx'

// const definitions = [
//   { dt: 'one', dd: 'two', id: 1 },
//   { dt: 'another term', dd: 'another description', id: 2 },
// ];

// const root = ReactDOM.createRoot(document.getElementById('container'));
// root.render(<DefinitionsList data={definitions} />);




// task 5
//
// import Progress from './tasks/react/5th_task.jsx'

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
// import Alert from './tasks/react/6th_task.jsx'

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
// import ListGroup from './tasks/react/7th_task.jsx'

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
// import BtnGroup from './tasks/react/8th_task.jsx'

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
// import Carousel from './tasks/react/9th_task.jsx'

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
// import Collapse from './tasks/react/10th_task.jsx'

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
// import MyForm from './tasks/react/11th_task.jsx'

// const root = ReactDOM.createRoot(document.getElementById('container'))
// root.render(<MyForm />)





// // task 12
// //
// import Component from './tasks/react/12th_task.jsx'

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
// import TodoBox from './tasks/react/13th_task.jsx'

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
// import Card from './tasks/react/14th_task.jsx'

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
// import App from './tasks/react/15th_task/App.jsx'

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
// import Autocomplete from './tasks/react/17th_task.jsx'

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







// // task 18
// //
// import TodoBox from './tasks/react/18th_task/TodoBox.jsx';

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<TodoBox />)








// class CustomInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.textInput = React.createRef()
//   }
  
//   handleFocusInput = () => {
//     console.log(this.textInput);
//     this.textInput.current.focus()
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.textInput} />
//         <input type="button" value="Focus the text input" onClick={this.handleFocusInput} />
//       </div>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<CustomInput />)







// import $ from 'jquery'

// class Chosen extends React.Component {
//   constructor(props) {
//     super(props)
//     this.selectRef = React.createRef()
//   }

//   componentDidMount() {
//     $(this.selectRef.current).chosen()
//   }

//   render() {
//     return (
//       <select ref={this.selectRef}>
//         {this.props.items.map(elem => <option>{elem}</option>)}
//       </select>
//     )
//   }
// }

// const items = ['Document', 'Window', 'Body'];
// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Chosen items={items}/>)






// // task 19
// //
// import MarkdownEditor from './tasks/react/19th_task.jsx'

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<MarkdownEditor onContentChange={console.log} />)









// HOOKS




// const Example = () => {
//   const [count, setCount] = React.useState(0)

//   return (
//     <div>
//       <p>You press {count} times</p>
//       <button onClick={() => setCount(count + 1)}>press</button>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Example />)





// // task 1
// //
// import BtnGroup from './tasks/hooks/1st_task.jsx'

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<BtnGroup />)





// const Example = () => {
//   const [count, setCount] = React.useState(0)
//   const [background, setBackground] = React.useState('white')

//   React.useEffect(() => {
//     console.log(count);
//     const newColor = count%2 === 0 ? 'white' : 'blue'
//     setBackground(newColor)
    
//     const id = setTimeout(() => console.log('fffffff'), 1000)
//     return () => clearTimeout(id)
//   }, [count])


//   return (
//     <div>
//       <p style={{background}}>Вы нажали {count} раз(а)</p>
//       <button onClick={() => setCount(count + 1)}>Нажми меня</button>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Example />)






// // task 2
// //
// import Products from './tasks/hooks/2nd_task/Products.jsx';

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Products />)






// // task 3
// //
// import App from './tasks/hooks/3rd_task/App.jsx';

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<App />)






// const Input = () => {
//   let counter = 0
//   const inputEl = React.useRef(null)
//   const input2 = React.useRef(null)

//   const onButtonClick = () => {
//     inputEl.current.focus()
//     counter += 1
//     input2.current.value = counter
//   }

//   return (
//     <>
//     <input ref={input2} type='text'/>
//     <button onClick={onButtonClick}>focus</button>
//     <input ref={inputEl} type='text'/>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Input />)



// const Counter = () => {
//   const [count, setCount] = React.useState(0)

//   const prevCountRef = React.useRef()

//   React.useEffect(() => {
//     prevCountRef.current = count
//   })

//   const prevCount = prevCountRef.current

//   return (
//     <h1 onClick={() => setCount(count+1)}>
//       click me
//       <br />
//       now: {count}
//       <br />
//       before: {prevCount}
//     </h1>
//   )
// }

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<Counter />)







// // task 4
// //
// import MarkdownEditor from './tasks/hooks/4th_task.jsx'

// const root = ReactDOM.createRoot(document.querySelector('.container'))
// root.render(<MarkdownEditor onContentChange={console.log} />)










// REDUX




// import {createStore} from 'redux'

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT' : return state+1
//     case 'DECREMENT' : return state-1
//     default : return state
//   }
// }

// const store = createStore(reducer)

// console.log(store.getState())

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})

// const increment = () => ({type: 'INCREMENT'})
// const decrement = () => ({type: 'DECREMENT'})

// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())




// import {createStore} from 'redux'

// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case 'USER_ADD':
//       const {user} = action.payload
//       return [...state, user]
//     case 'USER_REMOVE':
//       const {id} = action.payload
//       return state.filter(elem => id !== elem.id)
//     default: return state
//   }
// }

// const addUser = (user) => ({ type: 'USER_ADD', payload: {user} })
// const user1 = {id:2, name: 'vano'}
// const user2 = {id:3, name: 'niko'}

// const store = createStore(reducer, [{id: 1, name: 'noname'}])

// store.subscribe(() => console.table(store.getState()))

// store.dispatch(addUser(user1))
// store.dispatch(addUser(user2))
// store.dispatch({type: 'USER_REMOVE', payload: {id:1}})




// const createStore = (reducer, initialState = null) => {
//   let state = initialState
//   return {
//     dispatch: action => {state = reducer(state, action)},
//     getState: () => state
//   }
// }

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case 'PLUS':
//       return state+1
//     case 'MINUS':
//       return state-1
//     default:
//       return state
//   }
// }

// const store = createStore(reducer, 0)
// console.log(store.getState());

// store.dispatch({type: 'MINUS'})
// console.log(store.getState());







// // task 1
// //
// import {omit} from 'lodash';
// import {createStore} from 'redux';

// const store = (initialState) => {
//   const reducer = (state = {}, action) => {
//     switch(action.type) {
//       case 'TASK_ADD':
//         const {task} = action.payload
//         return {...state, [task.id]: task}
//       case 'TASK_REMOVE':
//         const {id} = action.payload
//         return omit(state, id)
//       default: return state
//     }
//   }
  
//   return createStore(reducer, initialState)
// }

// const addTask = (task) => ({
//   type: 'TASK_ADD',
//   payload: {
//     task,
//   },
// });

// const removeTask = (id) => ({
//   type: 'TASK_REMOVE',
//   payload: {
//     id,
//   },
// });

// const generalStore = store({3:{id:3}})
// console.log(generalStore.getState());

// const task1 = {id: 7}
// generalStore.dispatch(addTask(task1))
// console.log(generalStore.getState());

// generalStore.dispatch(removeTask(3))
// console.log(generalStore.getState());







// import {combineReducers, createStore} from 'redux'

// const todosReducer = (state = [], action) => {}
// const commentsReducers = (state = [], action) => {}

// const rootReducer = combineReducers({
//   todos: todosReducer,
//   comments: combineReducers
// })

// const store = createStore(rootReducer)







// task 2
//
import _ from 'lodash';
import {combineReducers, createStore} from 'redux'

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch(action.type) {
    case 'TASK_COMMENT_ADD':
      const {comment} = action.payload
      return {...state, [comment.id]: {id:comment.id, taskId:comment.taskId, body: comment.body}}
    case 'TASK_COMMENT_REMOVE':
      const {id} = action.payload
      return _.omitBy(state, (key, value) => value.taskId === id)
    default:
      return state
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch(action.type) {
    case 'TASK_ADD':
      const {task} = action.payload
      return {...state, [task.id]: {id:task.id, name:task.name}}
    case 'TASK_REMOVE':
      const {id} = action.payload
      return _.omitBy(state, id)
    default:
      return state
  }
  // END
};

const rootReducer = combineReducers({ comments, tasks });


const addTask = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task,
  },
});

const removeTask = (id) => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});

const addTaskComment = (comment) => ({
  type: 'TASK_COMMENT_ADD',
  payload: {
    comment,
  },
});

const removeTaskComment = (id) => ({
  type: 'TASK_COMMENT_REMOVE',
  payload: {
    id,
  },
});








test git 4