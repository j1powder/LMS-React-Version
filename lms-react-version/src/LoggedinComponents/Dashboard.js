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
        <Panel header="Aerial Lifts" toggleable>
            <Card className='coursecard' title="Welcome"></Card>
            <Card className='coursecard' title="Introduction"></Card>
            <Card className='coursecard' title="Equipment Requirements and Standards"></Card>
            <Card className='coursecard' title="Safe Use of Aerial Lifts"></Card>
            <Card className='coursecard' title="Hazards Associated with Aerial Lifts"></Card>
            <Card className='coursecard' title="Training Requirements"></Card>
        </Panel>
        <Panel header="Fall Protection" toggleable>
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
        </Panel>
 
</Panel> }

{isClicked && <Panel header="My Courses" toggleable><Courses></Courses></Panel>}

    

    
    
    
    </Fragment>
}

export default Dashboard;