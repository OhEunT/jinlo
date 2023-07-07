const subName = document.querySelectorAll(".content-bottom > ul > li");
const subContents = document.querySelectorAll(
    "#company-contents> .wrap > article"
);
const customerContents = document.querySelectorAll(
    "#customer-contents> .wrap > article"
);

// gnb
const gnb_lis = document.querySelectorAll(".gnb > ul > li");

gnb_lis.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = "0";
        if (isBlock == "none") {
            sub.style.display = "block";
            let subHeight = sub.scrollHeight;
            sub.style.height = subHeight + "px";
        }
    });
});

gnb_lis.forEach((el) => {
    el.addEventListener("mouseleave", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        let isBlock = window.getComputedStyle(sub).getPropertyValue("display");
        sub.style.height = "0";
        if (isBlock == "block") {
            sub.style.height = "0";
            sub.addEventListener("transitionend", function end() {
                sub.removeEventListener("transitionend", end);
                sub.style.display = "none";
            });
        }
    });
});
gnb_lis.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        const sub = e.currentTarget.querySelector(".sub");
        const href = sub.querySelector('a').getAttribute('href');
        console.log(href);
        const clickTab = href.substr(href.lastIndexOf("#") + 1);
        console.log(clickTab);
        let gnbTab = document.getElementById(clickTab);
        console.log(gnbTab);
        // 서브 메뉴 활성화
        for (let el of subName) {
            el.classList.remove("on");
        }
        gnbTab.classList.add("on");

        // 컨텐츠 활성화
        for (let el of customerContents) {
            el.classList.remove("on");
        }
        for (let el of customerContents) el.classList.remove("on");
        customerContents[index].classList.add("on");
    });
});



subName.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        for (let el of subName) {
            el.classList.remove("on");
        }
        subName[index].classList.add("on");

        for (let el of customerContents) el.classList.remove("on");
        customerContents[index].classList.add("on");
    });
});

