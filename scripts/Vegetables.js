import { setVegetableChoice } from "./TransientState.js"


export const VeggieOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetableChange)

    let vegetablesChoiceHTML = ""

    const vegetablesArray = vegetables.map(
        (vegetable) => {
            return `<div class="vegetable-options">
                        <input type="radio" name="vegetable" value="${vegetable.id}" />${vegetable.type}
                    </div>`
        }
    )

    vegetablesChoiceHTML += vegetablesArray.join("")

    return vegetablesChoiceHTML
}

const handleVegetableChange = (event) => {
    if (event.target.name === "vegetable") {
        setVegetableChoice(parseInt(event.target.value))
    }
}
