import React from 'react';
import Component1 from '/public/Component1.png'; // Importe sua image
import './style.css'

function BotaoDenuncia() {

    

    return (
        <>
        <div className='button'>
        <a href='https://new.safernet.org.br/helpline?gad_source=1&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk86u-Yh5Z-HCAZ3Y48sm5kaJvKcxOo1g0I1-xOX7V8xoov-ae3Mmk-oaAq6EEALw_wcB' >
            <img src={Component1} alt="Botão de Denuncia" />
        </a>
        </div>
        </>
    );
}

export default BotaoDenuncia;
