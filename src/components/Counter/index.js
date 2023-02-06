import { useState, useEffect } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  )
}
