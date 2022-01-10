function formatPhone(phone) {
  const newPhone = phone.replace('(', '').replace(')', '').replace('-', '');

  if (newPhone.length === 0) {
    return '';
  };

  if (newPhone.length <= 2) {
    const finalPhone = `(${newPhone.substr(0, 2)}`;
    return finalPhone;
  };

  if (newPhone.length === 10) {
    const finalPhone = `(${newPhone.substr(0, 2)})${newPhone.substr(2, 4)}-${newPhone.substr(6)}`;
    return finalPhone;
  };

  if (newPhone.length > 8) {
    const finalPhone = `(${newPhone.substr(0, 2)})${newPhone.substr(2, 5)}-${newPhone.substr(7)}`;
    return finalPhone;
  };

  const finalPhone = `(${newPhone.substr(0, 2)})${newPhone.substr(2, (newPhone.length - 2))}`;
  return finalPhone;
}

export { formatPhone };

