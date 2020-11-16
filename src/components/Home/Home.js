import React from 'react';
import { getElementError } from "@testing-library/react";

class Home extends React.Component {

    changeBackgroundColor(i) {
        if (i === 1){
            
        }
    }

    render() {
        return (
            <div className="Home">
            <div id="SquareOne" className="Square" onClick="changeBackgroundColor(1)"></div>
            <div id="SquareTwo" className="Square" onClick=""></div>
            <div id="SquareThree" className="Square" onClick=""></div>
            <div id="SquareFour" className="Square" onClick=""></div>
        </div> 
        )
    }
}
  