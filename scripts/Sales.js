export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let purchasesHTML = ""
    const salesDivs = sales.map(
        (sale) => {
            const purchasePrice = sale.entree.price + sale.vegetable.price + sale.side.price
            return `<div>Receipt #${sale.id} = $${purchasePrice}</div>`
        }
    )

    purchasesHTML += salesDivs.join("")

    return purchasesHTML
}

