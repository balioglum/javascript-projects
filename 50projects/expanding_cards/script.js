// querySelector= sadece ilk bulduğu elementi seçer, querySelectorAll= hepsini seçip bir node list oluşturuyor. array'e benziyor

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeAllActiveClasses(); //tüm panellerden active class'ı siliyor
        panel.classList.add('active'); //tıklanan panele  active class'ı ekliyor
    })
})

function removeAllActiveClasses() {
    panels.forEach(panel => {panel.classList.remove('active'); })

}

// forEach "array metodu" ile, seçilen tüm classlara aynı anda addEventListener ekliyoruz.
// tek event listenera aynı anda birçok sonuç ekleyebiliyoruz. 
//burada removeallactiveclasses ile class sildik,sonra tıklanan class'a .active class'ı ekledik.