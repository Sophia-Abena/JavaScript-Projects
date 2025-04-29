let myLinks = [];
const inputEl = document.getElementById("input-el");
const saveInputButtonEl = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const getLinksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))


//Function that add a link to the list
const renderLink = () =>{
    let listItems = ""
    for (let i = 0; i < myLinks.length; i++) {
        listItems += 
            `<li>
                <a target='_blank' href='${myLinks[i]}'>
                    ${myLinks[i]}
                </a>
            </li>`
    };
    ulEl.innerHTML = listItems ; 
}

//Function that takes the website link from the input field and add it to the the list
saveInputButtonEl.addEventListener('click', function (e){
    e.preventDefault();
    if (inputEl.value.trim() !== "")
    myLinks.push(inputEl.value);
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    inputEl.value = "";
    renderLink();
})

//Function to load links from local storage
if (getLinksFromLocalStorage) {
    myLinks = getLinksFromLocalStorage;
    renderLink(); 
}

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        const currentUrl = tabs[0].url;

        //Load existing links from localStorage if not already loaded
        if (!myLinks || !Array.isArray(myLinks)) {
            const storedLinks = localStorage.getItem('myLinks');
            myLinks = storedLinks ? JSON.parse(storedLinks) : [];
        }

        // Check for duplicates before adding
        if (!myLinks.includes(currentUrl)) {
            myLinks.push(currentUrl);
            localStorage.setItem('myLinks', JSON.stringify(myLinks));
            renderLink();
        } else {
            alert("This link already exists.");
        
        }
    });
});

//Function to delete all link saved
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLinks = [];
    renderLink();
})