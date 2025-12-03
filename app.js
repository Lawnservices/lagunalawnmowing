document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a').forEach(link => {

         
        
          link.addEventListener('mouseenter', () => {
            link.style.border = '0.1rem solid #fff';
            document.getElementById('llamar').style.color = 'green';
        });

        link.addEventListener('mouseleave', () => {
            link.style.border = 'none';
            document.getElementById('llamar').style.color = '#000';
        });

    });
});