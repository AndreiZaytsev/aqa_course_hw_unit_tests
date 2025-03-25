class Employee {}

class Company {
  findEmployeeByName(firstName) {
    const employee = this.employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден`);
    }
    return employee;
  }

  removeEmployee(firstName) {
    const index = this.getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден`);
    }
    this.employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

export { Employee, Company };
