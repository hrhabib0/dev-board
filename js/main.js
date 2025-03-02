const currentDay = document.getElementById('current-day');
const currentDate = document.getElementById('current-date');

const date = new Date().toString();
const onlyDate = date.split(' ')
const newDay = onlyDate[0] + ',';
const newDate = onlyDate[1] + ' ' + onlyDate[2] + ' ' + onlyDate[3];
currentDay.innerText = newDay;
currentDate.innerText = newDate;


// go to the blog page.
document.getElementById('go-to-blog-btn').addEventListener('click', function(){
    window.location.href = "./blog.html";
})


