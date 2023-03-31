import { Fragment, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ReactPlayer from 'react-player';
import './AerialLifts.css';

const ArcFlash = () => {
    const [isVid1Clicked, setIsVid1Clicked] = useState(false);
    const [isVid2Clicked, setIsVid2Clicked] = useState(false);
    const [isVid3Clicked, setIsVid3Clicked] = useState(false);
    const [isVid4Clicked, setIsVid4Clicked] = useState(false);
    const [isVid5Clicked, setIsVid5Clicked] = useState(false);
    const [isVid6Clicked, setIsVid6Clicked] = useState(false);
    const [isVid7Clicked, setIsVid7Clicked] = useState(false);
    const [isVid8Clicked, setIsVid8Clicked] = useState(false);
    const [score, setScore] = useState(0);

    const handleClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }
    }

    const totalScore = () => {
        return Math.round((score / questions.length) * 100);
       }
 let allStateIsFalse;
 if(isVid1Clicked === false && 
    isVid2Clicked === false && 
    isVid3Clicked === false && 
    isVid4Clicked === false && 
    isVid5Clicked === false && 
    isVid6Clicked === false && 
    isVid7Clicked === false &&
    isVid8Clicked === false){
    allStateIsFalse = true;
    }


    const vid1ClickHandler = () => {
        if(allStateIsFalse ) 
        {setIsVid1Clicked(true);}
    };
  const closeVid1Handler = () => {
      setIsVid1Clicked(false)
  };
    
    const vid2ClickHandler = () => {
        if(allStateIsFalse ) 
        {setIsVid2Clicked(true);}
    };
    const closeVid2Handler = () => {
      setIsVid2Clicked(false)
  }
    
    const vid3ClickHandler = () => {
  if (allStateIsFalse)
      {setIsVid3Clicked(true);}
    };
    const closeVid3Handler = () => {
      setIsVid3Clicked(false)
  };
    
    const vid4ClickHandler = () => {
if(allStateIsFalse) 
  {setIsVid4Clicked(true);}

    };
    const closeVid4Handler = () => {
      setIsVid4Clicked(false)
  };

    const vid5ClickHandler = () => {
      if(allStateIsFalse)
          {setIsVid5Clicked(true);}

    };
    const closeVid5Handler = () => {
      setIsVid5Clicked(false)
  };
    
    const vid6ClickHandler = () => {
if(allStateIsFalse)
  {setIsVid6Clicked(true);}

    };
    const closeVid6Handler = () => {
      setIsVid6Clicked(false)
  };

  const vid7ClickHandler = () => {
  if(allStateIsFalse)
      {setIsVid7Clicked(true);}

  };
  const closeVid7Handler = () => {
    setIsVid7Clicked(false)
};
const vid8ClickHandler = () => {
  if(allStateIsFalse){
    setIsVid8Clicked(true);}
};
const closeVid8Handler = () => {
setIsVid8Clicked(false)
};

const questions = [
    {
      questionText: "The release of an arc flash can be ______ or hotter.",
      answerOptions: [
        { answerText: "A. 10,000 degrees F", isCorrect: false },
        { answerText: "B. 2,000 degrees F", isCorrect: false },
        { answerText: "C. 5,000 degrees F", isCorrect: true },
        { answerText: "D. 8,000 degrees F", isCorrect: false },
      ],
    },
    {
      questionText: "Arc flash can occur due to all the following EXCEPT:",
      answerOptions: [
        { answerText: "A. Dust", isCorrect: false },
        { answerText: "B. Corrosion", isCorrect: false },
        { answerText: "C. Condensation", isCorrect: false },
        { answerText: "D. Wind", isCorrect: true },
      ],
    },
    {
      questionText: "True or False: The heat of a flash can reach up to 45,000 degrees F.",
      answerOptions: [
        { answerText: "A. True", isCorrect: true },
        { answerText: "B. False", isCorrect: false },
  
      ],
    },
    {
      questionText: "A sound blast can reach up to ____ decibels?",
      answerOptions: [
        { answerText: "A. 200 dB", isCorrect: false },
        { answerText: "B. 140 dB", isCorrect: false },
        { answerText: "C. 95 dB", isCorrect: false },
        { answerText: "D. 35 dB", isCorrect: true },
      ],
    },
  {
    questionText:'_____ created the approach/protection boundaries.',
    answerOptions: [
      {answerText:'A. NFPA', isCorrect: false },
      {answerText: 'B. EPA', isCorrect: false },
      {answerText: 'C. OSHA', isCorrect: true },
      {answerText: 'D. CDC', isCorrect: false},
    ],
  },
  {
    questionText:'The following are protective measures EXCEPT:',
    answerOptions: [
      {answerText:'A. De-energizing circuits', isCorrect: false },
      {answerText: 'B. Ventilation systems', isCorrect: false },
      {answerText: 'C. Insulation', isCorrect: true },
      {answerText: 'D. Ground Fault Circuit Interrupters (GFCI)', isCorrect: false},
    ],
  },
  {
  questionText: 'True or False: The best way to control arc flash hazards is to Lockout/Tagout',
  answerOptions: [
    {answerText: 'A. True', isCorrect: true },
    {answerText: 'B. False', isCorrect: false },
   ],
  },
  {
  questionText: 'The basic steps to LOTO include all the following EXCEPT:',   
  answerOptions: [
    {answerText: 'A. Identify the equipment source of power', isCorrect: true},
    {answerText: 'B. Calling in a LOTO specialist to perform the job', isCorrect: false },
    {answerText: 'C. Apply locks and tags to keep the power sources disconnected', isCorrect: false },
    {answerText: 'D. Confirm that the equipment is completely de-energized', isCorrect: false },
  ],
  },
  {
  questionText: 'True or False: Fire Retardant clothing is the best kind of protective clothing',
  answerOptions: [
  {answerText: 'A. True', isCorrect: false},
  {answerText: 'B. False', isCorrect: true },],
  },
  {
  questionText: 'A PPE program must be implemented when?',
  answerOptions: [
  {answerText: 'A. After PPE is used', isCorrect: false},
  {answerText: 'B. When PPE is picked out', isCorrect: false},
  {answerText: 'C. When cleaning PPE', isCorrect: false},
  {answerText: 'D. When PPE is used', isCorrect: true},]
  },
  {
  questionText: 'True or False: A qualified person does not have to understand or demonstrate knowledge of arc flash hazards.',
  answerOptions: [
    {answerText: 'A. True', isCorrect: false},
    {answerText: 'B. False', isCorrect: true}],
  },
  {
  questionText: 'What training can employees take?',
  answerOptions: [
  { answerText: 'A. NFPA 60E', isCorrect: false },
  { answerText: 'B. NFPA 70E', isCorrect: false },
  { answerText: 'C. None is required', isCorrect: false },
  { answerText: 'D. OSHA training', isCorrect: true },
   ],
  }
  
  ];


