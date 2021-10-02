import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";


export default function PastLogs(props) {
  useEffect(() => {
    document.title = "Past Logs";
  }, []);

  let testerVariable = 0;
  let testerArray = [1, 2, 3, 4, 5]
  let [count, setCount] = useState(0);
  let [isToggled, setIsToggled] = useState(0);
  let [isColour, setColour] = useState('');
  let [isAll, setAll] = useState(1);

  // const [name, setName] = useState({firstName:'', lastName:''})
  // const [item, setItems] = useState([])
  // const addItem = () => {
  //   setItems([...item, {
  //     id: item.length, 
  //     value: Math.floor(Math.random() * 10) + 1
  //   }])
  // }

  const [showSidebar, setShowSidebar] = useState(true);

  const messages = [
    {name: 'Charizard', type: 'Fire/Flying', finalEvolution: 1},
    {name: 'Blastoise', type: 'Water', finalEvolution: 1},
    {name: 'Venusaur', type: 'Grass/Posion', finalEvolution: 1},
    {name: 'Pikachu', type: 'Electric', finalEvolution: 0},
  ]

  const lyrics = [
    {time: '0:16', type: '赤', word: 'Red 1　？', all: 1},
    {time: '0:25', type: '赤', word: 'Red 2', all: 1},
    {time: '0:31', type: '青', word: 'Blue 1', all: 1},
    {time: '1:22', type: '青', word: 'Blue 2', all: 1},
    {time: '1:53', type: '合', word: 'Mix 1', all: 1},
  ]

  const numbers = props.numbers;
  console.log(numbers)
  const listItems = numbers.map((number) => 
      <div>{number}</div>
  );


  return (
    <div className="bg">
      <div className={"sidebar" + (showSidebar ? " active" : "")}>
        <div className="header">
          <div className="title">
            <h3>Menu</h3>
            <FontAwesomeIcon
              className="hamburger"
              icon={faBars}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </div>
          <hr className="hr-heading" />
          <br />
          <input placeholder="Search..." />
        </div>
        <div className="content">
          <li>
            <img
              className="profile"
              src="https://jeffreytht.live/pic.jpg"
              alt="Jeffrey Tan"
            />
            <div className="profile-name">Dato' Seri Paduka Tan Hoe Theng</div>
          </li>
          <li>
            <img
              className="profile"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFp5R4fJ92aRg/profile-displayphoto-shrink_200_200/0/1601434863742?e=1638403200&v=beta&t=seY8c0YZzXcbMRFVJvVBv3W5TwUs2zs2zJ4v904b4h8"
              alt="Sim Jin Yi"
            />
            <div className="profile-name">
              <span>Sim Jin Yi</span>
              <br />
              <span className="typing">is typing...</span>
            </div>
          </li>
          <li>
            <img
              className="profile"
              src="https://media-exp1.licdn.com/dms/image/C5635AQF6r6mzqE5Arg/profile-framedphoto-shrink_100_100/0/1601609561042?e=1633204800&v=beta&t=PUc1uo_iXl5Hs1uapp20Q2UEoVzlNBLu1nIx9xTF2OM"
              alt="Jaclyn"
            />
            <div className="profile-name">Jaclyn Neoh Su Ying</div>
          </li>

          <li>
            <div className="profile-name" onClick={()=>setIsToggled(isToggled = 1)}>Testing</div>
          </li>

          <li>
            <div className="profile-name" onClick={()=>{setColour(isColour = ''); setAll(isAll = 1)}}>All</div>
          </li>

          <li>
            <div className="profile-name" onClick={()=> {setColour(isColour = '赤'); setAll(isAll = 0)}}>赤</div>
          </li>

          <li>
            <div className="profile-name" onClick={()=> {setColour(isColour = '青'); setAll(isAll = 0)}}>青</div>
          </li>

        </div>
      </div>

      <div className="main-content">
        <div className="console-logs">
          <div className="header">
            <h3>All</h3>
          </div>
          
          <div className="all-logs">
            <div className="log">
              <span className="date">12-12-2021 05:24</span> <br />
              <span className="author">Jeffrey:</span> Nothing
            </div>

            <div className="log">
              <span className="date">12-12-2021 05:29</span> <br />
              <span className="author">Jeffrey:</span>
              你知不知道 你知不知道， 我等到花儿也谢了 喔哦哦
            </div>

            <div className="log">
              {
                messages.map((message) =>
                <div>
                  {message.finalEvolution === isToggled ? 
                    <div><span className="author">{message.name}</span>{message.type}</div> : ''}
                </div>
                )
              }
            </div>
            
            <div className="log">
              {
                lyrics.map((lyric) =>
                <div>
                  <div>
                    
                    {/* {lyric.type === isColour ? 
                    <div><span className="date">{lyric.time}</span><br/>
                    <span className="author">{lyric.type}</span> {lyric.word}</div> : console.log(isColour)} */}

                    {lyric.all === isAll ? 
                    <div><span className="date">{lyric.time}</span><br/>
                    <span className="author">{lyric.type}</span> {lyric.word}</div> : ''}
                    {lyric.type === isColour ? 
                    <div><span className="date">{lyric.time}</span><br/>
                    <span className="author">{lyric.type}</span> {lyric.word}</div> : ''}

                  </div>
                  <br />
                </div>
                )
              }
            </div>

            <div className="log">
              {
                <div>
                  Count : {count}
                  Toggled : {testerArray[isToggled]}
                  Test : {testerVariable}
                  {/* Toggled : {isToggled === 0 ? <p> The value is 0 </p> : <p> The value is 1 </p>} */}
                </div>
              }
            </div>

            {/* <div className="log">
              {
                <button onClick={()=>setCount(count + 1)}>Count {count}</button>
              }
            </div> */}

            {/* <div className="log">
              {
                <form>
                  <input 
                    type="text" 
                    value={name.firstName} 
                    onChange={e => setName({...name, firstName: e.target.value})}
                  />
                  <input 
                    type="text" 
                    value={name.lastName} 
                    onChange={e => setName({...name, lastName: e.target.value})}
                  />     
                  <h4>Your first name is - {name.firstName}</h4>     
                  <h4>Your last name is - {name.lastName}</h4> 

                </form>                
              }
            </div> */}

            {/* <div className="log">

                <button onClick={()=>{addItem()}}>Add a number</button>
                <ul>
                  {item.map(item => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </ul>  
            
            </div> */}



          </div>
        </div>

        {/* <div className="console-logs">
          <div className="header">
            <h3>My logs</h3>
          </div>
          <div className="all-logs">
            <div className="log">
              <span className="date">12-12-2021 05:24</span> <br />
              <span className="author">Jeffrey:</span> Is time to be productive.
            </div>
            <div className="log">
              <span className="date">12-12-2021 05:29</span> <br />
              <span className="author">Jeffrey:</span>
              你知不知道 你知不知道， 我等到花儿也谢了 喔哦哦
            </div>
          </div>
          <div className="my-message">
            <button className="btn">
              <FontAwesomeIcon icon={faPaperclip} onClick={() => {}} />
            </button>
            <textarea
              className="message"
              placeholder="Type your log here..."
              type="text"
              rows={2}
            />
            <button className="btn">
              <FontAwesomeIcon icon={faPaperPlane} onClick={() => {}} />
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
}