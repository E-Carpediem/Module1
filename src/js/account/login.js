const $ = (selector) => document.querySelector(selector)

const user = {
    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}


const activeModal = ((clickE, message) => {
    document.querySelector('.active-modal').innerHTML = `
            <div class="modal">
                <div class="modal-container">
                    <div class="modal-top">
                        ${message}
                    </div>
                    <div class="modal-bottom modal-check" id="modal-check1">확인</div>
                </div>
            </div>`;

    const $modal = document.querySelector(".modal");
    $modal.style.display = 'flex';
    document.querySelector('.modal-check').addEventListener('click', clickE);
})

function movePage(url) {
    window.location.href = url;
}

function closeModal(modal) {
    modal.style.display = 'none';
}


// const userList = [
//     {
//         "role": "manager",
//         "id": 1,
//         "userId": "manager01",
//         "password": "manager1234",
//     },
//     {
//         "role": "student",
//         "id": 2,
//         "userId": "std1",
//         "password": "student1234",
//         "userName": "이홍근",
//         "userAge": 25,
//         "phoneNumber": "010-1111-2222",
//         "userEmail": "test6@example.com",
//         "gender": "male",
//         "birth": "2026-03-16",
//     },
//     {
//         "role": "lecturer",
//         "id": 3,
//         "userProfile": "이미지경로",
//         "userId": "lct1",
//         "password": "lecturer1234",
//         "userName": "정지훈",
//         "userAge": 25,
//         "phoneNumber": "010-1111-2222",
//         "userEmail": "test6@example.com",
//         "gender": "male",
//         "birth": "2026-03-16",
//         "userDocument": [
//             "파일경로",
//             "파일경로"
//         ]
//     },
//     {
//         "role": "student",
//         "id": 4,
//         "userId": "std2",
//         "password": "student1234",
//         "userName": "이홍근",
//         "userAge": 25,
//         "phoneNumber": "010-1111-2222",
//         "userEmail": "test6@example.com",
//         "gender": "male",
//         "birth": "2026-03-16",
//     }
// ]


// user.setLocalStorage('userList', userList);

$('.l-login-btn').addEventListener('click', () => {
    const userInfo = user.getLocalStorage('userList').find(u => { return u.userId === $("#su-login-id").value });
    if (userInfo) {
        if (userInfo.password === $('#su-login-pwd').value) {
            alert('회원가입 성공')
            user.setLocalStorage('myInfo', userInfo);
        } else {
            alert('회원가입 실패');
        }
    }
    else {
        alert('회원가입 실패');
    }
    $('.l-login-main>form').reset();

});



