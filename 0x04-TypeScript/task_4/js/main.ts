export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();
export const cTeacher: Subjects.Teacher = { firstName: "Linus", lastName: "Torvalds", experienceTeachingC: 10 }

const strs = ["C++", "React", "Java"]
const subjects = [cpp, react, java]
for ( let i:number =0; i<subjects.length; i++) {
    subjects[i].setTeacher(cTeacher);
    console.log(strs[i]);
    console.log(subjects[i].getRequirements());
    console.log(subjects[i].getAvailableTeacher());
}
