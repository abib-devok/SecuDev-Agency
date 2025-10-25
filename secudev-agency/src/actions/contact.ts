'use server';

import { createServerClient } from '@/lib/supabase/client';
import { contactFormSchema, ContactFormState } from '@/lib/schemas';

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const supabase = createServerClient();

  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.errors.map((err) => err.message).join(', '),
    };
  }

  const { error } = await supabase
    .from('contacts')
    .insert([validatedFields.data]);

  if (error) {
    console.error('Supabase error:', error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
    };
  }

  return {
    success: true,
    message: 'Merci ! Votre message a bien été envoyé. Nous vous répondrons bientôt.',
  };
}
