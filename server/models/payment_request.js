const { Model } = require('objection');
const path = require('path');

class PaymentRequest extends Model {

    static get tableName() {
      return 'payment_requests';
    }
  
    static get relationMappings() {

      return {
        payments: {
          relation: Model.HasManyRelation,
          modelClass: path.join(__dirname, 'payment'),
          join: {
            from: 'payment_requests.id',
            to: 'payments.payment_requests_id'
          }
        }
      };
    }
  }

  exports.PaymentRequest = PaymentRequest;

