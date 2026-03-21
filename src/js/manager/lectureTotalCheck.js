const userListData = JSON.parse(localStorage.getItem('userList'));
const $totalLecture = document.querySelector(".tml-content-top-ct");

let lectureTotalSum = 0;
for (let i = userListData.length - 1; i >= 0; i--) {
    if (userListData[i].role === "lecture") {
        $totalLecture.insertAdjacentHTML('afterend',
            `<div class="tml-content">
        <p> ${i + 1} </p>
        <p> ${userListData[i].id} </p>
        <p> ${userListData[i].userName} </p>
         <p> ${userListData[i].role === "lecture" ? "강사" : "수강생"} </p>
        <p> ${userListData[i].phoneNumber} </p>
        <p> ${userListData[i].contentCount}건 </p>
        <p> ${userListData[i].signDate} </p>
        <p> ${userListData[i].membershipSignDate === null ? "-" : userListData[i].membershipSignDate}</p>
        <p> ${userListData[i].membershipStatus === true ? "구독" : "미구독"}</p>
        <p> ${userListData[i].approveState}</p>
        <p> <img src="/src/assets/img/manager-suppoting-document.svg"> </p>
    </div>`
        )
    }
}