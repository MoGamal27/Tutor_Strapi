// path: ./src/api/course/services/course.js

'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course.course', ({ strapi }) => ({
  async fetchAllCourses() {
    try {
      const courses = await strapi.db.query('api::course.course').findMany({
        populate: ['category'],
      });
      return courses;
    } catch (error) {
      throw new Error('Error fetching courses: ' + error.message);
    }
  },
}));



