'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
   // GET /bookings
   find: async ctx => {
    const id = ctx.state.user.id
    const bookings = await strapi.services.booking.find({
        "user.id": id 
    });
    return bookings
   },

   // POST /booking
   create: async ctx => {
    const { room, time } = ctx.request.body
    const userId = ctx.state.user.id

    const newData = {
        room,
        time,
        user: userId
    }
    const booking = await strapi.services.booking.create(newData);
    return booking
   }

};
