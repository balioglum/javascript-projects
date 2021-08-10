// querySelector= sadece ilk bulduğu elementi seçer, querySelectorAll= hepsini seçip bir node list oluşturuyor. array'e benziyor

    const panels= document.querySelectorAll(".panel");

    panels.forEach( (panel) => {
        panel.addEventListener ('click', () => {
            removeAllActiveClasses();
            panel.classList.add('active');
        })
    })

    function removeAllActiveClasses() {
        panels.forEach(panel=>{ panel.classList.remove('active');})
     
    }