 // 🏨 100% गारंटेड और वर्किंग इमेज यूआरएल का नया डेटाबेस
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

const langData = {
    en: {
        title: "✨ OYO STYLISH NETWORK ✨",
        tagline: "Premium Property Grid & Direct WhatsApp Booking Management",
        optAll: "🔍 All Cities (सभी शहर देखें)",
        trust1: "🔒 100% Safe Stays",
        trust2: "💰 Zero Booking Fees",
        trust3: "📅 Free Cancellation",
        trust4: "👥 Couple Friendly",
        aboutTitle: "About Premium Stays Network",
        aboutDesc: "We are India's fastest-growing autonomous hotel tech network. By eliminating aggregators, we connect premium corporate clients and travelers directly with elite property owners via WhatsApp automation. Save heavy commissions and experience transparent hospitality.",
        btnText: "Book Directly via WhatsApp",
        modalHead: "🛎️ Confirm Direct Booking",
        modalSubmit: "Complete Booking via WhatsApp",
        modalCancel: "Cancel",
        langBtn: "Change Language (HI)"
    },
    hi: {
        title: "✨ ओयो स्टाइलिश नेटवर्क ✨",
        tagline: "प्रीमियम होटल ग्रिड और डायरेक्ट व्हाट्सएप बुकिंग सिस्टम",
        optAll: "🔍 सभी शहर (All Cities देखें)",
        trust1: "🔒 100% सुरक्षित स्टे",
        trust2: "💰 जीरो बुकिंग फीस",
        trust3: "📅 फ्री कैंसिलेशन",
        trust4: "👥 कपल फ्रेंडली",
        aboutTitle: "Premium Stays नेटवर्क के बारे में",
        aboutDesc: "हम भारत के सबसे तेजी से बढ़ते स्वतंत्र होटल टेक network हैं। बिचौलियों को हटाकर, हम यात्रियों को व्हाट्सएप ऑटोमेशन के जरिए सीधे होटल मालिकों से जोड़ते हैं। भारी कमीशन बचाएं और पारदर्शी आतिथ्य का अनुभव करें।",
        btnText: "सीधे व्हाट्सएप पर बुक करें",
        modalHead: "🛎️ डायरेक्ट बुकिंग की पुष्टि करें",
        modalSubmit: "व्हाट्सएप के जरिए बुकिंग पूरी करें",
        modalCancel: "रद्द करें",
        langBtn: "भाषा बदलें (EN)"
    }
};

let currentLang = "en";
let activeHotel = null;

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
                <p class="hotel-loc">📍 Location: ${hotel.city}, India</p>
                <p class="hotel-specs">${hotel.specs}</p>
                <p class="hotel-price">₹${hotel.price.toLocaleString('en-IN')}/Night</p>
                <button class="book-btn" onclick="openBookingModal(${hotel.id})">${langData[currentLang].btnText}</button>
            </div>`;
        grid.appendChild(card);
    });
}

function executeFiltering() {
    const val = document.getElementById('cityFilter').value;
    const res = val === "all" ? datasetHotels : datasetHotels.filter(h => h.city === val);
    drawHotels(res);
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "hi" : "en";
    
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
    
    executeFiltering();
}

if(document.getElementById('cityFilter')) {
    document.getElementById('cityFilter').addEventListener('change', executeFiltering);
}
if(document.getElementById('langToggleBtn')) {
    document.getElementById('langToggleBtn').addEventListener('click', toggleLanguage);
}

function openBookingModal(id) {
    activeHotel = datasetHotels.find(h => h.id === id);
    document.getElementById('modalHotelDetails').innerText = `Property: ${activeHotel.name} (${activeHotel.city})\nPrice: ₹${activeHotel.price}/Night`;
    document.getElementById('bookingModal').style.display = "flex";
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = "none";
}

if(document.getElementById('modalForm')) {
    document.getElementById('modalForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('custName').value;
        const phone = document.getElementById('custPhone').value;
        const date = document.getElementById('checkInDate').value;
        
        const targetWhatsApp = "919876543210"; 
        const txt = `🛎️ *NEW DIRECT PROPERTY BOOKING* 🛎️\n\n🏨 *Hotel:* ${activeHotel.name}\n📍 *City:* ${activeHotel.city}\n💰 *Rate:* ₹${activeHotel.price}/Night\n\n👤 *Client Name:* ${name}\n📞 *Contact:* ${phone}\n📅 *Check-In Date:* ${date}\n\n⚡ _System Verified by Mayank Suite_`;
        
        window.open(`https://wa.me{targetWhatsApp}?text=${encodeURIComponent(txt)}`, '_blank');
        closeBookingModal();
    });
}

window.onload = function() {
    drawHotels(datasetHotels);
};
