import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as html2canvas from 'html2canvas';
import * as Bowser from "bowser";

const handleClick = () => {

    const browser = Bowser.getParser(window.navigator.userAgent);

    document.write(`The current browser name is "${browser.getBrowserName()}"<br>`);

    const browserName = browser.getBrowserName();

    if (browserName === 'Chrome' 
    || browserName === 'Opera'){
    // || browserName == 'NAVER Whale Browser'){
        let body = document.querySelector('body');

        html2canvas(body).then(canvas => {
            
            canvas.toBlob((blob) => {
                saveAs(blob, "result.png");
            });
            
        });
    } else {
        // Microsoft Edge
        // Internet Explorer
        document.write('pleas use another brower! ex) Chrome');
    }

    // // 결과 캡처 버튼 이벤트 함수
    // const captureButtonClick = () => {
    //     html2canvas(document.querySelector("#root"), {
    //         allowTaint: true,
    //         useCORS: true
    //     }).then(canvas => {
    //         let download = document.getElementById("captureDownload");
    //         download.href = canvas
    //             .toDataURL("image/png")
    //             .replace("image/png", "image/octet-stream");
    //         download.download = "점심 판결 결과.png";
    //         download.click();
    //     });
    // };
}

const CheckBrowser = () => {
    return (
        <div>      
            <h1>hello!</h1>
            <button onClick={handleClick}>Click me!</button>
            {/* <script> location.href='intent://www.jwo29.github.io/react-app/#Intent;scheme=http;package=com.android.chrome;end' </script> */}
        </div>
    );
}

export default CheckBrowser;