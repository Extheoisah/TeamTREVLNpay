const { Model } = require('objection');

class Receipt extends Model {
    static get tableName() {
      return 'receipts';
    }
}