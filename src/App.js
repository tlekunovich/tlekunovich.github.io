import React, {Component} from 'react';
import style from './App.module.css';
import PersonalInformation from './Components/PersonalInformation/PersonalInformation';
import WorkingInformation from './Components/WorkingInformation/WorkingInformation';



class App extends Component {
  render(){
  return (
    <div className={style.App}>
      <div className={style.container}>
        <PersonalInformation />
        <WorkingInformation />
      </div>
    </div>
  );
}
}

export default App;