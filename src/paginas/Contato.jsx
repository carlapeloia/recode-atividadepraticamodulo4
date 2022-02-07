import FormContato from '../componentes/formularios/FormContato'

function Contato() {
    return (
        <div>

            <h1 className="d-flex justify-content-center align-itens-center mt-5 mb-3">Contato ou Orçamento</h1>
            <p className="d-flex justify-content-center align-itens-center">Envie sua mensagem que entraremos em contato em breve.</p>
            <FormContato />
        </div>


    )
}

export default Contato