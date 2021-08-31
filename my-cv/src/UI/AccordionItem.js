import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {AccordionContext} from './AccordionWrapper';
import style from './AccordionItem.module.css';

const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
     }

    return (
        <div className={style.accordionItem}>
            <h3 className={style.accordionTitle}>
                <button 
                    onClick={(e) => eventHandler(e, props.index)}
                    className={ active === props.index ? 'active' : 'inactive'}
                    aria-expanded={ active === props.index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + indexCount(props.index) }
                    aria-disabled={ active === props.index ? 'true' : 'false' }
                >
                    <span className={style.titleWrapper}>{props.title}
                    </span>  
                    <span className={style.iconWrapper}>
                        <span 
                            className={ active === props.index ? style.plus : style.minus}>
                        </span>
                    </span>
                </button>
            </h3>
           {typeof props.description ==='object'
           ? 
           <div className={style.accordionPanel}>
              {
               Object.keys(props.description).map((key)=>{
                  const language = key.indexOf('_') === -1;
                  if(language){
                    return (
                        <div 
                        id={ 'sect-' + indexCount(props.index) } 
                        className={ active === props.index  
                                    ? style.panelOpen 
                                    : style.panelClose }
                    >
                        <div className={style.lang}>
                        <div className={style.bold}>{props.description[key]}</div>
                        &nbsp;{props.description[`${key}_level`]}
                        </div>
                    </div>
                      )
                  }
                  else{return null}
                  
              }) 
              }
            </div>
            :
            <div className={style.accordionPanel}>
               <div 
                    id={ 'sect-' + indexCount(props.index) } 
                    className={ active === props.index  
                                ? style.panelOpen 
                                : style.panelClose }
                >
                    {props.description}
                </div>
            </div>
            }
        </div>
    )
}

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccordionItem; 