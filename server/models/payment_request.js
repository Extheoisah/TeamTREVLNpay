const { Model } = require('objection');
const Payment = require('./payment')

class PaymentRequest extends Model {
    static get tableName() {
      return 'payment_requests';
    }
  
    static get relationMappings() {
      return {
        payments: {
          relation: Model.HasManyRelation,
          modelClass: Payment,
          join: {
            from: 'payment_requests.id',
            to: 'payments.payment_requests_id'
          }
        }
      };
    }
  }

