import { Fragment, useEffect, useState } from 'react';
//import { projectFirestore } from '../config';
import useCollection from '../hooks/useCollection';
import useAuthContext from '../hooks/useAuthContext';
import './Dashboard.css';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import AerialLifts from './courses/AerialLifts';
import ArcFlash from './courses/ArcFlash';
import AbrasiveBlasting from './courses/AbrasiveBlasting';
//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
//import Welcome from './Welcome';

const Dashboard = (props) => {
const [isAerialLiftsClicked, setIsAerialLiftsClicked] = useState(false);
const [isArcFlashClicked, setIsArcFlashClicked] = useState(false);
const [isAerialLiftsNewClicked, setIsAerialLiftsNewClicked] = useState(false);
const [data, setData] = useState(null);
//const [error, setError] = useState();
//const [pending, setPending] = useState();
const { user } = useAuthContext();
const { documents, error } = useCollection('newcourses')

let NoCoursesClicked;
if(isAerialLiftsClicked === false && 
   isArcFlashClicked === false && 
   isAerialLiftsNewClicked === false){
   NoCoursesClicked = true;
   }

const aerialLiftHandler = () => {
    if(NoCoursesClicked){
            setIsAerialLiftsClicked(true);
        }
    }

    const closeAerialLifts = () => {
        setIsAerialLiftsClicked(false);
    }
    
const AerialLiftNewHandler = () => {
    if(NoCoursesClicked){
    setIsAerialLiftsNewClicked(true);
    }
} 

    const closeAerialLiftsNew = () => {
    setIsAerialLiftsNewClicked(false);
}


const arcFlashHandler = () => {
    if(NoCoursesClicked){
            setIsArcFlashClicked(true);
        }
    } 

    const closeArcFlash = () => {
    setIsArcFlashClicked(false);
}


/* useEffect(()=>{
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

}, [])  */
//console.log(data)


    return <Fragment>
   <Panel header="My Company Name" >
    <h1>Welcome {user.displayName}</h1>
    </Panel>
    <Card className='courses' title='General Text'></Card>
    
    <Panel header="My Courses" toggleable>
        <Card onClick={aerialLiftHandler} className='courses' title="Aerial Lifts" >
        {isAerialLiftsClicked && <div><AerialLifts  /> <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeAerialLifts}>Back to Courses</Button></div>}
       </Card>
       <Card onClick={arcFlashHandler}className='courses' title="Arc Flash">
        {isArcFlashClicked && <div><ArcFlash /> <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeArcFlash}>Back to Courses</Button></div>}
        </Card>
        <Card title='Abrasive Blasting' onClick={AerialLiftNewHandler} > 
        {isAerialLiftsNewClicked && <div><AbrasiveBlasting></AbrasiveBlasting><Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeAerialLiftsNew}>Back to Courses</Button> </div>}
        </Card>

  </Panel>     
        
</Fragment>
}

export default Dashboard;