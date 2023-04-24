import { Fragment, useEffect, useState } from 'react';
import { projectFirestore } from '../config';
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
const [isAerialLifts, setIsAerialLifts] = useState(false);
const [isArcFlash, setIsArcFlash] = useState(false);
const [data, setData] = useState(null);
const [error, setError] = useState();
const [pending, setPending] = useState();


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

const closeArcFlash = () => {
    setIsArcFlash(false);
}

useEffect(()=>{
    setPending(true)

projectFirestore.collection('Courses').get().then((snapshot)=>{
   if (snapshot.empty){
    setError('no courses')
    setPending(false);
   } else {
    let results = [];
     snapshot.docs.forEach(doc => {
       results.push({id: doc.id, ...doc.data() })
    })
    setData(results)
    setPending(false) 
    //console.log(results);
}
 
}).catch(err => {
    setError(err.message)
    setPending(false)
})

}, [])
//console.log(data)


    return <Fragment>
   <Panel header="Company Data" >
    <h1>This is my dashboard</h1>
    </Panel>
    <Card className='courses' title='General Text'></Card>
    
    <Panel header="My Courses" toggleable>
        {!isArcFlash && <Card onClick={aerialLiftHandler} className='courses' title="Aerial Lifts" >
    {isAerialLifts && <div><AerialLifts /> <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeAerialLifts}>Back to Courses</Button></div>}
       </Card>}
       { !isAerialLifts && <Card onClick={arcFlashHandler}className='courses' title="Arc Flash">{isArcFlash && <div><ArcFlash loadData={data} /> <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeArcFlash}>Back to Courses</Button></div>}</Card>}
  </Panel>     
        
</Fragment>
}

export default Dashboard;