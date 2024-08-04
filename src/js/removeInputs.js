export default function removeInputs(inputs) {
    inputs.forEach((e) => {
        const text = e.value,
              elementId = e.getAttribute('data-id');

        if (text) localStorage.setItem(elementId, text);
        e.remove();
    });

    inputs = [];
}