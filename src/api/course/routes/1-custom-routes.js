module.exports = {
    routes: [
        {
          method: 'GET',
          path: '/courses/getAllCourses', // Custom route
          handler: 'course.getAllCourses',
        }
    ]
}
