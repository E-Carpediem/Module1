const $btns = document.querySelectorAll(".modal-open-two-btn");
const defaultMessage = `
    삭제하시겠습니까?<br>
    삭제 후엔 되돌릴 수 없습니다.
`;

$btns.forEach(($btn) => {
    $btn.addEventListener('click', (e) => {

        const moveUrl = $btn.dataset.url;
        const message = $btn.dataset.message || defaultMessage;

        document.querySelector('.active-modal').innerHTML = `
        <div class="modal" data-url="${moveUrl}">
            <div class="modal-container">
                <div class="modal-top">
                    ${message}
                </div>
                <div class="modal-bottom">
                    <div class="modal-box modal-close">취소</div>
                    <div class="modal-box modal-check">확인</div>
                </div>
            </div>
        </div>`;

        const $modal = document.querySelector(".modal");
        $modal.style.display = 'flex';

        $modal.querySelector('.modal-close').addEventListener('click', () => closeModal($modal));

        $modal.addEventListener('click', (e) => {
            if (e.target === $modal) closeModal($modal);
        });

        $modal.querySelector('.modal-check').addEventListener('click', () => movePage($modal));
    });
});

function movePage(modal) {
    window.location.href = modal.dataset.url;
}

function closeModal(modal) {
    modal.style.display = 'none';
    if (modal.querySelectorAll("form")) {
        modal.querySelectorAll("form").forEach((form) => {
            form.reset();
        });
    }
}