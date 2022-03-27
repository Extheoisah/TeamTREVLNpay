const { Model } = require('objection');

class Payment extends Model {
    static get tableName() {
      return 'payments';
    }
  
    static get relationMappings() {
      
      const Receipt = require('./receipt');
  
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

  exports.Payment = Payment;

