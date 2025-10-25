export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-headings font-bold mb-12">Ce que nos clients disent</h2>
        <div className="max-w-3xl mx-auto">
          {/* Placeholder testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-4">"L'équipe de SecuDev a transformé notre vision en une application robuste et sécurisée. Leur expertise est inégalée."</p>
            <p className="font-bold">- Alex, CEO de E-Commerce Secure</p>
          </div>
        </div>
      </div>
    </section>
  );
}
