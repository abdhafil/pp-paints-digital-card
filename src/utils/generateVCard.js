export function generateVCard(business) {
  const escapeText = (value) => value.replaceAll('\\', '\\\\').replaceAll('\n', '\\n').replaceAll(';', '\\;').replaceAll(',', '\\,')
  const phoneLines = business.phones.map(({ tel }) => `TEL;TYPE=WORK,VOICE:${tel}`).join('\n')
  return `BEGIN:VCARD\nVERSION:3.0\nFN:${escapeText(business.name)}\nORG:${escapeText(business.name)}\nADR;TYPE=WORK:;;${escapeText(business.location)};;;;\n${phoneLines}\nURL:${business.maps}\nEND:VCARD`
}
