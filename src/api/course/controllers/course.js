// path: ./src/api/course/controllers/course.js

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
  async getAllCourses(ctx) {
    try {
      const courses = await strapi.service('api::course.course').fetchAllCourses();
      ctx.body = courses;  // Use ctx.body instead of ctx.send
    } catch (error) {
      ctx.throw(500, 'Failed to retrieve courses: ' + error.message);
    }
  },
}));

