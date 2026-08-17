/* ==========================================
   KHAIR ALLAH MEDICAL TOURISM
   ENGLISH / ARABIC LANGUAGE SYSTEM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const englishButton = document.getElementById("lang-en");
    const arabicButton = document.getElementById("lang-ar");

    if (!englishButton || !arabicButton) {
        return;
    }

    const translations = {

        /* =========================================================
           ENGLISH
        ========================================================= */

        en: {

            /* ================= NAVIGATION ================= */

            "Home": "Home",
            "About": "About",
            "Medical": "Medical",
            "Tourism": "Tourism",
            "Clients": "Clients",
            "Terms & Conditions": "Terms & Conditions",
            "Contact": "Contact",

            "Plan Your Visit": "Plan Your Visit",
            "Our Story": "Our Story",


            /* ================= COMMON SECTIONS ================= */

            "WHY CHOOSE US": "WHY CHOOSE US",
            "OUR SERVICES": "OUR SERVICES",
            "ABOUT US": "ABOUT US",
            "CONTACT US": "CONTACT US",
            "OUR ACHIEVEMENTS": "OUR ACHIEVEMENTS",
            "OUR STORY": "OUR STORY",
            "OUR PHILOSOPHY": "OUR PHILOSOPHY",
            "LET'S PLAN YOUR VISIT": "LET'S PLAN YOUR VISIT",


            /* ================= STATS ================= */

            "Years of Excellence": "Years of Excellence",
            "Happy Guests": "Happy Guests",
            "Team Members": "Team Members",

            "15+ Years of Experience": "15+ Years of Experience",
            "10,000+ Happy Guests": "10,000+ Happy Guests",
            "Leading Hospitals": "Leading Hospitals",
            "Arabic Support": "Arabic Support",
            "Complete Travel Assistance": "Complete Travel Assistance",
            "Personal Care": "Personal Care",


            /* ================= WHY CHOOSE US ================= */

            "choose-desc-1":
                "More than a decade of trusted medical tourism experience serving patients from across the GCC and beyond.",

            "choose-desc-2":
                "Thousands of successful medical journeys built on trust, honesty and compassionate care.",

            "choose-desc-3":
                "We coordinate with reputed hospitals and specialists across Kerala to provide quality healthcare.",

            "choose-desc-4":
                "Friendly communication and language assistance throughout your medical journey.",

            "choose-desc-5":
                "Airport pickup, accommodation, transportation and medical coordination under one roof.",

            "choose-desc-6":
                "Every guest is treated with dignity, respect and genuine hospitality inspired by Kerala's traditions.",


            /* ================= SERVICES ================= */

            "Medical Consultation":
                "Medical Consultation",

            "Hospital Coordination":
                "Hospital Coordination",

            "Airport Reception":
                "Airport Reception",

            "Accommodation":
                "Accommodation",

            "Language Assistance":
                "Language Assistance",

            "Local Transportation":
                "Local Transportation",

            "Tourism & Sightseeing":
                "Tourism & Sightseeing",

            "Post-Treatment Support":
                "Post-Treatment Support",


            "service-desc-1":
                "Consultation with specialists before your arrival for better treatment planning.",

            "service-desc-2":
                "Seamless coordination with leading hospitals and doctors across Kerala.",

            "service-desc-3":
                "Warm airport welcome with comfortable transfers to your accommodation.",

            "service-desc-4":
                "Comfortable stays carefully selected for convenience and peace of mind.",

            "service-desc-5":
                "Arabic and multilingual support throughout your medical journey.",

            "service-desc-6":
                "Safe, reliable transportation for hospital visits and local travel.",

            "service-desc-7":
                "Discover Kerala's beautiful destinations during your recovery.",

            "service-desc-8":
                "Continued assistance and follow-up care after your treatment.",


            /* ================= FOOTER ================= */

            "Quick Links":
                "Quick Links",

            "Medical Services":
                "Medical Services",

            "Contact Us":
                "Contact Us",

            "Privacy Policy":
                "Privacy Policy",

            "Your Journey to Better Healthcare":
                "Your Journey to Better Healthcare",

            "Every Journey":
                "Every Journey",

            "to Healing":
                "to Healing",

            "Begins with":
                "Begins with",

            "KOCHI • KERALA • INDIA":
                "KOCHI • KERALA • INDIA",


            /* ================= HOME HERO ================= */

            "hero-paragraph":
                "For more than <strong>15 years</strong>, we have welcomed thousands of international guests, especially from the GCC, providing trusted medical tourism services with compassion, professionalism, and Kerala's renowned hospitality.",

            "Trusted by Thousands of International Patients":
                "Trusted by Thousands of International Patients",

            "why-choose-desc":
                "For over 15 years, Khair Allah Medical Tourism has been helping international guests experience world-class healthcare in Kerala with comfort, transparency, and complete peace of mind.",

            "Complete Medical Tourism Support":
                "Complete Medical Tourism Support",

            "services-desc":
                "Everything you need for a smooth, comfortable and stress-free medical journey under one roof.",

            "Our Journey in Numbers":
                "Our Journey in Numbers",

            "stats-desc":
                "Every number represents the trust, care, and commitment we have built over more than 15 years of serving international patients.",

            "Years of Trusted Service":
                "Years of Trusted Service",

            "Happy International Guests":
                "Happy International Guests",

            "Dedicated Professionals":
                "Dedicated Professionals",

            "Primary International Client Base":
                "Primary International Client Base",


            /* ================= STORY ================= */

            "story-heading":
                "A Journey Built on Trust, Compassion & Excellence",

            "story-p1":
                "Khair Allah Medical Tourism began more than <strong>15 years ago</strong> through the vision of <strong>Mr. Muhammed K K</strong>, whose honesty and dedication while working as a tourist taxi driver earned the confidence of hundreds of international guests.",

            "story-p2":
                "Today our organization has grown into a professional team of more than <strong>22 dedicated members</strong>, serving over <strong>10,000 international guests</strong> while maintaining the same values of compassion, transparency and hospitality.",

            "Read Our Complete Story":
                "Read Our Complete Story",

            "Where our journey began.":
                "Where our journey began.",


            /* ================= TRUST ================= */

            "trust-quote":
                "The trust we have earned from our Arab guests has been our greatest achievement. Through recommendations from satisfied families and friends, thousands of international patients have continued choosing Khair Allah Medical Tourism year after year.",

            "Omani Well-Wisher":
                "Omani Well-Wisher",

            "Suggested the name Khair Allah":
                "Suggested the name \"Khair Allah\"",


            /* ================= PHILOSOPHY ================= */

            "The Guest is God":
                "The Guest is God",

            "philosophy-desc":
                "At Khair Allah Medical Tourism, every patient is welcomed with compassion, dignity, and respect. Inspired by Kerala's timeless tradition of hospitality, we believe every guest deserves the highest level of care throughout their healing journey.",


            /* ================= CTA ================= */

            "Ready to Begin Your Healing Journey?":
                "Ready to Begin Your Healing Journey?",

            "cta-desc":
                "Contact our experienced team today and let us help you plan a safe, comfortable, and successful medical trip to Kerala.",

            "WhatsApp Us":
                "WhatsApp Us",

            "Email Us":
                "Email Us",


            /* ================= FOOTER DESCRIPTION ================= */

            "footer-desc":
                "Khair Allah Medical Tourism connects international clients with trusted hospitals and healthcare services in Kerala, ensuring a safe, comfortable, and stress-free medical journey.",

            "footer-address":
                "Nettoor, Maradu,<br>Ernakulam, Kerala - 682040",

            "footer-copyright":
                "© 2026 Khair Allah Medical Tourism. All Rights Reserved.",


            /* =========================================================
               ABOUT PAGE
            ========================================================= */

            "ABOUT KHAIR ALLAH":
                "ABOUT KHAIR ALLAH",

            "about-hero-heading":
                "More Than 15 Years of Trusted Medical Tourism Excellence",

            "about-hero-desc":
                "Serving international guests from Kochi, Kerala with trusted healthcare, compassion, professionalism and genuine hospitality.",

            "Years of Trusted Medical Tourism Excellence":
                "Years of Trusted Medical Tourism Excellence",

            "WHO WE ARE":
                "WHO WE ARE",

            "Trusted Medical Tourism Partner in Kerala":
                "Trusted Medical Tourism Partner in Kerala",

            "about-intro-p1":
                "Welcome to <strong>Khair Allah Medical Tourism</strong>, one of Kerala's trusted medical tourism facilitators, proudly serving international guests from <strong>Kochi, India</strong> for more than <strong>15 years</strong>.",

            "about-intro-p2":
                "Since our journey began, we have been committed to providing personalized medical tourism services that combine world-class healthcare with Kerala's renowned hospitality.",

            "about-intro-p3":
                "We have proudly served more than <strong>10,000 happy international guests</strong>, with the majority of our patients coming from GCC countries, especially the Arab community.",

            "Professionals":
                "Professionals",

            "Years Experience":
                "Years Experience",


            /* ================= ABOUT JOURNEY ================= */

            "OUR JOURNEY":
                "OUR JOURNEY",

            "From One Person's Vision to a Trusted Medical Tourism Company":
                "From One Person's Vision to a Trusted Medical Tourism Company",

            "timeline-desc":
                "Every milestone reflects our commitment to serving international patients with honesty, compassion, and excellence.",

            "2011":
                "2011",

            "The Beginning":
                "The Beginning",

            "timeline-1-desc":
                "Mr. Muhammed K K began helping international visitors as a tourist taxi driver in Kochi. His honesty, kindness, and dedication earned the trust of hundreds of guests.",

            "Growing Trust":
                "Growing Trust",

            "International Recognition":
                "International Recognition",

            "timeline-2-desc":
                "More patients from GCC countries began choosing Khair Allah through referrals from satisfied families and friends.",

            "Expansion":
                "Expansion",

            "A Professional Team":
                "A Professional Team",

            "timeline-3-desc":
                "What started as a one-person service evolved into a dedicated organization with more than 22 experienced professionals.",

            "Leadership":
                "Leadership",

            "Continuing the Vision":
                "Continuing the Vision",

            "timeline-4-desc":
                "Murad M and Najmal joined the leadership team, expanding services while preserving the founder's values of trust and genuine care.",

            "Today":
                "Today",

            "Trusted Worldwide":
                "Trusted Worldwide",

            "timeline-5-desc":
                "More than 10,000 international guests have placed their trust in Khair Allah Medical Tourism, making us one of Kerala's trusted medical tourism facilitators.",


            /* ================= LEADERSHIP ================= */

            "OUR LEADERSHIP":
                "OUR LEADERSHIP",

            "The People Behind Our Success":
                "The People Behind Our Success",

            "leadership-desc":
                "Built on trust, strengthened by experience, and driven by a shared commitment to providing exceptional medical tourism services for every international guest.",

            "Founder":
                "Founder",

            "leader-1-desc":
                "Founder of Khair Allah Medical Tourism. His honesty, compassion, and dedication while serving international guests laid the strong foundation of trust that continues to guide the company today.",

            "leader-2-desc":
                "Continuing the founder's vision by introducing new ideas, modern technology, and expanded services while maintaining the company's commitment to quality and patient care.",

            "leader-3-desc":
                "Joining the family business to strengthen leadership and ensure every international patient receives professional, compassionate, and personalized support throughout their medical journey.",


            /* ================= LEGACY ================= */

            "LEGACY OF TRUST":
                "LEGACY OF TRUST",

            "A Legacy Built on Trust":
                "A Legacy Built on Trust",

            "legacy-desc":
                "The greatest achievement of Khair Allah Medical Tourism has never been numbers—it has always been the trust of the families who confidently recommend us to others.",

            "Omani Well-Wisher & Supporter":
                "Omani Well-Wisher & Supporter",

            "legacy-1-desc":
                "His encouragement and continued support played an important role in strengthening our relationship with the Omani community and international guests.",

            "legacy-2-desc":
                "Mr. Ali Al Mukhaini suggested the name <strong>\"Khair Allah\"</strong>, a name that beautifully reflects our values of kindness, compassion, and sincere service.",

            "legacy-quote":
                "The trust we have earned from our Arab guests has been our greatest achievement. Satisfied clients shared their experiences with family, friends, and communities back home, and through their recommendations, thousands of new guests have continued to choose Khair Allah Medical Tourism year after year.",

            "Trust is our greatest achievement.":
                "Trust is our greatest achievement.",


            /* ================= KERALA HOSPITALITY ================= */

            "Inspired by Kerala's Hospitality":
                "Inspired by Kerala's Hospitality",

            "hospitality-p1":
                "Kerala is internationally known as <strong>\"God's Own Country\"</strong>, celebrated for its healing traditions, natural beauty, and warm hospitality.",

            "hospitality-p2":
                "The name <strong>Khair Allah</strong>, meaning <strong>\"The Goodness of God\"</strong>, reflects our commitment to kindness, sincerity, compassion, and professional service.",

            "hospitality-p3":
                "We believe every patient deserves to feel safe, respected, and cared for like a member of our own family.",


            /* ================= FUTURE ================= */

            "LOOKING AHEAD":
                "LOOKING AHEAD",

            "Our Commitment Never Changes":
                "Our Commitment Never Changes",

            "future-p1":
                "As we continue to grow, our commitment remains unchanged—to provide trusted medical tourism services with honesty, professionalism, and genuine care.",

            "future-p2":
                "Every patient who chooses Khair Allah Medical Tourism is more than a client—they are our valued guest. Their health, comfort, and happiness remain at the heart of everything we do.",

            "future-p3":
                "We look forward to welcoming you to Kerala and becoming your trusted partner on your journey toward better health.",

            "Start Your Medical Journey Today":
                "Start Your Medical Journey Today",

            "about-cta-desc":
                "Our experienced team is ready to assist you with hospital selection, travel planning, accommodation, and complete medical tourism support.",

            "Send an Enquiry":
                "Send an Enquiry",


            /* =========================================================
               MEDICAL PAGE
            ========================================================= */

            "MEDICAL SERVICES":
                "MEDICAL SERVICES",

            "medical-hero-heading":
                "World-Class Healthcare<br>in Kerala",

            "medical-hero-desc":
                "Complete medical coordination and support for international patients with trusted hospitals and specialists.",

            "hero-arabic-meaning":
                "\"Do not grieve; indeed, God is with us.\"",

            "loading":
                "loading…",

            "OUR IMPACT":
                "OUR IMPACT",

            "Trusted by Thousands":
                "Trusted by Thousands",

            "medical-stats-desc":
                "Numbers that reflect the trust and care we deliver every day.",

            "Primary Client Base":
                "Primary Client Base",

            "WHAT WE OFFER":
                "WHAT WE OFFER",

            "Medical Support Services":
                "Medical Support Services",

            "medical-services-desc":
                "We handle every medical aspect of your journey so you can focus on recovery.",

            "medical-card-desc-1":
                "Pre-arrival consultation and doctor matching based on your medical needs.",

            "medical-card-desc-2":
                "Appointments, medical records transfer, and specialist coordination.",

            "medical-card-desc-3":
                "Comfortable airport pickup and drop with dedicated assistance.",

            "medical-card-desc-4":
                "Safe and comfortable stay close to your hospital.",

            "medical-card-desc-5":
                "Arabic and multilingual support throughout your treatment.",

            "medical-card-desc-6":
                "Reliable transport for hospital visits and daily needs.",

            "Treatment Guidance":
                "Treatment Guidance",

            "medical-card-desc-7":
                "Clear guidance on procedures, costs, and recovery plans.",

            "medical-card-desc-8":
                "Continued assistance even after your treatment is complete.",

            "START YOUR JOURNEY":
                "START YOUR JOURNEY",

            "Ready for Medical Care in Kerala?":
                "Ready for Medical Care in Kerala?",

            "medical-cta-desc":
                "Contact our team today. We will help you plan a safe and comfortable medical trip.",

            "Send Enquiry":
                "Send Enquiry",

            "Khair Allah Logo":
                "Khair Allah Logo",

            "Khair Allah Medical Tourism":
                "Khair Allah Medical Tourism",


            /* =========================================================
               TOURISM PAGE
            ========================================================= */

            "TOURISM & SIGHTSEEING":
                "TOURISM & SIGHTSEEING",

            "tourism-hero-heading":
                "Discover the Beauty<br>of Kerala",

            "tourism-hero-desc":
                "While you recover, explore God's Own Country with carefully planned sightseeing experiences.",

            "SWIPE, CLICK, OR USE ARROW KEYS":
                "SWIPE, CLICK, OR USE ARROW KEYS",

            "Explore Kerala":
                "Explore Kerala",

            "FULL ARCHIVE":
                "FULL ARCHIVE",

            "Tourism Gallery":
                "Tourism Gallery",

            "tourism-gallery-desc":
                "From serene backwaters to lush hill stations — experience the best of Kerala during your stay.",

            "PLAN YOUR TRIP":
                "PLAN YOUR TRIP",

            "Combine Healing with Exploration":
                "Combine Healing with Exploration",

            "tourism-cta-desc":
                "Let us arrange comfortable sightseeing packages while you recover in Kerala.",

            "Alleppey Backwaters":
                "Alleppey Backwaters",

            "Munnar Hills":
                "Munnar Hills",

            "Kovalam Beach":
                "Kovalam Beach",

            "Thekkady Wildlife":
                "Thekkady Wildlife",

            "Fort Kochi":
                "Fort Kochi",

            "Houseboat Experience":
                "Houseboat Experience",

            "Ayurvedic Wellness":
                "Ayurvedic Wellness",

            "Athirappilly Falls":
                "Athirappilly Falls",

            "Cherai Beach Sunset":
                "Cherai Beach Sunset",

            "Kerala Backwaters":
                "Kerala Backwaters",

            "Hill Stations":
                "Hill Stations",

            "Beaches":
                "Beaches",

            "Wildlife":
                "Wildlife",

            "Historical Places":
                "Historical Places",

            "Cultural Experiences":
                "Cultural Experiences",

            "Nature & Waterfalls":
                "Nature & Waterfalls",

            "Wellness & Ayurveda":
                "Wellness & Ayurveda",

            "Tourism Support":
                "Tourism Support",

            "tourism-support-desc":
                "We arrange transportation, sightseeing, accommodation and personalized travel assistance during your stay.",

            "Comfortable Transportation":
                "Comfortable Transportation",

            "Personalized Sightseeing":
                "Personalized Sightseeing",

            "Local Assistance":
                "Local Assistance",

            "Safe & Comfortable Travel":
                "Safe & Comfortable Travel",

            "Ready to Explore Kerala?":
                "Ready to Explore Kerala?",

            "tourism-contact-desc":
                "Talk to our team and let us create a comfortable Kerala sightseeing experience around your medical journey.",

            "Plan Your Tourism Experience":
                "Plan Your Tourism Experience",

                /* =========================================================
   CLIENTS PAGE
========================================================= */

"clients.hero.tag":
    "OUR CLIENTS",

"clients.hero.every_smile":
    "Every Smile",

"clients.hero.tells_story":
    "Tells A Story",

"clients.hero.of":
    "Of",

"clients.hero.trust":
    "Trust",

"clients.hero.description":
    "We are honored to serve clients from around the world. Every successful journey reflects our commitment to quality, compassion, and excellence.",

"clients.hero.gallery":
    "View Gallery",

"clients.about.tag":
    "OUR CLIENTS",

"clients.about.title":
    "Building Relationships Through Care & Trust",

"clients.about.description":
    "At Khair Allah Medical Tourism, every client is treated with professionalism, respect, and personalized attention. From the first consultation until returning home, our team ensures every journey is comfortable, transparent, and stress-free.",

"clients.feature.personalized":
    "Personalized Medical Assistance",

"clients.feature.international":
    "International Client Support",

"clients.feature.travel":
    "Complete Travel Coordination",

"clients.feature.partners":
    "Trusted Healthcare Partners",

"clients.gallery.tag":
    "CLIENT GALLERY",

"clients.gallery.title":
    "Moments That Matter",

"clients.gallery.description":
    "A collection of memorable moments shared with our valued clients throughout their healthcare journey in Kerala.",

"clients.gallery.all":
    "All",

"clients.journey.tag":
    "CLIENT JOURNEY",

"clients.journey.title":
    "Your Journey With Us",

"clients.journey.description":
    "From your first consultation to your safe return home, we are with you every step of the way.",

"clients.journey.consultation.title":
    "Consultation",

"clients.journey.consultation.text":
    "Share your medical reports and discuss your treatment options with our experienced coordinators.",

"clients.journey.travel.title":
    "Travel Planning",

"clients.journey.travel.text":
    "We arrange travel guidance, visa support, accommodation, and airport reception.",

"clients.journey.treatment.title":
    "Treatment",

"clients.journey.treatment.text":
    "Receive quality healthcare from our trusted hospital partners in Kerala.",

"clients.journey.recovery.title":
    "Recovery",

"clients.journey.recovery.text":
    "Continue your recovery comfortably with dedicated support and follow-up assistance.",

"clients.journey.tourism.title":
    "Tourism",

"clients.journey.tourism.text":
    "Explore Kerala's beautiful destinations while enjoying a relaxing recovery experience.",

"clients.journey.return.title":
    "Return Home",

"clients.journey.return.text":
    "Travel home safely with post-treatment guidance and continued support whenever required.",

    /* =========================================================
   TERMS & CONDITIONS PAGE
========================================================= */

"terms.page.title":
    "Terms & Conditions | Khair Allah Medical Tourism",

"terms.hero.tag":
    "LEGAL INFORMATION",

"terms.hero.title":
    "Terms & Conditions",

"terms.hero.description":
    "Please read these terms carefully before using our services.",


"terms.section.1.title":
    "1. Acceptance of Terms",

"terms.section.1.text":
    "By using Khair Allah Medical Tourism services, you agree to these Terms & Conditions.",


"terms.section.2.title":
    "2. Our Services",

"terms.section.2.text":
    "We provide medical tourism facilitation, including hospital coordination, travel assistance, accommodation arrangements, airport transfers, and related support services. We do not provide medical treatment ourselves.",


"terms.section.3.title":
    "3. Medical Decisions",

"terms.section.3.text":
    "All medical advice, diagnosis, and treatment decisions are the sole responsibility of the treating hospital and medical professionals.",


"terms.section.4.title":
    "4. Payments",

"terms.section.4.text":
    "Payments made for medical services, hospital fees, or accommodation are subject to the terms of the respective service providers.",


"terms.section.5.title":
    "5. Cancellation",

"terms.section.5.text":
    "Cancellation policies depend on hospitals, hotels, and other service providers. Applicable charges may apply.",


"terms.section.6.title":
    "6. Privacy",

"terms.section.6.text":
    "Your personal information is handled with strict confidentiality and is shared only when necessary to coordinate your treatment.",


"terms.section.7.title":
    "7. Liability",

"terms.section.7.text":
    "Khair Allah Medical Tourism acts only as a facilitator and is not responsible for medical outcomes, hospital decisions, or unforeseen travel disruptions.",


"terms.section.8.title":
    "8. Changes",

"terms.section.8.text":
    "We reserve the right to update these Terms & Conditions at any time.",


"terms.cta.title":
    "Questions About These Terms?",

"terms.cta.description":
    "If you have any questions regarding our Terms & Conditions, please contact our team.",


"WhatsApp":
    "WhatsApp",

"Email":
    "Email",

    /* =========================================================
   CONTACT PAGE
========================================================= */

"contact.hero.tag":
    "CONTACT US",

"contact.hero.title":
    "Get In Touch",

"contact.hero.description":
    "We're here to answer your questions and help you plan your medical journey with confidence.",


"contact.info.tag":
    "GET IN TOUCH",

"contact.info.title":
    "Contact Information",

"contact.info.description":
    "Feel free to contact us anytime. Our team is ready to assist you with your medical tourism journey.",


"contact.address.title":
    "Office Address",

"contact.address":
    "Khair Allah Medical Tourism Office<br>Nettoor, Maradu<br>Ernakulam, Kerala - 682040",


"contact.phone.title":
    "Call Us",

"contact.email.title":
    "Email",

"contact.instagram.title":
    "Instagram",


"contact.form.tag":
    "SEND A MESSAGE",

"contact.form.title":
    "Book Your Consultation",

"contact.form.description":
    "Fill out the form below and our team will contact you as soon as possible.",


"Full Name":
    "Full Name",

"Email Address":
    "Email Address",

"Phone Number":
    "Phone Number",

"Country":
    "Country",

"Tell us about your medical requirement...":
    "Tell us about your medical requirement...",

"Send Inquiry":
    "Send Inquiry",


"contact.hours.tag":
    "BUSINESS HOURS",

"contact.hours.title":
    "We're Available To Help",


"Monday - Saturday":
    "Monday - Saturday",

"Sunday":
    "Sunday",

"By Appointment":
    "By Appointment",

"WhatsApp Support":
    "WhatsApp Support",

"24/7 Available":
    "24/7 Available",


"contact.cta.title":
    "Start Your Medical Journey Today",

"contact.cta.description":
    "Contact Khair Allah Medical Tourism and let our experienced team help you find the right treatment, hospital, and travel support.",

"Call Now":
    "Call Now",

    
/* =========================================
   LOGISTICS PAGE
========================================= */
"Logistics": "Logistics",
"LOGISTICS":
    "LOGISTICS",

"Reliable Medicine Import & Supply Support":
    "Reliable Medicine Import & Supply Support",

"logistics-header-desc":
    "Complete medicine logistics support for international patients throughout their medical journey.",

"MEDICINE LOGISTICS":
    "MEDICINE LOGISTICS",

"Medicines When You Need Them":
    "Medicines When You Need Them",

"logistics-intro":
    "With more than 15 years of medical tourism experience, Khair Allah Medical Tourism provides logistical support for the medicine-related needs of international guests.",

"Complete Medicine Support":
    "Complete Medicine Support",

"logistics-description":
    "We coordinate with hospitals, authorised pharmacies, doctors and licensed healthcare providers to help international patients arrange their prescribed medicines during treatment and after discharge.",

"logistics-description-2":
    "Our team also assists with relevant documentation, travel preparation and medicine-related coordination, while keeping patient safety and applicable regulations at the centre of every request.",

"Years of Experience":
    "Years of Experience",

"OUR LOGISTICS SERVICES":
    "OUR LOGISTICS SERVICES",

"Support From Treatment to Travel":
    "Support From Treatment to Travel",

"logistics-services-desc":
    "Practical support to help international guests manage their prescribed medicine requirements with greater convenience and peace of mind.",


/* =========================================
   LOGISTICS CARDS
========================================= */

"Genuine Medicine Sourcing":
    "Genuine Medicine Sourcing",

"logistics-card-1":
    "We coordinate with authorised hospital pharmacies and licensed chemists to help arrange prescribed medicines from reliable sources.",

"Import & Documentation Assistance":
    "Import & Documentation Assistance",

"logistics-card-2":
    "Guidance with prescriptions, supporting documents and relevant procedures for specialised medicines, subject to applicable regulations.",

"Post-Treatment Medicine Supply":
    "Post-Treatment Medicine Supply",

"logistics-card-3":
    "We help coordinate prescribed medicines required after discharge and for continued treatment during the return journey.",

"Hospital & Pharmacy Coordination":
    "Hospital & Pharmacy Coordination",

"logistics-card-4":
    "Our team coordinates with treating doctors, hospitals and pharmacies to help ensure prescribed medicines are arranged on time.",

"Travel & Packaging Support":
    "Travel & Packaging Support",

"logistics-card-5":
    "Guidance on suitable packaging, storage requirements and carrying prescribed medicines during air travel.",

"English & Arabic Assistance":
    "English & Arabic Assistance",

"logistics-card-6":
    "Clear communication and assistance in English or Arabic where needed throughout the medicine coordination process.",


/* =========================================
   WHY TRUST US
========================================= */

"WHY TRUST KHAIR ALLAH":
    "WHY TRUST KHAIR ALLAH",

"Your Safety and Peace of Mind Come First":
    "Your Safety and Peace of Mind Come First",

"logistics-trust":
    "Every medicine-related request is handled with transparency, accuracy and care. We coordinate with qualified healthcare providers and work within applicable requirements so our guests can focus on their treatment and recovery.",

    "Home": "Home",
"About": "About",
"Medical": "Medical",
"Tourism": "Tourism",
"Logistics": "Logistics",
"Clients": "Clients",
"Terms & Conditions": "Terms & Conditions",
"Plan Your Visit": "Plan Your Visit",
"Khair Allah": "Khair Allah",
"Medical & Tourism": "Medical & Tourism",
"OUR TEAM": "OUR TEAM",
"More Than Colleagues, We Are Family": "More Than Colleagues, We Are Family",
"team-desc": "Every member of our team plays a role in caring for our guests like they are our own family.",

"Muhammed Raziq": "Muhammed Raziq",
"Fathima Azad": "Fathima Azad",
"Muhammed Arshad A": "Muhammed Arshad A",
"Salim K A": "Salim K A",
"Shibili Zain": "Shibili Zain",
"Shamsudheen": "Shamsudheen",
"Jiyad Moideen": "Jiyad Moideen",
"Razal Jaleel": "Razal Jaleel",

"team-role-1": "Job Role",
"team-role-2": "Job Role",
"team-role-3": "Job Role",
"team-role-4": "Job Role",
"team-role-5": "Job Role",
"team-role-6": "Job Role",
"team-role-7": "Job Role",
"team-role-8": "Job Role",
"tourism-neon-text":
    "“Makes you happy”",
    "senior-facilitator": "Senior Facilitator | 10+ Years of Experience",

"coordinator-facilitation": "Coordinator | Facilitation Executive | Communication",

"office-executive": "Office Executive",

"hospital-facilitator": "Hospital Facilitator",

"tour-guide-10-years": "Tour Guide | 10+ Years of Experience",

"tour-guide-driver-7-years": "Tour Guide & Driver | 7+ Years of Experience",

"tour-guide-driver": "Tour Guide & Driver",
        },


        /* =========================================================
           ARABIC
        ========================================================= */

        ar: {

            /* ================= NAVIGATION ================= */

            "Home":
                "الرئيسية",

            "About":
                "من نحن",

            "Medical":
                "الخدمات الطبية",

            "Tourism":
                "السياحة",

            "Clients":
                "عملاؤنا",

            "Terms & Conditions":
                "الشروط والأحكام",

            "Contact":
                "اتصل بنا",

            "Plan Your Visit":
                "خطط لزيارتك",

            "Our Story":
                "قصتنا",


            /* ================= COMMON SECTIONS ================= */

            "WHY CHOOSE US":
                "لماذا تختارنا",

            "OUR SERVICES":
                "خدماتنا",

            "ABOUT US":
                "من نحن",

            "CONTACT US":
                "اتصل بنا",

            "OUR ACHIEVEMENTS":
                "إنجازاتنا",

            "OUR STORY":
                "قصتنا",

            "OUR PHILOSOPHY":
                "فلسفتنا",

            "LET'S PLAN YOUR VISIT":
                "لنخطط لزيارتك",


            /* ================= STATS ================= */

            "Years of Excellence":
                "سنوات من التميز",

            "Happy Guests":
                "ضيوف سعداء",

            "Team Members":
                "أعضاء الفريق",

            "15+ Years of Experience":
                "أكثر من 15 عامًا من الخبرة",

            "10,000+ Happy Guests":
                "أكثر من 10,000 ضيف سعيد",

            "Leading Hospitals":
                "أفضل المستشفيات",

            "Arabic Support":
                "دعم باللغة العربية",

            "Complete Travel Assistance":
                "مساعدة سفر متكاملة",

            "Personal Care":
                "رعاية شخصية",


            /* ================= WHY CHOOSE US ================= */

            "choose-desc-1":
                "أكثر من عقد من الخبرة الموثوقة في السياحة العلاجية لخدمة المرضى من دول مجلس التعاون الخليجي وخارجها.",

            "choose-desc-2":
                "آلاف الرحلات العلاجية الناجحة المبنية على الثقة والصدق والرعاية الإنسانية.",

            "choose-desc-3":
                "ننسق مع مستشفيات وأخصائيين مرموقين في جميع أنحاء كيرالا لتقديم رعاية صحية عالية الجودة.",

            "choose-desc-4":
                "تواصل ودي ومساعدة لغوية طوال رحلتك العلاجية.",

            "choose-desc-5":
                "استقبال من المطار، وإقامة، ومواصلات، وتنسيق طبي تحت سقف واحد.",

            "choose-desc-6":
                "يُعامل كل ضيف بكرامة واحترام وضيافة صادقة مستوحاة من تقاليد كيرالا.",


            /* ================= SERVICES ================= */

            "Medical Consultation":
                "الاستشارات الطبية",

            "Hospital Coordination":
                "تنسيق المستشفيات",

            "Airport Reception":
                "الاستقبال في المطار",

            "Accommodation":
                "الإقامة",

            "Language Assistance":
                "المساعدة اللغوية",

            "Local Transportation":
                "النقل المحلي",

            "Tourism & Sightseeing":
                "السياحة وزيارة المعالم",

            "Post-Treatment Support":
                "الدعم بعد العلاج",


            "service-desc-1":
                "استشارة مع الأخصائيين قبل وصولك لتخطيط أفضل للعلاج.",

            "service-desc-2":
                "تنسيق سلس مع أفضل المستشفيات والأطباء في جميع أنحاء كيرالا.",

            "service-desc-3":
                "استقبال حافل في المطار مع نقل مريح إلى مكان إقامتك.",

            "service-desc-4":
                "إقامة مريحة يتم اختيارها بعناية لراحة البال.",

            "service-desc-5":
                "دعم باللغة العربية ولغات متعددة طوال رحلتك العلاجية.",

            "service-desc-6":
                "مواصلات آمنة وموثوقة لزيارات المستشفى والتنقل المحلي.",

            "service-desc-7":
                "اكتشف أجمل وجهات كيرالا خلال فترة تعافيك.",

            "service-desc-8":
                "مساعدة ومتابعة مستمرة بعد انتهاء علاجك.",


            /* ================= FOOTER ================= */

            "Quick Links":
                "روابط سريعة",

            "Medical Services":
                "الخدمات الطبية",

            "Contact Us":
                "اتصل بنا",

            "Privacy Policy":
                "سياسة الخصوصية",

            "Your Journey to Better Healthcare":
                "رحلتك نحو رعاية صحية أفضل",

            "Every Journey":
                "كل رحلة",

            "to Healing":
                "نحو الشفاء",

            "Begins with":
                "تبدأ مع",

            "KOCHI • KERALA • INDIA":
                "كوتشي • كيرالا • الهند",


            /* ================= HOME HERO ================= */

            "hero-paragraph":
                "على مدى أكثر من <strong>15 عامًا</strong>، رحّبنا بآلاف الضيوف الدوليين، وخاصة من دول مجلس التعاون الخليجي، مقدمين خدمات سياحة علاجية موثوقة تتسم بالرحمة والاحترافية وكرم ضيافة كيرالا الشهير.",

            "Trusted by Thousands of International Patients":
                "موثوقون من قبل آلاف المرضى الدوليين",

            "why-choose-desc":
                "منذ أكثر من 15 عامًا، ساعدت خير الله للسياحة العلاجية الضيوف الدوليين على تجربة رعاية صحية عالمية المستوى في كيرالا براحة وشفافية وطمأنينة كاملة.",

            "Complete Medical Tourism Support":
                "دعم متكامل للسياحة العلاجية",

            "services-desc":
                "كل ما تحتاجه لرحلة علاجية سلسة ومريحة وخالية من التوتر تحت سقف واحد.",

            "Our Journey in Numbers":
                "رحلتنا بالأرقام",

            "stats-desc":
                "كل رقم يمثل الثقة والرعاية والالتزام الذي بنيناه على مدار أكثر من 15 عامًا في خدمة المرضى الدوليين.",

            "Years of Trusted Service":
                "سنوات من الخدمة الموثوقة",

            "Happy International Guests":
                "ضيوف دوليون سعداء",

            "Dedicated Professionals":
                "محترفون متفانون",

            "Primary International Client Base":
                "القاعدة الرئيسية للعملاء الدوليين",


            /* ================= STORY ================= */

            "story-heading":
                "رحلة مبنية على الثقة والرحمة والتميز",

            "story-p1":
                "بدأت خير الله للسياحة العلاجية منذ أكثر من <strong>15 عامًا</strong> برؤية <strong>السيد محمد ك ك</strong>، الذي اكتسبت أمانته وتفانيه أثناء عمله كسائق تاكسي سياحي ثقة مئات الضيوف الدوليين.",

            "story-p2":
                "اليوم، نمت مؤسستنا لتصبح فريقًا محترفًا يضم أكثر من <strong>22 عضوًا متفانيًا</strong>، خدمنا أكثر من <strong>10,000 ضيف دولي</strong> مع الحفاظ على نفس قيم الرحمة والشفافية والضيافة.",

            "Read Our Complete Story":
                "اقرأ قصتنا كاملة",

            "Where our journey began.":
                "حيث بدأت رحلتنا.",


            /* ================= TRUST ================= */

            "trust-quote":
                "الثقة التي اكتسبناها من ضيوفنا العرب كانت أعظم إنجاز لنا. من خلال توصيات العائلات والأصدقاء الراضين، واصل آلاف المرضى الدوليين اختيار خير الله للسياحة العلاجية عامًا بعد عام.",

            "Omani Well-Wisher":
                "محب عُماني",

            "Suggested the name Khair Allah":
                "اقترح اسم \"خير الله\"",


            /* ================= PHILOSOPHY ================= */

            "The Guest is God":
                "الضيف هو الله",

            "philosophy-desc":
                "في خير الله للسياحة العلاجية، يُستقبل كل مريض برحمة وكرامة واحترام. مستوحين من تقاليد كيرالا الخالدة في الضيافة، نؤمن بأن كل ضيف يستحق أعلى مستوى من الرعاية طوال رحلة شفائه.",


            /* ================= CTA ================= */

            "Ready to Begin Your Healing Journey?":
                "هل أنت مستعد لبدء رحلة شفائك؟",

            "cta-desc":
                "تواصل مع فريقنا ذي الخبرة اليوم ودعنا نساعدك في التخطيط لرحلة علاجية آمنة ومريحة وناجحة إلى كيرالا.",

            "WhatsApp Us":
                "راسلنا عبر واتساب",

            "Email Us":
                "راسلنا عبر البريد الإلكتروني",


            /* ================= FOOTER DESCRIPTION ================= */

            "footer-desc":
                "تربط خير الله للسياحة العلاجية العملاء الدوليين بمستشفيات وخدمات رعاية صحية موثوقة في كيرالا، لضمان رحلة علاجية آمنة ومريحة وخالية من التوتر.",

            "footer-address":
                "نيتور، مارادو،<br>إرناكولام، كيرالا - 682040",

            "footer-copyright":
                "© 2026 خير الله للسياحة العلاجية. جميع الحقوق محفوظة.",


            /* =========================================================
               ABOUT PAGE
            ========================================================= */

            "ABOUT KHAIR ALLAH":
                "عن خير الله",

            "about-hero-heading":
                "أكثر من 15 عامًا من التميز في السياحة العلاجية الموثوقة",

            "about-hero-desc":
                "نخدم الضيوف الدوليين من كوتشي، كيرالا برعاية صحية موثوقة ورحمة واحترافية وضيافة صادقة.",

            "Years of Trusted Medical Tourism Excellence":
                "سنوات من التميز في السياحة العلاجية الموثوقة",

            "WHO WE ARE":
                "من نحن",

            "Trusted Medical Tourism Partner in Kerala":
                "شريكك الموثوق للسياحة العلاجية في كيرالا",

            "about-intro-p1":
                "مرحبًا بكم في <strong>خير الله للسياحة العلاجية</strong>، أحد أكثر مسهلي السياحة العلاجية ثقة في كيرالا، ونفخر بخدمة الضيوف الدوليين من <strong>كوتشي، الهند</strong> منذ أكثر من <strong>15 عامًا</strong>.",

            "about-intro-p2":
                "منذ بداية رحلتنا، التزمنا بتقديم خدمات سياحة علاجية مخصصة تجمع بين الرعاية الصحية العالمية المستوى وضيافة كيرالا الشهيرة.",

            "about-intro-p3":
                "لقد خدمنا بفخر أكثر من <strong>10,000 ضيف دولي سعيد</strong>، حيث يأتي معظم مرضانا من دول مجلس التعاون الخليجي، وخاصة المجتمع العربي.",

            "Professionals":
                "محترفون",

            "Years Experience":
                "سنوات من الخبرة",


            /* ================= ABOUT JOURNEY ================= */

            "OUR JOURNEY":
                "رحلتنا",

            "From One Person's Vision to a Trusted Medical Tourism Company":
                "من رؤية شخص واحد إلى شركة سياحة علاجية موثوقة",

            "timeline-desc":
                "كل محطة تعكس التزامنا بخدمة المرضى الدوليين بالصدق والرحمة والتميز.",

            "2011":
                "2011",

            "The Beginning":
                "البداية",

            "timeline-1-desc":
                "بدأ السيد محمد ك ك بمساعدة الزوار الدوليين كسائق تاكسي سياحي في كوتشي. أمانته ولطفه وتفانيه اكتسبت ثقة مئات الضيوف.",

            "Growing Trust":
                "ثقة متنامية",

            "International Recognition":
                "اعتراف دولي",

            "timeline-2-desc":
                "بدأ المزيد من المرضى من دول مجلس التعاون الخليجي باختيار خير الله من خلال توصيات العائلات والأصدقاء الراضين.",

            "Expansion":
                "التوسع",

            "A Professional Team":
                "فريق محترف",

            "timeline-3-desc":
                "تطورت الخدمة التي بدأت بشخص واحد لتصبح مؤسسة متفانية تضم أكثر من 22 محترفًا ذا خبرة.",

            "Leadership":
                "القيادة",

            "Continuing the Vision":
                "استمرار الرؤية",

            "timeline-4-desc":
                "انضم مراد م ونجمال إلى فريق القيادة، لتوسيع الخدمات مع الحفاظ على قيم المؤسس في الثقة والرعاية الصادقة.",

            "Today":
                "اليوم",

            "Trusted Worldwide":
                "موثوقون عالميًا",

            "timeline-5-desc":
                "وضع أكثر من 10,000 ضيف دولي ثقتهم في خير الله للسياحة العلاجية، مما جعلنا أحد أكثر مسهلي السياحة العلاجية ثقة في كيرالا.",


            /* ================= LEADERSHIP ================= */

            "OUR LEADERSHIP":
                "قيادتنا",

            "The People Behind Our Success":
                "الأشخاص وراء نجاحنا",

            "leadership-desc":
                "مبني على الثقة، ومعزز بالخبرة، ومدفوع بالتزام مشترك بتقديم خدمات سياحة علاجية استثنائية لكل ضيف دولي.",

            "Founder":
                "المؤسس",

            "leader-1-desc":
                "مؤسس خير الله للسياحة العلاجية. أمانته ورحمته وتفانيه أثناء خدمة الضيوف الدوليين أرسى الأساس القوي للثقة الذي لا يزال يوجه الشركة اليوم.",

            "leader-2-desc":
                "يواصل رؤية المؤسس من خلال تقديم أفكار جديدة وتقنيات حديثة وخدمات موسعة مع الحفاظ على التزام الشركة بالجودة ورعاية المرضى.",

            "leader-3-desc":
                "انضم إلى العمل العائلي لتعزيز القيادة وضمان حصول كل مريض دولي على دعم احترافي ورحيم وشخصي طوال رحلته العلاجية.",


            /* ================= LEGACY ================= */

            "LEGACY OF TRUST":
                "إرث من الثقة",

            "A Legacy Built on Trust":
                "إرث مبني على الثقة",

            "legacy-desc":
                "لم يكن أعظم إنجاز لخير الله للسياحة العلاجية أبدًا هو الأرقام، بل كان دائمًا ثقة العائلات التي توصي بنا للآخرين بكل ثقة.",

            "Omani Well-Wisher & Supporter":
                "محب وداعم عُماني",

            "legacy-1-desc":
                "لعب تشجيعه ودعمه المستمر دورًا مهمًا في تعزيز علاقتنا بالمجتمع العُماني والضيوف الدوليين.",

            "legacy-2-desc":
                "اقترح السيد علي المخيني اسم <strong>\"خير الله\"</strong>، وهو اسم يعكس بجمال قيمنا في اللطف والرحمة والخدمة الصادقة.",

            "legacy-quote":
                "كانت الثقة التي اكتسبناها من ضيوفنا العرب أعظم إنجاز لنا. شارك العملاء الراضون تجاربهم مع العائلة والأصدقاء والمجتمعات في بلادهم، ومن خلال توصياتهم، واصل آلاف الضيوف الجدد اختيار خير الله للسياحة العلاجية عامًا بعد عام.",

            "Trust is our greatest achievement.":
                "الثقة هي أعظم إنجازاتنا.",


            /* ================= KERALA HOSPITALITY ================= */

            "Inspired by Kerala's Hospitality":
                "مستوحاة من ضيافة كيرالا",

            "hospitality-p1":
                "تُعرف كيرالا عالميًا باسم <strong>\"بلد الرب الخاص\"</strong>، وتشتهر بتقاليدها العلاجية وجمالها الطبيعي وضيافتها الدافئة.",

            "hospitality-p2":
                "اسم <strong>خير الله</strong>، الذي يعني <strong>\"خير من الله\"</strong>، يعكس التزامنا باللطف والصدق والرحمة والخدمة الاحترافية.",

            "hospitality-p3":
                "نؤمن بأن كل مريض يستحق أن يشعر بالأمان والاحترام والرعاية كأنه فرد من عائلتنا.",


            /* ================= FUTURE ================= */

            "LOOKING AHEAD":
                "نحو المستقبل",

            "Our Commitment Never Changes":
                "التزامنا لا يتغير أبدًا",

            "future-p1":
                "بينما نواصل النمو، يبقى التزامنا دون تغيير - تقديم خدمات سياحة علاجية موثوقة بصدق واحترافية ورعاية صادقة.",

            "future-p2":
                "كل مريض يختار خير الله للسياحة العلاجية هو أكثر من مجرد عميل - إنه ضيفنا العزيز. تبقى صحته وراحته وسعادته في صميم كل ما نقوم به.",

            "future-p3":
                "نتطلع إلى الترحيب بكم في كيرالا وأن نكون شريككم الموثوق في رحلتكم نحو صحة أفضل.",

            "Start Your Medical Journey Today":
                "ابدأ رحلتك العلاجية اليوم",

            "about-cta-desc":
                "فريقنا ذو الخبرة جاهز لمساعدتك في اختيار المستشفى وتخطيط السفر والإقامة ودعم السياحة العلاجية الكامل.",

            "Send an Enquiry":
                "أرسل استفسارًا",


            /* =========================================================
               MEDICAL PAGE
            ========================================================= */

            "MEDICAL SERVICES":
                "الخدمات الطبية",

            "medical-hero-heading":
                "رعاية صحية عالمية المستوى<br>في كيرالا",

            "medical-hero-desc":
                "تنسيق ودعم طبي متكامل للمرضى الدوليين مع مستشفيات وأطباء متخصصين موثوقين.",

            "hero-arabic-meaning":
                "\"لا تحزن إن الله معنا.\"",

            "loading":
                "جارٍ التحميل…",

            "OUR IMPACT":
                "أثرنا",

            "Trusted by Thousands":
                "موثوقون من قبل الآلاف",

            "medical-stats-desc":
                "أرقام تعكس الثقة والرعاية التي نقدمها كل يوم.",

            "Primary Client Base":
                "القاعدة الرئيسية للعملاء",

            "WHAT WE OFFER":
                "ما نقدمه",

            "Medical Support Services":
                "خدمات الدعم الطبي",

            "medical-services-desc":
                "نتولى جميع الجوانب الطبية لرحلتك حتى تتمكن من التركيز على التعافي.",

            "medical-card-desc-1":
                "استشارة قبل الوصول ومطابقة مع الطبيب بناءً على احتياجاتك الطبية.",

            "medical-card-desc-2":
                "تنسيق المواعيد ونقل السجلات الطبية والتنسيق مع الأطباء المتخصصين.",

            "medical-card-desc-3":
                "استقبال مريح من المطار وإيصالك مع مساعدة مخصصة.",

            "medical-card-desc-4":
                "إقامة آمنة ومريحة بالقرب من المستشفى.",

            "medical-card-desc-5":
                "دعم باللغة العربية ولغات متعددة طوال فترة علاجك.",

            "medical-card-desc-6":
                "وسائل نقل موثوقة لزيارات المستشفى والاحتياجات اليومية.",

            "Treatment Guidance":
                "إرشادات العلاج",

            "medical-card-desc-7":
                "إرشادات واضحة حول الإجراءات والتكاليف وخطط التعافي.",

            "medical-card-desc-8":
                "مساعدة مستمرة حتى بعد اكتمال علاجك.",

            "START YOUR JOURNEY":
                "ابدأ رحلتك",

            "Ready for Medical Care in Kerala?":
                "هل أنت مستعد لتلقي الرعاية الطبية في كيرالا؟",

            "medical-cta-desc":
                "تواصل مع فريقنا اليوم. سنساعدك في التخطيط لرحلة علاجية آمنة ومريحة.",

            "Send Enquiry":
                "أرسل استفسارًا",

            "Khair Allah Logo":
                "شعار خير الله",

            "Khair Allah Medical Tourism":
                "خير الله للسياحة العلاجية",


            /* =========================================================
               TOURISM PAGE
            ========================================================= */

            "TOURISM & SIGHTSEEING":
                "السياحة وزيارة المعالم",

            "tourism-hero-heading":
                "اكتشف جمال<br>كيرالا",

            "tourism-hero-desc":
                "أثناء فترة تعافيك، اكتشف \"بلد الرب الخاص\" من خلال تجارب سياحية مخطط لها بعناية.",

            "SWIPE, CLICK, OR USE ARROW KEYS":
                "اسحب أو انقر أو استخدم مفاتيح الأسهم",

            "Explore Kerala":
                "اكتشف كيرالا",

            "FULL ARCHIVE":
                "الأرشيف الكامل",

            "Tourism Gallery":
                "معرض السياحة",

            "tourism-gallery-desc":
                "من المياه الهادئة إلى محطات التلال الخضراء — استمتع بأجمل ما تقدمه كيرالا أثناء إقامتك.",

            "PLAN YOUR TRIP":
                "خطط لرحلتك",

            "Combine Healing with Exploration":
                "اجمع بين العلاج والاستكشاف",

            "tourism-cta-desc":
                "دعنا نرتب لك برامج سياحية مريحة أثناء فترة تعافيك في كيرالا.",

            "Alleppey Backwaters":
                "مياه أليبي الخلفية",

            "Munnar Hills":
                "تلال مونار",

            "Kovalam Beach":
                "شاطئ كوفالام",

            "Thekkady Wildlife":
                "الحياة البرية في تيكادي",

            "Fort Kochi":
                "فورت كوتشي",

            "Houseboat Experience":
                "تجربة القارب المنزلي",

            "Ayurvedic Wellness":
                "العافية والطب الأيورفيدي",

            "Athirappilly Falls":
                "شلالات أثيرابلي",

            "Cherai Beach Sunset":
                "غروب شمس شاطئ شيراي",

            "Kerala Backwaters":
                "المياه الخلفية في كيرالا",

            "Hill Stations":
                "محطات التلال",

            "Beaches":
                "الشواطئ",

            "Wildlife":
                "الحياة البرية",

            "Historical Places":
                "الأماكن التاريخية",

            "Cultural Experiences":
                "التجارب الثقافية",

            "Nature & Waterfalls":
                "الطبيعة والشلالات",

            "Wellness & Ayurveda":
                "العافية والأيورفيدا",

            "Tourism Support":
                "دعم السياحة",

            "tourism-support-desc":
                "نرتب وسائل النقل والرحلات السياحية والإقامة والمساعدة الشخصية في السفر أثناء إقامتك.",

            "Comfortable Transportation":
                "وسائل نقل مريحة",

            "Personalized Sightseeing":
                "جولات سياحية مخصصة",

            "Local Assistance":
                "مساعدة محلية",

            "Safe & Comfortable Travel":
                "سفر آمن ومريح",

            "Ready to Explore Kerala?":
                "هل أنت مستعد لاستكشاف كيرالا؟",

            "tourism-contact-desc":
                "تحدث مع فريقنا ودعنا ننشئ لك تجربة سياحية مريحة في كيرالا تتناسب مع رحلتك العلاجية.",

            "Plan Your Tourism Experience":
                "خطط لتجربتك السياحية",

                /* =========================================================
   CLIENTS PAGE
========================================================= */

"clients.hero.tag":
    "عملاؤنا",

"clients.hero.every_smile":
    "كل ابتسامة",

"clients.hero.tells_story":
    "تحكي قصة",

"clients.hero.of":
    "من",

"clients.hero.trust":
    "الثقة",

"clients.hero.description":
    "يشرفنا أن نخدم عملاء من مختلف أنحاء العالم. كل رحلة ناجحة تعكس التزامنا بالجودة والتعاطف والتميز.",

"clients.hero.gallery":
    "عرض المعرض",

"clients.about.tag":
    "عملاؤنا",

"clients.about.title":
    "نبني العلاقات من خلال الرعاية والثقة",

"clients.about.description":
    "في خير الله للسياحة العلاجية، يتم التعامل مع كل عميل باحترافية واحترام واهتمام شخصي. من الاستشارة الأولى وحتى العودة إلى الوطن، يحرص فريقنا على أن تكون كل رحلة مريحة وشفافة وخالية من التوتر.",

"clients.feature.personalized":
    "مساعدة طبية شخصية",

"clients.feature.international":
    "دعم العملاء الدوليين",

"clients.feature.travel":
    "تنسيق سفر متكامل",

"clients.feature.partners":
    "شركاء رعاية صحية موثوقون",

"clients.gallery.tag":
    "معرض العملاء",

"clients.gallery.title":
    "لحظات مهمة",

"clients.gallery.description":
    "مجموعة من اللحظات المميزة التي شاركناها مع عملائنا الكرام طوال رحلتهم العلاجية في كيرالا.",

"clients.gallery.all":
    "الكل",

"clients.journey.tag":
    "رحلة العميل",

"clients.journey.title":
    "رحلتك معنا",

"clients.journey.description":
    "من الاستشارة الأولى وحتى عودتك الآمنة إلى الوطن، نرافقك في كل خطوة من رحلتك.",

"clients.journey.consultation.title":
    "الاستشارة",

"clients.journey.consultation.text":
    "شارك تقاريرك الطبية وناقش خيارات العلاج مع منسقينا ذوي الخبرة.",

"clients.journey.travel.title":
    "تخطيط السفر",

"clients.journey.travel.text":
    "نرتب إرشادات السفر ودعم التأشيرة والإقامة والاستقبال في المطار.",

"clients.journey.treatment.title":
    "العلاج",

"clients.journey.treatment.text":
    "احصل على رعاية صحية عالية الجودة من شركائنا الموثوقين من المستشفيات في كيرالا.",

"clients.journey.recovery.title":
    "التعافي",

"clients.journey.recovery.text":
    "واصل فترة التعافي براحة مع الدعم المتخصص وخدمات المتابعة.",

"clients.journey.tourism.title":
    "السياحة",

"clients.journey.tourism.text":
    "استكشف الوجهات الجميلة في كيرالا واستمتع بتجربة تعافٍ مريحة.",

"clients.journey.return.title":
    "العودة إلى الوطن",

"clients.journey.return.text":
    "عد إلى وطنك بأمان مع إرشادات ما بعد العلاج والدعم المستمر عند الحاجة.",


    /* =========================================================
   TERMS & CONDITIONS PAGE
========================================================= */

"terms.page.title":
    "الشروط والأحكام | خير الله للسياحة العلاجية",

"terms.hero.tag":
    "المعلومات القانونية",

"terms.hero.title":
    "الشروط والأحكام",

"terms.hero.description":
    "يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.",


"terms.section.1.title":
    "1. قبول الشروط",

"terms.section.1.text":
    "باستخدام خدمات خير الله للسياحة العلاجية، فإنك توافق على هذه الشروط والأحكام.",


"terms.section.2.title":
    "2. خدماتنا",

"terms.section.2.text":
    "نقدم خدمات تسهيل السياحة العلاجية، بما في ذلك تنسيق المستشفيات، والمساعدة في السفر، وترتيبات الإقامة، وخدمات النقل من وإلى المطار، وخدمات الدعم ذات الصلة. نحن لا نقدم العلاج الطبي بأنفسنا.",


"terms.section.3.title":
    "3. القرارات الطبية",

"terms.section.3.text":
    "جميع الاستشارات الطبية والتشخيصات وقرارات العلاج تقع تحت المسؤولية الكاملة للمستشفى المعالج والأطباء المختصين.",


"terms.section.4.title":
    "4. المدفوعات",

"terms.section.4.text":
    "تخضع المدفوعات المتعلقة بالخدمات الطبية أو رسوم المستشفيات أو الإقامة لشروط وأحكام مقدمي الخدمات المعنيين.",


"terms.section.5.title":
    "5. الإلغاء",

"terms.section.5.text":
    "تعتمد سياسات الإلغاء على المستشفيات والفنادق ومقدمي الخدمات الآخرين. وقد يتم تطبيق رسوم وفقًا لذلك.",


"terms.section.6.title":
    "6. الخصوصية",

"terms.section.6.text":
    "يتم التعامل مع معلوماتك الشخصية بسرية تامة ولا تتم مشاركتها إلا عند الضرورة لتنسيق علاجك.",


"terms.section.7.title":
    "7. المسؤولية",

"terms.section.7.text":
    "تعمل خير الله للسياحة العلاجية كجهة تسهيل فقط، ولا تتحمل المسؤولية عن النتائج الطبية أو قرارات المستشفيات أو اضطرابات السفر غير المتوقعة.",


"terms.section.8.title":
    "8. التغييرات",

"terms.section.8.text":
    "نحتفظ بالحق في تحديث هذه الشروط والأحكام في أي وقت.",


"terms.cta.title":
    "هل لديك أسئلة حول هذه الشروط؟",

"terms.cta.description":
    "إذا كانت لديك أي أسئلة بخصوص الشروط والأحكام الخاصة بنا، يرجى التواصل مع فريقنا.",


"WhatsApp":
    "واتساب",

"Email":
    "البريد الإلكتروني",

    /* =========================================================
   CONTACT PAGE
========================================================= */

"contact.hero.tag":
    "اتصل بنا",

"contact.hero.title":
    "تواصل معنا",

"contact.hero.description":
    "نحن هنا للإجابة على أسئلتكم ومساعدتكم في التخطيط لرحلتكم العلاجية بكل ثقة.",


"contact.info.tag":
    "تواصل معنا",

"contact.info.title":
    "معلومات الاتصال",

"contact.info.description":
    "لا تترددوا في التواصل معنا في أي وقت. فريقنا مستعد لمساعدتكم في رحلتكم العلاجية.",


"contact.address.title":
    "عنوان المكتب",

"contact.address":
    "مكتب خير الله للسياحة العلاجية<br>نيتور، مارادو<br>إرناكولام، كيرالا - 682040",


"contact.phone.title":
    "اتصل بنا",

"contact.email.title":
    "البريد الإلكتروني",

"contact.instagram.title":
    "إنستغرام",


"contact.form.tag":
    "إرسال رسالة",

"contact.form.title":
    "احجز استشارتك",

"contact.form.description":
    "املأ النموذج أدناه وسيتواصل معك فريقنا في أقرب وقت ممكن.",


"Full Name":
    "الاسم الكامل",

"Email Address":
    "عنوان البريد الإلكتروني",

"Phone Number":
    "رقم الهاتف",

"Country":
    "الدولة",

"Tell us about your medical requirement...":
    "أخبرنا عن احتياجاتك الطبية...",

"Send Inquiry":
    "إرسال الاستفسار",


"contact.hours.tag":
    "ساعات العمل",

"contact.hours.title":
    "نحن متاحون لمساعدتكم",


"Monday - Saturday":
    "الإثنين - السبت",

"Sunday":
    "الأحد",

"By Appointment":
    "حسب الموعد",

"WhatsApp Support":
    "دعم واتساب",

"24/7 Available":
    "متاح على مدار الساعة",


"contact.cta.title":
    "ابدأ رحلتك العلاجية اليوم",

"contact.cta.description":
    "تواصل مع خير الله للسياحة العلاجية ودع فريقنا المتخصص يساعدك في العثور على العلاج والمستشفى وخدمات السفر المناسبة.",

"Call Now":
    "اتصل الآن",
    /* =========================================
   LOGISTICS PAGE
========================================= */
"Logistics": "الخدمات اللوجستية",
"LOGISTICS":
    "الخدمات اللوجستية",

"Reliable Medicine Import & Supply Support":
    "دعم موثوق لاستيراد وتوفير الأدوية",

"logistics-header-desc":
    "دعم متكامل للخدمات اللوجستية للأدوية للمرضى الدوليين طوال رحلتهم العلاجية.",

"MEDICINE LOGISTICS":
    "الخدمات اللوجستية للأدوية",

"Medicines When You Need Them":
    "الأدوية عندما تحتاجون إليها",

"logistics-intro":
    "بفضل خبرتنا التي تزيد عن 15 عامًا في مجال السياحة الطبية، توفر خير الله للسياحة الطبية الدعم اللوجستي لتلبية الاحتياجات المتعلقة بالأدوية لضيوفنا الدوليين.",

"Complete Medicine Support":
    "دعم متكامل للأدوية",

"logistics-description":
    "ننسق مع المستشفيات والصيدليات المعتمدة والأطباء ومقدمي الرعاية الصحية المرخصين لمساعدة المرضى الدوليين في توفير الأدوية الموصوفة لهم أثناء العلاج وبعد الخروج من المستشفى.",

"logistics-description-2":
    "كما يساعد فريقنا في المستندات المطلوبة والاستعداد للسفر والتنسيق المتعلق بالأدوية، مع وضع سلامة المرضى والالتزام باللوائح المعمول بها في مقدمة كل طلب.",

"Years of Experience":
    "سنوات من الخبرة",

"OUR LOGISTICS SERVICES":
    "خدماتنا اللوجستية للأدوية",

"Support From Treatment to Travel":
    "دعم من العلاج إلى السفر",

"logistics-services-desc":
    "دعم عملي لمساعدة ضيوفنا الدوليين في إدارة احتياجاتهم من الأدوية الموصوفة بسهولة وراحة واطمئنان أكبر.",


/* =========================================
   LOGISTICS CARDS
========================================= */

"Genuine Medicine Sourcing":
    "توفير الأدوية الأصلية",

"logistics-card-1":
    "ننسق مع صيدليات المستشفيات المعتمدة والصيدليات المرخصة للمساعدة في توفير الأدوية الموصوفة من مصادر موثوقة.",

"Import & Documentation Assistance":
    "المساعدة في الاستيراد والمستندات",

"logistics-card-2":
    "نقدم الإرشاد بشأن الوصفات الطبية والمستندات الداعمة والإجراءات المتعلقة بالأدوية المتخصصة، وفقًا للأنظمة المعمول بها.",

"Post-Treatment Medicine Supply":
    "توفير الأدوية بعد العلاج",

"logistics-card-3":
    "نساعد في تنسيق الأدوية الموصوفة اللازمة بعد الخروج من المستشفى ولمواصلة العلاج خلال رحلة العودة.",

"Hospital & Pharmacy Coordination":
    "التنسيق مع المستشفيات والصيدليات",

"logistics-card-4":
    "ينسق فريقنا مع الأطباء المعالجين والمستشفيات والصيدليات للمساعدة في توفير الأدوية الموصوفة في الوقت المناسب.",

"Travel & Packaging Support":
    "دعم التغليف والسفر",

"logistics-card-5":
    "نقدم الإرشادات المتعلقة بالتغليف المناسب ومتطلبات التخزين وحمل الأدوية الموصوفة أثناء السفر الجوي.",

"English & Arabic Assistance":
    "المساعدة باللغتين الإنجليزية والعربية",

"logistics-card-6":
    "نوفر التواصل والمساعدة باللغة الإنجليزية أو العربية عند الحاجة طوال عملية تنسيق الأدوية.",


/* =========================================
   WHY TRUST US
========================================= */

"WHY TRUST KHAIR ALLAH":
    "لماذا تثقون بخير الله",

"Your Safety and Peace of Mind Come First":
    "سلامتكم وراحة بالكم أولويتنا",

"logistics-trust":
    "يتم التعامل مع كل طلب متعلق بالأدوية بشفافية ودقة وعناية. ننسق مع مقدمي الرعاية الصحية المؤهلين ونعمل وفقًا للمتطلبات المعمول بها، حتى يتمكن ضيوفنا من التركيز على علاجهم وتعافيهم.",

    "Home": "الرئيسية",
"About": "من نحن",
"Medical": "الخدمات الطبية",
"Tourism": "السياحة العلاجية",
"Logistics": "الخدمات اللوجستية",
"Clients": "عملاؤنا",
"Terms & Conditions": "الشروط والأحكام",
"Plan Your Visit": "خطط لزيارتك",
"Khair Allah": "خير الله",
"Medical & Tourism": "السياحة الطبية",
"OUR TEAM":
    "فريقنا",

"More Than Colleagues, We Are Family":
    "أكثر من زملاء، نحن عائلة",

"team-desc":
    "كل فرد من أعضاء فريقنا يلعب دورًا في رعاية ضيوفنا وكأنهم عائلتنا.",

"Muhammed Raziq":
    "محمد رازق",

"Fathima Azad":
    "فاطمة آزاد",

"Muhammed Arshad A":
    "محمد أرشد",

"Salim K A":
    "سالم ك أ",

"Shibili Zain":
    "شبلي زين",

"Shamsudheen":
    "شمس الدين",

"Jiyad Moideen":
    "جياد معين",

"Razal Jaleel":
    "رزال جليل",

"team-role-1":
    "الوظيفة",

"team-role-2":
    "الوظيفة",

"team-role-3":
    "الوظيفة",

"team-role-4":
    "الوظيفة",

"team-role-5":
    "الوظيفة",

"team-role-6":
    "الوظيفة",

"team-role-7":
    "الوظيفة",

"team-role-8":
    "الوظيفة",
    "tourism-neon-text":
    "“يجعلك سعيدًا”",

    "senior-facilitator": "منسق أول | خبرة أكثر من 10 سنوات",

"coordinator-facilitation": "منسق | مسؤول خدمات التسهيل | التواصل",

"office-executive": "مسؤول تنفيذي للمكتب",

"hospital-facilitator": "منسق خدمات المستشفى",

"tour-guide-10-years": "مرشد سياحي | خبرة أكثر من 10 سنوات",

"tour-guide-driver-7-years": "مرشد سياحي وسائق | خبرة أكثر من 7 سنوات",

"tour-guide-driver": "مرشد سياحي وسائق",

        }
    };


    /* =========================================================
       TRANSLATION FUNCTION
    ========================================================= */

    function translatePage(language) {

        /* ================= NORMAL TEXT ================= */

        const textElements =
            document.querySelectorAll("[data-i18n]");

        textElements.forEach(element => {

            const key = element.dataset.i18n;

            if (
                translations[language] &&
                translations[language][key]
            ) {
                element.textContent =
                    translations[language][key];
            }

        });




        /* ================= HTML CONTENT ================= */

        const htmlElements =
            document.querySelectorAll("[data-i18n-html]");

        htmlElements.forEach(element => {

            const key = element.dataset.i18nHtml;

            if (
                translations[language] &&
                translations[language][key]
            ) {
                element.innerHTML =
                    translations[language][key];
            }

        });


        /* ================= IMAGE ALT TEXT ================= */

        const altElements =
            document.querySelectorAll("[data-i18n-alt]");

        altElements.forEach(element => {

            const key = element.dataset.i18nAlt;

            if (
                translations[language] &&
                translations[language][key]
            ) {
                element.alt =
                    translations[language][key];
            }

        });


        /* ================= HTML LANGUAGE ================= */

        document.documentElement.lang =
            language;


        /* ================= RTL / LTR ================= */

        if (language === "ar") {

            document.documentElement.dir =
                "rtl";

            document.body.classList.add(
                "arabic"
            );

        } else {

            document.documentElement.dir =
                "ltr";

            document.body.classList.remove(
                "arabic"
            );
        }


        /* ================= ACTIVE BUTTON ================= */

        englishButton.classList.toggle(
            "active",
            language === "en"
        );

        arabicButton.classList.toggle(
            "active",
            language === "ar"
        );


        /* ================= SAVE LANGUAGE ================= */

        localStorage.setItem(
            "khairAllahLanguage",
            language
        );

        /* ================= NOTIFY LISTENERS ================= */

        document.dispatchEvent(
            new CustomEvent("languageChanged", {
                detail: { language: language }
            })
        );
    }


    /* =========================================================
       ENGLISH BUTTON
    ========================================================= */

    englishButton.addEventListener(
        "click",
        () => {
            translatePage("en");
        }
    );


    /* =========================================================
       ARABIC BUTTON
    ========================================================= */

    arabicButton.addEventListener(
        "click",
        () => {
            translatePage("ar");
        }
    );


    /* =========================================================
       LOAD SAVED LANGUAGE
    ========================================================= */

    const savedLanguage =
        localStorage.getItem(
            "khairAllahLanguage"
        ) || "en";


    /* =========================================================
       INITIAL TRANSLATION
    ========================================================= */

    translatePage(savedLanguage);

});