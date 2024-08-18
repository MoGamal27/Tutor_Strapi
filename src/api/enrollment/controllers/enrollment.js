'use strict';

/**
 * enrollment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::enrollment.enrollment', ({ strapi }) => ({
    async getEnrollmentCourse(ctx) {
      try {
        const enrollment = await strapi.service('api::enrollment.enrollment').fetchenrollment();
        ctx.body = enrollment;  // Use ctx.body instead of ctx.send
      } catch (error) {
        ctx.throw(500, 'Failed to retrieve enrollment: ' + error.message);
      }
    },
  }));;
