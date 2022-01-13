function adjCarouselItems(nSlide) {
    let carouselInner = document.querySelector(".carousel-inner");
    let oldcarousItems = carouselInner.querySelectorAll(".carousel .carousel-item");
    oldcarousItems.forEach((old) => {
        carouselInner.removeChild(old);
    });
    let items = document.querySelectorAll(".carousel .carousel-item-default");
    items.forEach((el) => {
        const minPerSlide = nSlide;
        let carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item";
        carouselItem.appendChild(el.children[0].cloneNode(true));
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            carouselItem.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
        carouselInner.appendChild(carouselItem);
    });
    carouselInner.querySelectorAll(".carousel .carousel-item")[0].classList.add("active");
}
function initCarousItems() {
    if (window.innerWidth < 768) {
        adjCarouselItems(1);
    } else {
        adjCarouselItems(3);
    }
}
initCarousItems();
window.onresize = initCarousItems;

var carouselModal = document.getElementById('carouselModal');
carouselModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var slide = button.getAttribute('data-bs-slide');
    var modalBodyImg = carouselModal.querySelector('.modal-body img');
    modalBodyImg.src = `./img/${slide}.jpg`;
  })
  