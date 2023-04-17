import React from 'react'

interface ListProps<T>{
    items: T[];
    renderItem: (item:T) => React.ReactNode
}


export function List<T>(props: ListProps<T>){
  return (
    <div className='list' style={{display: "flex", flexDirection: "column"}}>
        {props.items.map(props.renderItem)}
    </div>
  )
}
