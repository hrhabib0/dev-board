function getHexColorCode(){
    const bgHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return bgHex
}
document.getElementById('theme-change-icon').addEventListener('click', function(){
    const mainBody = document.getElementById('main-body');
    mainBody.style.backgroundColor = getHexColorCode();
})