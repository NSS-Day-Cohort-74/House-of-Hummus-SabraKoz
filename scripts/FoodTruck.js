import { EntreeOptions } from "./Entrees.js"
import { PurchaseButton } from "./Purchase.js";
import { Sales } from "./Sales.js"
import { SideOptions } from "./SideDishes.js";
import { VeggieOptions } from "./Vegetables.js";

export const FoodTruck = async () => {
    const salesHTML = await Sales();
    const entreeHTML = await EntreeOptions();
    const vegetableHTML = await VeggieOptions();
    const sidesHTML = await SideOptions();
    const purchaseButtonHTML = PurchaseButton();

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="options">
                <h2>Base Dish</h2>
                ${entreeHTML}
            </section>
            <section class="options">
                <h2>Vegetable</h2>
                ${vegetableHTML}
            </section>
            <section class="options">
                <h2>Sides</h2>
                ${sidesHTML}
            </section>
        </article>

        <article>
            ${purchaseButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}

