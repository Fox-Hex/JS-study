/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, incrementByAmmount} from '../slices/counterSlice.js'

export default () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return(
    <div>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          add 1
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          minus 1
        </button>
        <br />
        <button onClick={() => dispatch(incrementByAmmount(50))}>
          add 50
        </button>
      </div>
    </div>
  )
}