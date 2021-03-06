/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    await knex.schema.createTable("users_events", (table) => {
      table.increments("id").primary();
      table.integer("event_id").references("id").inTable("events").onDelete('CASCADE');
      table.string("user_id").references("id").inTable("users").onDelete('CASCADE');
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function (knex) {
    await knex.schema.dropTable("users_events");
  };
  