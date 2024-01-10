interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: Boolean,
    yearsOfExperience?: number,
    location: string,
};

interface Directors extends Teacher {
    numberOfReports: number,
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

interface StudentInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string,
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}

