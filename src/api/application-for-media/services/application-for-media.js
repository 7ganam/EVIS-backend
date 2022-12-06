"use strict";

/**
 * application-for-media service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::application-for-media.application-for-media"
);
