import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez saisir une adresse email valide." }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;
