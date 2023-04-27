import { Fragment, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ReactPlayer from 'react-player';
import aerialLiftsVideos from './AerialLiftVideos';
import './AerialLifts.css';

const AerialLiftsNew = (props) => {
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

    const [score, setScore] = useState(0);
    const [sectionScore, setSectionScore] = useState('')

    const sectionHandler = (isCorrect) => {
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
        return Math.round((score / 13) * 100);
       }
 let allStateIsFalse;
 if(isVid1Clicked === false && 
    isVid2Clicked === false && 
    isVid3Clicked === false && 
    isVid4Clicked === false && 
    isVid5Clicked === false && 
    isVid6Clicked === false && 
    isVid7Clicked === false &&
    isVid8Clicked === false &&
    isVid9Clicked === false &&
    isVid10Clicked === false &&
    isVid11Clicked === false){
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
      setIsVid2Clicked(false);
      setSectionScore('');

  }
    
    const vid3ClickHandler = () => {
  if (allStateIsFalse)
      {setIsVid3Clicked(true);}
    };
    const closeVid3Handler = () => {
      setIsVid3Clicked(false)
      setSectionScore('');
  };
    
    const vid4ClickHandler = () => {
if(allStateIsFalse) 
  {setIsVid4Clicked(true);}

    };
    const closeVid4Handler = () => {
      setIsVid4Clicked(false)
      setSectionScore('');
  };

    const vid5ClickHandler = () => {
      if(allStateIsFalse)
          {setIsVid5Clicked(true);}

    };
    const closeVid5Handler = () => {
      setIsVid5Clicked(false)
      setSectionScore('');
  };
    
    const vid6ClickHandler = () => {
if(allStateIsFalse)
  {setIsVid6Clicked(true);}

    };
    const closeVid6Handler = () => {
      setIsVid6Clicked(false)
      setSectionScore('');
  };

  const vid7ClickHandler = () => {
  if(allStateIsFalse)
      {setIsVid7Clicked(true);}

  };
  const closeVid7Handler = () => {
    setIsVid7Clicked(false)
    setSectionScore('');
};
const vid8ClickHandler = () => {
  if(allStateIsFalse){
    setIsVid8Clicked(true);}
};
const closeVid8Handler = () => {
setIsVid8Clicked(false)
};

const vid9ClickHandler = () => {
    if(allStateIsFalse){
      setIsVid9Clicked(true);}
  };
  const closeVid9Handler = () => {
  setIsVid9Clicked(false)
  };

  const vid10ClickHandler = () => {
    if(allStateIsFalse){
      setIsVid10Clicked(true);}
  };
  const closeVid10Handler = () => {
  setIsVid10Clicked(false)
  };

  const vid11ClickHandler = () => {
    if(allStateIsFalse){
      setIsVid11Clicked(true);}
  };
  const closeVid11Handler = () => {
  setIsVid11Clicked(false)
  };




console.log(props.loadData)


return <Fragment>
<Card onClick={vid1ClickHandler} className="coursecard" title='Welcome'>    
    {isVid1Clicked && <div>
    <ReactPlayer className='video-one' url={aerialLiftsVideos[0].video}  controls></ReactPlayer>
    <br/><p>I am ready to proceed</p><input type='checkbox'/><br/> <br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid1Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid2ClickHandler} className="coursecard" title='Introduction'>
{isVid2Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[1].video} controls></ReactPlayer>
    <form >
    <p><b>{props.loadData[1][0].questionText}</b></p>
    {props.loadData[1][0].answerOptions.map((item) => (
    <div><input name='q1' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <p><b>{props.loadData[1][1].questionText}</b></p>
    {props.loadData[1][1].answerOptions.map((item) => (
    <div><input name='q2' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <h3>{sectionScore}</h3>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid2Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid3ClickHandler} className="coursecard" title='Equipment Requirement and Standards'>
{isVid3Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[2].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[1][2].questionText}</b></p>
    {props.loadData[1][2].answerOptions.map((item) => (
    <div><input name='q3' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))} 
    <p><b>{props.loadData[1][3].questionText}</b></p>
    {props.loadData[1][3].answerOptions.map((item) => (
    <div><input name='q4' type="radio" onClick={() => sectionHandler(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid3Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid4ClickHandler} className="coursecard" title='Safe Use of Aerial Lifts'>
{isVid4Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[3].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[1][4].questionText}</b></p>
    {props.loadData[1][4].answerOptions.map((item) => (
    <div><input name='q5' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[1][5].questionText}</b></p>
    {props.loadData[1][5].answerOptions.map((item) => (
    <div><input name='q6' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid4Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid5ClickHandler} className="coursecard" title='Hazards Associated with Aerial Lifts'>
{isVid5Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[4].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[1][6].questionText}</b></p>
    {props.loadData[1][6].answerOptions.map((item) => (
    <div><input name='q7' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}


    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid5Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid6ClickHandler} className="coursecard" title='Training Requirements'>
{isVid6Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[5].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[1][7].questionText}</b></p>
    {props.loadData[1][7].answerOptions.map((item) => (
    <div><input name='q9' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[1][8].questionText}</b></p>
    {props.loadData[1][8].answerOptions.map((item) => (
    <div><input name='q10' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid6Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid7ClickHandler} className="coursecard" title='Before Operating Aerial Lifts 1'>
{isVid7Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[6].video} controls></ReactPlayer>
    <form>
    <br/><p>I am ready to proceed</p><input type='checkbox'/><br/> <br/>

    
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid7Handler}>Next</Button> </div>}
</Card>
<Card onClick={vid8ClickHandler} className="coursecard" title='Before Operating Aerial Lifts 2'>
{isVid8Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[7].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[1][9].questionText}</b></p>
    {props.loadData[1][9].answerOptions.map((item) => (
    <div><input name='q11' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[1][10].questionText}</b></p>
    {props.loadData[1][10].answerOptions.map((item) => (
    <div><input name='q12' type="radio" onClick={() => sectionHandler(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid8Handler}>Next</Button> </div>}
</Card>
<Card onClick={vid9ClickHandler} className="coursecard" title='While Operating Aerial Lifts 1'>
{isVid9Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[8].video} controls></ReactPlayer>
    <form>
    <br/><p>I am ready to proceed</p><input type='checkbox'/><br/> <br/>


    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid9Handler}>Next</Button> </div>}
</Card>
<Card onClick={vid10ClickHandler} className="coursecard" title='While Operating Aerial Lifts 2'>
{isVid10Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[9].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[1][11].questionText}</b></p>
    {props.loadData[1][11].answerOptions.map((item) => (
    <div><input name='q11' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[1][12].questionText}</b></p>
    {props.loadData[1][12].answerOptions.map((item) => (
    <div><input name='q12' type="radio" onClick={() => sectionHandler(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid10Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid11ClickHandler} className="coursecard" title="Final Knowledge Check">
{isVid11Clicked && <div> 
    <ReactPlayer className='video-one' url={aerialLiftsVideos[10].video} controls></ReactPlayer>
    <form>
    <p><b>1. {props.loadData[1][0].questionText}</b></p>
    {props.loadData[1][0].answerOptions.map((item) => (
    <div><input name='final1' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    
    <p><b>2. {props.loadData[1][1].questionText}</b></p>
    {props.loadData[1][1].answerOptions.map((item) => (
    <div><input name='final2' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

   <p><b>3. {props.loadData[1][2].questionText}</b></p>
    {props.loadData[1][2].answerOptions.map((item) => (
    <div><input name='final3' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

   <p><b>4. {props.loadData[1][3].questionText}</b></p>
    {props.loadData[1][3].answerOptions.map((item) => (
    <div><input name='final4' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>5. {props.loadData[1][4].questionText}</b></p>
    {props.loadData[1][4].answerOptions.map((item) => (
    <div><input name='final5' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 
    
    <p><b>6. {props.loadData[1][5].questionText}</b></p>
    {props.loadData[1][5].answerOptions.map((item) => (
    <div><input name='final6' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>7. {props.loadData[1][6].questionText}</b></p>
    {props.loadData[1][6].answerOptions.map((item) => (
    <div><input name='final7' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

    <p><b>8. {props.loadData[1][7].questionText}</b></p>
    {props.loadData[1][7].answerOptions.map((item) => (
    <div><input name='final8' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>9. {props.loadData[1][8].questionText}</b></p>
    {props.loadData[1][8].answerOptions.map((item) => (
    <div><input name='final9' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>10. {props.loadData[1][9].questionText}</b></p>
    {props.loadData[1][9].answerOptions.map((item) => (
    <div><input name='final10' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>11. {props.loadData[1][10].questionText}</b></p>
    {props.loadData[1][10].answerOptions.map((item) => (
    <div><input name='final11' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>12. {props.loadData[1][11].questionText}</b></p>
    {props.loadData[1][11].answerOptions.map((item) => (
    <div><input name='final12' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
<p><b>13. {props.loadData[1][12].questionText}</b></p>
    {props.loadData[1][12].answerOptions.map((item) => (
    <div><input name='final13' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <h3>Your Score {totalScore()}%</h3>

    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid11Handler}>Next</Button> </div>}
</Card>


</Fragment>
}

export default AerialLiftsNew;