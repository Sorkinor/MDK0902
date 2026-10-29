const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const amountInput = document.getElementById("productAmount");
const list = document.getElementById("productList");
const message = document.getElementById("message");

let productNames = [];

function showMessage(text, isError) {
    message.textContent = text;

    if (isError) {
        message.style.color = "red";
    } else {
        message.style.color = "green";
    }
}

function checkProduct(name, amount) {
    if (name.length === 0) {
        return "Введите название товара";
    }

    if (name.length < 2 || name.length > 40) {
        return "Название должно быть от 2 до 40 символов";
    }

    // проверяем колличество, а то вдруг введут дробь или буквы
    if (!Number.isInteger(amount) || amount < 1 || amount > 20) {
        return "Количество должно быть целым числом от 1 до 20";
    }

    for (let i = 0; i < productNames.length; i++) {
        if (productNames[i] === name.toLowerCase()) {
            return "Такой товар уже есть в списке";
        }
    }

    return "";
}

function showProduct(name, amount) {
    const item = document.createElement("li");
    const text = document.createElement("span");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    // название выводим как текст, что бы теги не работали
    text.textContent = name + " — " + amount + " шт.";
    doneButton.textContent = "Куплено";
    deleteButton.textContent = "Удалить";
    doneButton.type = "button";
    deleteButton.type = "button";

    doneButton.addEventListener("click", function () {
        if (text.style.textDecoration === "line-through") {
            text.style.textDecoration = "none";
            doneButton.textContent = "Куплено";
            showMessage("Отметка снята", false);
        } else {
            text.style.textDecoration = "line-through";
            doneButton.textContent = "Отменить";
            showMessage("Товар отмечен как купленный", false);
        }
    });

    deleteButton.addEventListener("click", function () {
        const index = productNames.indexOf(name.toLowerCase());

        if (index !== -1) {
            productNames.splice(index, 1);
            item.remove();
            showMessage("Товар удалён", false);
        }
    });

    item.append(text, doneButton, deleteButton);
    list.append(item);
}

function addProduct(event) {
    event.preventDefault();

    // тут убираем пробелы по краям, чтобы не было лишнего
    const name = nameInput.value.trim();
    const amount = Number(amountInput.value);
    const error = checkProduct(name, amount);

    if (error !== "") {
        showMessage(error, true);
        return;
    }

    productNames.push(name.toLowerCase());
    showProduct(name, amount);
    showMessage("Товар добавлен", false);
    form.reset();
}

form.addEventListener("submit", addProduct);