const arcflash = [
    {video:'https://player.vimeo.com/video/519129758', 
    title: 'Welcome', 
    q1: "I am ready to proceed", 
   },

   {
    video: 'https://player.vimeo.com/video/745849954?h=18f0daeca1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Introduction',
   }, 

   {video: 'https://player.vimeo.com/video/746871415?h=990ef391e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Injuries and First Aid',    
    },

   {video: 'https://player.vimeo.com/video/746885423?h=5ad4e56f58&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Protection and Prevention',
     
    },

   {video: 'https://player.vimeo.com/video/746927460?h=80ef69cef4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Lockout & Tagout',
   
    },

   {video: 'https://player.vimeo.com/video/746933504?h=146985b893&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Personal Protective Equipment',
  
    },

   {video: 'https://player.vimeo.com/video/746941479?h=99f65aa3b6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Training',
  
    },

   {video: 'https://player.vimeo.com/video/455943382?h=2d45027c8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Final Knowledge Check',
  
    }
];


return <Fragment>
<Card onClick={vid1ClickHandler} className="coursecard" title='Welcome'>    
    {isVid1Clicked && <div>
    <ReactPlayer className='video-one' url={arcflash[0].video}  controls></ReactPlayer>
    <br/><p>{arcflash[0].q1}</p><input type='checkbox'/><br/> <br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid1Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid2ClickHandler} className="coursecard" title='Introduction'>
{isVid2Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[1].video} controls></ReactPlayer>
    <form>
    <p><b>{questions[0].questionText}</b></p>
    {questions[0].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <p><b>{questions[1].questionText}</b></p>
    {questions[1].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid2Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid3ClickHandler} className="coursecard" title='Injuries and First Aid'>
{isVid3Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[2].video} controls></ReactPlayer>
    <form>
    <p><b>{questions[2].questionText}</b></p>
    {questions[2].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <p><b>{questions[3].questionText}</b></p>
    {questions[3].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid3Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid4ClickHandler} className="coursecard" title='Protection and Prevention'>
{isVid4Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[3].video} controls></ReactPlayer>
    <form>
    <p><b>{questions[4].questionText}</b></p>
    {questions[4].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>{questions[5].questionText}</b></p>
    {questions[5].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid4Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid5ClickHandler} className="coursecard" title='Lockout & Tagout'>
{isVid5Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[4].video} controls></ReactPlayer>
    <form>
    <p><b>{questions[6].questionText}</b></p>
    {questions[6].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>{questions[7].questionText}</b></p>
    {questions[7].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid5Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid6ClickHandler} className="coursecard" title='Personal Protective Equipment'>
{isVid6Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[5].video} controls></ReactPlayer>
    <form>
    <p><b>{questions[8].questionText}</b></p>
    {questions[8].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>{questions[9].questionText}</b></p>
    {questions[9].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid6Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid7ClickHandler} className="coursecard" title='Training'>
{isVid7Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[6].video} controls></ReactPlayer>
    <form>
    <p><b>{questions[10].questionText}</b></p>
    {questions[10].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>{questions[11].questionText}</b></p>
    {questions[11].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid7Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid8ClickHandler} className="coursecard" title="Final Knowledge Check">
{isVid8Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[7].video} controls></ReactPlayer>
    <form>
    <p><b>1. {questions[0].questionText}</b></p>
    {questions[0].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    
    <p><b>2. {questions[1].questionText}</b></p>
    {questions[1].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

   <p><b>3. {questions[2].questionText}</b></p>
    {questions[2].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

   <p><b>4. {questions[3].questionText}</b></p>
    {questions[3].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>5. {questions[4].questionText}</b></p>
    {questions[4].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 
    
    <p><b>6. {questions[5].questionText}</b></p>
    {questions[5].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>7. {questions[6].questionText}</b></p>
    {questions[6].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

    <p><b>8. {questions[7].questionText}</b></p>
    {questions[7].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>9. {questions[8].questionText}</b></p>
    {questions[8].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>10. {questions[9].questionText}</b></p>
    {questions[9].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>11. {questions[10].questionText}</b></p>
    {questions[10].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>12. {questions[11].questionText}</b></p>
    {questions[11].answerOptions.map((item) => (
    <div><input type="checkbox" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <h3>Your Score {totalScore()}%</h3>

    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid8Handler}>Next</Button> </div>}
</Card>


</Fragment>
}

export default ArcFlash;