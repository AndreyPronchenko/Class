class Worker {
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
    getFullName(name, surname) {
        let salary = this.name + this.surname;
        return salary;
    }
    
}
let workeOne = new Worker('Иван', 'Иванов', 2000, 21);
console.log('Имя: ' + workeOne.name);
console.log('Фамилия: ' + workeOne.surname);
console.log('Ставка за день работы: ' + workeOne.rate + ' руб.');
console.log('Количество отработанных дней: ' + workeOne.days);
console.log('Зарплата сотрудника составляет: ' + workeOne.getSalary() + ' руб.');

document.querySelector('.class_name').innerHTML = 'Зарплата работника ' + workeOne.name + ' ' + workeOne.surname + ' составляет ' + workeOne.rate * workeOne.days + ' руб.';


class Boss {
    name;
    surname;
    rate;
    days;
    workers;
    constructor(name, surname, rate, days, workers) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        this.workers = workers;
    }
        getSalary(rate, days, workers) {
            let salary = this.rate * this.days * this.workers;
            return salary;

        }
    }
const boss = new Boss('Иван', 'Иванов', 2000, 21, 40);
console.log('-------------------');
console.log('Ставка за день работы: ' + boss.rate + ' руб.');
console.log('Количество отработанных дней: ' + boss.days);
console.log('Количество сотрудников: ' + boss.workers);
console.log('Фонд зарплаты: ' + boss.getSalary());

document.querySelector('.class_name1').innerHTML = 'Фонд зарплаты ' + boss.workers + ' сотрудников, составляет: ' + boss.rate * boss.days * boss.workers + ' руб.';