import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Card} from "react-bootstrap";
import "./Box.css"
import "./style.scss"

function card(){
    // connect database
    const cardInfo=[
        {title:"Mission 1", text:"Mission to Moon"},
        {title:"Mission 2", text:"Recent Mission"},
        {title:"Mission 3", text:"Black Hole"},
        {title:"Mission 4", text:"Interstellar"},
        {title:"Mission 5", text:"Investigation Pluto"},
        {title:"Mission 6", text:"Mission To Mars"},
        {title:"Mission 7", text:"Aliens Spotted"},
        {title:"Mission 8", text:"Home Sweet Home"}
    ]

    // loop through the database and make a card
    const renderCard=(card,index)=>{
        return(
            <div class="col-3">
                <Card style={{ width: '18rem' }} key={index} className="box">
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    // return all the card
    return(
         <div className="content">
            <div className="row">
                <div className="Welcome text-white"  >
                    <h1 className="display-1">Welcome To User Log!</h1>
                </div>
                {/*  */}
                {cardInfo.map(renderCard)}
            </div>
        </div>
    )
}
export default card;
// <button variant="primary">Go somewhere</button>