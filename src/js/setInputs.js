export default function setInputs(changedBlocks, inputs) {
    changedBlocks.forEach((e) => {
        const position = e.getBoundingClientRect(),
              maxLen = e.getAttribute('data-max'),
              newInput = document.createElement('textarea');

        newInput.classList.add('overlay_input');
        newInput.style.top = `${Number(position.top)}px`;
        newInput.style.width = `${position.width}px`;
        newInput.style.height = `${position.height}px`;
        newInput.style.left = `${position.left}px`;
        newInput.value = e.innerText;
        if (maxLen) newInput.setAttribute('maxlength', maxLen);
        newInput.setAttribute('data-id', e.id);
        document.body.appendChild(newInput);
        inputs.push(newInput);
    });
}