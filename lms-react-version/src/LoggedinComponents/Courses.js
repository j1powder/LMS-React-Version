import { Card } from 'primereact/card';
import React from 'react';
//import { OrderList } from 'primereact/orderlist';
//import { ProductService } from './service/ProductService';
//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";



const Courses = () => {
    

     const items = [
        {name: 'Video 1', title: 'Introduction'},
        {name: 'Video 2', title: 'Welcome'},
        {name: 'Video 3', title: 'Course Content'},
        {name: 'Video 4', title: 'Welcome'},
        {name: 'Video 5', title: 'Welcome'},
        {name: 'Video 6', title: 'Welcome'}
     ]; 

     const createSections = (item) => {
        return <table><td>{item.name}</td><td>{item.title}</td></table>
     }


    return <>
    <Card title="Aerial Lifts">
    <h4> {items.map(createSections)}</h4>
    </Card>
    </>
}

export default Courses;