import { useState } from "react";
import { ContactRound, Share2 } from "lucide-react";
import business from "../../data/business.js";
import { generateVCard } from "../../utils/generateVCard.js";
import { shareProfile } from "../../utils/shareProfile.js";

export default function ProfileActions() {
  const [status, setStatus] = useState("");

  function saveContact() {
    const file = new Blob([generateVCard(business)], {
      type: "text/vcard;charset=utf-8",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pp-paints.vcf";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    setStatus("Contact card downloaded.");
  }

  async function share() {
    try {
      const result = await shareProfile({
        title: business.name,
        text: `${business.name} · ${business.location}`,
      });
      if (result === false) {
        const copyPrompt = window.prompt(
          "Copy the business profile link:",
          window.location.href,
        );
        setStatus(
          copyPrompt === null
            ? "Share cancelled."
            : "Profile link ready to copy.",
        );
      } else {
        setStatus(
          result === "copied" ? "Profile link copied." : "Profile shared.",
        );
      }
    } catch (error) {
      if (error.name !== "AbortError")
        setStatus("Could not share the profile. Please try again.");
    }
  }

  return (
    <div className="mt-7">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={saveContact}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ContactRound size={17} />
          Save contact
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Share2 size={17} />
          Share profile
        </button>
      </div>
      <p className="mt-2 min-h-5 text-sm text-slate-300" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
