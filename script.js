 // 🏨 पटना, भागलपुर और रांची के प्रीमियम होटल्स का लाइव डेटाबेस एरे (असली कमरों की फोटो लिंक्स के साथ)
const datasetHotels = [
    { 
        id: 1, 
        name: "OYO Premium Flagship 104", 
        city: "Patna", 
        price: 1499, 
        specs: "AC Luxury King Room | Premium Smart TV | Couple Friendly Space | High-Speed WiFi Included", 
        img: "https://unsplash.com", 
        badge: "best seller" 
    },
    { 
        id: 2, 
        name: "Hotel Heritage Palace Deluxe", 
        city: "Patna", 
        price: 1899, 
        specs: "Suite Balcony View | Cozy Living Lounge | 24/7 Room Service Support | Corporate Luxury Setup", 
        img: "https://unsplash.com", 
        badge: "top rated" 
    },
    { 
        id: 3, 
        name: "OYO Royal Guest House G2", 
        city: "Bhagalpur", 
        price: 1199, 
        specs: "Standard Clean AC Room | Attached Modern Bath | Geyser Enabled | Perfect Budget Travel Option", 
        img: "https://unsplash.com", 
        badge: "budget choice" 
    },
    { 
        id: 4, 
        name: "The Capital Comfort Residency", 
        city: "Bhagalpur", 
        price: 2199, 
        specs: "Executive Double Bed Suite | Private Workspace Setup | Free Secure Car Parking | Complimentary Breakfast", 
        img: "https://unsplash.com", 
        badge: "premium suite" 
    },
    { 
        id: 5, 
        name: "OYO Flagship Elegant Stay", 
        city: "Ranchi", 
        price: 1350, 
        specs: "Modern Ventilated AC Room | Fresh Linens Guaranteed | 100% Sanitized Layout | Couple Secure", 
        img: "https://unsplash.com", 
        badge: "popular" 
    },
    { 
        id: 6, 
        name: "Hotel Ranchi Grand Plaza", 
        city: "Ranchi", 
        price: 2500, 
        specs: "Ultra Luxury Suite | Swimming Pool View Balcony | Premium Mini-Bar Setup | High Density Bedding", 
        img: "https://unsplash.com", 
        badge: "luxury choice" 
    }
];

// Real Real Language Dataset (English / Hindi Toggle)
const langData = {
    en: {
        title: "✨ OYO STYLISH NETWORK ✨",
        tagline: "Premium Property Grid & Direct WhatsApp Booking Management",
        optAll: "🔍 All Cities (सभी शहर देखें)",
        trust1: "100% Safe & Secure Stays",
        trust2: "Zero Booking Fees / No Hidden Tax",
        trust3: "Free Cancellation Anytime",
        trust4: "Local ID Accepted & Couple Friendly",
        aboutTitle: "About Premium Stays Network",
        aboutDesc: "We are India's fastest-growing autonomous hotel tech network. By eliminating aggregators, we connect premium corporate clients and travelers directly with elite property owners via WhatsApp automation. Save heavy commissions and experience transparent hospitality.",
        btnText: "Book Directly via WhatsApp",
        modalHead: "🛎️ Confirm Direct Booking",
        modalSubmit: "Complete Booking via WhatsApp",
        modalCancel: "Cancel",
        langBtn: "<i class='fas fa-language'></i> Change Language (HI)"
    },
    hi: {
        title: "✨ ओयो स्टाइलिश नेटवर्क ✨",
        tagline: "प्रीमियम होटल ग्रिड और डायरेक्ट व्हाट्सएप बुकिंग सिस्टम",
        optAll: "🔍 सभी शहर (All Cities देखें)",
        trust1: "100% सुरक्षित और सेफ स्टे",
        trust2: "जीरो बुकिंग फीस / कोई छुपा टैक्स नहीं",
        trust3: "कभी भी फ्री कैंसिलेशन उपलब्ध",
        trust4: "लोकल आईडी मान्य और कपल फ्रेंडली",
        aboutTitle: "Premium Stays नेटवर्क के बारे में",
        aboutDesc: "हम भारत के सबसे तेजी से बढ़ते स्वतंत्र होटल टेक नेटवर्क हैं। बिचौलियों (Aggregators) को हटाकर, हम प्रीमियम कॉर्पोरेट ग्राहकों और यात्रियों को व्हाट्सएप ऑटोमेशन के जरिए सीधे होटल मालिकों से जोड़ते हैं। भारी कमीशन बचाएं और पारदर्शी आतिथ्य का अनुभव करें।",
        btnText: "सीधे व्हाट्सएप पर बुक करें",
        modalHead: "🛎️ डायरेक्ट बुकिंग की पुष्टि करें",
        modalSubmit: "व्हाट्सएप के जरिए बुकिंग पूरी करें",
        modalCancel: "रद्द करें",
        langBtn: "<i class='fas fa-language'></i> भाषा बदलें (EN)"
    }
};

