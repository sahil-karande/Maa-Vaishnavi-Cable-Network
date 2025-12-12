// =====================================================================
// 1. MULTILINGUAL DATA & PACKAGES
// =====================================================================

const baseChannels = {
    silver: ["Zee Marathi", "Star Pravah", "Colors Marathi", "News 18 Lokmat", "Zee 24 Taas", "Sony Marathi"],
    gold: ["All Silver Channels", "Star Plus", "Sony SET", "Zee TV", "SAB TV", "Discovery", "Nat Geo"],
    diamond: ["All Gold Channels", "Star Sports 1 Hindi", "Star Sports 2", "Sony Ten 1", "Ten Sports"]
};

const translations = {
    // English (en) - Default Language
    en: {
        // NAV & HERO
        navHome: "Home", navAbout: "About", navPacks: "Packs", navSupport: "Support", navContact: "Contact",
        homeTitle: "Nagpur's Best Entertainment", homeSubtitle: "Crystal clear HD channels and affordable plans for your family.",
        viewPackages: "View Packages", packagesTitle: "Popular Packages",

        // OFFER SECTION
        offerTitle: "HD Setup Box Offer !",
        offerDetails: "Get FREE 1 Month HD or 2 Months SD Subscription — HD Setup Box only at ₹1800/-",
        getOfferBtn: "Get Offer",

        // PACKAGE NAMES & DETAILS (DYNAMICALLY RENDERED)
        packNameSilver: "Silver Marathi Pack", packDescSilver: "Perfect for families who love entertainment.",
        packNameGold: "Gold Family Pack", packDescGold: "Includes top Hindi entertainment channels.",
        packNameDiamond: "Diamond Sports Pack", packDescDiamond: "For the ultimate sports viewing experience.",

        // BUTTONS & LINKS
        viewChannelBtn: "View Channel List ▾", choosePlanBtn: "Choose Plan",

        // SUPPORT SECTION
        supportTitle: "Support & Complaints", quickFixesTitle: "Quick Fixes & FAQs",
        formNamePlaceholder: "Your Name", formMobilePlaceholder: "Mobile Number", submitTicketBtn: "Submit Ticket",

        // FORM OPTIONS
        optionNoSignal: "No Signal", optionSetTopError: "Set-top Box Error", optionBillIssue: "Bill Issue", optionWireCut: "Wire Cut",

        // FAQ
        faqSignalQuestion: "Why is my TV showing \"No Signal\"?", faqSignalAnswer: "Check if the cable behind the set-top box is tight. If it is loose, tighten it and restart the box.",
        faqUPIQuestion: "How do I pay via UPI?", faqUPIAnswer: "Click the \"Pay Bill Now\" button at the top right to scan our QR code.",

        // FOOTER & CONTACT
        contactTitle: "Contact Us", footerDev: "Website Developed by ", footerCopy: "© 2025 Maa Vaishnavi Cable Network. All rights reserved.",

        // Footer keys
        quickLinksTitle: "Quick Links",
        contactSupport: "Contact Support",
        faqsLink: "FAQs",
        termsTitle: "Terms & Conditions",
        footerAboutText: "Providing reliable, high-quality cable TV and digital entertainment solutions for homes in Nagpur.",

        // === ABOUT SECTION ===
        aboutTitle: "About Us",
        prefTitle: "Our Preference", prefIntro: "At Maa Vaishnavi Cable Network, we prioritize:",
        prefItem1: "Customer satisfaction above everything", prefItem2: "Strong local connectivity built on decades of trust",
        prefItem3: "Consistent service quality with minimal interruptions", prefItem4: "Honest pricing without hidden charges",
        prefItem5: "Long-term relationships with every household we serve", prefConclusion: "Your trust is our greatest asset, and we work every day to keep it.",

        missionTitle: "Our Mission", missionIntro: "Our mission is to deliver seamless, affordable, and high-quality cable TV and digital entertainment to every home in our network.",
        missionItem1: "Providing a stable and clear cable experience", missionItem2: "Offering quick response and on-time support",
        missionItem3: "Ensuring trust, reliability, and transparency in every service", missionItem4: "Continuously upgrading our technology to meet modern entertainment needs",
        missionConclusion: "We aim to remain the most dependable local cable network in Nagpur's growing digital landscape.",

        storyTitle: "Our Story", storyPara1: "Founded in 1996 by <b>Mr. Pankaj Padmakar Karande</b>, Maa Vaishnavi Cable Network began with a simple vision — to bring reliable and high-quality cable television services to the communities of Nagpur.",
        storyPara2: "From a small setup to a trusted local network, we have grown steadily while staying true to our commitment of transparency, timely service, and customer-first values.",
        storyPara3: "For over two decades, we have proudly served households across Janki Nagar, Shree Ram Nagar, Bhole Nagar, Bhole Baba Nagar, Saraswati Nagar, Vittal Nagar, and the surrounding areas.",
        storyPara4: "Our long-standing presence makes us not just a service provider — but a part of the community.",

        whyChooseTitle: "Why Choose Maa Vaishnavi Cable Network",
        choiceItem1_title: "✔ Trusted Since 1996", choiceItem2_title: "✔ Strong Local Coverage",
        choiceItem3_title: "✔ Clear & Stable Connection", choiceItem4_title: "✔ Quick Customer Support",
        choiceItem5_title: "✔ Fair & Transparent Pricing", choiceItem6_title: "✔ Community-Focused Service",
        choiceItem7_title: "✔ Wide Channel Variety", choiceItem8_title: "✔ Easy Digital Recharge",

        // CONTACT PAGE SPECIFIC KEYS
        contactHeaderTitle: "Contact & Visit",
        contactHeaderSubtitle: "Visit our office or get in touch for support, recharges, or queries. Below are our address, contact details and office timings.",
        getInTouchTitle: "Get in Touch",
        addressTitle: "Address",
        contactLabel: "Contact",
        emailLabel: "Email",
        officeHoursTitle: "Office Hours",
        officeDays: "Sunday - Saturday",
        officeEveryday: "Everyday",
        officeTime: "9:00 AM - 6:00 PM",
        directionsBtn: "Directions",
        whatsappVisitBtn: "Message on WhatsApp",

        // Terms sections (English)
        termsTitle: "Terms & Conditions",
        termsIntro: "Please read these terms and conditions carefully before using our services.",
        termsSection1Title: "Services & Subscriptions",
        termsSection1: "We provide cable TV packages and related digital services. Subscriptions are billed monthly or as per chosen plan. By using our services you agree to pay applicable fees. Offers and promotions are subject to terms and availability.",
        termsSection2Title: "Installation & Equipment",
        termsSection2: "Installation may require access to your premises. Equipment provided (set-top boxes, remotes) remains company property unless otherwise stated. Customers are responsible for reasonable care of provided equipment.",
        termsSection3Title: "Outages & Maintenance",
        termsSection3: "We strive for continuous service but scheduled maintenance or unexpected outages may occur. We will attempt to notify subscribers in advance for planned maintenance.",
        termsSection4Title: "Privacy & Data",
        termsSection4: "We collect limited information required for account management and service delivery. We treat customer information with care. For details, refer to our privacy policy.",
        termsSection5Title: "Billing & Refunds",
        termsSection5: "Bills are generated per billing cycle. Disputes should be reported with supporting evidence. Refunds or adjustments are provided at the company's discretion according to policy.",
        termsSection6Title: "Contact & Support",
        termsSection6: "For support, contact us on WhatsApp/phone at +91 77095 59466 or via the Support page. Provide details to help resolve issues quickly.",
        termsConclusion: "These terms are subject to change. Continued use of services after changes implies acceptance of updated terms."
    },

    // Hindi (hi)
    hi: {
        navHome: "होम", navAbout: "हमारे बारे में", navPacks: "पैक", navSupport: "सहायता", navContact: "संपर्क",
        homeTitle: "नागपुर का सर्वश्रेष्ठ मनोरंजन", homeSubtitle: "आपके परिवार के लिए क्रिस्टल स्पष्ट HD चैनल और किफायती प्लान।",
        viewPackages: "पैकेज देखें", packagesTitle: "लोकप्रिय पैकेज",

        offerTitle: "HD सेटअप बॉक्स ऑफर !",
        offerDetails: "मुफ्त 1 महीना HD या 2 महीने SD सदस्यता पाएं — HD सेटअप बॉक्स केवल ₹1800/- में",
        getOfferBtn: "ऑफर पाएं",

        packNameSilver: "सिल्वर मराठी पैक", packDescSilver: "मनोरंजन पसंद करने वाले परिवारों के लिए उत्तम।",
        packNameGold: "गोल्ड फॅमिली पॅक", packDescGold: "शीर्ष हिंदी मनोरंजन चैनल शामिल हैं।",
        packNameDiamond: "डायमंड स्पोर्ट्स पैक", packDescDiamond: "सर्वोत्तम खेल देखने के अनुभव के लिए।",

        viewChannelBtn: "चैनल सूची देखें ▾", choosePlanBtn: "प्लान चुने",

        supportTitle: "सहायता और शिकायतें", quickFixesTitle: "त्वरित समाधान",
        formNamePlaceholder: "आपका नाम", formMobilePlaceholder: "मोबाइल नंबर", submitTicketBtn: "टिकट जमा करें",

        optionNoSignal: "कोई सिग्नल नहीं", optionSetTopError: "सेट-टॉप बॉक्स त्रुटि", optionBillIssue: "बिल समस्या", optionWireCut: "तार कटा",

        faqSignalQuestion: "मेरे टीवी पर \"कोई सिग्नल नहीं\" क्यों दिख रहा है?", faqSignalAnswer: "सेट-टॉप बॉक्स के पीछे केबल की जांच करें। अगर वह ढीली हो तो उसे कस दें और बॉक्स को रीस्टार्ट करें।",
        faqUPIQuestion: "मैं UPI के माध्यम से भुगतान कैसे कर सकता हूँ?", faqUPIAnswer: "हमारा QR कोड स्कैन करने के लिए ऊपर दाईं ओर \"अभी बिल भुगतान करें\" बटन पर क्लिक करें।",

        contactTitle: "संपर्क करें", footerDev: "वेबसाइट विकसित:", footerCopy: "© 2025 माँ वैष्णवी केबल नेटवर्क। सर्वाधिकार सुरक्षित।",

        quickLinksTitle: "त्वरित लिंक",
        contactSupport: "संपर्क सहायता",
        faqsLink: "FAQs",
        termsTitle: "नियम और शर्तें",
        footerAboutText: "नागपुर में घरों के लिए विश्वसनीय, उच्च गुणवत्ता वाली केबल टीवी और डिजिटल मनोरंजन समाधान प्रदान करना।",

        aboutTitle: "हमारे बारे में",
        prefTitle: "हमारी प्राथमिकता", prefIntro: "मां वैष्णवी केबल नेटवर्क में, हम प्राथमिकता देते हैं:",
        prefItem1: "ग्राहक संतुष्टि सबसे ऊपर", prefItem2: "दशकों के विश्वास पर बनी मजबूत स्थानीय कनेक्टिविटी",
        prefItem3: "न्यूनतम रुकावट के साथ लगातार सेवा की गुणवत्ता", prefItem4: "छिपे हुए शुल्कों के बिना ईमानदार मूल्य निर्धारण",
        prefItem5: "हम सेवा करने वाले हर घर के साथ दीर्घकालिक संबंध", prefConclusion: "आपका विश्वास हमारी सबसे बड़ी संपत्ति है, और हम इसे बनाए रखने के लिए हर दिन काम करते हैं।",

        missionTitle: "हमारा लक्ष्य", missionIntro: "हमारा लक्ष्य हमारे नेटवर्क के हर घर को निर्बाध, किफायती और उच्च गुणवत्ता वाली केबल टीवी और डिजिटल मनोरंजन प्रदान करना है।",
        missionItem1: "स्थिर और स्पष्ट केबल अनुभव प्रदान करना", missionItem2: "त्वरित प्रतिक्रिया और समय पर समर्थन की पेशकश",
        missionItem3: "हर सेवा में विश्वास, विश्वसनीयता और पारदर्शिता सुनिश्चित करना", missionItem4: "आधुनिक मनोरंजन आवश्यकताओं को पूरा करने के लिए लगातार अपनी तकनीक को अपग्रेड करना",
        missionConclusion: "हम नागपुर के बढ़ते डिजिटल परिदृश्य में सबसे भरोसेमंद स्थानीय केबल नेटवर्क बने रहने का लक्ष्य रखते हैं।",

        storyTitle: "हमारी कहानी", storyPara1: "1996 में <b>श्री पंकज पद्माकर करांडे</b> द्वारा स्थापित, मां वैष्णवी केबल नेटवर्क ने एक साधारण दृष्टिकोण के साथ शुरुआत की - नागपुर के समुदायों में विश्वसनीय और उच्च गुणवत्ता वाली केबल टेलीविजन सेवाएं लाना।",
        storyPara2: "एक छोटे से सेटअप से लेकर एक विश्वसनीय स्थानीय नेटवर्क तक, हम पारदर्शिता, समय पर सेवा और ग्राहक-प्रथम मूल्याओं की अपनी प्रतिबद्धता के प्रति सच्चे रहते हुए लगातार बढ़े हैं।",
        storyPara3: "दो दशकों से अधिक समय से, हमने गर्व से जानकी नगर, श्री राम नगर, भोले नगर, भोले बाबा नगर, सरस्वती नगर, विठ्ठल नगर और आसपास के क्षेत्रों में घरों की सेवा की है।",
        storyPara4: "हमारी दीर्घकालिक उपस्थिति हमें केवल एक सेवा प्रदाता नहीं - बल्कि समुदाय का एक हिस्सा बनाती है।",

        whyChooseTitle: "मां वैष्णवी केबल नेटवर्क क्यों चुनें",
        choiceItem1_title: "✔ 1996 से विश्वसनीय", choiceItem2_title: "✔ मजबूत स्थानीय कव्हरेज",
        choiceItem3_title: "✔ स्पष्ट और स्थिर कनेक्शन", choiceItem4_title: "✔ त्वरित ग्राहक सहायता",
        choiceItem5_title: "✔ उचित और पारदर्शक मूल्य निर्धारण", choiceItem6_title: "✔ समुदाय-केंद्रित सेवा",
        choiceItem7_title: "✔ चैनलों की विस्तृत श्रृंखला", choiceItem8_title: "✔ आसान डिजिटल रिचार्ज",

        // contact page keys (hi)
        contactHeaderTitle: "संपर्क और विज़िट",
        contactHeaderSubtitle: "हमारे कार्यालय पर आएं या सहायता, रिचार्ज या प्रश्नों के लिए संपर्क करें। नीचे हमारा पता, संपर्क विवरण और कार्यालय समय दिए गए हैं।",
        getInTouchTitle: "संपर्क करें",
        addressTitle: "पता",
        contactLabel: "संपर्क",
        emailLabel: "ईमेल",
        officeHoursTitle: "कार्यालय समय",
        officeDays: "रविवार - शनिवार",
        officeEveryday: "हर दिन",
        officeTime: "9:00 AM - 6:00 PM",
        directionsBtn: "दिशानिर्देश",
        whatsappVisitBtn: "व्हाट्सअॅप पर संदेश",

        // Terms (hi)
        termsTitle: "नियम और शर्तें",
        termsIntro: "कृपया हमारी सेवाओं का उपयोग करने से पहले इन नियमों और शर्तों को ध्यानपूर्वक पढ़ें।",
        termsSection1Title: "सेवाएँ और सदस्यताएँ",
        termsSection1: "हम केबल टीवी पैकेज और संबंधित डिजिटल सेवाएँ प्रदान करते हैं। सदस्यताएँ मासिक या चुने गए प्लान के अनुसार बिल की जाती हैं।",
        termsSection2Title: "स्थापना और उपकरण",
        termsSection2: "स्थापना के लिए आपके परिसर तक पहुंच की आवश्यकता हो सकती है। प्रदान किए गए उपकरण कंपनी की संपत्ति बने रहते हैं।",
        termsSection3Title: "बाधाएँ और रखरखाव",
        termsSection3: "नियोजित रखरखाव या अप्रत्याशित डाउनटाइम हो सकते हैं; हम पहले सूचित करने का प्रयास करेंगे।",
        termsSection4Title: "गोपनीयता और डेटा",
        termsSection4: "हम खाते और सेवा के लिए आवश्यक सीमित जानकारी एकत्र करते हैं और उसे सावधानीपूर्वक संभालते हैं।",
        termsSection5Title: "बिलिंग और रिफंड",
        termsSection5: "बिलिंग चक्र के अनुसार बिल जेनरेट होते हैं। विवादों की रिपोर्ट सबूत के साथ करें।",
        termsSection6Title: "संपर्क और सहायता",
        termsSection6: "सहायता के लिए हमें व्हाट्सअॅप/फोन पर +91 77095 59466 पर संपर्क करें।",
        termsConclusion: "ये नियम समय-समय पर बदल सकते हैं। सेवाओं का निरन्तर उपयोग परिवर्तनों को स्वीकार करने का संकेत है।"
    },

    // Marathi (mr)
    mr: {
        navHome: "मुख्यपृष्ठ", navAbout: "आमच्या बद्दल", navPacks: "पॅक्स", navSupport: "समर्थन", navContact: "संपर्क साधा",
        homeTitle: "नागपूरचे सर्वोत्तम मनोरंजन", homeSubtitle: "तुमच्या कुटुंबासाठी क्रिस्टल स्पष्ट HD चॅनेल आणि परवडणाऱ्या योजना.",
        viewPackages: "पॅकेज पहा", packagesTitle: "लोकप्रिय पॅकेज",

        offerTitle: "HD सेटअप बॉक्स ऑफर !",
        offerDetails: "मोफत 1 महिना HD किंवा 2 महिने SD सबस्क्रिप्शन मिळवा — HD सेटअप बॉक्स फक्त ₹1800/- मध्ये",
        getOfferBtn: "ऑफर मिळवा",

        packNameSilver: "सिल्व्हर मराठी पॅक", packDescSilver: "मनोरंजन आवडणाऱ्या कुटुंबांसाठी योग्य.",
        packNameGold: "गोल्ड फॅमिली पॅक", packDescGold: "शीर्ष हिंदी मनोरंजन चॅनेल समाविष्ट.",
        packNameDiamond: "डायमंड स्पोर्ट्स पॅक", packDescDiamond: "उत्कृष्ट क्रीडा पाहण्याच्या अनुभवासाठी.",

        viewChannelBtn: "चॅनेल सूची पहा ▾", choosePlanBtn: "प्लॅन निवडा",

        supportTitle: "समर्थन आणि तक्रारी", quickFixesTitle: "त्वरित उपाय",
        formNamePlaceholder: "तुमचे नाव", formMobilePlaceholder: "मोबाईल नंबर", submitTicketBtn: "तिकीट सबमिट करा",

        optionNoSignal: "सिग्नल नाही", optionSetTopError: "सेट-टॉप बॉक्स त्रुटी", optionBillIssue: "बिल समस्या", optionWireCut: "वायर तुटला",

        faqSignalQuestion: "माझ्या टीव्हीवर \"सिग्नल नाही\" का दिसत आहे?", faqSignalAnswer: "सेट-टॉप बॉक्समागील केबल घट्ट आहे का ते तपासा. ती सैल असल्यास घट्ट करा व बॉक्स रीस्टार्ट करा.",
        faqUPIQuestion: "मी UPI द्वारे पेमेंट कसे करू?", faqUPIAnswer: "आमचा QR कोड स्कॅन करण्यासाठी वर उजव्या कोपऱ्यातील 'आता बिल भरा' बटणावर क्लिक करा.",

        contactTitle: "संपर्क साधा", footerDev: "वेबसाइट विकसित:", footerCopy: "© 2025 माँ वैष्णवी केबल नेटवर्क. सर्व हक्क राखीव。",

        quickLinksTitle: "त्वरित लिंक",
        contactSupport: "संपर्क समर्थन",
        faqsLink: "FAQs",
        termsTitle: "अटी व शर्ती",
        footerAboutText: "नागपूरमधील घरांसाठी विश्वसनीय, उच्च-गुणवत्तेचे केबल टीव्ही आणि डिजिटल मनोरंजन समाधान पुरवणारी。",

        aboutTitle: "आमच्याबद्दल",
        prefTitle: "आमची प्राधान्ये", prefIntro: "मां वैष्णवी केबल नेटवर्कमध्ये, आम्ही प्राधान्य देतो:",
        prefItem1: "ग्राहक समाधान सर्वात वर", prefItem2: "दशकांच्या विश्वासावर आधारित मजबूत स्थानिक कनेक्टिव्हीटी",
        prefItem3: "किमान व्यत्ययासह सुसंगत सेवा गुणवत्ता", prefItem4: "लपविलेल्या शुल्काशिवाय प्रामाणिक किंमत",
        prefItem5: "आम्ही सेवा करत असलेल्या प्रत्येक घरासोबत दीर्घकाळचे संबंध", prefConclusion: "तुमचा विश्वास ही आमची सर्वात मोठी संपत्ती आहे आणि ती जपण्यासाठी आम्ही दररोज काम करतो。",
        
        missionTitle: "आमचे ध्येय", missionIntro: "आमचे ध्येय आमच्या नेटवर्कमधील प्रत्येक घराला अखंड, परवडणारे आणि उच्च-गुणवत्तेचे केबल टीव्ही आणि डिजिटल मनोरंजन प्रदान करणे आहे。",
        missionItem1: "स्थिर आणि स्पष्ट केबल अनुभव प्रदान करणे", missionItem2: "त्वरित प्रतिसाद आणि वेळेवर समर्थन देणे",
        missionItem3: "प्रत्येक सेवेत विश्वास, विश्वसनीयता आणि पारदर्शकता सुनिश्चित करणे", missionItem4: "आधुनिक मनोरंजनाच्या गरजा पूर्ण करण्यासाठी आमच्या तंत्रज्ञानाला सतत श्रेणीसुधारित करणे",
        missionConclusion: "नागपूरच्या वाढत्या डिजिटल लँडस्केपमध्ये सर्वात विश्वासार्ह स्थानिक केबल नेटवर्क राहण्याचे आमचे ध्येय आहे。",

        storyTitle: "आमची कथा", storyPara1: "श्री <b>पंकज पद्माकर करांडे</b> यांनी 1996 मध्ये स्थापन केलेले, मां वैष्णवी केबल नेटवर्क एका साध्या दृष्टीने सुरू झाले — नागपूरच्या समुदायांना विश्वसनीय आणि उच्च-गुणवत्ताच्या केबल टेलिव्हिजन सेवा आणणे。",
        storyPara2: "एका लहान सेटअपपासून ते विश्वासार्ह स्थानिक नेटवर्कपर्यंत, आम्ही पारदर्शकता, वेळेवर सेवा आणि ग्राहक-प्रथम मूल्यांच्या आमच्या वचनबद्धतेवर खरे राहून स्थिरपणे वाढलो आहोत。",
        storyPara3: "दोन दशकांहून अधिक काळ, आम्ही जानकी नगर, श्री राम नगर, भोले नगर, भोले बाबा नगर, सरस्वती नगर, विठ्ठल नगर आणि आसपासच्या भागातील घरांना अभिमानाने सेवा दिली आहे。",
        storyPara4: "आमची दीर्घकालची उपस्थिती आम्हाला केवळ सेवा प्रदाता नाही — तर समुदायाचा एक भाग बनवते。",

        whyChooseTitle: "मां वैष्णवी केबल नेटवर्क का निवडाल",
        choiceItem1_title: "✔ 1996 पासून विश्वासार्ह", choiceItem2_title: "✔ मजबूत स्थानिक कव्हरेज",
        choiceItem3_title: "✔ स्पष्ट आणि स्थिर कनेक्शन", choiceItem4_title: "✔ त्वरित ग्राहक समर्थन",
        choiceItem5_title: "✔ वाजवी आणि पारदर्शक किंमत", choiceItem6_title: "✔ समुदाय-केंद्रित सेवा",
        choiceItem7_title: "✔ चॅनेलची विस्तृत विविधता", choiceItem8_title: "✔ सोपे डिजिटल रिचार्ज",

        // Contact / Terms (mr)
        contactHeaderTitle: "संपर्क & भेटी",
        contactHeaderSubtitle: "आमच्या कार्यालयाला भेट द्या किंवा सहाय्य, रिचार्ज किंवा चौकशीसाठी संपर्क साधा. खाली आमचा पत्ता, संपर्क तपशील आणि कार्यालयाचे वेळ दिले आहेत。",
        getInTouchTitle: "संपर्क करा",
        addressTitle: "पत्ता",
        contactLabel: "संपर्क",
        emailLabel: "ईमेल",
        officeHoursTitle: "कार्यालयाचे वेळ",
        officeDays: "रविवार - शनिवार",
        officeEveryday: "दररोज",
        officeTime: "9:00 AM - 6:00 PM",
        directionsBtn: "मार्गदर्शन",
        whatsappVisitBtn: "व्हॉट्सअ‍ॅपवर संदेश",

        // Terms (mr)
        termsTitle: "अटी व शर्ती",
        termsIntro: "कृपया आमच्या सेवा वापरण्यापूर्वी या अटी आणि शर्ती काळजीपूर्वक वाचा。",
        termsSection1Title: "सेवा आणि सदस्यता",
        termsSection1: "आम्ही केबल टीव्ही पॅकेज आणि संबंधित डिजिटल सेवां पुरवतो. सदस्यता मासिक किंवा निवडलेल्या प्लॅननुसार बिल केली जातात。",
        termsSection2Title: "इंस्टॉलेशन व उपकरणे",
        termsSection2: "इंस्टॉलेशनसाठी तुमच्या परिसरात प्रवेश आवश्यक असू शकतो. प्रदान केलेली उपकरणे कंपनीची मालमत्ता राहतात。",
        termsSection3Title: "बाधा व देखभाल",
        termsSection3: "नियोजित देखभाल किंवा अनपेक्षित डाउनटाइम होऊ शकतो; आम्ही शक्य असल्यास पूर्वसूचना देऊ。",
        termsSection4Title: "गोपनीयता व डेटा",
        termsSection4: "खाते व्यवस्थापन व सेवा वितरणासाठी आम्ही मर्यादित माहिती गोळा करतो व ती काळजीपूर्वक हाताळतो。",
        termsSection5Title: "बिलिंग व रिफंड",
        termsSection5: "बिलिंग चक्रानुसार बिल तयार करण्यात येतात. वाद नोंदवण्यासाठी पुरावे सादर करा。",
        termsSection6Title: "संपर्क व समर्थन",
        termsSection6: "सहाय्यासाठी आम्हाला व्हॉट्सअ‍ॅप/फोनवर +91 77095 59466 वर संपर्क करा。",
        termsConclusion: "या अटी बदलू शकतात. बदलानंतर सेवांचा वापर केल्याने तुम्ही बदल स्वीकारता。"
    }
};

