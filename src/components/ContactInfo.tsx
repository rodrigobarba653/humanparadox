import { Icon } from "@iconify/react";
import { contactData } from "@/data";

interface ContactInfoProps {
  showSocialMedia?: boolean;
  showAddress?: boolean;
  showPhone?: boolean;
  showEmail?: boolean;
  className?: string;
}

export default function ContactInfo({
  showSocialMedia = true,
  showAddress = true,
  showPhone = true,
  showEmail = true,
  className = "",
}: ContactInfoProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Social Media */}
      {showSocialMedia && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            {contactData.socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="space-y-3">
        {showPhone && (
          <div className="flex items-center space-x-3">
            <Icon icon="mdi:phone" className="w-5 h-5 text-gray-600" />
            <a
              href={`tel:${contactData.contact.phone}`}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {contactData.contact.phone}
            </a>
          </div>
        )}

        {showEmail && (
          <div className="flex items-center space-x-3">
            <Icon icon="mdi:email" className="w-5 h-5 text-gray-600" />
            <a
              href={`mailto:${contactData.contact.email}`}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {contactData.contact.email}
            </a>
          </div>
        )}

        {showAddress && (
          <div className="flex items-start space-x-3">
            <Icon
              icon="mdi:map-marker"
              className="w-5 h-5 text-gray-600 mt-0.5"
            />
            <div className="text-gray-600">
              <p>{contactData.address.street}</p>
              <p>{contactData.address.neighborhood}</p>
              <p>{contactData.address.city}</p>
              <p>{contactData.address.state}</p>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Button */}
      <div className="pt-2">
        <a
          href={contactData.contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          <Icon icon="mdi:whatsapp" className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
