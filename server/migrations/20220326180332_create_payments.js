/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("payments", (table) => {
        table.increments("id").primary();
        table.integer("receipt_id");
        table.integer("payment_requests_id");
        table.float("amount");
        table.string("ln_address");
        table.enu('status', ['success', 'failed'], { useNative: true, enumName: 'status_type' });
        table.enu('currency', ['BTC', 'USD'], { useNative: true, enumName: 'currency_type' });
        table.datetime("transaction_date");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("payments");
};