// --- REPLACED: Package Definition with the three new packages (full channel lists) ---

// 1) FOUNDATION PACK MH - 204 channels (price 200)
const foundationChannels = [
"9X JALWA","9X M","AAJ TAK","AAKASH AATH","AALAMI SAMAY","AASTHA","AASTHA BHAJAN","ABP ANANDA","ABP ASMITA","ABP MAJHA","ABP NEWS",
"AIR VIVIDH BHARATI","AL JAZEERA","ALI TV","AMRITA","ANDHERICHA RAJA","ANDHERICHA RAJA LIVE","ANGEL H TV","ARIRANG KOREA","ASEERVATHAM",
"ASHIRWAD","ASIANET NEWS","ATTENTION","AWAKENING","AYUSH TV","B4U KADAK","B4U MOVIES","B4U MUSIC","BHAKTHI TV","BHAKTI SAGAR","BHARAT EXPRESS",
"BHOJPURI CINEMA","BIG J","BIG MAGIC","CARE WORLD","CHANNEL WIN","COLORS CINEPLEX BOLLYWOOD","COLORS CINEPLEX SUPERHITS","COLORS RISHTEY",
"CUSTOMER SUPPORT","CVO MOVIES","DANGAL","DAYSTAR","DD ARUNPRABHA","DD BANGLA","DD BHARATI","DD BIHAR","DD CHANDANA","DD GIRNAR","DD INDIA",
"DD KASHIR","DD KISAN","DD MALAYALAM","DD MP","DD NATIONAL","DD NEWS","DD NORTH EAST","DD ORIYA","DD PORT BLAIR","DD PUNJABI","DD RAJASTHAN",
"DD SAHYADRI","DD SAPTAGIRI","DD SPORTS","DD TAMIL","DD UP","DD URDU","DD YADAGIRI","DHAMAKA MOVIES","DHARM SANDESH","DW","E 24","EK ONKAR CHANNEL",
"EWTN","FAKT MARATHI","FGN CHANNEL","FOOD FOOD","FTA GR-EAST & NORTHEAST","FTA GR-ENGLISH","FTA GR-HINDI & URDU","FTA GR-KANNADA","FTA GR-MALYALAM",
"FTA GR-NORTH & WEST","FTA GR-TAMIL","FTA GR-TELUGU","FTV","GOD TV","GOLDMINES","GOLDMINES BOLLYWOOD","GOOD NEWS TODAY","GOODNESS","GREEN CHILLIES TV",
"GYANDARSHAN 1","GYANDARSHAN 2","HARE KRSNA","HD LALBAUGH RAJA LIVE","HI DOST","HOUSEFULL MOVIES","IN MUMBAI SD LIVE VISARJAN","IN SYNC","INDIA TV",
"INFO CHANNEL","JEEVAN","JINVANI","KAIRALI","KAIRALI NEWS","KALAIGNAR CHITHIRAM","KASTHURI","KASTHURI NEWZ 24","KATYAYANI","KISHOR MANCH","LIVE TELECAST",
"LOCAL1","MAHOTSAV","MAKKAL","MAZHAVIL MANORAMA","MBC TV","MH 1 (MUSIC)","MUSIC INDIA","NDTV MARATHI","NEPAL ONE","NEWS 24","NEWS NATION",
"NEWS STATE MAHARASHTRA / GOA","NEWS18 INDIA","NXT STUDIO 1","NXT STUDIO 2","NXT STUDIO 3","NXT STUDIO 4","NXT STUDIO 5","NXT STUDIO 6",
"NXT STUDIO 7","NXT STUDIO 8","NXT TARANG","ODISHA TV","PARAS GOLD","PEACE OF MIND","POLIMER","POWER TV","PTC CHAK DE","PTC NEWS","PTC PUNJABI",
"PTC SIMRAN","PUTHIYA THAILAIMURAI","R.REPUBLIC BHARAT","RADIO CHANNEL 1","RAJ MUSIC TELUGU","RAJ MUSIX KANNADA","RAJ NEWS MALAYALAM","RAJ NEWS TELUGU",
"REPUBLIC","RT","RUPASHI BANGLA","S BANGLA","SAAM","SADHANA","SANGEET BHOJPURI","SANGEET MARATHI","SANSAD TV 1","SANSAD TV 1 HD","SANSAD TV 2",
"SANSAD TV 2 HD","SANSKAR","SATSANG","SD LIVE","SHARDA","SHARNAM TV","SHEMAROO MARATHI BANA","SHOP24SEVEN","SHOPPING WORLD","SHRADDHA MH ONE",
"SINDHI SAJAN","SOHAM","SONY PAL","SONY WAH","SRI SANKARA","STAR UTSAV","STAR UTSAV MOVIES","STV HARYANA NEWS","SUN MARATHI","SUVARNA NEWS",
"SVBC TTD","TAMILIAN","TEHZEEB","THANTHI TV","TIMES NOW NAVBHARAT","TV 9 TELUGU","TV5MONDE ASIE","TV9 BHARATVARSH","TV9 KANNADA","TV9 MARATHI",
"VASANTH","VISSA TV","WIN TV","WOW MUSIC","ZAINABIA CHANNEL","ZEE ACTION","ZEE ANMOL","ZEE ANMOL CINEMA","ZEE ANMOL CINEMA 2","ZEE BISKOPE",
"CHUMBAK TV","SHEMAROO TV","SHEMAROO UMANG"
];

