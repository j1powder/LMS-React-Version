import { Fragment, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ReactPlayer from 'react-player';
import { videos } from './arcflashquestions';
import './AerialLifts.css';

const ArcFlash = (props) => {
    const [isVid1Clicked, setIsVid1Clicked] = useState(false);
    const [isVid2Clicked, setIsVid2Clicked] = useState(false);
    const [isVid3Clicked, setIsVid3Clicked] = useState(false);
    const [isVid4Clicked, setIsVid4Clicked] = useState(false);
    const [isVid5Clicked, setIsVid5Clicked] = useState(false);
    const [isVid6Clicked, setIsVid6Clicked] = useState(false);
    const [isVid7Clicked, setIsVid7Clicked] = useState(false);
    const [isVid8Clicked, setIsVid8Clicked] = useState(false);
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
        return Math.round((score / 12) * 100);
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




console.log(props.loadData)


return <Fragment>
<Card onClick={vid1ClickHandler} className="coursecard" title='Welcome'>    
    {isVid1Clicked && <div>
    <ReactPlayer className='video-one' url={videos[0].video}  controls></ReactPlayer>
    <br/><p>I am ready to proceed</p><input type='checkbox'/><br/> <br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid1Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid2ClickHandler} className="coursecard" title='Introduction'>
{isVid2Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[1].video} controls></ReactPlayer>
    <form >
    <p><b>{props.loadData[0][0].questionText}</b></p>
    {props.loadData[0][0].answerOptions.map((item) => (
    <div><input name='q1' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <p><b>{props.loadData[0][1].questionText}</b></p>
    {props.loadData[0][1].answerOptions.map((item) => (
    <div><input name='q2' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    </form>
    <h3>{sectionScore}</h3>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid2Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid3ClickHandler} className="coursecard" title='Injuries and First Aid'>
{isVid3Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[2].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[0][2].questionText}</b></p>
    {props.loadData[0][2].answerOptions.map((item) => (
    <div><input name='q3' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))} 
    <p><b>{props.loadData[0][3].questionText}</b></p>
    {props.loadData[0][3].answerOptions.map((item) => (
    <div><input name='q4' type="radio" onClick={() => sectionHandler(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid3Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid4ClickHandler} className="coursecard" title='Protection and Prevention'>
{isVid4Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[3].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[0][4].questionText}</b></p>
    {props.loadData[0][4].answerOptions.map((item) => (
    <div><input name='q5' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[0][5].questionText}</b></p>
    {props.loadData[0][5].answerOptions.map((item) => (
    <div><input name='q6' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid4Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid5ClickHandler} className="coursecard" title='Lockout & Tagout'>
{isVid5Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[4].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[0][6].questionText}</b></p>
    {props.loadData[0][6].answerOptions.map((item) => (
    <div><input name='q7' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[0][7].questionText}</b></p>
    {props.loadData[0][7].answerOptions.map((item) => (
    <div><input name='q8' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid5Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid6ClickHandler} className="coursecard" title='Personal Protective Equipment'>
{isVid6Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[5].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[0][8].questionText}</b></p>
    {props.loadData[0][8].answerOptions.map((item) => (
    <div><input name='q9' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[0][9].questionText}</b></p>
    {props.loadData[0][9].answerOptions.map((item) => (
    <div><input name='q10' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid6Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid7ClickHandler} className="coursecard" title='Training'>
{isVid7Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[6].video} controls></ReactPlayer>
    <form>
    <p><b>{props.loadData[0][10].questionText}</b></p>
    {props.loadData[0][10].answerOptions.map((item) => (
    <div><input name='q11' type="radio" onClick={() => sectionHandler(item.isCorrect)} />
    <label>{item.answerText}</label></div>
    ))}

<p><b>{props.loadData[0][11].questionText}</b></p>
    {props.loadData[0][11].answerOptions.map((item) => (
    <div><input name='q12' type="radio" onClick={() => sectionHandler(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    <h3>{sectionScore}</h3>
    </form>
    <br/><br/>
    <Button style={{backgroundColor:'gray', border: 'black'}} onClick={closeVid7Handler}>Next</Button> </div>}
</Card>

<Card onClick={vid8ClickHandler} className="coursecard" title="Final Knowledge Check">
{isVid8Clicked && <div> 
    <ReactPlayer className='video-one' url={videos[7].video} controls></ReactPlayer>
    <form>
    <p><b>1. {props.loadData[0][0].questionText}</b></p>
    {props.loadData[0][0].answerOptions.map((item) => (
    <div><input name='final1' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}
    
    <p><b>2. {props.loadData[0][1].questionText}</b></p>
    {props.loadData[0][1].answerOptions.map((item) => (
    <div><input name='final2' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

   <p><b>3. {props.loadData[0][2].questionText}</b></p>
    {props.loadData[0][2].answerOptions.map((item) => (
    <div><input name='final3' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

   <p><b>4. {props.loadData[0][3].questionText}</b></p>
    {props.loadData[0][3].answerOptions.map((item) => (
    <div><input name='final4' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>5. {props.loadData[0][4].questionText}</b></p>
    {props.loadData[0][4].answerOptions.map((item) => (
    <div><input name='final5' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 
    
    <p><b>6. {props.loadData[0][5].questionText}</b></p>
    {props.loadData[0][5].answerOptions.map((item) => (
    <div><input name='final6' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>7. {props.loadData[0][6].questionText}</b></p>
    {props.loadData[0][6].answerOptions.map((item) => (
    <div><input name='final7' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

    <p><b>8. {props.loadData[0][7].questionText}</b></p>
    {props.loadData[0][7].answerOptions.map((item) => (
    <div><input name='final8' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))} 

    <p><b>9. {props.loadData[0][8].questionText}</b></p>
    {props.loadData[0][8].answerOptions.map((item) => (
    <div><input name='final9' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>10. {props.loadData[0][9].questionText}</b></p>
    {props.loadData[0][9].answerOptions.map((item) => (
    <div><input name='final10' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>11. {props.loadData[0][10].questionText}</b></p>
    {props.loadData[0][10].answerOptions.map((item) => (
    <div><input name='final11' type="radio" onClick={() => handleClick(item.isCorrect)}/>
    <label>{item.answerText}</label></div>
    ))}

<p><b>12. {props.loadData[0][11].questionText}</b></p>
    {props.loadData[0][11].answerOptions.map((item) => (
    <div><input name='final12' type="radio" onClick={() => handleClick(item.isCorrect)}/>
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