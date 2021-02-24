import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name : "Nawshin",
  //   job :"jobless"
  // }
  const person = ['baba','vai','bon']
  var style = {
    color :'red',
    backgroundColor:'yellow'
  }
  const products =[{name:'PhotoShop', Price:'$99'},
  {name:'Illustrator', Price:'$12.09'},
  {name:'Adobe',Price:'$30.45'}
]
const productName = products.map(product => product)
console.log(productName);

  return (
    <div className="App">
      <header className="App-header">
      <ul>
      {
        person.map(person => <li>{person}</li>)
      }
      </ul>
      {
        products.map(product => <Product product={product}></Product>)
      }
       <Counter></Counter>
       <Users></Users>
        <Product name={products[0].name} Price={products[0].Price}></Product>
        <Person name="Wahra"></Person>
        <Person></Person>
        <Person></Person>
        <Product name={products[1].name} Price={products[1].Price}></Product>
       <p>my first paragraph</p>
       <h1 className="" style={style}>my heading:{person.name + " "+person.job}</h1>

      </header>
    </div>
  );
}
function Counter(){
  const[count, setCount] = useState(10);
  const handelIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={() => setCount(count-1)}>Decrease</button>
    <button onClick={handelIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('Calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
    <h3>Dynamic Users:{users.length}</h3>
    <ul>
    {
      users.map(user => <li>{user.name}</li>)
    }
    </ul>
    </div>
  )
}
function Person(props){
 console.log(props)
  return( 
    <div style={{border:'2px solid red'}}>
    <h1>Name:{props.name}</h1>
    <h3>Hero of the year</h3>
    </div>
  )
}
function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'

  }
  // const {name,price} = props.product;
  return(
    <div style={productStyle}>
    <h4>{props.name}</h4>
    <h1>{props.Price}</h1>
    <button>Buy Now</button>
    </div>
  )
}
export default App;
