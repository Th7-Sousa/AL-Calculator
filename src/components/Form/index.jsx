import React from "react"
import ComponentStyle from "../styles.js"

export default function index() {

    var saveResult = 0;
    var combustivel = ''

    const CalcularPreco = (precoEtan, precoGaso) => {
        parseFloat(precoEtan)
        parseFloat(precoGaso)
        return (
            precoEtan / precoGaso
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataEtanol = document.getElementById("InputEtanol").value
        const dataGasolina = document.getElementById("InputGasolina").value

        saveResult = CalcularPreco(dataEtanol, dataGasolina)

        alert(`O cálculo será igual a: ${saveResult.toFixed(2)}
Portanto, compensa mais abastecer com ${QualCombustivel()}. `)
    }

    function QualCombustivel() {
        if (saveResult > 0.7) {
            combustivel = 'Gasolina'
        }
        else {
            combustivel = 'Álcool'
        }
        return combustivel
    }

    return (
        <div className="container-form">
            <ComponentStyle>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>Preço - litro etanol (R$):</p>
                    <input
                        type="number"
                        id="InputEtanol"
                        step='0.01'
                        required
                    />

                    <p>Preço - litro gasolina (R$):</p>
                    <input
                        type="number"
                        id="InputGasolina"
                        step='0.01'
                        required
                    />

                    <button type="submit">
                        Calcular
                    </button>
                </form>
            </ComponentStyle>
        </div>
    )
}
