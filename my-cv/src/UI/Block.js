import React from 'react';
import style from './../UI/Block.module.css'


const Block = (props) => {
    return (
    <div className={style.Block}>
       <div className={style.BlockItem}>
           {props.nameTitle}
       </div>
    </div>
         
    )
}


export default Block;