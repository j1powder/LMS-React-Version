import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import React, { Fragment, useState } from 'react';
import ReactPlayer from 'react-player';

import './AerialLifts.css';


//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";


const AerialLifts = () => {
     const [isVid1Clicked, setIsVid1Clicked] = useState(false);
     const [isVid2Clicked, setIsVid2Clicked] = useState(false);
     const [isVid3Clicked, setIsVid3Clicked] = useState(false);
     const [isVid4Clicked, setIsVid4Clicked] = useState(false);
     const [isVid5Clicked, setIsVid5Clicked] = useState(false);
     const [isVid6Clicked, setIsVid6Clicked] = useState(false);
     const [isVid7Clicked, setIsVid7Clicked] = useState(false);
     const [isVid8Clicked, setIsVid8Clicked] = useState(false);
     const [isVid9Clicked, setIsVid9Clicked] = useState(false);
     const [isVid10Clicked, setIsVid10Clicked] = useState(false);
     const [isVid11Clicked, setIsVid11Clicked] = useState(false);

     

     const aerialLifts = [
          {video:'https://player.vimeo.com/video/519129758', 
           title: 'Welcome', 
           q1: "I am ready to proceed", 
          },

          {video:"https://player.vimeo.com/video/667507879?h=9759a7aad7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 
           title: 'Introduction', 
           q1: [ 'question:', 'OSHA regulations for Aerial Lifts includes all requirements for Scissor Lifts.',
                        'A. True',
                        'B. False', ] ,
           
            
           q2: ['question:', 'ANSI standards classify Mobile Elevated Work Platforms into:',
                 'A. Three Groups and Two Types',
                 'B. Aerial Work Platform Types',
                 'C. Group A or Group B and Type 1, Type 2, Type 3',
                 'D. Aerial Lifts and Scissor Lifts', ] ,

          },

          {video: "https://player.vimeo.com/video/667806838?h=4e14ecf33e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 
           title: 'Equipment Requirements and Standards',
           q1: ['OSHA standards that protect workers from hazards associated with aerial lifts are found in', 
           'A. 1910 General Industry and 1926 Construction Industry', 
           'B. The National Handbook of Aerial Lift Operations', 
           'C. ANSI Standard A92.2-1973',
           'D. MEWP Safety Operator Guide'],
           q2: ['The updated ANSI Standards for MEWPs include all of the following, except:',
                'A. A92.20 Equipment Design Standards for MEWPs',
                'B. A92.22 Safe Use of MEWPs',
                'C. A92.24 Training Requirements for MEWPs',
                'D. 1926.453 Aerial Lifts'],
            },

          {video: "https://player.vimeo.com/video/667831170?h=2ff3abf95c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 
          title: 'Safe Use Of Aerial Lifts',
          q1:['Aerial Lifts or MEWPs should be inspected at each of the following times, except:',
           'A. Hourly',
            'B. Daily',
            'C. Weekly',
            'D. Monthly',
             'E. Annually'],
            q2: ['The three types of Recue Plans include all of the following, except:',
                'A. Self-Rescue (by person involved)',
                'B. Assisted Rescue (by others in the work area)',
                'C. Robotic Rescue (by unmanned vehicle)',
                'D. Technical Rescue (by emergency services)',]
            },
          {video: "https://player.vimeo.com/video/667843822?h=8bb11bd1b5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 
          title: 'Hazards Associated with Aerial Lifts',
            q1: ['Which of the following is NOT a hazard associated with aerial lifts:',
            'A. Falls from a height',
            'B. Tip overs',
            'C. Contact with overhead objects',
            'D. Asphyxiation'],
            },
          {video: "https://player.vimeo.com/video/667857033?h=c80e790a60&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 
          title: 'Training Requirements',
            q1:['Persons are qualified to operate an aerial lift when they are: ',
                'A. Confident in their own ability to use a MEWP',
                'B. Trained and Authorized by the employer',
                'C. Aware of all hazards on the job site',
                'D. Familiar with operating procedures'],
            q2: ['Which of the following is NOT part of the updated A92.24 ANSI Training Standard for MEWPs?',
                'A. Supervisor Training',
                'B. Occupant Training',
                'C. Qualified Operator Training',
                'D. Excavation and Trenching']},
        {
         video: 'https://player.vimeo.com/video/667879209?h=013e3f8ef1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
         title: 'Before Operating Aerial Lifts 1',
         q1: ["I'm ready to proceed."],
        },
        {
         video: 'https://player.vimeo.com/video/667889410?h=4dbd5f89e2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
         title: 'Before Operating Aerial Lifts 2',
         q1: ['Aerial Lifts with defects should be removed from service (tag out) until repairs are made. ',
              'A. True',
              'B. False'],
         q2: ['Employers must assure that work areas are inspected for hazards and take corrective actions to eliminate such hazards before and during operation of an aerial lift.',
                'A. True',
                'B. False'],
        },
        {
          video: 'https://player.vimeo.com/video/667940350?h=b1546e4861&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
          title: 'While Operating Aerial Lifts 1',
          q1: ["I am ready to proceed"],
        },
        {
          video: 'https://player.vimeo.com/video/667956086?h=0a4e88ee1c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
          title: 'While Operating Aerial Lifts 2',
          q1: ['Which of the following is NOT included in the three duty levels of scaffold capacity:',
                'A. Weighs less than 100 pounds',
                'B. Cannot fall more than two feet',
                'C. Has more than 2 years experience with aerial lifts',
                'D. Is attached to two or more anchor points'],
          q2: ['When working near overhead lines, the meaning of MAD is:',
                'A. Maximum Angular Detention',
                'B. Median Amplitude Distortion',
                'C. Minimum Approach Distance',
                'D. Mobile Aerial Drive'],  
        },
        {
            video:'https://player.vimeo.com/video/455943382?h=2d45027c8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
            title:'Final Knowledge Check',
            q1: ['question:', 'OSHA regulations for Aerial Lifts includes all requirements for Scissor Lifts.',
            'A. True',
            'B. False',],
            q2: ['question:', 'ANSI standards classify Mobile Elevated Work Platforms into:',
            'A. Three Groups and Two Types',
            'B. Aerial Work Platform Types',
            'C. Group A or Group B and Type 1, Type 2, Type 3',
            'D. Aerial Lifts and Scissor Lifts',],
            q3: ['OSHA standards that protect workers from hazards associated with aerial lifts are found in', 
            'A. 1910 General Industry and 1926 Construction Industry', 
            'B. The National Handbook of Aerial Lift Operations', 
            'C. ANSI Standard A92.2-1973',
            'D. MEWP Safety Operator Guide'],
            q4: ['The updated ANSI Standards for MEWPs include all of the following, except:',
            'A. A92.20 Equipment Design Standards for MEWPs',
            'B. A92.22 Safe Use of MEWPs',
            'C. A92.24 Training Requirements for MEWPs',
            'D. 1926.453 Aerial Lifts'],
            q5: ['Aerial Lifts or MEWPs should be inspected at each of the following times, except:',
            'A. Hourly',
             'B. Daily',
             'C. Weekly',
             'D. Monthly',
              'E. Annually'],
            q6: ['The three types of Recue Plans include all of the following, except:',
            'A. Self-Rescue (by person involved)',
            'B. Assisted Rescue (by others in the work area)',
            'C. Robotic Rescue (by unmanned vehicle)',
            'D. Technical Rescue (by emergency services)',],
            q7: ['Which of the following is NOT a hazard associated with aerial lifts:',
            'A. Falls from a height',
            'B. Tip overs',
            'C. Contact with overhead objects',
            'D. Asphyxiation'],
            q8: ['Persons are qualified to operate an aerial lift when they are: ',
            'A. Confident in their own ability to use a MEWP',
            'B. Trained and Authorized by the employer',
            'C. Aware of all hazards on the job site',
            'D. Familiar with operating procedures'],
            q9: ['Which of the following is NOT part of the updated A92.24 ANSI Training Standard for MEWPs?',
            'A. Supervisor Training',
            'B. Occupant Training',
            'C. Qualified Operator Training',
            'D. Excavation and Trenching'],
            q10: ['Aerial Lifts with defects should be removed from service (tag out) until repairs are made. ',
            'A. True',
            'B. False'],
            q11: ['Employers must assure that work areas are inspected for hazards and take corrective actions to eliminate such hazards before and during operation of an aerial lift.',
            'A. True',
            'B. False'],
            q12: ['Which of the following is NOT included in the three duty levels of scaffold capacity:',
            'A. Weighs less than 100 pounds',
            'B. Cannot fall more than two feet',
            'C. Has more than 2 years experience with aerial lifts',
            'D. Is attached to two or more anchor points'],
            q13: ['When working near overhead lines, the meaning of MAD is:',
            'A. Maximum Angular Detention',
            'B. Median Amplitude Distortion',
            'C. Minimum Approach Distance',
            'D. Mobile Aerial Drive'],
        }
     ]; 

     let allStateFalse;
     if(isVid1Clicked === false && 
      isVid2Clicked === false && 
      isVid3Clicked === false && 
      isVid4Clicked === false && 
      isVid5Clicked === false && 
      isVid6Clicked === false && 
      isVid7Clicked === false &&
      isVid8Clicked === false &&
      isVid9Clicked === false &&
      isVid10Clicked === false) {
      allStateFalse = true;
      } 
    
      const vid1ClickHandler = () => {
          if(allStateFalse) 
          {setIsVid1Clicked(true);}
      };

    const closeVid1Handler = () => {
        setIsVid1Clicked(false)
    };
      
      const vid2ClickHandler = () => {
          if(allStateFalse) 
          {setIsVid2Clicked(true);}
      };
      const closeVid2Handler = () => {
        setIsVid2Clicked(false)
    }
      
      const vid3ClickHandler = () => {
    if (allStateFalse)
        {setIsVid3Clicked(true);}

      };
      const closeVid3Handler = () => {
        setIsVid3Clicked(false)
    };
      
      const vid4ClickHandler = () => {
if(allStateFalse) 
    {setIsVid4Clicked(true);}

      };
      const closeVid4Handler = () => {
        setIsVid4Clicked(false)
    };

      const vid5ClickHandler = () => {
        if(allStateFalse)
            {setIsVid5Clicked(true);}

      };
      const closeVid5Handler = () => {
        setIsVid5Clicked(false)
    };
      
      const vid6ClickHandler = () => {
if(allStateFalse)
    {setIsVid6Clicked(true);}

      };
      const closeVid6Handler = () => {
        setIsVid6Clicked(false)
    };

    const vid7ClickHandler = () => {
    if(allStateFalse)
        {setIsVid7Clicked(true);}

    };
    const closeVid7Handler = () => {
      setIsVid7Clicked(false)
  };
  const vid8ClickHandler = () => {
    if(allStateFalse)
        {setIsVid8Clicked(true);}

};
const closeVid8Handler = () => {
  setIsVid8Clicked(false)
};

const vid9ClickHandler = () => {
 if(allStateFalse)    
    {setIsVid9Clicked(true);}

};
const closeVid9Handler = () => {
  setIsVid9Clicked(false)
};

const vid10ClickHandler = () => {
if(allStateFalse)
    {setIsVid10Clicked(true);}

};
const closeVid10Handler = () => {
  setIsVid10Clicked(false)
};

const vid11ClickHandler = () => {
    if(allStateFalse)
        {setIsVid11Clicked(true);}
    
    };
    const closeVid11Handler = () => {
      setIsVid11Clicked(false);
    };

return <Fragment>
<Card onClick={vid1ClickHandler} className='coursecard' title="welcome">
    
    {isVid1Clicked && <div>
    <ReactPlayer className='video-one' url={aerialLifts[0].video} controls></ReactPlayer>
    <br/><p>{aerialLifts[0].q1}</p> <input type='checkbox'/><br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid1Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid2ClickHandler} className='coursecard' title="Introduction">
    
    {isVid2Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLifts[1].video} controls></ReactPlayer>
    <form style={{ marginTop: '2rem' }}><p><b>{aerialLifts[1].q1[1]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[1].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q1[3]}</label><br/>
    <p><b>{aerialLifts[1].q2[1]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[1].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q2[4]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q2[5]}</label><br/>    </form><br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid2Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid3ClickHandler} className='coursecard' title="Equipment Requirements and Standards">
    {isVid3Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLifts[2].video} controls></ReactPlayer>
    <form>
    <p><b>{aerialLifts[2].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[2].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q1[4]}</label><br/>
    <p><b>{aerialLifts[2].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[2].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid3Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid4ClickHandler} className='coursecard' title="Safe Use of Aerial Lifts">
{isVid4Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[3].video} controls></ReactPlayer>
<form>
<p><b>{aerialLifts[3].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[3].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[4]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[5]}</label><br/>

    <p><b>{aerialLifts[3].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[3].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q2[4]}</label><br/>
