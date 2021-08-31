import React from 'react';
import style from './../PersonalInformation/PersonalInformation.module.css'
import photo from '../../img/cv.png'
import rhombus from '../../img/rhomb.png'
import Title from '../../UI/Title';
import phone from "../../img/phone.svg";
import mail from "../../img/mail.svg";
import telegram from "../../img/telegram.svg";
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";



const PersonalInformation = (props) => {
    
   const softSkills=[
         'thinking outside the box',
         'understanding the feelings of others and controlling my emotions',
         'information searching and analysis',
         'keeping calm in multitasking and stress mode',
         'finding alternative solutions in deadlock situations',

    ] 
    

    const contacts = [
        {icon: phone, href:'' ,text:'+375(29)312 88 21'},
        {icon: mail, href:'' ,text:'tanyalekunovich@gmail.com'},
        {icon: telegram, href:'https://t.me/tanya_lekunovich' ,text:''},
        {icon: linkedin, href:'https://www.linkedin.com/in/tanya-lekunovich-214718219/' , text:''},
        {icon: github, href:'https://github.com/tlekunovich?tab=projects' , text:''},
    ]
    return (
        <div className={style.PersonalInformation}>
           <div className={style.header}>
                <div className={style.head}>
           <img className={style.photo} src={photo} alt='' />
                </div>
           </div>

           <div className={style.profileInformation}>
                 <Title title={'Profile'} />
                 <div className={style.text}>
                        Hey! Glad you're here, let's get acquainted.<br/>
                        I'm Tanya and I'm 24.
                        I've always been interested in complex things and how they work from the inside. Therefore, the first profession is associated with the study of molecular biology.<br/>
                        At the moment I am attracted to the creation of the interface of various programs and sites, so my choice fell on the study of front-end development tools.
                        So far, I am at the beginning of the path, so a great desire to learn new things, create and develop perfectly compensates for a possible lack of experience.<br/>
                        If your job is more than just an obligation or a way to earn money, your eyes are shining and you create and appreciate a quality product, then I will be glad to become a part of your team and contribute to a great cause!
                </div>
                <Title title={'Soft Skills'}/>
                <div className={style.BeAble}>I am capable of:</div>
                <div className={style.text}>
                    {softSkills.map((elem,index)=>{
                        return (
                            <div className={style.softSkills}>
                                
                                <img className={style.rhombus} src={rhombus} alt='' />
                                <div className={style.softSkillsItem}>{elem}</div>
                            </div>
                        )
                    })}
                </div>

                <Title title={'Contacts'}/>
                <div className={style.contacts}>
                        {contacts.map((elem,index)=>{
                            return (
                                <div key={index} className={style.contactItem}>
                                 <img className={style.icon} src={elem.icon} alt='' />
                                    <a href={elem.href}>{elem.href}</a>
                                    {elem.text
                                    ?<div>{elem.text}</div>
                                    : null
                                    }
                                </div>
                            )
                        })}
                </div>
           </div>
        </div>
    )
}


export default PersonalInformation;