// document.getElementById('bug').onclick = function() {
//     alert("owl clicked")
// } not a good approach
// type, timeStamps, preventDefault
// target, ,toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the UL");
//   },
//   false
// );
// document.getElementById("bug").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked the bug");
//     e.stopPropagation(); // this will stop propogating to other outside members
//   },
//   false
// );
// // true is event capturing(top-down), whereas false is bubbling(bottom-up)

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault(); // this will make sure to stop the default function
//     e.stopPropagation();
//     console.log("google clicked");
//   },
//   false
// );

document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
        console.log(e.target.id);
        let removeIt = e.target.parentNode 
        removeIt.remove()
        //removeIt.parentNode.removeChild(removeIt) // other approach
    }
})
