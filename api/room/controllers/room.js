'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 module.exports = {
    // GET /rooms
    find: async ctx => {
     const userCompanyId = ctx.state.user.company
     const rooms = await strapi.services.room.find({
         "company.id": userCompanyId
     });
     return rooms
    }
 
 };
