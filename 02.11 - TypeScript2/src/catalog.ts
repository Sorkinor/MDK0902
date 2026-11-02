// это названия, цены и наличие наших товаров
const productNames: string[] = ["Мышь", "Клавиатура", "Монитор", "Коврик", "Наушники"];
const prices: number[] = [1500, 3200.50, 12000, 450.90, 2700];
const availability: boolean[] = [true, true, false, true, false];

// тут каждый товар записан в одном кортеже: название, цена и наличие
const productRows: [string, number, boolean][] = [
    [productNames[0], prices[0], availability[0]],
    [productNames[1], prices[1], availability[1]],
    [productNames[2], prices[2], availability[2]],
    [productNames[3], prices[3], availability[3]],
    [productNames[4], prices[4], availability[4]]
];

// оставляем только те товары, которые есть в наличии
const availableProducts = productRows.filter(product => product[2] === true);

// делаем обычные строки, чтобы было удобнее смотреть в консоли
const productLabels = productRows.map(product => `${product[0]} - ${product[1]} руб.`);

// складываем цены доступных товаров, сумма посчитается сама
const totalPrice = availableProducts.reduce((sum, product) => sum + product[1], 0);

// это маленький пример литерального типа
const catalogStatus: "ready" = "ready";

// функция просто показывает статистику, ничего не возвращает
function showStatistics(): void {
    console.log("Каталог товаров:");
    console.log(productLabels);
    console.log("Товаров всего:", productRows.length);
    console.log("В наличии:", availableProducts.length);
    console.log("Сумма доступных товаров:", totalPrice, "руб.");
    console.log("Статус каталога:", catalogStatus);
}

showStatistics();

// сначало превращаем строку в число, потом проверяем его
const priceText: string = "1490.50";
const checkedPrice = Number(priceText);

if (!Number.isFinite(checkedPrice)) {
    console.log("Ошибка: это не число");
} else if (checkedPrice < 0) {
    console.log("Ошибка: цена не может быть отрицательной");
} else {
    console.log("Цена из строки:", checkedPrice, "руб.");
}

// проверяем и плохую строку, чтобы увидеть ошибку
const wrongPrice = Number("не цена");
if (!Number.isFinite(wrongPrice)) {
    console.log("Ошибка: неправильная цена");
}

// а тут отдельно проверяем отрицательную цену
const negativePrice = Number("-100");
if (Number.isFinite(negativePrice) && negativePrice < 0) {
    console.log("Ошибка: цена меньше нуля");
}

// эта функция сразу остановит программу с ошибкой, если её вызвать
function stopProgram(message: string): never {
    throw new Error(message);
}

// пока её не вызываем, иначе дальнейший код не выполнится
// stopProgram("Остановка программы");
