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
                'D. Excavation and Trenching']}
     ]; 
     const vid1ClickHandler = () => {
          if(isVid1Clicked === false && isVid2Clicked === false && isVid3Clicked === false && isVid4Clicked === false && isVid5Clicked === false && isVid6Clicked === false) 
          {setIsVid1Clicked(true);}
      };
    const closeVid1Handler = () => {
        setIsVid1Clicked(false)
    };
      
      const vid2ClickHandler = () => {
          if(isVid1Clicked === false && isVid2Clicked === false && isVid3Clicked === false && isVid4Clicked === false && isVid5Clicked === false && isVid6Clicked === false) 
          {setIsVid2Clicked(true);}
      };
      const closeVid2Handler = () => {
        setIsVid2Clicked(false)
    }
      
      const vid3ClickHandler = () => {
          if(isVid1Clicked === false && isVid2Clicked === false && isVid3Clicked === false && isVid4Clicked === false && isVid5Clicked === false && isVid6Clicked === false) 
          {setIsVid3Clicked(true);}

      };
      const closeVid3Handler = () => {
        setIsVid3Clicked(false)
    };
      
      const vid4ClickHandler = () => {
          if(isVid1Clicked === false && isVid2Clicked === false && isVid3Clicked === false && isVid4Clicked === false && isVid5Clicked === false && isVid6Clicked === false) 
          {setIsVid4Clicked(true);}

      };
      const closeVid4Handler = () => {
        setIsVid4Clicked(false)
    };

      const vid5ClickHandler = () => {
          if(isVid1Clicked === false && isVid2Clicked === false && isVid3Clicked === false && isVid4Clicked === false && isVid5Clicked === false && isVid6Clicked === false) 
          {setIsVid5Clicked(true);}

      };
      const closeVid5Handler = () => {
        setIsVid5Clicked(false)
    };
      
      const vid6ClickHandler = () => {
          if(isVid1Clicked === false && isVid2Clicked === false && isVid3Clicked === false && isVid4Clicked === false && isVid5Clicked === false && isVid6Clicked === false) 
          {setIsVid6Clicked(true);}

      };
      const closeVid6Handler = () => {
        setIsVid6Clicked(false)
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

</Fragment>


}

export default AerialLifts;