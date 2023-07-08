const textElement = document.querySelector("p");

textElement.innerText = store.getState().mood;

document.querySelector("#happy")
    .addEventListener("click", function () {
        console.log('uhumah?',store.dispatch({ type: "happy" }));
        const mood = store.getState().mood;
        textElement.innerText = mood;
});

document.querySelector("#sad")
    .addEventListener("click", function () {
        store.dispatch({ type: "sad" });
        const mood = store.getState().mood;
        textElement.innerText = mood;
});

document.querySelector("#angry")
    .addEventListener("click", function () {
        store.dispatch({ type: "angry" });
        const mood = store.getState().mood;
        textElement.innerText = mood;
});

document.querySelector("#confused")
    .addEventListener("click", function () {
        store.dispatch({ type: "confused" });
        const mood = store.getState().mood;
        textElement.innerText = mood;
});