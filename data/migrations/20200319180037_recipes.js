exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');

            tbl.string('Name').notNullable();
            tbl.string('Description').notNullable().unique();
        }) //creates recipe name and description

    .createTable('steps', tbl => {
            tbl.incriments('steps_id');

            tbl.number('step_number').notNullable();
            tbl.number('recipe_id').notNullable().unique();
        }) //creates steps with step number and recipe_ID

    .createTable('recipe_ingredients', tbl => {

            tbl.number('recipe_id').notNullable();
            tbl.number('ingredient_id').notNullable();
            tbl.number('quantity').notNullable();
        }) // this is the code for the intermediate table to join recipes with ingredients.

    .createTable('ingredients', tbl => {
        tbl.increments('ingredients_id');

        tbl.string('ingredient_name').notNullable().unique();
    })
};

exports.down = function(knex) {
    return (
        knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
    );
};