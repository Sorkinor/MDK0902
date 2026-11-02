// тут просто записываем данные нашего заказа
const productName: string = "Беспроводная мышь";
let unitPrice: number = 2500;
let quantity: number = 3;
let discountPercent: number = 10;

// считаем общую цену и скидку, тут всё довольно просто
const total = unitPrice * quantity;
const discount = total * discountPercent / 100;
const finalTotal = total - discount;

// ищем место на странице, куда будем выводить результат
const output = document.querySelector("#result");

// сначало проверяем данные, чтобы небыло неправильного заказа
if (unitPrice < 0 || quantity < 1) {
    const message = "Ошибка: цена не может быть отрицательной, а количество должно быть не меньше 1.";

    if (output !== null) {
        output.textContent = message;
    }

    console.log(message);
} else {
    // если всё нормально, показываем итог заказа
    const message = `${productName}: ${finalTotal} руб. (скидка ${discountPercent}%)`;

    if (output !== null) {
        output.textContent = message;
    }

    console.log(message);
}
