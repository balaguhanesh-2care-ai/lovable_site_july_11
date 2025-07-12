import QrCode from '../QrCode';

const QRCodeSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              How to get Started?
            </h2>
            <p className="text-lg mb-2 text-gray-600">
              (1) You can click on the whatsapp Icon on the Bottom left of the website.
            </p>
            <p className="text-lg mb-2 text-gray-600">
              (2) Reach us out through Whatsapp number <span className='font-bold'>6364872188</span>
            </p>
            <p className="text-lg text-gray-600 font-bold">
              (3) Scan the QR code to connect with us.
            </p>
          </div>
          <div className="flex justify-center">
            <QrCode value={whatsappLink} size={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;