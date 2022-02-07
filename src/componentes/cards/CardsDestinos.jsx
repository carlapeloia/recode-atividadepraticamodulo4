

function CardsDestinos(props) {
    return (
        <div className="card mb-5">
            <img className="card-img-top" src={props.imagem} alt="Imagem de capa do card" />
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text text-justify ident">{props.descricao}</p>
                <p className="card-text"><small className="text-muted">{props.atualizacao}</small></p>
            </div>
        </div>
    )
}

export default CardsDestinos

