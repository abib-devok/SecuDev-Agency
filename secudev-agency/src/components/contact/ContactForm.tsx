'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

import { contactFormSchema } from '@/lib/schemas';
import { submitContactForm } from '@/actions/contact';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-brand-green hover:bg-green-500 text-brand-blue font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:bg-gray-400"
    >
      {pending ? 'Envoi en cours...' : 'Envoyer le Message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state?.success) {
      reset();
    }
  }, [state, reset]);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">Nom</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full mt-2 p-3 bg-white border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green"
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium">Email</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-full mt-2 p-3 bg-white border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium">Message</label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className="w-full mt-2 p-3 bg-white border border-gray-300 rounded-lg focus:ring-brand-green focus:border-brand-green"
        />
        {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      <div>
        <SubmitButton />
      </div>
      {state && (
        <p className={`${state.success ? 'text-green-600' : 'text-red-600'} text-center font-semibold`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
