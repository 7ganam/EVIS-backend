"use strict";

/**
 * application-for-media router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::application-for-media.application-for-media"
);
