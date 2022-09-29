'use strict';

/**
 * application-for-visa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-for-visa.application-for-visa');
