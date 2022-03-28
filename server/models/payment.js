const { Model } = require('objection');
const path = require('path');

class Payment extends Model {
    static get tableName() {
      return 'payments';
    }
  
    static get relationMappings() {
      
      return {
        receipt: {
          relation: Model.BelongsToOneRelation,
          modelClass: path.join(__dirname, 'receipt'),
          join: {
            from: 'payments.receipt_id',
            to: 'receipts.id'
          }
        }
      };
    }
  }

  exports.Payment = Payment;

