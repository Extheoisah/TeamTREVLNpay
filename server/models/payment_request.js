const { Model } = require('objection');

class PaymentRequest extends Model {
    static get tableName() {
      return 'payment_requests';
    }
  
    static get relationMappings() {

      const Payment = require('./payment');

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

  exports.PaymentRequest = PaymentRequest;

