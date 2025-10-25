'use client';

import CookieConsent from 'react-cookie-consent';

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="J'accepte"
      cookieName="secudev-cookie-consent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
      <span style={{ fontSize: "10px" }}>En naviguant sur ce site, vous acceptez notre utilisation des cookies.</span>
    </CookieConsent>
  );
}
