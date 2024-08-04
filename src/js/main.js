import setHeaderContent from './setHeaderContent';
import generatePDF from './generatePDF';
import setWave from './wave';
import setInputs from './setInputs';
import removeInputs from './removeInputs';
import initText from './initText';


document.addEventListener('DOMContentLoaded', () => {
    const changedBlocks = document.querySelectorAll('.changed');

    let isChangeMode = false,
          inputs = [];
    
    setHeaderContent(isChangeMode);
    setWave(isChangeMode);
    initText(changedBlocks);

    document.querySelector('#change_button').addEventListener('click', () => {
        if (!isChangeMode) {
            setInputs(changedBlocks, inputs);
            isChangeMode = true;
            setHeaderContent(isChangeMode);
        }
    });

    document.querySelector('#save_button').addEventListener('click', () => {
        if (isChangeMode) {
            removeInputs(inputs);
            initText(changedBlocks);
            isChangeMode = false;
            setHeaderContent(isChangeMode);
        }
    });
    
    document.querySelector('#pdf_button').addEventListener('click', () => {
        generatePDF(isChangeMode);
    });

    document.querySelector('#reset_button').addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
    })
});