const clock = document.getElementById('clock')
// or you can also use this:
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);

// 1000 is a milliSeconds means 1 sec
// setInterval function is used to run the clock every interval as given.
