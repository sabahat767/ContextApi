import React,{useContext, useState} from 'react'
import {ThemeContext} from '../Context/ThemeContextProvider'

function BookList() {
    const {isLight,light,dark}=useContext(ThemeContext);//destructuring the arrays of objects
    const ui=isLight?light:dark;
    console.log(ui)
    const [books,setbooks]=useState([
        {name:'HtmlCss',author:'John ducket'},
        {name:'React',author:'john ducket'}, 
        {name:'JS',author:'Mark'}
    ])
    return (
        <div style={{backgroundColor:ui.bg,color:ui.text}}>
            <ul>
                {books.map((item)=>(
                    <li key={item.name}>{` ${item.name} is written by ${item.author}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default BookList
