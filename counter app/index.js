let count = 0;

const countEl = document.getElementById("count");
const saveEl = document.getElementById("save-text");

const increment = () =>{
    count = count + 1;
    countEl.textContent = count;
    console.log(count);
}

const save = () => {
    let saveCount = count + " - ";
    saveEl.textContent += saveCount;
    countEl.textContent = 0;
    count = 0;
}