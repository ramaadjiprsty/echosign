import { useState } from 'react';

interface UseAuthFormProps {
  initialValues?: { email: string; password: string };
}

export const useAuthForm = ({
  initialValues = { email: '', password: '' },
}: UseAuthFormProps = {}) => {
  const [form, setForm] = useState(initialValues);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return {
    form,
    setForm,
    updateField,
    resetForm,
  };
};