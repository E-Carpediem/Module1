const $btn = document.querySelectorAll(".modal-open-one-btn");
const defaultMessage = `
    확인되었습니다.
`;
$btn.forEach(($btn) => {
    $btn.addEventListener('click', (e) => {
        const moveUrl = $btn.dataset.url;
        const message = $btn.dataset.message || defaultMessage;
        document.querySelector('.active-modal').innerHTML = `
    <div class="modal" data-url="${moveUrl}">
        <div class="modal-container">
            <div class="modal-top">
                ${message}
            </div>
            <div class="modal-bottom modal-check" id="modal-check1">확인</div>
        </div>
    </div>`;

        const $modal = document.querySelector(".modal");
        $modal.style.display = 'flex';
        document.querySelectorAll('.modal').forEach((modal) => {
            modal.querySelector('.modal-check').addEventListener('click', () => movePage(modal));
        });
    });
});

function movePage(modal) {
    window.location.href = modal.dataset.url;
}