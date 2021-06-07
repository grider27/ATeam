/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getStudents: function () {
    return axios.get('/api/students');
  },

  getStudent: function (id) {
    return axios.get('/api/students/' + id);
  },
  // Deletes the book with the given id
  deleteStudent: function (id) {
    return axios.delete('/api/students/' + id);
  },
  // Saves a book to the database
  saveStudents: function (studentData) {
    return axios.post('/api/students', studentData);
    },
  
  updateStudent: function (id, studentData) {
    return axios.put('/api/students/' + id, studentData);
    },
};
