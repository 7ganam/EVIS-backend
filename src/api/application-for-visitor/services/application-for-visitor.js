"use strict";

/**
 * application-for-visitor service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::application-for-visitor.application-for-visitor"
);
