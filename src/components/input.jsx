const Input = (props) => {
    const { htmlFor, type = "text", placeholder, value, handle } = props
    return (
        <>
            <input id={htmlFor} type={type} placeholder={placeholder} value={value} onChange={handle} className="w-full xl:py-[13px] xl:px-[8px] bg-transparent border border-slate-700 -skew-x-6 py-[15px] px-[40px] md:ps-[20px] mt-[16px] xl:m-auto text-white" />
        </>
    )
}
export default Input