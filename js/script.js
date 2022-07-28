
addEventListener('DOMContentLoaded', () => {

    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 1000

    const animarContadores = () => {
        for ( const contador of contadores) {
            const actualizar_contador = () =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad

                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 10)
                }else{
                    contador.innerText = cantidad_maxima
                }
            }

            actualizar_contador()
        }

    }
    
 
//     //IntersectionObserver

    const mostrarContadores =  elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add ('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContadores,500)
            }
        });
    }
    const observer = new IntersectionObserver(mostrarContadores,{
        threshold: 0.75 //0 - 1
    }) 

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    }) 


})




var propMenu ={

    burger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menuActivo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')

}
// objeto con metodos
var metMenu = {


    inicio: function(){

        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

        for (let i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
            
        }
    },

    toggleMenu: function(){

        if(propMenu.menuActivo == false){

            propMenu.menuActivo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
        }else{
            propMenu.menuActivo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active','');
        }

    },

    ocultarMenu: function() { 

        propMenu.menuActivo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active','');
     }


}

metMenu.inicio();


