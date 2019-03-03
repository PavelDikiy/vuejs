export default {
  listCourses: JSON.parse(localStorage.getItem('listCourses')) || [],
  listUsers: JSON.parse(localStorage.getItem('listUsers')) || []
}