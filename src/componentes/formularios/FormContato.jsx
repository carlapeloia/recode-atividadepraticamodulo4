import TextArea from './TextArea'
import BotaoEnviar from './BotaoEnviar'
import Input from './Input'


function FormContato() {

    const clickBotao = (e) => {
        e.preventDefault()
        alert('Contato gravado com sucesso!')
        const dados = {
            name: e.target.elements.name.value,
        }
        console.log(dados)
    }

    return (
        <section className="mt-5 mb-5">
            <form onSubmit={clickBotao} className="d-flex justify-content-center align-itens-center">
                <fieldset id="fieldset">
                    <Input type="text" classDiv="formContato mb-3" classInput="form-control lblForm" placeholder="Digite seu nome" required={true} name="name" />
                    <Input type="email" classDiv="formContato mb-3" classInput="form-control lblForm" placeholder="Digite seu e-mail" required={true} name="email" />
                    <div className="formContato mb-3">
                        <select className="form-control text-secondary">
                            <option>Selecione o assunto</option>
                            <option>Contato</option>
                            <option>Orçamento</option>
                        </select>
                    </div>

                    <div className="formContato mb-3">
                        <select className="form-control text-secondary" >
                            <option>Selecione a quantidade de pessoas</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="formContato mb-3">
                        <select className="form-control text-secondary" >
                            <option>Selecione o Destino</option>
                            <option>Moscou</option>
                            <option>Zurique</option>
                            <option>Santa Cruz de Tenerife</option>
                            <option>Siracusa</option>
                            <option>Jalapão</option>
                            <option>Gramado</option>
                        </select>
                    </div>

                    <TextArea classDiv="formContato formMensagem mb-3 " classTxtArea="formContato rounded text-secondary border" row="5" col="60" mensagem="Digite aqui sua mensagem" />
                    <BotaoEnviar classInput="btn btn-dark mb-5" type="submit" value="Enviar" />

                </fieldset>

            </form>
        </section>
    )
}

export default FormContato