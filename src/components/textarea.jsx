const Textarea = (props) => {
    const { placeholder, htmlFor } = props;
    return (
        <>
            <textarea placeholder={placeholder} id={htmlFor} className="w-full h-[209px] bg-transparent border border-gray-700 text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline "></textarea>
        </>
    )
}
export default Textarea