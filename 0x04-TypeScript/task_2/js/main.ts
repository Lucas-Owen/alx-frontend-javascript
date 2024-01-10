interface Employee {
    getCoffeeBreak(): string,
    workFromHome(): string
}

interface DirectorInterface extends Employee {
    workDirectorTasks(): string,
}

interface TeacherInterface extends Employee {
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome() { return "Working from home"; }
    getCoffeeBreak() { return "Getting a coffee break"; }
    workDirectorTasks() { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {
    workFromHome() { return "Cannot work from home"; }
    getCoffeeBreak() { return "Cannot have a break"; }
    workTeacherTasks() { return "Getting to work"; }
}

interface createEmployeeFunction {
    (salary: number | string): Director | Teacher
}

function createEmployee(salary: number | string) {
    return (typeof(salary) == 'number' && salary < 500)
        ? new Teacher()
        : new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
        employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects) {
    return `Teaching ${todayClass}`;
}
