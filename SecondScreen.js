import React, { useState } from "react";
import "./SecondCss.css";
import RandomNumber from '../components/random';

const SecondScreen = props => {

  let [value, setValue] = useState(false);

  return (
    <div className="SecondScreen">
      <div className="SecondScreen_foodSection">
        <div className="SecondScreen_foodPicture">
          <h1>음식그림</h1>
        </div>
      </div>
      <div className="SecondScreen_descriptionSection">
        <div className="SecondScreen_description">
          <h2>꽝꽝꽝 냥냥법 제 3장에 의거 어쩌고저쩌고 이거 먹어</h2>
          <div className="SecondScreen_result_button">
            <RandomNumber title="항소하기" number={value} onUpdate={() => setValue(value = Math.round(Math.random()*100))}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
