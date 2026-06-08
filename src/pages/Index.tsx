import { useState } from "react";
import HeroAbout from "@/components/site/HeroAbout";
import ServicesProcess from "@/components/site/ServicesProcess";
import ReviewsContactsFooter from "@/components/site/ReviewsContactsFooter";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", agree: false });
  const [leadEmail, setLeadEmail] = useState("");
  const [leadAgree, setLeadAgree] = useState(false);

  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--color-beige)" }}>
      <HeroAbout menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ServicesProcess
        leadEmail={leadEmail}
        setLeadEmail={setLeadEmail}
        leadAgree={leadAgree}
        setLeadAgree={setLeadAgree}
      />
      <ReviewsContactsFooter
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
