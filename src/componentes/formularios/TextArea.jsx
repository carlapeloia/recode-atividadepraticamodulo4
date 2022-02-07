function TextArea({ classDiv, classTxtArea, row, col, mensagem }) {
    return (
        <div className={classDiv}>
            <textarea className={classTxtArea} rows={row} cols={col}>{mensagem}</textarea>
        </div>
    )
}

export default TextArea