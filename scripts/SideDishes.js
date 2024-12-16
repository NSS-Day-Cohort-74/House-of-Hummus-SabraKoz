import { setSideChoice } from "./TransientState.js";


export const SideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json();

    document.addEventListener("change", handleSideChange)

    let sidesChoiceHTML = ""

    const sidesArray = sides.map(
        (side) => {
            return `<div>
                        <input type="radio" name="side" value="${side.id}" />${side.title}
                    </div>`
        }
    )

    sidesChoiceHTML += sidesArray.join("")

    return sidesChoiceHTML
}

const handleSideChange = (event) => {
    if (event.target.name === "side") {
        setSideChoice(parseInt(event.target.value))
    }
}

