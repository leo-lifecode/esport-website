import Input from "./input"
import Label from "./label"

const FormInput = (props) => {
    const { htmlFor, children, type, placeholder, value, handle } = props
    return (
        <div className="block">
            <Label htmlFor={htmlFor} children={children} />
            <Input type={type} htmlFor={htmlFor} placeholder={placeholder} value={value} handle={handle} />
        </div>
    )
}
export default FormInput