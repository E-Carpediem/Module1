const userListData = JSON.parse(localStorage.getItem('userList'));
const $totalStudent = document.querySelector(".tms-content-top-ct");


let studentTotalSum = 0;
for (let i = userListData.length - 1; i >= 0; i--) {
    if (userListData[i].role === "student") {
        $totalStudent.insertAdjacentHTML('afterend',
            `<div class="tms-content">
        <p> ${i + 1} </p>
        <p> ${userListData[i].id} </p>
        <p> ${userListData[i].userName} </p>
        <p> ${userListData[i].role === "student" ? "수강생" : "강사"} </p>
        <p> ${userListData[i].phoneNumber} </p>
        <p> ${userListData[i].classCount}건 </p>
        <p> ${userListData[i].signDate} </p>
        <p> ${userListData[i].subscriptionSignDate === null ? "-" : userListData[i].subscriptionSignDate}</p>
        <p> ${userListData[i].subscriptionStatus === true ? "구독" : "미구독"}</p>
    </div>`
        )
    }
}