import { Fragment, useState } from 'react';
import './Dashboard.css';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import Courses from './Courses';

const Dashboard = () => {
const [isClicked, setIsClicked] = useState(false);

const clickHandler = () => {
    setIsClicked(true);
};

    return <Fragment>
    
   <Panel header="Company Data" toggleable>
    <h1>This is my dashboard</h1>
    </Panel>
    
    {!isClicked && <Panel header="My Courses" toggleable>
 <Card className='coursecard' title="Aerial Lifts" onClick={clickHandler}></Card>
    <Card className='coursecard' title="Fall Protection"></Card>
    <Card className='coursecard' title="Hazard Communication"></Card>
    <Card className='coursecard' title="Cold Stress"></Card>
</Panel> }

{isClicked && <Panel header="My Courses" toggleable><Courses></Courses></Panel>}

    

    
    
    
    </Fragment>
}

export default Dashboard;