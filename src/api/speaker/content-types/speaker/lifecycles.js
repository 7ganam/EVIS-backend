const slugify = require("slugify");

module.exports = {
  /**
   * Triggered before speaker creation.
   */

  async beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    if (data?.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
  async beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    if (data?.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};
