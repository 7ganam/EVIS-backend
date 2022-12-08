"use strict";

/**
 * application-for-post-report-download controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::application-for-post-report-download.application-for-post-report-download",
  ({ strapi }) => ({
    async create(ctx) {
      // some logic here
      const response = await super.create(ctx);
      // some more logic
      try {
        const {
          first_name,
          last_name,
          company,
          job_title,
          country,
          phone_number,
          email,
        } = ctx.request.body.data;

        await strapi.plugins["email"].services.email.send({
          to: "evis@nirvanaholding.com",
          from: "webmaster@nirvanatls.com",
          subject: "Post Report downloaded",
          text: `          
          first_name: ${first_name}
          last_name: ${last_name}
          company: ${company}
          job_title: ${job_title}
          country: ${country}
          phone_number: ${phone_number}
          email: ${email}`,
        });
      } catch (error) {
        console.log("error :>> ", error);
      }

      return response;
    },
  })
);
