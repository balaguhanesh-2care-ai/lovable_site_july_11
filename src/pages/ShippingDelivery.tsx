
const ShippingDelivery = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Shipping and Delivery Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            This Shipping and Delivery Policy explains how 2Care.ai handles the delivery of our digital services and any physical products.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Digital Services</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Digital services are delivered instantly upon successful payment</li>
            <li>Access credentials will be sent to your registered email address</li>
            <li>No physical shipping is required for digital products</li>
            <li>Service activation typically occurs within 15 minutes of payment confirmation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Physical Products (if applicable)</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Processing time: 1-2 business days</li>
            <li>Domestic shipping: 3-7 business days</li>
            <li>International shipping: 7-14 business days</li>
            <li>Express shipping options available at checkout</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Charges</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Shipping charges are calculated at checkout</li>
            <li>Free shipping available for orders above certain thresholds</li>
            <li>Express shipping charges apply for expedited delivery</li>
            <li>International shipping may incur additional customs fees</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Areas</h2>
          <p className="text-gray-700 mb-4">We currently deliver to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All major cities in India</li>
            <li>Selected international locations</li>
            <li>Remote areas may have extended delivery times</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Tracking</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Tracking information provided via email and SMS</li>
            <li>Real-time tracking available through our website</li>
            <li>Delivery notifications sent upon successful delivery</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Issues</h2>
          <p className="text-gray-700 mb-4">In case of delivery issues:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Contact our support team immediately</li>
            <li>Provide order number and tracking details</li>
            <li>We will investigate and resolve within 24 hours</li>
            <li>Replacement or refund options available for lost packages</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-gray-700">
            For shipping and delivery inquiries:
            <br />
            Email: support@2care.ai
            <br />
            Phone: +91 6364872888 / 7899953477
            <br />
            Address: #17, 7th Main Road, 2nd floor, II stage Indiranagar Bangalore - 560038
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;
