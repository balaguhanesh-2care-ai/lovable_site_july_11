
const CancellationRefunds = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Cancellation and Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            At 2Care.ai, we strive to provide exceptional service and products. This Cancellation and Refund Policy outlines the terms and conditions for cancellations and refunds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancellation Policy</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Subscription services can be cancelled at any time through your account dashboard</li>
            <li>Cancellations take effect at the end of your current billing cycle</li>
            <li>No refunds will be provided for partial months of service</li>
            <li>One-time services can be cancelled within 24 hours of purchase for a full refund</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Refunds are processed within 5-7 business days of approval</li>
            <li>Refunds will be credited to the original payment method</li>
            <li>Service fees and processing charges are non-refundable</li>
            <li>Digital products and completed services are generally non-refundable</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility for Refunds</h2>
          <p className="text-gray-700 mb-4">You may be eligible for a refund under the following circumstances:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Technical issues preventing service access for more than 48 hours</li>
            <li>Billing errors or duplicate charges</li>
            <li>Service not delivered as described</li>
            <li>Cancellation within the specified timeframe</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Request a Refund</h2>
          <p className="text-gray-700 mb-4">To request a refund:</p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Contact our support team at support@2care.ai</li>
            <li>Provide your order number and reason for refund request</li>
            <li>Include any supporting documentation</li>
            <li>Allow 3-5 business days for review and response</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-gray-700">
            For questions about cancellations and refunds, please contact us at:
            <br />
            Email: support@2care.ai
            <br />
            Phone: +91 6364872888 / 7899953477
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefunds;
