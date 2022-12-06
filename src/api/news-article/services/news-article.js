'use strict';

/**
 * news-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-article.news-article');
