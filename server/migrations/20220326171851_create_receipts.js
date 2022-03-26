/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("receipts", (table) => {
        table.increments("id").primary();
        table.float("amount");
        table.string("address");
        table.enu('currency', ['BTC', 'USD'], { useNative: true, enumName: 'currency_type' });
        table.datetime("payment_date");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("receipts");
};
