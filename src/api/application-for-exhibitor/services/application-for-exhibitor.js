"use strict";

/**
 * application-for-exhibitor service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::application-for-exhibitor.application-for-exhibitor"
);
