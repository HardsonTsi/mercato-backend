import speakeasy from 'speakeasy';
import config from '@/config/config';


const generateOtpCode = () => {
  return speakeasy.totp({
    secret: config.speakeasy.secret,
    digits: config.speakeasy.digits,
    step: config.speakeasy.duration,
    encoding: 'base64',
  });
};

const verifyOtpCode = (code: string) => {
  return speakeasy.totp.verify({
    token: code,
    secret: config.speakeasy.secret,
    digits: config.speakeasy.digits,
    step: config.speakeasy.duration,
    encoding: 'base64',
  });
};

export default { generateOtpCode, verifyOtpCode };