</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid4Handler}>Next</Button> </div>}</Card>

<Card onClick={vid5ClickHandler} className='coursecard' title="Hazards Associated with Aerial Lifts">
{isVid5Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[4].video} controls></ReactPlayer>
<form>
<p><b>{aerialLifts[4].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[4].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[4].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[4].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[4].q1[4]}</label><br/>
</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid5Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid6ClickHandler} className='coursecard' title="Training Requirements">
{isVid6Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[5].video} controls></ReactPlayer>
<form>
<p><b>{aerialLifts[5].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[5].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q1[4]}</label><br/>
<p><b>{aerialLifts[5].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[5].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q2[4]}</label><br/>
</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid6Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid7ClickHandler} className='coursecard' title="Before Operating Aerial Lifts 1">
{isVid7Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[6].video} controls></ReactPlayer>
<form>

    <input type='checkbox'/><label>{aerialLifts[6].q1[0]}</label><br/>

</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid7Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid8ClickHandler} className='coursecard' title="Before Operating Aerial Lifts 2">
{isVid8Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[7].video} controls></ReactPlayer>
<form>
<p><b>{aerialLifts[7].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[7].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[7].q1[2]}</label><br/>

<p><b>{aerialLifts[7].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[7].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[7].q2[2]}</label><br/>

</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid8Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid9ClickHandler} className='coursecard' title="While Operating Aerial Lifts 1">
{isVid9Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[8].video} controls></ReactPlayer>
<form>

    <input type='checkbox'/><label>{aerialLifts[8].q1[0]}</label><br/>

