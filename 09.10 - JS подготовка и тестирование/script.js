
const products = [
    { id: 1, name: 'Laptop', price: 80000, quantity: 2, category: 'electronics' },
    { id: 2, name: 'Mouse', price: 2500, quantity: 5, category: 'electronics' },
    { id: 3, name: 'Keyboard', price: 4500, quantity: 3, category: 'electronics' },
    { id: 4, name: 'Chair', price: 18000, quantity: 1, category: 'furniture' },
    { id: 5, name: 'Desk', price: 25000, quantity: 2, category: 'furniture' }
];

// 1. Реализовать getProductTotal(product), возвращающую стоимость всего количества конкретного товара.
function getProductTotal(product) {
    return product.price * product.quantity;
}

// 2. Реализовать getTotalInventoryValue(products), возвращающую общую стоимость каталога.
function getTotalInventoryValue(products) {
    return products.reduce((sum, value) => sum + (value.price * value.quantity), 0);
}

// 3. Реализовать getMostExpensiveProduct(products), возвращающую товар с максимальной ценой за единицу
function getMostExpensiveProduct(products) {
    return products.reduce((mostExpensive, item) => item.price > mostExpensive.price ? item : mostExpensive);
}

// 4. Реализовать filterByCategory(products, category), возвращающую новый массив выбранной категории
function filterByCategory(products, category) {
    return products.filter(item => item.category == category);
}

// 5. Реализовать findProduct(products, id), возвращающую товар либо undefined.
function findProduct(products, id) {
    return products.find(item => item.id == id);
}

// 6. Реализовать getAvailableProducts(products), возвращающую товары с quantity больше нуля.
function getAvailableProducts(products) {
    return products.filter(item => item.quantity > 0);
}

// Отчёт в консоли.
console.log('Стоимость всех ноутбуков: ' + getProductTotal(products[0]) + ' рублей');
console.log('Общая стоимость каталога: ' + getTotalInventoryValue(products) + ' рублей');

const expensiveProduct = getMostExpensiveProduct(products);
console.log('Самый дорогой товар: ' + expensiveProduct.name + ', цена: ' + expensiveProduct.price + ' рублей');

console.log('Список товаров категории Электроника:');
console.log(filterByCategory(products, 'electronics'));

console.log('Товар с id 3:');
console.log(findProduct(products, 3));

console.log('Товары в наличии:');
console.log(getAvailableProducts(products));

console.log('Исходный каталог без изменений:');
console.log(products);
