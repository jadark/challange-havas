const Tabs = (ptab, ctab) => {
    const pesTab = document.querySelectorAll(ptab);
    const conTab = document.querySelectorAll(ctab);

    pesTab.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const i = index;
            pesTab.forEach(tab => tab.classList.remove('active'));
            item.classList.add('active');
            conTab.forEach(item => item.style.display = 'none');
            conTab[i].style.display = 'flex';
            const dataTab = item.getAttribute('data-tab');
            window.history.replaceState(null, null, `?tab=${dataTab}`);
        });
    });

    pesTab[0].click();
};
const urlParams = new URLSearchParams(window.location.search);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector("#load_er").style.display = 'none';
        const pageHome = document.querySelector(".home")
        if (pageHome) {
            Tabs('.pesTab', '.conTab');
            const dataTab = urlParams.get('tab');
            if (dataTab) {
                document.querySelector(`.pesTab[data-tab='${dataTab}']`).click();
            }
        }
    }, 500);
})