const Label = (props) => {
    const { htmlFor, children } = props
    return (
        <>
            <label className="text-white" htmlFor={htmlFor}>{children}</label>
        </>
    )
}
export default Label