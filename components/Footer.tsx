"use client";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    url: string;
  }

  const socialLinks: SocialLink[] = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/sanskrithigroup_ptp/?hl=en",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/sseptp/",
    },
    {
      icon: Twitter,
      url: "https://x.com/SanskrithiGroup",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sgiputtaparthi/",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-white to-red-100 text-red-900 mt-16 rounded-t-3xl shadow-lg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-2">
            Sanskrithi Group of Institutions
          </h2>
          <p className="text-base sm:text-lg text-red-800 max-w-2xl mx-auto">
            Empowering future engineers with knowledge, skills, and values since 2010.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white border border-red-200 rounded-xl p-6 shadow text-red-800">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-red-700">
            Contact Information
          </h3>
          <div className="grid gap-6 sm:grid-cols-3 text-sm sm:text-base">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <MapPin className="w-6 h-6 mb-2 text-red-500" />
              <span>
                Beedupalli Knowledgepark, Behind SSSIHMS, Puttaparthi,
                <br />
                Sri Sathya Sai District, AP - 515134
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Phone className="w-6 h-6 mb-2 text-green-600" />
              <span>+91 9100064545 / 74545</span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <Mail className="w-6 h-6 mb-2 text-yellow-600" />
              <span>enquiry@sseptp.org</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mt-10">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-red-700">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-100 hover:bg-red-200 transition rounded-full p-3"
                aria-label={`Social link ${i}`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-red-200 mt-10 pt-6 text-center">
          <p className="text-sm sm:text-base text-red-700 mb-2">
            For any queries or information, please contact the respective departments.
          </p>
          <p className="text-xs sm:text-sm text-red-600">
            © {new Date().getFullYear()} Sanskrithi Group of Institutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
