import React from 'react';
import { saveAs } from 'file-saver';
import * as html2canvas from 'html2canvas';
import * as Bowser from "bowser";

const handleClick = () => {
    const browser = Bowser.getParser(window.navigator.userAgent);

    document.write(`The current browser name is "${browser.getBrowserName()}"`);

    const browserName = browser.getBrowserName();
    const browserVersion = browser.getBrowserVersion();

    document.write(browserName);
    document.write(browserVersion);

    if(browserName === 'Microsoft Edge'){
        document.write('sorry, Edge is not available');
    } else if(browserName === 'Chrome') {
        let body = document.querySelector('body');

        html2canvas(body).then(canvas => {
            
            canvas.toBlob((blob) => {
                saveAs(blob, "result.png");
            });
            
        });
    } else if(browserName == 'NAVER Whale Browser'){
        let body = document.querySelector('body');

        html2canvas(body).then(canvas => {
            
            canvas.toBlob((blob) => {
                saveAs(blob, "result.png");
            });
            
        });
    } else {
        document.write('pleas use another brower! ex Chrome');
    }
}

const CheckBrowser = () => {
    return (
        <div>      
            <h1>hello!</h1>
            <p className="result"></p>
            <button onClick={handleClick}> 
                Detect browser 
            </button>
        </div>
    );
}

export default CheckBrowser;