

function BotaoEnviar({ type, classInput, value }) {

    return (
        <div>
            <input type={type} className={classInput} value={value} />
        </div>
    )
}

export default BotaoEnviar