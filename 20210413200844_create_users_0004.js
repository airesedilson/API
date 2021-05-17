
exports.up = function(knex) {

    return knex.schema.createTable('users', function(table){
        table.string('id').primary();
        table.string('username', 30).unique();
      
        table.enu('login_with', ['telemovel','e-mail','register']).defaultTo('register');
        table.enu('user_type', ['guest','admin']).defaultTo('guest');
        table.enu('access', ['denied', 'accepted']).defaultTo('accepted');
        table.text('password').notNullable();
        table.datetime('created_at').defaultTo(knex.fn.now());
        table.datetime('updated_at').defaultTo(knex.fn.now());  
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
  
};
