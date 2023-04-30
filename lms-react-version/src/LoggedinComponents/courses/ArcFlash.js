import { Fragment, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ReactPlayer from 'react-player';
//import { videos } from './arcflashquestions';
import useCollection from '../../hooks/useCollection';
import './AerialLifts.css';
       
        
const ArcFlash = (props) => {

    const [openItem, setOpenItem] = useState(null);
   // const [score, setScore] = useState(0);
   // const [sectionScore, setSectionScore] = useState('')
    const { documents, error } = useCollection('newcourses/Arc Flash Safety/Sections')

    

/*     const sectionHandler = (isCorrect) => {
        setSectionScore('');
        if (isCorrect) {
            setSectionScore('Correct');
        } else {
            setSectionScore('Incorrect');
        }
    }

    const handleClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }
    }

    const totalScore = () => {
        return Math.round((score / 12) * 100);
       } */



if(documents){
    console.log(openItem)
}

    
return <Fragment>
<p>Hello There</p>
{documents && 
    <div>
{documents.map((section)=>{
    return <>
    
    <Card key={section.id} className='coursecard' title={section.title} onClick={()=> setOpenItem(section.id)}>
{openItem === section.id ? <>
            <ReactPlayer className='video-one' url={section.video}  controls></ReactPlayer>
              <p><b>{section.question1.questionText}</b></p>
              {section.question1.answerOptions.map((item)=>(<p>{item}</p>))}
              <br/>
              <p><b>{section.question2.questionText}</b></p>
              {section.question2.answerOptions.map((item)=>(<p>{item}</p>))}  
              <Button style={{backgroundColor:'gray', border: 'black'}} onClick={()=> setOpenItem("")}>Close</Button>
              </> : null
              }
        </Card>
        </>
})}
</div>
}

</Fragment>
}

export default ArcFlash;