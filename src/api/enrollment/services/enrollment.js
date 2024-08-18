'use strict';

/**
 * enrollment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enrollment.enrollment', ({ strapi }) => ({
    async fetchenrollment() {
      try {
        const enrollments = await strapi.db.query('api::enrollment.enrollment').findMany({
          populate: ['course', 'users_permissions_user'],
        });
        return enrollments;
      } catch (error) {
        throw new Error('Error fetching enrollments: ' + error.message);
      }
    },
  }));;
