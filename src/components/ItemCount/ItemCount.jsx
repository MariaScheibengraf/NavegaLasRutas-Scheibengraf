import { useEffect, useState } from "react"

const ItemCount = () => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        if (contador < 15) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    console.log(contador)

    useEffect(() => {
    /* Acá adentro de la funcion coloco lo que quiero que se ejecute como efecto secundario */
    document.title = `Contador: ${contador}`
    console.log("el componente se actualizó " + contador)
    }, [contador])

    return (
        <div>
            <h2>Contador</h2>
            <button onClick={incrementar}> + </button>
            <p>{contador}</p>
            <button onClick={decrementar}> - </button>
        </div>
    )
}

export default ItemCount
