import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addNewAction, decrCountAction, incrCountAction } from './Store/CartReducer';
import { useEffect } from 'react';

function App() {

  const cartData = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(()=>{
    localStorage.setItem('productsInCart', JSON.stringify(cartData))
  })

  return (
    <div className='cart'>
      <h1>Корзина</h1>
      {cartData.map(elem => 
          <div className='product' key={elem.id} onClick={()=> console.log(elem.id)}>
            <p>{elem.title}</p>
            <button onClick={()=> dispatch(decrCountAction(elem.id))} >-</button>
            <p>{elem.count}</p>
            <button onClick={()=> dispatch(incrCountAction(elem.id)) } >+</button>
          </div>
      )}
      <button onClick={()=> dispatch(addNewAction(prompt()))} >Add new</button>
    </div>
  );
}

export default App;
