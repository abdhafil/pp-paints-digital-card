import business from "../../data/business.js";
import Button from "../common/Button.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { MessageCircle, Phone } from "lucide-react";

export default function ContactActions() {
  return (
    <section aria-labelledby="contact-title" className="space-y-4">
      <SectionTitle>
        <span id="contact-title">Call or message</span>
      </SectionTitle>
      <div className="divide-y divide-slate-200">
        {business.phones.map((phone) => (
          <div
            key={phone.tel}
            className="flex flex-col justify-between gap-3 py-4 first:pt-0 sm:flex-row sm:items-center"
          >
            <p className="font-semibold text-[#17283F]">{phone.number}</p>
            <div className="flex gap-2">
              <Button
                href={`tel:${phone.tel}`}
                aria-label={`Call ${phone.number}`}
                className="gap-2 bg-[#17283F] px-4 py-2.5 text-white hover:bg-slate-700"
              >
                <Phone size={15} />
                Call
              </Button>
              <Button
                href={`https://wa.me/${phone.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${phone.number}`}
                className="gap-2 bg-[#F97316] px-4 py-2.5 text-white hover:bg-orange-700"
              >
                <MessageCircle size={15} />
                WhatsApp
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
