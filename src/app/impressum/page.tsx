'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaBuilding, FaArrowLeft } from 'react-icons/fa';

export default function Impressum() {
  return (
    <main className="min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
      >
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 sm:mb-16 text-lg"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-12 sm:mb-20">
          <motion.p 
            className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            IMPRESSUM
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Impressum
          </motion.h1>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-400">
              Daniel Deibert<br />
              Pommersche Straße 9<br />
              94315 Straubing
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Kontakt</h2>
            <p className="text-gray-400">
              Telefon: +49 173 8402894<br />
              E-Mail: contact@dandeib.de
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-gray-400">
              Daniel Deibert<br />
              Pommersche Straße 9<br />
              94315 Straubing
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Haftungsausschluss</h2>
            <p className="text-gray-400">
              <strong>Haftung für Inhalte</strong><br />
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p className="text-gray-400">
              <strong>Haftung für Links</strong><br />
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}