let currentLang = "en";
let activeHotel = null;

// होटल्स लोड करने का फंक्शन
function drawHotels(filterList) {
    const grid = document.getElementById('hotelGrid');
    if (!grid) return; grid.innerHTML = "";
    
    filterList.forEach(hotel => {
        const card = document.createElement('div');
        card.className = "hotel-card";
        card.innerHTML = `
            <div class="hotel-img-box">
                <span class="hotel-badge">🔥 ${hotel.badge}</span>
                <img src="${hotel.img}" alt="${hotel.name}">
            </div>
            <div class="hotel-info">
                <h3 class="hotel-title">${hotel.name}</h3>
                <p class="hotel-loc"><i class="fas fa-map-marker-alt"></i> Location: ${hotel.city}, India</p>
                <p class="hotel-specs">${hotel.specs}</p>
                <p class="hotel-price">R ${hotel.price.toLocaleString('en-IN')}/Night</p>
                <button class="book-btn" onclick="openBookingModal(${hotel.id})">${langData[currentLang].btnText}</button>
            </div>`;
        grid.appendChild(card);
    });
}

// 🔍 शहर फ़िल्टर करना
function executeFiltering() {
    const val = document.getElementById('cityFilter').value;
    const res = val === "all" ? datasetHotels : datasetHotels.filter(h => h.city === val);
    drawHotels(res);
}

// 🌐 भाषा बदलने का लाइव लॉजिक
function toggleLanguage() {
    currentLang = currentLang === "en" ? "hi" : "en";
    
    // टेक्स्ट बदलना
    document.getElementById('mainTitle').innerText = langData[currentLang].title;
    document.getElementById('mainTagline').innerText = langData[currentLang].tagline;
    document.getElementById('optAll').innerText = langData[currentLang].optAll;
    document.getElementById('trust1').innerText = langData[currentLang].trust1;
    document.getElementById('trust2').innerText = langData[currentLang].trust2;
    document.getElementById('trust3').innerText = langData[currentLang].trust3;
    document.getElementById('trust4').innerText = langData[currentLang].trust4;
    document.getElementById('aboutTitle').innerText = langData[currentLang].aboutTitle;
    document.getElementById('aboutDesc').innerText = langData[currentLang].aboutDesc;
    document.getElementById('modalHead').innerText = langData[currentLang].modalHead;
    document.getElementById('modalSubmitBtn').innerText = langData[currentLang].modalSubmit;
    document.getElementById('modalCloseBtn').innerText = langData[currentLang].modalCancel;
    document.getElementById('langToggleBtn').innerHTML = langData[currentLang].langBtn;
    
    executeFiltering(); // नए टेक्स्ट के साथ ग्रिड री-ड्रॉ करें
}

if(document.getElementById('cityFilter')) {
    document.getElementById('cityFilter').addEventListener('change', executeFiltering);
}
if(document.getElementById('langToggleBtn')) {
    document.getElementById('langToggleBtn').addEventListener('click', toggleLanguage);
}

// 🛎️ बुकिंग पॉपअप मैनेजमेंट
function openBookingModal(id) {
    activeHotel = datasetHotels.find(h => h.id === id);
    document.getElementById('modalHotelDetails').innerText = `Property: ${activeHotel.name} (${activeHotel.city})\nPrice: R ${activeHotel.price}/Night`;
    document.getElementById('bookingModal').style.display = "flex";
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = "none";
}

// 📲 व्हाट्सएप ऑर्डर सेंडिंग
if(document.getElementById('modalForm')) {
    document.getElementById('modalForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('custName').value;
        const phone = document.getElementById('custPhone').value;
        const date = document.getElementById('checkInDate').value;
        
        const targetWhatsApp = "919876543210"; // यहाँ ओयो मालिक का व्हाट्सएप आ जाएगा
        const txt = `🛎️ *NEW DIRECT PROPERTY BOOKING* 🛎️\n\n🏨 *Hotel:* ${activeHotel.name}\n📍 *City:* ${activeHotel.city}\n💰 *Rate:* R ${activeHotel.price}/Night\n\n👤 *Client Name:* ${name}\n📞 *Contact:* ${phone}\n📅 *Check-In Date:* ${date}\n\n⚡ _System Verified by Mayank Suite_`;
        
        window.open(`https://wa.me{targetWhatsApp}?text=${encodeURIComponent(txt)}`, '_blank');
        closeBookingModal();
    });
}

window.onload = function() {
    drawHotels(datasetHotels);
};
