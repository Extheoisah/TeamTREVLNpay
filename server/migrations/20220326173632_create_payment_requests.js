/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("payment_requests", (table) => {
        table.increments("id").primary();
        table.float("amount");
        table.float("btc_usd_ratio");
        table.string("ln_address");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("payment_requests");
};