</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid9Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid10ClickHandler} className='coursecard' title="While Operating Aerial Lifts 2">
{isVid10Clicked && <div> 
<ReactPlayer className='video-one' url={aerialLifts[9].video} controls></ReactPlayer>
<form>
<p><b>{aerialLifts[9].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[9].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q1[4]}</label><br/>
<p><b>{aerialLifts[9].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[9].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q2[4]}</label><br/>
</form>
<br/><br/>
<Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid10Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid11ClickHandler} className='coursecard' title="Final Knowledge Check">
    {isVid11Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLifts[10].video} controls></ReactPlayer>
    <form style={{ marginTop: '2rem' }}>
    
    <p><b>1. {aerialLifts[1].q1[1]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[1].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q1[3]}</label><br/>
    
    <p><b>2. {aerialLifts[1].q2[1]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[1].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q2[4]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[1].q2[5]}</label><br/> 

    <p><b>3. {aerialLifts[2].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[2].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q1[4]}</label><br/>
    
    <p><b>4. {aerialLifts[2].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[2].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[2].q2[4]}</label><br/>   
    
    <p><b>5. {aerialLifts[3].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[3].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[4]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q1[5]}</label><br/>

    <p><b>6. {aerialLifts[3].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[3].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[3].q2[4]}</label><br/>

    <p><b>7. {aerialLifts[4].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[4].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[4].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[4].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[4].q1[4]}</label><br/>

    <p><b>8. {aerialLifts[5].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[5].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q1[4]}</label><br/>
    
    <p><b>9. {aerialLifts[5].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[5].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[5].q2[4]}</label><br/>
    
    <p><b>10. {aerialLifts[7].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[7].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[7].q1[2]}</label><br/>

    <p><b>11. {aerialLifts[7].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[7].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[7].q2[2]}</label><br/>

    <p><b>12. {aerialLifts[9].q1[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[9].q1[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q1[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q1[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q1[4]}</label><br/>
    
    <p><b>13. {aerialLifts[9].q2[0]}</b></p>
    <input type='checkbox'/><label>{aerialLifts[9].q2[1]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q2[2]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q2[3]}</label><br/>
    <input type='checkbox'/><label>{aerialLifts[9].q2[4]}</label><br/>

    </form><br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid11Handler}>Next</Button> </div>}
    </Card>
</Fragment>


}

export default AerialLifts;