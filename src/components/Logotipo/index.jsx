import ComponentStyle from './../styles'
import combustivel from "./../../assets/combustivel.png"

export default function index() {
    return (
        <div>
            <ComponentStyle>
                <img className="logo" src={combustivel} alt="Logotipo Al Calculator" />
            </ComponentStyle>
        </div>
    )
}