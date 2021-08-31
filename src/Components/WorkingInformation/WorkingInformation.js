import React from 'react';
import style from './../WorkingInformation/WorkingInformation.module.css'
import bird from './../../img/bird.png'
import Block from '../../UI/Block';
import AccordionItem from '../../UI/AccordionItem';
import AccordionWrapper from '../../UI/AccordionWrapper';
import weather from './../../img/weather.PNG';
import todo from './../../img/todoo.png';
import quiz from './../../img/quiz.png';
import github from "../../img/github.svg";

const dataStack = [
    {
      title: "Hard Skills",
      description: "React, Redux, Node.js, Git, JavaScript, ES6, HTML5, CSS3, SASS, LESS, Styled Components"
    },
    {
      title: "Languages",
      description: {
        ru:'Russian:',
        ru_level:'Native',
        en:'English:',
        en_level:'Pre-Intermediate'
    }
    },
    {
      title: "Projects",
      description: {
        weather:<img className={style.weather} alt='' src={weather}></img>,
        weather_level:
          <div className={style.myProj}>
            <div className={style.projTitle}>
            <div className={style.titleProj}>Weather Forecast</div>
            <a href='https://github.com/tlekunovich/Weather'><img alt='' src={github} className={style.icon}/></a>
            </div>
            <div className={style.descriptionApp}> 
              This app has thorough weather reports that let you know humidity, wind, and temperature.
              It gives you a more robust understanding of what the weather will feel like, as opposed to 
              just the number you see on a thermometer so you don't go out without an umbrella or rain gear.
            </div>
               
            
          </div>,

        todo:<img className={style.weather} alt='' src={todo}></img>,
        todo_level: 
        <div className={style.myProj}>
          <div className={style.projTitle}>
          <div className={style.titleProj}>ToDo-List</div>
          <a href='https://github.com/tlekunovich/ToDo-List'><img alt='' src={github} className={style.icon}/></a>
          </div>
          <div className={style.descriptionApp}> 
          ToDo-List is a beautifully simple todo list app that will help keep your busy life organised everyday. 
          To reposition a task within a list, you can drag and drop it.
          </div>
        </div>,

        quiz:<img className={style.weather} alt='' src={quiz}></img>,
        quiz_level: 
        <div className={style.myProj}>
          <div className={style.projTitle}>
          <div className={style.titleProj}>Quiz-Creator</div>
          <a href='https://github.com/tlekunovich/Quiz'><img alt='' src={github} className={style.icon}/></a>
          </div>
          <div className={style.descriptionApp}> 
             Create and play quizzes with this Quiz-Creator. Update anytime with new questions and answers. 
             Save resources and money by avoiding print-out quiz sheets and test papers.
          </div>
          </div>
            }
    },
    {
      title: "Education and Jobs",
      description: {
        one:'2014-2018:',
        one_level:<div> <div>Belarusian State University</div>
        <div className={style.italic}>The Faculty of Biology:</div>
        <div className={style.italic}>Department of Genetics</div>
  </div>,
        two:'2018-2021:',
        two_level: <div> <div>N. N. Alexandrov National Cancer Centre of Belarus</div>
                        <div className={style.italic}>Work as Molecular Biologist:</div>
                        <div className={style.italic}>Creation of personalized cancer vaccines based on dendritic cells</div>
                  </div>,
        three:'2021-currently:',
        three_level:'Learning front-end developer tools'
    }
    },
  ];

 

const WorkingInformation = (props) => {
    
    return (
        <div className={style.WorkingInformation}>
                <div className={style.head}>
                    <div className={style.NameTitle}>
                    
                        <div className={style.name}>Tanya Lekunovich</div>
                        <div className={style.position}>Junior Front-end Developer/React Developer</div>
                    </div>
                    
                    <img alt='' src={bird} className={style.bird}/>
                </div>
<div className={style.ProfSkills}>
               <div className={style.contentWrapper}>
                <AccordionWrapper>
            {dataStack.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description}  />
            ))}
          </AccordionWrapper>
          </div>
</div>
        </div>
    )
}


export default WorkingInformation;