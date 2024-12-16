import { setEntreeChoice } from "./TransientState.js"

export const EntreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChange)

    let entreeChoiceHTML = ""

    const entreesArray = entrees.map(
        (entree) => {
            return `<div class="entree-options">
                        <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
                    </div>`
        }
    )
    entreeChoiceHTML += entreesArray.join("")

    return entreeChoiceHTML
}

const handleEntreeChange = (event) => {
    if (event.target.name === "entree") {
        setEntreeChoice(parseInt(event.target.value))
    }
}