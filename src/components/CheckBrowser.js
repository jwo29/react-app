import React from 'react';
import { saveAs } from 'file-saver';
import * as html2canvas from 'html2canvas';
import * as Bowser from "bowser";

const handleClick = () => {
    const browser = Bowser.getParser(window.navigator.userAgent);

    console.log(`The current browser name is "${browser.getBrowserName()}"`);
    console.log(browser.getBrowser());
}

const CheckBrowser = () => {
    return (
        <div>      
            <h1>hello!</h1>
            <button onClick={handleClick}> 
                Detect browser 
            </button>
        </div>
    );
}

export default CheckBrowser;