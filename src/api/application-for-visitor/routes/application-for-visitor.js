"use strict";

/**
 * application-for-visitor router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::application-for-visitor.application-for-visitor"
);
