import React from "react"

const CountComponent = React.memo(({ count }) => {
  console.log('CountComponent rendered!')

  return (
    <div>
      <p>Memoised component with count value: {count}</p>
    </div>
  )
}, (_, nextProps) => {
  return nextProps.count % 2 !== 0
})

export default CountComponent