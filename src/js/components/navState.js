const $navManager = document.querySelector(".c-nav");
const $navlecture = document.querySelector("#c-lecture-ct");
const $navStudent = document.getElementById("c-student");
const test = {
    role: "student"
}
localStorage.setItem('userrole', JSON.stringify(test));
const ttest = localStorage.getItem('userrole');

const aa = JSON.parse(ttest);
console.log(aa.role);
if (aa.role == "student") {
    // roleStudent()
}

console.log($navManager);


// function roleStudent () {
//     $navStudent.style.display = "block";
// }