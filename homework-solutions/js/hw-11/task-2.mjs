class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('firstName must be a string from 2 to 50 Latin letters');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('lastName must be a string from 2 to 50 Latin letters');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || !/^[A-Za-z\s]+$/.test(value) || value.trim() === '') {
      throw new Error('profession must be a non-empty string with Latin letters and spaces only');
    }
    this._profession = value.trim();
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('salary must be a number greater than 0 and less than 10000');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employee must be an instance of Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден`);
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index !== -1) {
      this.#employees.splice(index, 1);
    } else {
      throw new Error(`Employee with name ${firstName} not found`);
    }
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

export { Employee, Company };
