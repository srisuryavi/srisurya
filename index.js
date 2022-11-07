increase.addEventListener("click", () => {
    result.innerHTML++;
    color();
    increase.addEventListener("click", () => {
        result.innerHTML++;
        color();
});