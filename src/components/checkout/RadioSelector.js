class RadioSelector {
    paintSelectedStyle = (radioName) => {
        const radioCollection = document.getElementsByName(radioName);
        radioCollection.forEach((inputRadio) => {
            if (inputRadio.checked) {
                inputRadio.labels[0].classList.add("radio-selected");
            } else {
                inputRadio.labels[0].classList.remove("radio-selected");
            }
        });
    };
}

export default RadioSelector;
