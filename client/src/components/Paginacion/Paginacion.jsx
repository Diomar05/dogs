import React from 'react'

const Paginacion = () => {

    const pageNumbers = [];

    //La Division se hara de 8 perror dos columnas de 4 filas
    const division = Math.ceil(totalPosts / itemsPorPag) 
    
    for (let i = 0; i < division; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div>
                {pageNumbers.map(number => (
                    <div>
                        <button className= "boton-paginador" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Paginacion;