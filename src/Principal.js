import React from 'react';

const Principal = ({handleLogout}) => {
    return(
        <section className="principal">
            <nav>
                <h2>Bem vindo ao Simulador de Investimentos K</h2>
                <button onClick={handleLogout}>Sair</button>
            </nav>
        </section>
    )
}

export default Principal;