// 2) FOUNDATION + MARATHI SUPER ENT PACK - 337 channels (price 410)
const superEntChannels = [
"&PICTURES","&TV","9X JALWA","9X M","AAJ TAK","AAKASH AATH","AALAMI SAMAY","AASTHA","AASTHA BHAJAN","ABP ANANDA","ABP ASMITA","ABP MAJHA",
"ABP NEWS","AIR VIVIDH BHARATI","AL JAZEERA","ALI TV","AMRITA","ANDHERICHA RAJA","ANDHERICHA RAJA LIVE","ANGEL H TV","ARIRANG KOREA","ASEERVATHAM",
"ASHIRWAD","ASIANET NEWS","ATTENTION","AWAKENING","AYUSH TV","B4U KADAK","B4U MOVIES","B4U MUSIC","BHAKTHI TV","BHAKTI SAGAR","BHARAT EXPRESS",
"BHOJPURI CINEMA","BIG J","BIG MAGIC","CARE WORLD","CHANNEL WIN","CNBC AWAAZ","CNBC BAJAAR","CNBC TV18","CNN NEWS18","COLORS","COLORS CINEPLEX",
"COLORS CINEPLEX BOLLYWOOD","COLORS CINEPLEX SUPERHITS","COLORS GUJARATI","COLORS GUJARATI CINEMA","COLORS MARATHI","COLORS RISHTEY","CUSTOMER SUPPORT",
"CVO MOVIES","DANGAL","DAYSTAR","DD ARUNPRABHA","DD BANGLA","DD BHARATI","DD BIHAR","DD CHANDANA","DD GIRNAR","DD INDIA","DD KASHIR","DD KISAN",
"DD MALAYALAM","DD MP","DD NATIONAL","DD NEWS","DD NORTH EAST","DD ORIYA","DD PORT BLAIR","DD PUNJABI","DD RAJASTHAN","DD SAHYADRI","DD SAPTAGIRI",
"DD SPORTS","DD TAMIL","DD UP","DD URDU","DD YADAGIRI","DHAMAKA MOVIES","DHARM SANDESH","DISNEY CHANNEL","DISNEY JUNIOR","DW","E 24","EK ONKAR CHANNEL",
"EPIC","ET NOW","ET NOW SWADESH","EWTN","FAKT MARATHI","FGN CHANNEL","FILAMCHI BHOJPURI","FOOD FOOD","FOODXP","FTA GR-EAST & NORTHEAST","FTA GR-ENGLISH",
"FTA GR-HINDI & URDU","FTA GR-KANNADA","FTA GR-MALYALAM","FTA GR-NORTH & WEST","FTA GR-TAMIL","FTA GR-TELUGU","FTV","GOD TV","GOLDMINES","GOLDMINES BOLLYWOOD",
"GOOD NEWS TODAY","GOOD TIMES","GOODNESS","GREEN CHILLIES TV","GUBBARE","GYANDARSHAN 1","GYANDARSHAN 2","HARE KRSNA","HD LALBAUGH RAJA LIVE","HI DOST",
"HOUSEFULL MOVIES","HUNGAMA TV","IN MUMBAI SD LIVE VISARJAN","IN SYNC","INDIA TV","INFO CHANNEL","ISHARA","JEEVAN","JINVANI","KAIRALI","KAIRALI NEWS",
"KALAIGNAR CHITHIRAM","KASTHURI","KASTHURI NEWZ 24","KATYAYANI","KISHOR MANCH","LIVE TELECAST","LOCAL1","MAHOTSAV","MAKKAL","MAZHAVIL MANORAMA",
"MBC TV","MH 1 (MUSIC)","MIRROR NOW","MNX","MOVIES NOW","MUSIC INDIA","NAT GEO WILD","NATIONAL GEOGRAPHIC","NAZARA","NDTV 24X7","NDTV INDIA",
"NDTV MARATHI","NDTV PROFIT","NEPAL ONE","NEWS 24","NEWS NATION","NEWS STATE MAHARASHTRA / GOA","NEWS18 ASSAM NORTH-EAST","NEWS18 BIHAR JHARKHAND",
"NEWS18 GUJARATI","NEWS18 INDIA","NEWS18 JAMMU KASHMIR LADAKH HIMACHAL","NEWS18 LOKMAT","NEWS18 MP CHHATTISGARH","NEWS18 PUNJAB HARYANA","NEWS18 RAJASTHAN",
"NEWS18 UP & UK","NICK","NICK JR","NXT SONGDEW","NXT STUDIO 1","NXT STUDIO 2","NXT STUDIO 3","NXT STUDIO 4","NXT STUDIO 5","NXT STUDIO 6",
"NXT STUDIO 7","NXT STUDIO 8","NXT TARANG","ODISHA TV","PARAS GOLD","PEACE OF MIND","POLIMER","POWER TV","PRAVAH PICTURE","PTC CHAK DE","PTC NEWS",
"PTC PUNJABI","PTC SIMRAN","PUTHIYA THAILAIMURAI","R.REPUBLIC BHARAT","RADIO CHANNEL 1","RAJ MUSIC TELUGU","RAJ MUSIX KANNADA","RAJ NEWS MALAYALAM",
"RAJ NEWS TELUGU","REPUBLIC","ROMEDY NOW","RT","RUPASHI BANGLA","S BANGLA","SAAM","SADHANA","SALAAM TV","SANGEET BHOJPURI","SANGEET MARATHI",
"SANSAD TV 1","SANSAD TV 1 HD","SANSAD TV 2","SANSAD TV 2 HD","SANSKAR","SATSANG","SD LIVE","SHARDA","SHARNAM TV","SHEMAROO MARATHI BANA",
"SHEMAROO UMANG","SHOP24SEVEN","SHOPPING WORLD","SHOWBOX","SHRADDHA MH ONE","SINDHI SAJAN","SOHAM","SONIC","SONY BBC EARTH","SONY ENTERTAINMENT TELEVISION",
"SONY MARATHI","SONY MAX","SONY MAX 1","SONY MAX 2","SONY PAL","SONY PIX","SONY SAB","SONY SPORTS TEN 1","SONY SPORTS TEN 2","SONY SPORTS TEN 3",
"SONY SPORTS TEN 5","SONY WAH","SONY YAY!","SRI SANKARA","STAR BHARAT","STAR GOLD","STAR GOLD 2","STAR GOLD ROMANCE","STAR GOLD THRILLS","STAR PLUS",
"STAR PRAVAH","STAR SPORTS 1 HINDI","STAR SPORTS 2 HINDI","STAR SPORTS 3","STAR SPORTS KHEL","STAR UTSAV","STAR UTSAV MOVIES","STV HARYANA NEWS",
"SUN MARATHI","SUPER HUNGAMA","SUVARNA NEWS","SVBC TTD","TAMILIAN","TEHZEEB","THANTHI TV","THE HISTORY CHANNEL","TIMES NOW","TIMES NOW NAVBHARAT",
"TOONS","TV 9 TELUGU","TV5MONDE ASIE","TV9 BHARATVARSH","TV9 KANNADA","TV9 MARATHI","VASANTH","VISSA TV","WIN TV","WION","WOW MUSIC","ZAINABIA CHANNEL",
"ZEE 24 KALAK","ZEE 24 TAAS","ZEE ACTION","ZEE ANMOL","ZEE ANMOL CINEMA","ZEE ANMOL CINEMA 2","ZEE BHARAT","ZEE BIHAR JHARKHAND","ZEE BISKOPE",
"ZEE BOLLYWOOD","ZEE BUSINESS","ZEE CINEMA","ZEE CLASSIC","ZEE DELHI NCR HARYANA","ZEE KANNADA NEWS","ZEE MARATHI","ZEE MP CHHATTISGARH","ZEE NEWS",
"ZEE PUNJAB HARYANA HIMACHAL","ZEE PUNJABI","ZEE RAJASTHAN NEWS","ZEE TALKIES","ZEE TV","ZEE UP & UK","ZEE YUVA","ZEE ZEST","ZING","ZOOM",
"CHUMBAK TV","SHEMAROO TV","SHEMAROO UMANG","DISCOVERY CHANNEL","CARTOON NETWORK","POGO","D TAMIL","DISCOVERY TURBO","DISCOVERY SCIENCE",
"INVESTIGATION DISCOVERY","EUROSPORT","DISCOVERY KIDS","TLC","ANIMAL PLANET","FILMI GAANE","IBAADAT TV","SHEMAROO BHAKTI","SUNFLOWER KIDS","COMEDY 24X7",
"BOLLYWOOD HITZ"
];

