"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import acts from "@/assets/companies/acts.png";
import aventis from "@/assets/companies/aventis.gif";
import avis from "@/assets/companies/avis.png";
import blockbuster from "@/assets/companies/blockbuster.png";
import burkerhilltower from "@/assets/companies/burkerhilltower.png";
import castrolSquare2 from "@/assets/companies/castrol_square2.jpg";
import ccps from "@/assets/companies/ccps.jpg";
import cec from "@/assets/companies/cec.jpg";
import cendant from "@/assets/companies/cendant.jpg";
import chop from "@/assets/companies/chop.gif";
import coach from "@/assets/companies/coach.png";
import csc from "@/assets/companies/csc.gif";
import departmentOfJustice from "@/assets/companies/departmentofjustice.png";
import ericsson from "@/assets/companies/ericsson.png";
import gucciLogo from "@/assets/companies/gucci-logo.jpg";
import hbo from "@/assets/companies/hbo.png";
import kennethCole from "@/assets/companies/kenneth_cole.png";
import lehrer from "@/assets/companies/lehrer.png";
import njtransit from "@/assets/companies/njtransit.jpg";
import pella from "@/assets/companies/pella.gif";
import pharmacia from "@/assets/companies/pharmacia.jpg";
import phillips from "@/assets/companies/phillips.jpg";
import portAuthority from "@/assets/companies/portauthority.png";
import roc from "@/assets/companies/roc.jpg";
import sos from "@/assets/companies/sos.png";
import starbucks from "@/assets/companies/starbucks.png";
import telcodia from "@/assets/companies/telcodia.png";
import trumpTower from "@/assets/companies/trumptower.png";
const clientLogos = [
  { name: "Acts", logo: acts },
  { name: "Aventis", logo: aventis },
  { name: "Avis", logo: avis },
  { name: "Blockbuster", logo: blockbuster },
  { name: "Burker Hill Tower", logo: burkerhilltower },
  { name: "Castrol Square", logo: castrolSquare2 },
  { name: "CCPS", logo: ccps },
  { name: "CEC", logo: cec },
  { name: "Cendant", logo: cendant },
  { name: "CHOP", logo: chop },
  { name: "Coach", logo: coach },
  { name: "CSC", logo: csc },
  { name: "Department of Justice", logo: departmentOfJustice },
  { name: "Ericsson", logo: ericsson },
  { name: "Gucci", logo: gucciLogo },
  { name: "HBO", logo: hbo },
  { name: "Kenneth Cole", logo: kennethCole },
  { name: "Lehrer", logo: lehrer },
  { name: "NJ Transit", logo: njtransit },
  { name: "Pella", logo: pella },
  { name: "Pharmacia", logo: pharmacia },
  { name: "Phillips", logo: phillips },
  { name: "Port Authority", logo: portAuthority },
  { name: "ROC", logo: roc },
  { name: "SOS", logo: sos },
  { name: "Starbucks", logo: starbucks },
  { name: "Telcodia", logo: telcodia },
  { name: "Trump Tower", logo: trumpTower },
];

export default function ClientLogosSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4 font-oswald tracking-tighter">
            <span className="text-[#054177]">Trusted by Leading</span>{" "}
            <span className="text-[#C03140]">Brands</span>
          </h2>
          <div className="w-24 h-1 bg-[#C03140] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            For over 35 years, American Glass Coatings has provided premium
            window film solutions to some of the most prestigious brands and
            properties in South Florida.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          direction="left"
        >
          <div className="flex items-center py-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={180}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>

        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-3xl mx-auto bg-gray-50 p-6 border-l-4 border-[#054177] shadow-sm">
          <p className="text-gray-700 italic">
            "Our commitment to quality and exceptional service has made us the
            preferred choice for luxury hotels, cruise lines, and high-end
            residential properties throughout South Florida. When you choose
            American Glass Coatings, you're in good company."
          </p>
          <p className="text-right mt-4 text-[#054177] font-semibold">
            — American Glass Coatings Team
          </p>
        </div>
      </div>
    </section>
  );
}
