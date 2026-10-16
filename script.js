// 🏨 पटना, भागलपुर और रांची के होटल्स का लाइव डेटाबेस एरे
const datasetHotels = [
    { id: 1, name: "OYO Premium Flagship 104", city: "Patna", price: 1499, specs: "AC Luxury King Room | Free High-Speed WiFi | Couple Friendly", icon: "🏢", badge: "best seller" },
    { id: 2, name: "Hotel Heritage Palace Deluxe", city: "Patna", price: 1899, specs: "Suite Balcony View | 24/7 Room Service | Premium Dining", icon: "🏨", badge: "top rated" },
    { id: 3, name: "OYO Royal Guest House G2", city: "Bhagalpur", price: 1199, specs: "Standard AC Room | Geyser & Power Backup | Near Station", icon: "🏨", badge: "budget choice" },
    { id: 4, name: "The Capital Comfort Residency", city: "Bhagalpur", price: 2199, specs: "Executive Suite | Gym & Free Secure Parking | Buffet Included", icon: "🏢", badge: "premium suite" },
    { id: 5, name: "OYO Flagship Elegant Stay", city: "Ranchi", price: 1350, specs: "Modern AC Room | Free Breakfast | Fully Sanitized Setup", icon: "🏢", badge: "popular" },
    { id: 6, name: "Hotel Ranchi Grand Plaza", city: "Ranchi", price: 2500, specs: "Luxury Suite | Swimming Pool Access | Ultra High-Speed WiFi", icon: "🏨", badge: "luxury choice" }
];

let activeHotel = null;

// स्क्रीन पर होटल्स ड्रा करने का फंक्शन
function drawHotels(filterList) {
    const grid = document.getElementById('hotelGrid');
    if (!grid) return; grid.innerHTML = "";
    
    filterList.forEach(hotel => {
        const card = document.createElement('div');
        card.className = "hotel-card";
        card.innerHTML = `
            <div class="hotel-img-stub"><span class="hotel-badge">🔥 ${hotel.badge}</span>${hotel.icon}</div>
            <div class="hotel-info">
                <h3 class="hotel-title">${hotel.name}</h3>
                <p class="hotel-loc"><i class="fas fa-map-marker-alt"></i> Location: ${hotel.city}, India</p>
                <p class="hotel-specs">${hotel.specs}</p>
                <p class="hotel-price">₹${hotel.price.toLocaleString('en-IN')}/Night</p>
                <button class="book-btn" onclick="openBookingModal(${hotel.id})">Book Directly via WhatsApp</button>
            </div>`;
        grid.appendChild(card);
    });
}

// 🔍 ड्रॉपडाउन बदलने पर फिल्टर का काम
function executeFiltering() {
    const val = document.getElementById('cityFilter').value;
    const res = val === "all" ? datasetHotels : datasetHotels.filter(h => h.city === val);
    drawHotels(res);
}

if(document.getElementById('cityFilter')) {
    document.getElementById('cityFilter').addEventListener('change', executeFiltering);
}

// 🛎️ बुकिंग फॉर्म पॉपअप खोलना
function openBookingModal(id) {
    activeHotel = datasetHotels.find(h => h.id === id);
    document.getElementById('modalHotelDetails').innerText = `Property: ${activeHotel.name} (${activeHotel.city})\nPrice: ₹${activeHotel.price}/Night`;
    document.getElementById('bookingModal').style.display = "flex";
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = "none";
}

// 📲 फॉर्म सबमिट होने पर सीधा व्हाट्सएप डेटा भेजना
if(document.getElementById('modalForm')) {
    document.getElementById('modalForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('custName').value;
        const phone = document.getElementById('custPhone').value;
        const date = document.getElementById('checkInDate').value;
        
        const targetWhatsApp = "919876543210"; // यहाँ क्लाइंट का नंबर आ जाएगा
        const txt = `🛎️ *NEW OYO NETWORK BOOKING* 🛎️\n\n🏨 *Hotel:* ${activeHotel.name}\n📍 *City:* ${activeHotel.city}\n💰 *Rate:* ₹${activeHotel.price}/Night\n\n👤 *Client Name:* ${name}\n📞 *Contact:* ${phone}\n📅 *Check-In Date:* ${date}`;
        
        window.open(`https://wa.me{targetWhatsApp}?text=${encodeURIComponent(txt)}`, '_blank');
        closeBookingModal();
    });
}

window.onload = function() {
    drawHotels(datasetHotels);
};
