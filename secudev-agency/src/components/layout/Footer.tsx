import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About SecuDev */}
          <div>
            <h3 className="text-xl font-headings font-bold mb-4">SecuDev Agency</h3>
            <p className="text-brand-light/80">
              Agence de développement web et mobile spécialisée dans la création de solutions digitales ultra-sécurisées.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-headings font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-brand-green transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-green transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl font-headings font-bold mb-4">Restons Connectés</h3>
            <p className="text-brand-light/80 mb-4">contact@secudevagency.com</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-green transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-brand-green transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-light/60">
          <p>&copy; {new Date().getFullYear()} SecuDev Agency. Tous droits réservés.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="/legal/mentions-legales" className="hover:text-white">Mentions Légales</Link>
            <Link href="/legal/politique-de-confidentialite" className="hover:text-white">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
