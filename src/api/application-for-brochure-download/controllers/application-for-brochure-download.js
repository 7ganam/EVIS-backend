"use strict";

/**
 * application-for-brochure-download controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::application-for-brochure-download.application-for-brochure-download",
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

        const admin_emails = [
          "evis@nirvanaholding.com",
          "7ganam@gmail.com",
          "theanleoua.chu@nirvanatls.com",
        ];
        // console.log(`ctx.query`, admin_emails)
        for (const email of admin_emails) {
          console.log(`sending email to : `, email);
          await strapi.plugins["email"].services.email.send({
            to: email,
            from: "webmaster@nirvanatls.com",
            subject: "Brochure downloaded",
            text: `          
          first_name: ${first_name}
          last_name: ${last_name}
          company: ${company}
          job_title: ${job_title}
          country: ${country}
          phone_number: ${phone_number}
          email: ${email}`,
          });
        }

        // await strapi.plugins["email"].services.email.send({
        //   to: "evis@nirvanaholding.com",
        //   from: "webmaster@nirvanatls.com",
        //   subject: "Brochure downloaded",
        //   text: `
        //   first_name: ${first_name}
        //   last_name: ${last_name}
        //   company: ${company}
        //   job_title: ${job_title}
        //   country: ${country}
        //   phone_number: ${phone_number}
        //   email: ${email}`,
        // });
      } catch (error) {
        console.log("error :>> ", error);
      }

      return response;
    },
  })
);
