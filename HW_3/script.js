/* 1. "Управление персоналом компании"

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел). */

class Employee {

    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Вывод: \nИмя: ${this.name}`);
    }
}

class Manager extends Employee {

    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Вывод: \nИмя: ${this.name} \nОтдел: ${this.department}`);
    }

}

const employee = new Employee('Сергей Иванов');
employee.displayInfo();

const manager = new Manager('Сергей Иванов', 'Отдел продаж');
manager.displayInfo();



/* 2. "Управление списком заказов"

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов. */


