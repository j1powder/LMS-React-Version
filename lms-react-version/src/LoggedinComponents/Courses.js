import { Card } from 'primereact/card';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
//import { OrderList } from 'primereact/orderlist';
//import { ProductService } from './service/ProductService';
//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";


const Courses = () => {
    const [isWelcome, setIsWelcome] = useState(false);
    //const [isIntro, setIsIntro] = useState(false);
   
    const welcomeHandler = () => {
      setIsWelcome(true);
    }

     const items = [
        {name: 'Video 1', title: 'Welcome'},
        {name: 'Video 2', title: 'Introduction'},
        {name: 'Video 3', title: 'Equipment Requirements and Standards'},
        {name: 'Video 4', title: 'Safe Use of Aerial Lifts'},
        {name: 'Video 5', title: 'Hazards Associated with Aerial Lifts'},
        {name: 'Video 6', title: 'Training Requirements'}
     ]; 

     const createSections = (item) => {
        return <h4> {item.name} {item.title}</h4>
     }
    
/*      const welcomeVideo = () => {
      
      return <div>
         <ReactPlayer url="https://player.vimeo.com/video/519129758" />
      </div>
     } */

    return <>
    <Card title="Welcome">
{/*     <h4 onClick={welcomeHandler}> {items.map(createSections)}</h4>
    
    {isWelcome && <div> */}
    <div >
         <ReactPlayer url="https://player.vimeo.com/video/519129758" controls />
    </div>

{/*     <div>
         <ReactPlayer url="https://player.vimeo.com/video/667507879" controls />
    </div>

    <div>
         <ReactPlayer url="https://player.vimeo.com/video/667806838" controls />
    </div>

    <div>
         <ReactPlayer url="https://player.vimeo.com/video/667831170" controls />
    </div>

    <div>
         <ReactPlayer url="https://player.vimeo.com/video/667843822" controls />
    </div>

    <div>
         <ReactPlayer url="https://player.vimeo.com/video/667857033" controls />
    </div> */}

   

    </Card>
    </>
}

export default Courses;