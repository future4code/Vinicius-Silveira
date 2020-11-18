import React from 'react'

function CriarLogar (){
    return(
        <div>
            Login
            <div>
                <div>
                    <h2>Entrar</h2>
                </div>                
                <div>
                    <input placeholder='email'/>
                    <input placeholder='senha' type='password'/>
                </div>
                <div>
                    <button>Iniciar</button>
                </div>
            </div>
        </div>
    )
}

export default CriarLogar