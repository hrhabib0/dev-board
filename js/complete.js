
const allButton = document.querySelectorAll('.complete-button')
let clickCount = 0;
for(let button of allButton){
    button.addEventListener('click', function(event){
        clickCount++;
        if(clickCount < 6){
            alert('first');
        }else if(clickCount === 6){
            alert('first');
            alert('second');
        }
        button.setAttribute('disabled', true);
        button.style.opacity = '0.3';
        button.style.color = 'black';
        button.style.cursor = 'not-allowed'

        // menu-number increment
        const menuNumber = document.getElementById('menu-number');
        let menuNumberElement = menuNumber.innerText;
        let convertedMenuNumberElement = parseInt(menuNumberElement);
        if(convertedMenuNumberElement > 1){
            convertedMenuNumberElement++ ;
            menuNumber.innerText = convertedMenuNumberElement;
        }
        
        // assigned-number decrement
        const assignedNumber = document.getElementById('assigned-number');
        let assignedNumberElement = parseInt(assignedNumber.innerText);
        if(assignedNumberElement > 0){
            assignedNumberElement-- ;
            assignedNumber.innerText = assignedNumberElement;
        }


        // new element append in history

        const clearHistoryDiv = document.getElementById('clear-history-div')  // get div
        const currentTime = new Date().toLocaleTimeString();    // get current time
        const parentSection = this.closest(".task-div")     // get the parent div 
        const dynamicTitle = parentSection.querySelector(".dynamic-title").innerText;   // select the tile inside parent div.
        const p = document.createElement('p');      // creat new element
        p.innerText = `You have added a task ${dynamicTitle} at ${currentTime}`     // set innertext
        clearHistoryDiv.appendChild(p);     // append child
        
        
    })
}
















// complete button js
/* const menuNumber = document.getElementById('menu-number').innerText;
let convertedMenuNumber = parseInt(menuNumber);

const completeButtonOne = document.getElementById('complete-btn-one');
completeButtonOne.addEventListener('click', function(){
    alert("all ok");
    completeButtonOne.setAttribute('disabled', true);
    completeButtonOne.style.backgroundColor = 'red'
    const newMenuNumber = convertedMenuNumber - 1;
    document.getElementById('menu-number').innerText = newMenuNumber;
    // convertedMenuNumber.innerText = newMenuNumber;
    // console.log(newMenuNumber)
})


const completeButtonTwo = document.getElementById('complete-btn-two');
completeButtonTwo.addEventListener('click', function(){
    alert("all ok");
    completeButtonTwo.setAttribute('disabled', true);
    completeButtonTwo.style.backgroundColor = 'red'
    const newMenuNumber = convertedMenuNumber - 1;
    document.getElementById('menu-number').innerText = newMenuNumber;
    // convertedMenuNumber.innerText = newMenuNumber;
    console.log(newMenuNumber)
}) */