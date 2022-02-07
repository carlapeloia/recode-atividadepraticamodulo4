function Input({ classDiv, classInput, type, placeholder, name, email }) {
    return (
        <div className={classDiv}>
            <input type={type} className={classInput} placeholder={placeholder} name={name} email={email} />
        </div>
    )

}

export default Input