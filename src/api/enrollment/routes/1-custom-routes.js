module.exports = {
    routes: [
        {
          method: 'GET',
          path: '/enrollments/getEnrollmentCourse', // Custom route
          handler: 'enrollment.getEnrollmentCourse',
        }
    ]
}