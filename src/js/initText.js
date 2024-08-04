export default function initText(changedBlocks) {
    changedBlocks.forEach((e) => {
        const initText = localStorage.getItem(e.id);
        if (initText) e.innerText = initText;
    });
}