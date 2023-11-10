import '../style/style.scss'

export default function(){
    return(
        <div className="content container-fluid animate__fadeIn" >
            <header>
                <h1 className="display-6">Minha Conta <b>Lily Pink</b></h1>
            </header>
            <div className="info-area" >
                <div className="info-box-area">
                    <label htmlFor="email" className='label-box'>Email:</label>
                    <input id='email' placeholder='email@senacsp.edu.br' disabled className='input-box'/>
                </div>
                <div className="info-box-area">
                    <label htmlFor="password" className='label-box'>Senha:</label>
                    <input id='password' placeholder='***********' disabled className='input-box'/>
                </div>
                <div className="info-box-area">
                    <label htmlFor="name" className='label-box'>Nome Completo:</label>
                    <input id='name' placeholder='Rayssa Leal Guedes' disabled className='input-box'/>
                </div>
                <div className="info-box-area">
                    <label htmlFor="phone" className='label-box'>Número de telefone:</label>
                    <input id='phone' placeholder='(16) 99999-9999' disabled className='input-box'/>
                </div>
            </div>
        </div>
    )
}