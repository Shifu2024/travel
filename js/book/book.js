
// BOOK PRICE
var initialSumElement = document.getElementById("initialSumValue");
var initialSum = parseInt(initialSumElement.textContent); // Извлекаем изначальную сумму из HTML

function updateSum() {
    var optionsSelect = document.getElementById("options");
    var selectedOptionValue = parseInt(optionsSelect.value);

    // Пересчитываем изначальную сумму, исходя из выбранной опции
    var newSum = initialSum * selectedOptionValue;

    // Обновляем текст внутри элемента h1
    initialSumElement.textContent = newSum;
}