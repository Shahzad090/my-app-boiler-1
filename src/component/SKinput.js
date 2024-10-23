import { input } from "antd";

export default function SKinput (props) {
    const { value, onChange, disabled, type } = props;
    return (
    <>

    <input
    palaceholder={label}
    onChange={onChange}
    disabled={disabled}
    type={type} 
     />
    
    </>
    );
}