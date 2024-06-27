class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price.toFixed(2);
        this.inStock = 0;
    }

    addToStock(quantidade) {
        this.inStock += quantidade;
    }

    calculateDiscount(percenDesconto) {
        return (this.price - (this.price*(percenDesconto/100))).toFixed(2);
    }
}

const mouse = new Product("Mouse Logitech", "Mouse com 8 botões", 80);
console.log(mouse);
console.log(mouse.calculateDiscount(15));