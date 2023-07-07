// 서브 탭메뉴-company
const subName = document.querySelectorAll(".content-bottom > ul > li");
const subContents = document.querySelectorAll(
    "#company-contents> .wrap > article"
);

// 서브 탭메뉴-product
const productContents = document.querySelectorAll(
    "#product-contents> .wrap > article"
);

subName.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        for (let el of subName) {
            el.classList.remove("on");
        }
        subName[index].classList.add("on");

        for (let el of productContents) el.classList.remove("on");
        productContents[index].classList.add("on");
    });
});