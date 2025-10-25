export default function ServicesTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-headings font-bold mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          <div className="bg-brand-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Développement Web</h3>
            <p>Création de sites et applications web sur-mesure, sécurisés et performants.</p>
          </div>
          <div className="bg-brand-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Développement Mobile</h3>
            <p>Applications natives et cross-platform avec un focus sur la sécurité des données.</p>
          </div>
          <div className="bg-brand-light p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Audits de Sécurité</h3>
            <p>Analyse de vos applications existantes pour identifier et corriger les failles de sécurité.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
