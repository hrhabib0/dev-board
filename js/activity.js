
document.getElementById('clear-history-button').addEventListener('click', function(){
    const clearHistoryDiv = document.getElementById('clear-history-div');
    const paragraphElement = clearHistoryDiv.querySelectorAll('p')
    paragraphElement.forEach(p => p.remove());
})