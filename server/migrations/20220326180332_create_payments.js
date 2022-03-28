/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("payments", (table) => {
        table.increments("id").primary();
        table.integer("receipt_id").references('receipts.id');
        table.integer("payment_requests_id").references('payment_requests.id');
        table.float("amount");
        table.string("ln_address");
        table.enu('status', ['SUCCESS', 'FAILURE'], { useNative: true, enumName: 'status_type' });
        table.enu('currency', null, { useNative: true, existingType: true, enumName: 'currency_type' });
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
