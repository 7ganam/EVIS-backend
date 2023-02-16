"use strict";

/**
 * application-for-conference-agenda-download controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::application-for-conference-agenda-download.application-for-conference-agenda-download",
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
          "zayid.ahamed@nirvanatls.com",
        ];
        // console.log(`ctx.query`, admin_emails)
        for (const adminEmail of admin_emails) {
          console.log(`sending email to : `, adminEmail);
          await strapi.plugins["email"].services.email.send({
            to: adminEmail,
            from: "webmaster@nirvanatls.com",
            subject: "Conference Agenda downloaded",
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
        //   subject: "Post Report downloaded",
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
