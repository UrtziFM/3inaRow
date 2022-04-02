let cuadro_btn = document.querySelectorAll(".cuadro");
let info = document.getElementById("juego-info");
const juego_btn = document.getElementById("juego-boton")
let i = 0;
let j = 0;
let n_boton;

juego_btn.onclick = function(){
    j++;
    if(j == 4){
        const texto_fin = "Pago realizado, Enhorabuena!"      
        info.innerHTML = texto_fin;
    }
}

cuadro_btn.forEach(boton => {
    
 boton.onclick = function(){
     
        boton.innerHTML = "X";
  }

});

  function nEmpieza(){
  
      const texto_info = "Fijese bien, los números van cambiado de posición"      
      info.innerHTML = texto_info;
      
  }

nEmpieza();
  