import { useNavigate } from 'react-router-dom'
import persona from '../../assests/persona.svg'
import Header from '../../components/Header/Header'
import { goToLocation } from '../../routes/coordinator'
import { SignUpDiv } from './styled'

export default function SignUp(){
    const navigate = useNavigate()
    return(
        <>
            <Header name={'Cadastro'} />
            <SignUpDiv>
                <img src={persona} alt={'Account Circle'}/>
                    <div className="alert alert-primary" role="alert">
                     Versão Beta, Clique em Cadastrar para entrar no App. 
                    </div>
                <input className="form-control" type="text" placeholder="Email" aria-label="Disabled input example" disabled></input>
                <input className="form-control" type="text" placeholder="Senha" aria-label="Disabled input example" disabled></input>
                <input className="form-control" type="text" placeholder="Confirmar Senha" aria-label="Disabled input example" disabled></input>
                <input className="form-control" type="text" placeholder="Possui Carro ?" aria-label="Disabled input example" disabled></input>
                <input className="form-control" type="text" placeholder="Qual Modelo ?" aria-label="Disabled input example" disabled></input>
                <button type="button" className="btn btn-dark" onClick={() => goToLocation(navigate)}>Cadastrar</button>
            </SignUpDiv>
        </>
    )
}