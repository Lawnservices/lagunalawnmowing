document.addEventListener('DOMContentLoaded', () => {
    let muestra = document.querySelector('h1');
    let tube = document.querySelector('.tube');
    let oscuro = true;
    document.getElementById('boton').addEventListener('click', () =>{
        if(oscuro){
            document.body.style.backgroundColor = '#061120';
           
            document.querySelector('.navega').style.backgroundColor = '#f1f5f9';
            muestra.style.color = 'white';
            tube.style.color = 'white';

        } else{
            document.body.style.backgroundColor = '#f1f5f9';
            
            document.querySelector('.navega').style.backgroundColor = '#061120';
            muestra.style.color = '#000';
            tube.style.color = '#000';
        }
         oscuro = !oscuro;

     
       
    });
    





});