// 3) In Starter Marathi HD - price 510 - 337 channels (channels provided)
const starterHDChannels = [
"CHANNEL LOGO","&FLIX HD","&PICTURES HD","&PRIVE HD","&TV HD","&XPLOR HD","9X JALWA","9X M","AAJ TAK","AAJ TAK HD","AAKASH AATH","AALAMI SAMAY",
"AASTHA","AASTHA BHAJAN","ABP ANANDA","ABP ASMITA","ABP MAJHA","ABP NEWS","AIR VIVIDH BHARATI","AL JAZEERA","ALI TV","AMRITA","ANDHERICHA RAJA",
"ANDHERICHA RAJA LIVE","ANGEL H TV","ARIRANG KOREA","ASEERVATHAM","ASHIRWAD","ASIANET NEWS","ATTENTION","AWAKENING","AYUSH TV","B4U KADAK","B4U MOVIES",
"B4U MUSIC","BBC NEWS","BHAKTHI TV","BHAKTI SAGAR","BHARAT EXPRESS","BHOJPURI CINEMA","BIG J","BIG MAGIC","CARE WORLD","CBEEBIES","CHANNEL WIN",
"CNBC AWAAZ","CNBC TV18","CNBC TV18 PRIME HD","CNN NEWS18","COLORS CINEPLEX BOLLYWOOD","COLORS CINEPLEX HD","COLORS CINEPLEX SUPERHITS","COLORS HD",
"COLORS INFINITY HD","COLORS MARATHI HD","COLORS RISHTEY","CUSTOMER SUPPORT","CVO MOVIES","DANGAL","DAYSTAR","DD ARUNPRABHA","DD BANGLA","DD BHARATI",
"DD BIHAR","DD CHANDANA","DD GIRNAR","DD INDIA","DD KASHIR","DD KISAN","DD MALAYALAM","DD MP","DD NATIONAL","DD NEWS","DD NORTH EAST","DD ORIYA",
"DD PORT BLAIR","DD PUNJABI","DD RAJASTHAN","DD SAHYADRI","DD SAPTAGIRI","DD SPORTS","DD TAMIL","DD UP","DD URDU","DD YADAGIRI","DHAMAKA MOVIES",
"DHARM SANDESH","DISNEY CHANNEL","DISNEY INTERNATIONAL HD","DISNEY JUNIOR","DW","E 24","EK ONKAR CHANNEL","EPIC","ET NOW","ET NOW SWADESH","EWTN",
"FAKT MARATHI","FGN CHANNEL","FILAMCHI BHOJPURI","FOOD FOOD","FOODXP","FTA GR-EAST & NORTHEAST","FTA GR-ENGLISH","FTA GR-HINDI & URDU","FTA GR-KANNADA",
"FTA GR-MALYALAM","FTA GR-NORTH & WEST","FTA GR-TAMIL","FTA GR-TELUGU","FTV","GOD TV","GOLDMINES","GOLDMINES BOLLYWOOD","GOOD NEWS TODAY","GOOD TIMES",
"GOODNESS","GREEN CHILLIES TV","GUBBARE","GYANDARSHAN 1","GYANDARSHAN 2","HARE KRSNA","HD LALBAUGH RAJA LIVE","HI DOST","HISTORY TV18 HD","HOUSEFULL MOVIES",
"HUNGAMA TV","IN MUMBAI SD LIVE VISARJAN","IN SYNC","INDIA TODAY","INDIA TV","INDIA TV SPEED NEWS HD","INFO CHANNEL","ISHARA","JEEVAN","JINVANI",
"KAIRALI","KAIRALI NEWS","KALAIGNAR CHITHIRAM","KASTHURI","KASTHURI NEWZ 24","KATYAYANI","KISHOR MANCH","LIVE TELECAST","LOCAL1","MAHOTSAV","MAKKAL",
"MAZHAVIL MANORAMA","MBC TV","MH 1 (MUSIC)","MIRROR NOW","MN+ HD","MNX HD","MOVIES NOW HD","MUSIC INDIA","NAT GEO WILD HD","NATIONAL GEOGRAPHIC HD",
"NAZARA","NDTV 24X7","NDTV INDIA","NDTV MARATHI","NDTV PROFIT","NEPAL ONE","NEWS 24","NEWS NATION","NEWS STATE MAHARASHTRA / GOA","NEWS18 INDIA",
"NEWS18 LOKMAT","NICK","NICK HD+","NICK JR","NXT SONGDEW","NXT STUDIO 1","NXT STUDIO 2","NXT STUDIO 3","NXT STUDIO 4","NXT STUDIO 5","NXT STUDIO 6",
"NXT STUDIO 7","NXT STUDIO 8","NXT TARANG","ODISHA TV","PARAS GOLD","PEACE OF MIND","POLIMER","POWER TV","PRAVAH PICTURE HD","PTC CHAK DE","PTC NEWS",
"PTC PUNJABI","PTC SIMRAN","PUTHIYA THAILAIMURAI","R.REPUBLIC BHARAT","RADIO CHANNEL 1","RAJ MUSIC TELUGU","RAJ MUSIX KANNADA","RAJ NEWS MALAYALAM",
"RAJ NEWS TELUGU","REPUBLIC","ROMEDY NOW","RT","RUPASHI BANGLA","S BANGLA","SAAM","SADHANA","SALAAM TV","SANGEET BHOJPURI","SANGEET MARATHI",
"SANSAD TV 1","SANSAD TV 1 HD","SANSAD TV 2","SANSAD TV 2 HD","SANSKAR","SATSANG","SD LIVE","SHARDA","SHARNAM TV","SHEMAROO MARATHI BANA","SHEMAROO UMANG",
"SHOP24SEVEN","SHOPPING WORLD","SHOWBOX","SHRADDHA MH ONE","SINDHI SAJAN","SOHAM","SONIC","SONY AATH","SONY BBC EARTH HD","SONY ENTERTAINMENT TELEVISION HD",
"SONY MARATHI","SONY MAX 2","SONY MAX HD","SONY PAL","SONY PIX HD","SONY SAB HD","SONY SPORTS TEN 1 HD","SONY SPORTS TEN 2 HD","SONY SPORTS TEN 3 HD",
"SONY SPORTS TEN 5 HD","SONY WAH","SONY YAY!","SRI SANKARA","STAR BHARAT HD","STAR GOLD 2 HD","STAR GOLD HD","STAR GOLD ROMANCE","STAR GOLD THRILLS",
"STAR MOVIES HD","STAR PLUS HD","STAR PRAVAH HD","STAR SPORTS 1 HD HINDI","STAR SPORTS 2 HINDI HD","STAR SPORTS 2 HINDI HD","STAR SPORTS 2 TAMIL",
"STAR SPORTS 3","STAR SPORTS HD1","STAR SPORTS HD2","STAR SPORTS KHEL","STAR UTSAV","STAR UTSAV MOVIES","STV HARYANA NEWS","SUN MARATHI","SUN MARATHI HD",
"SUPER HUNGAMA","SUVARNA NEWS","SVBC TTD","TAMILIAN","TEHZEEB","THANTHI TV","TIMES NOW","TIMES NOW NAVBHARAT HD","TIMES NOW WORLD HD","TOONS",
"TV 9 TELUGU","TV5MONDE ASIE","TV9 BHARATVARSH","TV9 KANNADA","TV9 MARATHI","VASANTH","VISSA TV","WIN TV","WION","WOW MUSIC","ZAINABIA CHANNEL",
"ZEE 24 TAAS","ZEE ACTION","ZEE ANMOL","ZEE ANMOL CINEMA","ZEE BHARAT","ZEE BISKOPE","ZEE BOLLYWOOD","ZEE BUSINESS","ZEE CINEMA HD","ZEE CLASSIC",
"ZEE MARATHI HD","ZEE NEWS","ZEE TALKIES HD","ZEE TV HD","ZEE YUVA","ZEE ZEST HD","ZING","ZOOM","CHUMBAK TV","SHEMAROO TV","SHEMAROO UMANG",
"ANIMAL PLANET HD","DISCOVERY HD","DISCOVERY KIDS","TLC HD","D TAMIL","POGO","CARTOON NETWORK HD+","CARTOON NETWORK","EUROSPORT HD","INVESTIGATION DISCOVERY HD",
"FILMI GAANE","IBAADAT TV","SHEMAROO BHAKTI","SUNFLOWER KIDS","COMEDY 24X7","BOLLYWOOD HITZ"
];

