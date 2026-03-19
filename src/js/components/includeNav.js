fetch("/components/nav.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('.top-container').insertAdjacentHTML("afterbegin", responseText);

        const $navlecture = document.querySelector("#c-lecture");
        const $navstudent = document.querySelector("#c-student");
        const $navmanager = document.querySelector("#c-manager");
        
        const localStorageTest = {
            role: "lecture"
        }
        localStorage.setItem('userrole', JSON.stringify(test));
        const test = localStorage.getItem('userrole');

        const roleTest = JSON.parse(test);
        if (roleTest.role == "student") {
            roleStudent();
        } else if (roleTest.role == "manager") {
            roleManager();
        } else if (roleTest.role == "lecture") {
            roleLecture();
        } else {
            roleNone();
        }

        function roleStudent() {
            $navstudent.style.display = "flex";
        }

        function roleManager() {
            $navmanager.style.display = "flex";
        }

        function roleLecture() {
            $navlecture.style.display = "flex";
        }

        function roleNone() {
            $navlecture.style.display = "flex";
        }
    });
