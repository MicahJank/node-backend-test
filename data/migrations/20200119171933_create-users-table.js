
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments(); // defaults to 'id' if no name supplied
    tbl.string('username').notNullable().unique();
    tbl.string('email').unique();
    tbl.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
