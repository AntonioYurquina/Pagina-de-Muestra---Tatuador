// Funciones de validación para formularios

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  const re = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && re.test(phone);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateInstagram = (username) => {
  const re = /^@?[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/;
  return re.test(username);
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.nombre)) {
    errors.nombre = 'El nombre es requerido';
  }

  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Email inválido';
  }

  if (formData.telefono && !validatePhone(formData.telefono)) {
    errors.telefono = 'Teléfono inválido';
  }

  if (formData.instagram && !validateInstagram(formData.instagram)) {
    errors.instagram = 'Usuario de Instagram inválido';
  }

  if (!validateRequired(formData.mensaje)) {
    errors.mensaje = 'El mensaje es requerido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
