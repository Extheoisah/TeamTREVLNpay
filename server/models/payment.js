const { Model } = require('objection');
const Receipt = require('./receipt')

class Payment extends Model {
    static get tableName() {
      return 'payments';
    }
  
    static get relationMappings() {
      return {
        receipt: {
          relation: Model.BelongsToOneRelation,
          modelClass: Receipt,
          join: {
            from: 'payments.receipt_id',
            to: 'receipts.id'
          }
        }
      };
    }
  }