// Create the packages array used by render logic
const packages = [
    {
        id: 'foundation-mh',
        name: 'FOUNDATION PACK MH',
        price: '₹200',
        channelsCount: 204,
        tagline: 'Simple. Complete. Your Foundation for Entertainment and Information.',
        channels: foundationChannels
    },
    {
        id: 'foundation-super-ent',
        name: 'FOUNDATION + MARATHI SUPER ENT PACK',
        price: '₹410',
        channelsCount: 337,
        tagline: 'The Full Spectrum of World : News, Entertainment, Sport, and Knowledge—One Stop for Everything.',
        channels: superEntChannels
    },
    {
        id: 'starter-marathi-hd',
        name: 'In Starter Marathi HD',
        price: '₹510',
        channelsCount: 337,
        tagline: 'The Best View of Everything. In HD.',
        channels: starterHDChannels
    }
];

// =====================================================================
// 2. RENDER LOGIC
// =====================================================================

const container = document.getElementById('packages-container');
let currentLang = localStorage.getItem('language') || 'en'; // Initialize current language

// Function to render packages (called every time language changes)
const renderPackages = (lang) => {
    const langData = translations[lang] || translations['en'];
    // Check if the container exists (only exists on index.html)
    if (!container) return;

    container.innerHTML = ''; // Clear existing cards

    packages.forEach((pack, index) => {
        // Get translated texts (pack.name is already final; we still fall back to translations if needed)
        const packName = pack.name || langData[pack.nameKey] || 'Package';
        const packDesc = langData[pack.descKey] || '';

        // build channel list HTML safely
        const channelsHtml = pack.channels.map(channel => `<li>• ${escapeHtml(channel)}</li>`).join('');

        const cardHTML = `
            <div class="package-card" id="${escapeHtml(pack.id)}">
                <div class="package-header">
                    <h3>${escapeHtml(packName)}</h3>
                    <span class="price">${escapeHtml(pack.price)}<small>/mo</small></span>
                </div>

                <p style="margin:6px 0 8px; font-weight:600; color:#333;">${escapeHtml(pack.channelsCount + ' channels')}</p>

                <p style="margin:6px 0 12px; color:#444; font-style:italic;">${escapeHtml(pack.tagline)}</p>

                <button class="toggle-btn" onclick="toggleChannels(${index})">
                    ${langData.viewChannelBtn} ▾
                </button>

                <div class="channel-list" id="list-${index}" aria-hidden="true">
                    <ul style="list-style:none; padding-left:0; margin:10px 0; columns: 1; column-gap: 18px;">
                        ${channelsHtml}
                    </ul>
                </div>

                <button class="btn-primary" style="width:100%; margin-top:10px;" onclick="inquire('${escapeJs(packName)}')">
                    ${langData.choosePlanBtn}
                </button>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
};

// =====================================================================
// 3. MULTILINGUAL LOGIC
// =====================================================================

const translateElements = (lang) => {
    const languageSet = translations[lang];
    if (!languageSet) return;

    // 1. Translate Elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (languageSet[key]) {
            // Special handling for placeholder text
            if (element.tagName === 'INPUT') {
                element.placeholder = languageSet[key];
            } else {
                element.innerHTML = languageSet[key]; // support bold tags
            }
        }
    });

    // 2. Translate Select Options (Target only complaint form select)
    const formSelect = document.querySelector('.complaint-form select');
    if (formSelect) {
        const formOptions = [
            { key: 'optionNoSignal', value: formSelect.querySelector('option:nth-child(1)') },
            { key: 'optionSetTopError', value: formSelect.querySelector('option:nth-child(2)') },
            { key: 'optionBillIssue', value: formSelect.querySelector('option:nth-child(3)') },
            { key: 'optionWireCut', value: formSelect.querySelector('option:nth-child(4)') }
        ];

        formOptions.forEach(item => {
            if (item.value && languageSet[item.key]) {
                item.value.textContent = languageSet[item.key];
            }
        });
    }

    // 3. Update Developer Line (Available on all pages in footer)
    const devElement = document.querySelector('.footer-developed-by');
    if (devElement) {
        devElement.innerHTML = languageSet.footerDev + '<span>Sahil Karande</span>';
    }

    // 4. Update marquee text (if present on the page)
    updateMarqueeText(lang);

    // 5. Translate page-specific elements safely:
    // Safe selector map (applies to elements that appear in contact/support/footer)
    const safeSelectorMap = {
        '.contact-card h3': 'getInTouchTitle',
        '.contact-card h4:nth-of-type(1)': 'addressTitle',
        '.hours-card h3': 'officeHoursTitle',
        '.hours-row .hours-day:nth-child(1)': 'officeDays',
        '.hours-row .hours-day:nth-child(2)': 'officeEveryday',
        '.hours-row .hours-time': 'officeTime',
        '.map-wrap a.btn-primary:nth-of-type(1)': 'directionsBtn',
        '.map-wrap a.btn-primary:nth-of-type(2)': 'whatsappVisitBtn',
        '.footer-links-col h3': 'quickLinksTitle',
        '.footer-support-col h3': 'supportTitle',
        '.footer-contact-details-col h3': 'contactTitle',
        '.footer-col.footer-branding-col .footer-about-text': 'footerAboutText'
    };

    Object.keys(safeSelectorMap).forEach(sel => {
        const key = safeSelectorMap[sel];
        const el = document.querySelector(sel);
        if (el && languageSet[key]) el.textContent = languageSet[key];
    });

    // Only translate the contact page header if we detect the contact page (.contact-page-grid exists)
    if (document.querySelector('.contact-page-grid')) {
        const contactH1 = document.querySelector('section.container h1');
        const contactP  = document.querySelector('section.container p');
        if (contactH1 && languageSet.contactHeaderTitle) contactH1.textContent = languageSet.contactHeaderTitle;
        if (contactP && languageSet.contactHeaderSubtitle) contactP.textContent = languageSet.contactHeaderSubtitle;
    }

    // Translate terms page header if we are on terms page (body.terms-page)
    if (document.body && document.body.classList.contains('terms-page')) {
        const termsH1 = document.querySelector('section.container h1[data-translate="termsTitle"]') || document.querySelector('section.container h1');
        const termsP  = document.querySelector('section.container p[data-translate="termsIntro"]') || document.querySelector('section.container p');
        if (termsH1 && languageSet.termsTitle) termsH1.textContent = languageSet.termsTitle;
        if (termsP && languageSet.termsIntro) termsP.textContent = languageSet.termsIntro;
        // Also translate terms sections if present
        const termKeys = [
            'termsSection1Title','termsSection1',
            'termsSection2Title','termsSection2',
            'termsSection3Title','termsSection3',
            'termsSection4Title','termsSection4',
            'termsSection5Title','termsSection5',
            'termsSection6Title','termsSection6',
            'termsConclusion'
        ];
        termKeys.forEach(k => {
            document.querySelectorAll(`[data-translate="${k}"]`).forEach(el => {
                if (languageSet[k]) el.innerHTML = languageSet[k];
            });
        });
    }

    // Some headings inside the contact-card are <h4> without fixed selectors.
    // We'll search by their current English text (fallback) and replace if matched.
    const fallbackLabelMap = [
        { find: /Address|पता|पत्ता/i, key: 'addressTitle' },
        { find: /Contact|संपर्क|संपर्क/i, key: 'contactLabel' },
        { find: /Email Address|ईमेल पता|ईमेल पत्ता/i, key: 'emailLabel' }
    ];

    document.querySelectorAll('.contact-card h4').forEach(h4 => {
        const txt = h4.textContent.trim();
        for (const m of fallbackLabelMap) {
            if (m.find.test(txt) && languageSet[m.key]) {
                h4.textContent = languageSet[m.key];
                break;
            }
        }
    });

    // Update the "Open in Google Maps" link text if present (keep as link but translate small arrow text)
    const mapsLink = document.querySelector('.contact-card a[href*="google.com/maps"]');
    if (mapsLink && languageSet.directionsBtn) {
        // keep the arrow; just replace visible text before arrow
        mapsLink.textContent = languageSet.directionsBtn + " →";
    }
};

// Main function to switch language
function setLanguage(langCode) {
    if (!translations[langCode]) return;

    // Save preference and update current language variable
    localStorage.setItem('language', langCode);
    currentLang = langCode;

    // Run translation functions (updates static text on ALL pages)
    translateElements(langCode);

    // Re-render packages (only runs if packages container exists on index.html)
    renderPackages(langCode);
}

// =====================================================================
// 4. INITIALIZATION & OTHER LOGIC
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';

    // Set the dropdown to the saved language (available on ALL pages)
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.value = savedLang;
    }

    // This runs the initial translation and rendering based on the page content
    setLanguage(savedLang);

    // Initialize marquee ONLY if it's present on the page (so other pages unaffected)
    if (document.querySelector('.marquee')) {
        initMarquee();
    }
});

// =====================================================================
// 5. LOGIC: Toggle the accordion (Show/Hide channels) - REMAINS THE SAME
// =====================================================================

function toggleChannels(index) {
    const list = document.getElementById(`list-${index}`);
    const button = document.querySelector(`button[onclick="toggleChannels(${index})"]`);

    if (!list || !button) return; // Prevent error if run on non-package page

    if (list.classList.contains('active')) {
        list.classList.remove('active');
        list.setAttribute('aria-hidden', 'true');
        button.textContent = (translations[currentLang] || translations.en).viewChannelBtn + ' ▾';
    } else {
        list.classList.add('active');
        list.setAttribute('aria-hidden', 'false');
        button.textContent = 'Hide Channel List ▴';
    }
}

// 6. LOGIC: Handle buttons - REMAINS THE SAME
function inquire(planName) {
    // Redirect to WhatsApp with a pre-filled message
    const message = `Hello, I am interested in the ${planName}`;
    window.open(`https://wa.me/917709559466?text=${encodeURIComponent(message)}`, '_blank');
}

function submitComplaint(event) {
    if(event && event.preventDefault) event.preventDefault(); // Stop page from reloading
    alert("Your complaint has been logged! Ticket #1023 created.");
}

// =====================================================================
// 7. MARQUEE HELPERS + INIT
// =====================================================================

function updateMarqueeText(lang) {
    const langData = translations[lang] || translations['en'];
    const text = langData.offerTitle || 'HD Setup Box Offer !';
    // Update existing marquee-item nodes if present
    document.querySelectorAll('.marquee-item').forEach(item => {
        item.textContent = text;
    });
    // If there is no .marquee-item (maybe user has raw text), try replacing track content
    const tracks = document.querySelectorAll('.marquee-track');
    tracks.forEach(track => {
        // replace all child nodes with a small set of marquee-item nodes containing translated text
        if (track.children.length === 0) {
            for (let i = 0; i < 4; i++) {
                const node = document.createElement('div');
                node.className = 'marquee-item';
                node.textContent = text;
                track.appendChild(node);
            }
        }
    });
}

/* ===== INFINITE MARQUEE INIT ===== */
function initMarquee() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;

    // Wrap existing items into marquee-inner -> marquee-track if needed
    let inner = marquee.querySelector('.marquee-inner');
    if (!inner) {
        inner = document.createElement('div');
        inner.className = 'marquee-inner';
        // Move all direct children (likely .marquee-track or .marquee-item) inside inner
        while (marquee.firstChild) {
            inner.appendChild(marquee.firstChild);
        }
        marquee.appendChild(inner);
    }

    // If there are direct .marquee-item children inside inner (not wrapped in track), create a track
    let firstTrack = inner.querySelector('.marquee-track');
    if (!firstTrack) {
        const items = Array.from(inner.children).filter(n => n.classList && n.classList.contains('marquee-item'));
        if (items.length) {
            const newTrack = document.createElement('div');
            newTrack.className = 'marquee-track';
            items.forEach(it => newTrack.appendChild(it));
            // clear inner and append the new track
            inner.innerHTML = '';
            inner.appendChild(newTrack);
        } else {
            // Attempt to wrap any child nodes into a track (fallback)
            const anyChildren = Array.from(inner.children);
            if (anyChildren.length) {
                const newTrack = document.createElement('div');
                newTrack.className = 'marquee-track';
                anyChildren.forEach(ch => newTrack.appendChild(ch));
                inner.appendChild(newTrack);
            } else {
                // nothing to animate
                return;
            }
        }
    }

    // At this point we should have at least one .marquee-track
    firstTrack = inner.querySelector('.marquee-track');
    if (!firstTrack) return;

    // Ensure marquee items use the current language text
    updateMarqueeText(currentLang);

    // Save original HTML of a single track to clone from
    const originalHTML = firstTrack.innerHTML;

    // Remove any extra tracks to start fresh; keep the first one
    inner.querySelectorAll('.marquee-track').forEach((t, i) => {
        if (i > 0) t.remove();
    });

    // Ensure enough content: clone the track until inner.scrollWidth >= 2 * viewport width
    // REPLACE the existing ensureEnough() implementation with this:
    
    // --- Replacement ensureEnough + computeDuration logic ---
    
    const ensureEnough = () => {
        const vpWidth = marquee.clientWidth || window.innerWidth;
        let safety = 0;
        const minTracks = 3;          // ensure at least this many tracks for smoothness
        const targetMultiplier = 2.5; // inner.scrollWidth >= 2.5 * viewport width
    
        const originalTrack = inner.querySelector('.marquee-track');
        if (!originalTrack) return;
    
        const targetWidth = vpWidth * targetMultiplier;
    
        // Keep cloning the original track until target width or min tracks satisfied
        while ((inner.scrollWidth < targetWidth || inner.querySelectorAll('.marquee-track').length < minTracks) && safety++ < 120) {
            const clone = document.createElement('div');
            clone.className = 'marquee-track';
            clone.innerHTML = originalHTML;
            inner.appendChild(clone);
        }
    
        // Ensure at least two full copies exist (original + clones) to allow -100% translate
        const trackCount = inner.querySelectorAll('.marquee-track').length;
        if (trackCount < 2) {
            const clone = document.createElement('div');
            clone.className = 'marquee-track';
            clone.innerHTML = originalHTML;
            inner.appendChild(clone);
        }
    };
    
    const computeDuration = () => {
        // compute total width of the inner content (one full cycle should be one duplicated width)
        const totalWidth = inner.scrollWidth || inner.offsetWidth;
        if (!totalWidth) return;
    
        // px per second -> increase for faster speed, reduce for slower
        // Mobile (narrow view): even faster so it doesn't feel slow (e.g. 340)
        const desktopPxPerSec = 240;   // increase this to speed up more on desktop
        const mobilePxPerSec  = 840;   // increase this to speed up more on mobile
    
        // detect small screens — adjust threshold to match your mobile breakpoint
        const isMobile = (window.innerWidth || document.documentElement.clientWidth) <= 800;
    
        const pxPerSec = isMobile ? mobilePxPerSec : desktopPxPerSec;
    
        // duration to travel one track width (seconds)
        const track = inner.querySelector('.marquee-track');
        if (!track) return;
        const trackWidth = track.offsetWidth;
        if (!trackWidth) return;
    
        const duration = Math.max(3, Math.round((trackWidth + parseFloat(getComputedStyle(track).gap || 0)) / pxPerSec));
    
        // write the computed duration to the CSS custom property used by the animation
        inner.style.setProperty('--marquee-duration', duration + 's');
    };
    
    
    // Run ensure after a small delay so fonts can load
    setTimeout(ensureEnough, 30);
    
    // Compute after a small delay, and on resize
    setTimeout(computeDuration, 80);
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // rebuild clones and recompute
            inner.innerHTML = '<div class="marquee-track">' + originalHTML + '</div>';
            setTimeout(() => {
                ensureEnough();
                computeDuration();
            }, 60);
        }, 200);
    }, { passive: true });
    
    // Pause on hover/focus (accessibility)
    marquee.addEventListener('pointerenter', () => {
        inner.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('pointerleave', () => {
        inner.style.animationPlayState = 'running';
    });
    marquee.addEventListener('focusin', () => {
        inner.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('focusout', () => {
        inner.style.animationPlayState = 'running';
    });
    
    // Respect reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        inner.style.animation = 'none';
    }
}
// if initMarquee has already run, re-run ensure/compute sizing to adapt to new text length
if (typeof initMarquee === 'function' && document.querySelector('.marquee')) {
    // small delay to allow DOM changes and font load
    setTimeout(() => {
        try {
            // rebuild clones and recompute duration
            const marqueeEl = document.querySelector('.marquee');
            const innerEl = marqueeEl.querySelector('.marquee-inner');
            // let initMarquee handle cloning if needed on resize; but call ensureEnough+computeDuration if available
            if (typeof ensureEnough === 'function') ensureEnough();
            if (typeof computeDuration === 'function') computeDuration();
        } catch (e) {
            // ignore if helpers aren't in scope
        }
    }, 80);
}
// ===== Mobile menu toggle (hamburger) =====
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.mobile-menu-toggle');
  const panel = document.querySelector('.mobile-nav-panel');

  if (!btn || !panel) return;

  // create backdrop element (only once)
  let backdrop = document.querySelector('.mobile-nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
  }

  // initialize aria attributes (safe default closed)
  btn.setAttribute('aria-expanded', 'false');
  panel.setAttribute('aria-hidden', 'true');
  backdrop.setAttribute('aria-hidden', 'true');

  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');

    if (open) {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      btn.classList.add('open');

      // show backdrop and lock body scroll
      backdrop.classList.add('show');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.classList.add('nav-open');
    } else {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
      btn.classList.remove('open');

      // hide backdrop and restore body scroll
      backdrop.classList.remove('show');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nav-open');
    }
  };

  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    setOpen(open);
    // if opening, move focus to first link in panel for accessibility
    if (open) {
      const firstLink = panel.querySelector('a, button');
      if (firstLink) firstLink.focus();
    } else {
      btn.focus();
    }
  });

  // close when clicking a link inside the panel (so it navigates and hides)
  panel.addEventListener('click', (ev) => {
    const a = ev.target.closest('a');
    if (!a) return;
    setOpen(false);
    open = false;
    // allow normal link navigation to proceed
  });

  // close when clicking the backdrop
  backdrop.addEventListener('click', () => {
    if (!open) return;
    open = false;
    setOpen(false);
    btn.focus();
  });

  // close on outside click (in case panel is open and click is outside both btn and panel)
  document.addEventListener('click', (e) => {
    if (!open) return;
    if (!panel.contains(e.target) && !btn.contains(e.target) && !backdrop.contains(e.target)) {
      open = false;
      setOpen(false);
    }
  });

  // close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) {
      open = false;
      setOpen(false);
      btn.focus();
    }
  });
});

// =====================================================================
// Helpers: escaping to avoid injection in template strings
// =====================================================================
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function escapeJs(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/'/g, "\\'");
}
