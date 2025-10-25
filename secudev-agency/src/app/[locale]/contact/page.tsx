import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headings tracking-tight text-gray-900 sm:text-4xl">Contactez-nous</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Une question ? Un projet ? N'hésitez pas à nous laisser un message.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <ContactForm />
          <div className="mt-12 text-center text-gray-600">
            <p className="font-semibold">Vous pouvez aussi nous contacter directement :</p>
            <p>Email : contact@secudevagency.com</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
          </div>
        </div>
      </div>
    </div>
  );
}
