
const allButton = document.querySelectorAll('.complete-button')
for(let button of allButton){
    button.addEventListener('click', function(){
        alert("chomolikko..parsos tui re")
        button.setAttribute('disabled', true);
        button.style.opacity = '0.3';
        button.style.color = 'black';
        button.style.cursor = 'not-allowed'

        // menu-number increment
        const menuNumber = document.getElementById('menu-number');
        let menuNumberElement = menuNumber.innerText;
        let convertedMenuNumberElement = parseInt(menuNumberElement);
        if(convertedMenuNumberElement > 0){
            convertedMenuNumberElement++ ;
            menuNumber.innerText = convertedMenuNumberElement;
        }else{
            alert('all over')
        }

        // assigned-number decrement
        const assignedNumber = document.getElementById('assigned-number');
        let assignedNumberElement = parseInt(assignedNumber.innerText);
        
        if(assignedNumberElement > 0){
            assignedNumberElement-- ;
            assignedNumber.innerText = assignedNumberElement
        }else{
            alert('new')
        }


        // new element append in history
        const clearHistoryDiv = document.getElementById('clear-history-div')
        const p = document.createElement('p');
        p.innerText = "wow done it man.";
        clearHistoryDiv.appendChild(p);
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