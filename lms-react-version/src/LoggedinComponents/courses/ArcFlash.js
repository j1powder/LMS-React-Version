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

/*     const sectionReducer = (state, action) => {
 return {
    isOpen: false,
 }
    } */
    //const [sectionState, dispatchSection] = useReducer(sectionReducer, {isOpen: false,});


let allStateFalse; 
if(isVid1Clicked === false && 
    isVid2Clicked === false && 
    isVid3Clicked === false && 
    isVid4Clicked === false && 
    isVid5Clicked === false && 
    isVid6Clicked === false && 
    isVid7Clicked === false &&
    isVid8Clicked === false ){
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
  if (allStateFalse )
      {setIsVid3Clicked(true);}

    };
    const closeVid3Handler = () => {
      setIsVid3Clicked(false)
  };
    
    const vid4ClickHandler = () => {
if(allStateFalse ) 
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
if(allStateFalse )
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


const arcflash = [
    {video:'https://player.vimeo.com/video/519129758', 
    title: 'Welcome', 
    q1: "I am ready to proceed", 
   },
   {
    video: 'https://player.vimeo.com/video/745849954?h=18f0daeca1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Introduction',
    q1: ['The release of an arc flash can be ______ or hotter.',
    'A. 10,000 degrees F',
    'B. 2,000 degrees F',
    'C. 5,000 degrees F',
    'D. 8,000 degrees F'],
    q2: [ 'Arc flash can occur due to all the following EXCEPT:',
        'A. Dust',
        'B. Corrosion',
        'C. Condensation',
        'D. Wind']
   },
   {video: 'https://player.vimeo.com/video/746871415?h=990ef391e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Injuries and First Aid',
    q1: ['True or False: The heat of a flash can reach up to 45,000 degrees F.',
        'A. True',
        'B. False'],
    q2: [ 'A sound blast can reach up to ____ decibels?',   
        'A. 200 dB',
        'B. 140 dB',
        'C. 95 dB',
        'D. 35 dB']},

   {video: 'https://player.vimeo.com/video/746885423?h=5ad4e56f58&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Protection and Prevention',
    q1: [ '_____ created the approach/protection boundaries.',
    'A. NFPA',
    'B. EPA',
    'C. OSHA',
    'D. CDC'],
    q2: ['The following are protective measures EXCEPT:',
        'A. De-energizing circuits',
        'B. Ventilation systems',
        'C. Insulation',
        'D. Ground Fault Circuit Interrupters (GFCI)']
    },

   {video: 'https://player.vimeo.com/video/746927460?h=80ef69cef4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Lockout & Tagout',
    q1: ['True or False: The best way to control arc flash hazards is to Lockout/Tagout',
        'A. True',
        'B. False'],
    q2: ['The basic steps to LOTO include all the following EXCEPT:',   
         'A. Identify the equipment source of power',
         'B. Calling in a LOTO specialist to perform the job',
         'C. Apply locks and tags to keep the power sources disconnected',
         'D. Confirm that the equipment is completely de-energized']
    },

   {video: 'https://player.vimeo.com/video/746933504?h=146985b893&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Personal Protective Equipment',
    q1: ['True or False: Fire Retardant clothing is the best kind of protective clothing',
        'A. True',
        'B. False'],
    q2: ['A PPE program must be implemented when?',
        'A. After PPE is used',
        'B. When PPE is picked out',
        'C. When cleaning PPE',
        'D. When PPE is used']
    },

   {video: 'https://player.vimeo.com/video/746941479?h=99f65aa3b6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Training',
    q1: ['True or False: A qualified person does not have to understand or demonstrate knowledge of arc flash hazards.',
        'A. True',
        'B. False'],
    q2: ['What training can employees take?',
    'A. NFPA 60E',
    'B. NFPA 70E',
    'C. None is required',
    'D. OSHA training']
    },

   {video: 'https://player.vimeo.com/video/455943382?h=2d45027c8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    title: 'Final Knowledge Check',
    q1: ['The release of an arc flash can be ______ or hotter.',
    'A. 10,000 degrees F',
    'B. 2,000 degrees F',
    'C. 5,000 degrees F',
    'D. 8,000 degrees F'],
    q2: ['Arc flash can occur due to all the following EXCEPT:',
    'A. Dust',
    'B. Corrosion',
    'C. Condensation',
    'D. Wind'],
    q3: ['True or False: The heat of a flash can reach up to 45,000 degrees F.',
    'A. True',
    'B. False'],
    q4: ['A sound blast can reach up to ____ decibels?',   
    'A. 200 dB',
    'B. 140 dB',
    'C. 95 dB',
    'D. 35 dB'],
    q5: ['_____ created the approach/protection boundaries.',
    'A. NFPA',
    'B. EPA',
    'C. OSHA',
    'D. CDC'],
    q6: ['The following are protective measures EXCEPT:',
    'A. De-energizing circuits',
    'B. Ventilation systems',
    'C. Insulation',
    'D. Ground Fault Circuit Interrupters (GFCI)'],
    q7: ['True or False: The best way to control arc flash hazards is to Lockout/Tagout',
    'A. True',
    'B. False'],
    q8: ['The basic steps to LOTO include all the following EXCEPT:',   
    'A. Identify the equipment source of power',
    'B. Calling in a LOTO specialist to perform the job',
    'C. Apply locks and tags to keep the power sources disconnected',
    'D. Confirm that the equipment is completely de-energized'],
    q9: ['True or False: Fire Retardant clothing is the best kind of protective clothing',
    'A. True',
    'B. False'],
    q10: ['A PPE program must be implemented when?',
    'A. After PPE is used',
    'B. When PPE is picked out',
    'C. When cleaning PPE',
    'D. When PPE is used'],
    q11: ['True or False: A qualified person does not have to understand or demonstrate knowledge of arc flash hazards.',
    'A. True',
    'B. False'],
    q12: ['What training can employees take?',
        'A. NFPA 60E',
        'B. NFPA 70E',
        'C. None is required',
        'D. OSHA training'],
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
    <p><b>{arcflash[1].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[1].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q1[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q1[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q1[4]}</label><br/>
    <p><b>{arcflash[1].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[1].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid2Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid3ClickHandler} className="coursecard" title='Injuries and First Aid'>
{isVid3Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[2].video} controls></ReactPlayer>
    <form>
    
    <p><b>{arcflash[2].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[2].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q1[2]}</label><br/>

    <p><b>{arcflash[2].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[2].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid3Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid4ClickHandler} className="coursecard" title='Protection and Prevention'>
{isVid4Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[3].video} controls></ReactPlayer>
    <form>
    <p><b>{arcflash[3].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[3].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q1[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q1[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q1[4]}</label><br/>
    <p><b>{arcflash[3].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[3].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid4Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid5ClickHandler} className="coursecard" title='Lockout & Tagout'>
{isVid5Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[4].video} controls></ReactPlayer>
    <form>
    <p><b>{arcflash[4].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[4].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q1[2]}</label><br/>

    <p><b>{arcflash[4].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[4].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid5Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid6ClickHandler} className="coursecard" title='Personal Protective Equipment'>
{isVid6Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[5].video} controls></ReactPlayer>
    <form>
    <p><b>{arcflash[5].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[5].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q1[2]}</label><br/>

    <p><b>{arcflash[5].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[5].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid6Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid7ClickHandler} className="coursecard" title='Training'>
{isVid7Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[6].video} controls></ReactPlayer>
    <form>
    <p><b>{arcflash[6].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[6].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q1[2]}</label><br/>

    <p><b>{arcflash[6].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[6].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid7Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid8ClickHandler} className="coursecard" title="Final Knowledge Check">
{isVid8Clicked && <div> 
    <ReactPlayer className='video-one' url={arcflash[7].video} controls></ReactPlayer>
    <form>
    <p><b>1. {arcflash[1].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[1].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q1[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q1[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q1[4]}</label><br/>
    
    <p><b>2. {arcflash[1].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[1].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[1].q2[4]}</label><br/> 

    <p><b>3. {arcflash[2].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[2].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q1[2]}</label><br/>

    <p><b>4. {arcflash[2].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[2].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[2].q2[4]}</label><br/>

    <p><b>5. {arcflash[3].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[3].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q1[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q1[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q1[4]}</label><br/>
    <p><b>6. {arcflash[3].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[3].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[3].q2[4]}</label><br/> 

    <p><b>7. {arcflash[4].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[4].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q1[2]}</label><br/>

    <p><b>8. {arcflash[4].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[4].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[4].q2[4]}</label><br/> 

    <p><b>9. {arcflash[5].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[5].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q1[2]}</label><br/>

    <p><b>10. {arcflash[5].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[5].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[5].q2[4]}</label><br/>

    <p><b>11. {arcflash[6].q1[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[6].q1[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q1[2]}</label><br/>

    <p><b>12. {arcflash[6].q2[0]}</b></p>
    <input type='checkbox'/><label>{arcflash[6].q2[1]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q2[2]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q2[3]}</label><br/>
    <input type='checkbox'/><label>{arcflash[6].q2[4]}</label><br/> 
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid8Handler}>Next</Button> </div>}
</Card>


</Fragment>
}

export default ArcFlash;