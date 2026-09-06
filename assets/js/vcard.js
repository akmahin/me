import { siteData } from './config.js';

/**
 * Generates and triggers download of a vCard (.vcf) contact card.
 * Synchronized with the centralized siteData layer.
 * Compatible with iOS Contacts and Android Contacts.
 */
export function downloadVCard() {
  const { profile, contact, social } = siteData;
  
  const vcardLines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.fullName}`,
    `N:Mohiuddin;Abdul Kadir;;;`,
    `TITLE:${profile.title}`,
    `ADR;TYPE=WORK:;;;Doha;;;Qatar`,
    `NOTE:${profile.positioningStatement.replace(/[,;\\]/g, '\\$&')}`,
    `TEL;TYPE=CELL,VOICE:${contact.call}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `URL;TYPE=WORK:${window.location.href}`
  ];

  if (Array.isArray(social)) {
    social.forEach(s => {
      vcardLines.push(`X-SOCIALPROFILE;type=${s.id}:${s.url}`);
    });
  }

  vcardLines.push('END:VCARD');

  const vcardContent = vcardLines.join('\r\n');
  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${profile.fullName.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
