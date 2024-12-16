import { purchaseOrder } from "./TransientState.js";

const handlePurchaseClick = (event) => {
    if (event.target.id === "purchase") {
        purchaseOrder()
    }
}

export const PurchaseButton = () => {
    document.addEventListener("click", handlePurchaseClick)
    return "<button id='purchase'>Purchase Combo</button>"
}
