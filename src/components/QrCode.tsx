import { QRCodeSVG } from 'qrcode.react';

interface QrCodeProps {
  value: string;
  size?: number;
}

const QrCode = ({ value, size = 128 }: QrCodeProps) => {
  return (
    <div style={{ background: 'white', padding: '16px' }}>
      <QRCodeSVG value={value} size={size} />
    </div>
  );
};

export default QrCode;