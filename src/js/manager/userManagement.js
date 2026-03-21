const $userManagementCategory = document.querySelectorAll('.tm-user-management>p');

function managermoveNavPath(path) {
    window.location.href = window.location.origin + `${path}`
}


$userManagementCategory[0].addEventListener('click', () => {
    managermoveNavPath('/manager/totalMember/userTotalCheck.html');
}
)

$userManagementCategory[1].addEventListener('click', () => {
    managermoveNavPath('/manager/totalMember/studentTotalCheck.html')
}
)

$userManagementCategory[2].addEventListener('click', () => {
    managermoveNavPath('/manager/totalMember/lectureTotalCheck.html')
}
)