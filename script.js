document.addEventListener('DOMContentLoaded', () => {
    const botonContacto = document.querySelector('.btn-contacto');
    const modal = document.getElementById('miModal');
    const botonCerrar = document.querySelector('.btn-cerrar');

    botonContacto.addEventListener('click', (evento) => {
        evento.preventDefault();
        modal.classList.add('activo');
    });

    botonCerrar.addEventListener('click', () => {
        modal.classList.remove('activo')
    });

    modal.addEventListener('click', (evento) =>{
        if(evento.target === modal) {
            modal.classList.remove('activo');
        }
    });
});