import confetti from 'canvas-confetti';
import { CustomOrderRequest } from '../types';

export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const STUDIO_WHATSAPP_NUMBER = '917075876603'; // Studio WhatsApp
export const STUDIO_PHONE_DISPLAY = '+91 70758 76603';
export const STUDIO_SECONDARY_PHONE = '+91 72072 09932';
export const STUDIO_EMAIL = 'prasanthgraphicdesigner@gmail.com';
export const STUDIO_LOCATION = 'Anakapalli, Andhra Pradesh';
export const STUDIO_HEAD = 'Prasanth';

export const generateWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STUDIO_WHATSAPP_NUMBER}?text=${encoded}`;
};

export const createCustomQuoteWhatsAppMessage = (quote: CustomOrderRequest): string => {
  return `*TUFT HOUSE — Custom Order Request* ✨
*Ref ID:* ${quote.id}
----------------------------------------
*Client Name:* ${quote.customerName}
*Phone / WhatsApp:* ${quote.phone}
*Email:* ${quote.email}

*Product Category:* ${quote.category}
*Dimensions:* ${quote.dimensions || `${quote.customWidth || 'Custom'} × ${quote.customHeight || 'Custom'} ${quote.dimensionUnit}`}
*Pile Style:* ${quote.pileStyle}
*Preferred Colors:* ${quote.preferredColors.join(', ') || 'Studio recommendation'}
*Quantity:* ${quote.quantity}
*Required By:* ${quote.requiredDeliveryDate || 'Standard turnaround'}
*Budget Range:* ${quote.budgetRange || 'Flexible'}

*Design Description / Notes:*
${quote.description}
${quote.customText ? `*Custom Text/Initials to Tuft:* "${quote.customText}"` : ''}

_Sent via TUFT HOUSE Custom Order Portal (tufthouse.in)_`;
};

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B6A18A', '#786653', '#EAE4D8', '#C49746', '#292720']
    });
  } catch (e) {
    // ignore
  }
};
