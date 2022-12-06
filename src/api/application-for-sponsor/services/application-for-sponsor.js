"use strict";

/**
 * application-for-sponsor service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::application-for-sponsor.application-for-sponsor"
);
