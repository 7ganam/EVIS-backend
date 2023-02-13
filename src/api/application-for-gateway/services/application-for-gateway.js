'use strict';

/**
 * application-for-gateway service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-for-gateway.application-for-gateway');
