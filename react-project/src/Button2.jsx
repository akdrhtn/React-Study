
const Button2 = ({name}) => {

    return (
        <button onClick={() => {alert(name)}}> 
            {name}
        </button>
    )
}

export default Button2;