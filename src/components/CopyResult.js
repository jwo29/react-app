import React from 'react';
import { saveAs } from 'file-saver';
import * as html2canvas from 'html2canvas';

const handleClick = () => {
    
    // if(navigator.userAgent.indexOf("Chrome") !== -1){
    //     console.log("it's chrome!")
    // }

    let body = document.querySelector('body');

    html2canvas(body).then(canvas => {
        
        canvas.toBlob((blob) => {
            saveAs(blob, "result.png");
        });
        
    });

};

const CopyResult = () => {
    return (     
        <div>
            <h1>Hello!</h1>
            <button onClick={handleClick}>capture</button>
        </div>
    );
};

export default CopyResult;