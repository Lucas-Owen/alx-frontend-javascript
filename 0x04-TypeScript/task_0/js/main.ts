interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Lucious",
    lastName: "Fox",
    age: 19,
    location: "Gotham"
}

const student2: Student = {
    firstName: "Bruce",
    lastName: "Banner",
    age: 18,
    location: "New York"
}

const studentList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
const title = table.insertRow();
title.insertCell().innerText = "Student Name  ";
title.insertCell().innerText = "Location";
studentList.forEach((student) => {
    const tr = table.insertRow();
    const nameCell = tr.insertCell();
    const locationCell = tr.insertCell();
    nameCell.innerText = student.firstName;
    locationCell.innerText = student.lastName;
})
document.body.appendChild(table);
