import React, {createContext, useState} from 'react';
import style from './AccordionWrapper.module.css'


export const AccordionContext = createContext({
    active: 0,
    setActive: () => {}
});

const AccordionWrapper = (props) => {

    const [active, setActive] = useState(0);

    return (
        <AccordionContext.Provider
            value={{
                active, setActive
            }}
        >
        <div className={style.accordionWrapper}>
            <form>
                {props.children}
            </form>
        </div>
        </AccordionContext.Provider>
    )
}

export default AccordionWrapper; 