import React from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

// FileSaver.saveAs(blob, optional DOMString filename, optional Object { autoBom })

const handleClick = () => {
    // html2canvas(document.querySelector('#capture')).then(canvas => {
    //     canvas.toBlob(blob => {
    //         window.saveAs(blob, "result.png");
    //     });
        
    // });

    let body = document.querySelector('body');

    html2canvas(body).then(canvas => {
        canvas.toBlob(blob => {
            saveAs(blob, "result.png");
        });
    });              
};


const CopyResult = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <button id="capture" value="capture" onClick={handleClick}/>
        </div>
    );
};

export default CopyResult;