import axios from "axios";

export default {

    getStudents: function () {
        return axios.get("/api/students");
    },

    getStudent: function (id) {
        return axios.get("/api/students/" + id);
    },
    // Deletes the book with the given id
    deleteStudent: function (id) {
        return axios.delete("/api/students/" + id);
    },
    // Saves a book to the database
    saveStudents: function (studentData) {
        return axios.post("/api/students", studentData);
    }
};
