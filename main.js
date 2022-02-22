function loadBar() {
    const loading = document.querySelector(".boxFont");
    const loadingOK = document.querySelector(".done");
    const loadingHide = document.querySelector(".animation");

    let n = 0;

    setInterval(function() {
        if (n == 100) {
            clearInterval();
            loadingOK.innerHTML = `<p>Successfully Loaded!</p>`;
            loadingHide.style.display = "none";
        } else {
            n++;
            loading.innerHTML = `${n}%`;
        }
    }, 100);
}

loadBar();