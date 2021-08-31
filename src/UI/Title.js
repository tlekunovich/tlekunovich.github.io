import React from 'react';
import style from './../UI/Title.module.css'
import line from '../img/line.png'

const Title = (props) => {
    return (
    <div className={style.title}>
        <img className={style.line} src={line} alt='' />
         <div className={style.NameTitle}>{props.title}</div>
         <img className={style.line} src={line} alt='' />
    </div>
         
    )
}


export default Title;