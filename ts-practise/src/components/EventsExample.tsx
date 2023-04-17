import React, { useRef, useState } from 'react'

export const EventsExample = () => {

    const [value, setValue] = useState<string>('');

    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault;
        alert(inputRef.current?.value);

    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }
    const leaveDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }

  return (
    <div>
        <input value={value} onChange={changeHandler} type="text" placeholder='controlled'/>
        <input ref={inputRef} type="text" placeholder='uncontrolled'/>
        <button onClick={handleClick}>text</button>
        <div onDrag={dragHandler} draggable style={{width: 300, height: 300, background: "red"}}></div>
        <div onDrop={dropHandler} onDragLeave={leaveDragHandler} onDragOver={dragOverHandler} style={{width: 300, height: 300, background: isDrag? "green":"red", marginTop: 15}}></div>
    </div>
    
  )
}
