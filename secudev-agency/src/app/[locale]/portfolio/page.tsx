import PortfolioGrid from '@/components/portfolio/PortfolioGrid';

export default function PortfolioPage() {
  return (
    <div className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headings tracking-tight text-gray-900 sm:text-4xl">Notre Portfolio</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Découvrez quelques-unes de nos réalisations les plus récentes.
          </p>
        </div>
        <div className="mt-16">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
}
