import { v4 as uuidv4 } from "uuid";

let students = [
    {
        id: "1",
        title: "Anas",
        description: "test blog 1",
    },
    {
        id: "2",
        title: "Ali",
        description: "text blog 2",
    },
    {
        id: "3",
        title: "Mohammed",
        description: "test blog 3",
    },
];

export const getBlog = (request, response) => {
    response.json(students);
};

export const getIdBlog = (request, response) => {
    const id = request.params.id;
    const student = students.find((student) => student.id === id);
    if (student) {
        response.json(student);
    } else {
        response.send("blog not found");
    }
};

export const deleteBlog = (request, response) => {
    const id = request.params.id;
    students = students.filter((student) => student.id !== id);
    response.json(students);
};

export const addBlog = (request, response) => {
    const student = request.body;
    const studentWithId = { ...student, id: uuidv4() };
    students.push(studentWithId);
    response.send(`blog with id ${studentWithId.id} has been added`);
};

export const updateBlog = (request, response) => {
    const id = request.params.id;
    const { name, grade } = request.body;
    let student = students.find((student) => student.id === id);
    if (name) {
        student.name = name;
    }
    if (grade) {
        student.grade = grade;
    }
    response.send(`Blog with id ${id} has been updated`);
};