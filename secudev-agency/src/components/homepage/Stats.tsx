export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8">
            <h3 className="text-5xl font-headings font-bold text-brand-green">95%</h3>
            <p className="text-lg mt-2">des sites web contiennent des vulnérabilités. Nous protégeons le vôtre.</p>
          </div>
          <div className="p-8">
            <h3 className="text-5xl font-headings font-bold text-brand-green">100+</h3>
            <p className="text-lg mt-2">projets sécurisés livrés avec succès.</p>
          </div>
          <div className="p-8">
            <h3 className="text-5xl font-headings font-bold text-brand-green">Top 10</h3>
            <p className="text-lg mt-2">des pratiques OWASP intégrées dans chaque projet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
