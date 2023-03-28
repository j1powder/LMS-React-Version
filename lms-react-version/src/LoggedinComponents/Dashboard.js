import { Fragment, useState } from 'react';

import './Dashboard.css';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import AerialLifts from './courses/AerialLifts';
import ArcFlash from './courses/ArcFlash';
//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
//import Welcome from './Welcome';

const Dashboard = (props) => {

/*     const openState = {
        aLiftsisOpen: false,
        aFlashisOpen: false,
    }
    const openAFlash = 'makeOpen';
    const openALifts = 'makeClosed';
    const closeAlifts = 'closeAlifts';

    const panelReducer = (state, action) => {
    if(action.type === openAFlash){
            return {...state, aFlashisOpen: true,}
        }
        
    if(action.type === openALifts){
        return { ...state, aLiftsisOpen: true, }
        }
    if(action.type === closeAlifts) {
            return {...state, aLiftsisOpen: false }
        }
    } */


//const [state, dispatch] = useReducer(panelReducer, openState);



const [isAerialLifts, setIsAerialLifts] = useState(false);
const [isArcFlash, setIsArcFlash] = useState(false);

/* const aerialLiftsHandler = () => {
dispatch({type: openALifts});
console.log(state);
} */


const aerialLiftHandler = () => {
    if(isAerialLifts === false && isArcFlash === false){
           setIsAerialLifts(true);
        }
    }  

const closeAerialLifts = () => {
    setIsAerialLifts(false);
 
} 

const arcFlashHandler = () => {
    if(isAerialLifts === false && isArcFlash === false){
            setIsArcFlash(true);
        }
    }  

/* const arcFlashHandler = () => {
    dispatch({ type: openAFlash, })
} */

const closeArcFlash = () => {
    setIsArcFlash(false);
} 

    return <Fragment>
   <Panel header="Company Data" >
    <h1>This is my dashboard</h1>
    </Panel>
    
    <Panel header="My Courses" >
        <Card onClick={aerialLiftHandler} className='courses' title="Aerial Lifts">
    {isAerialLifts && <div><AerialLifts /> <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeAerialLifts}>Back to Courses</Button></div>}
       </Card>
       <Card onClick={arcFlashHandler} className='courses' title="Arc Flash">{isArcFlash && <div><ArcFlash /> <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeArcFlash}>Back to Courses</Button></div>}</Card>
  </Panel>     
        
{/*         <Panel header="Fall Protection" toggleable>
        <Card className='coursecard' title="Welcome"></Card>
            <Card className='coursecard' title="Introduction"></Card>
            <Card className='coursecard' title="Equipment Requirements and Standards"></Card>
            <Card className='coursecard' title="Safe Use of Aerial Lifts"></Card>
            <Card className='coursecard' title="Hazards Associated with Aerial Lifts"></Card>
            <Card className='coursecard' title="Training Requirements"></Card>
        </Panel>
        <Panel header="Hazard Communication" toggleable>
        <Card className='coursecard' title="Welcome"></Card>
            <Card className='coursecard' title="Introduction"></Card>
            <Card className='coursecard' title="Equipment Requirements and Standards"></Card>
            <Card className='coursecard' title="Safe Use of Aerial Lifts"></Card>
            <Card className='coursecard' title="Hazards Associated with Aerial Lifts"></Card>
            <Card className='coursecard' title="Training Requirements"></Card>
        </Panel>
        <Panel header="Cold Stress" toggleable>
        <Card className='coursecard' title="Welcome"></Card>
            <Card className='coursecard' title="Introduction"></Card>
            <Card className='coursecard' title="Equipment Requirements and Standards"></Card>
            <Card className='coursecard' title="Safe Use of Aerial Lifts"></Card>
            <Card className='coursecard' title="Hazards Associated with Aerial Lifts"></Card>
            <Card className='coursecard' title="Training Requirements"></Card>
        </Panel> */}
        

    

</Fragment>
}

export default Dashboard;