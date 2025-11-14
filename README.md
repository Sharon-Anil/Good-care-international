# Good Care International Tours and Travels

A modern, responsive travel agency website with WhatsApp booking integration.

## Features

- 🎨 Modern, responsive design with TailwindCSS
- 🖼️ Hero image slider with 5 travel destinations
- 📱 WhatsApp booking integration via Twilio
- ✨ Smooth scroll animations
- 🎯 SEO-friendly meta tags
- 📧 Contact form with WhatsApp notifications
- 💬 Floating WhatsApp button
- 🎭 Auto-scrolling testimonials slider
- 📸 Travel destination gallery

## Project Structure

```
.
├── index.html              # Main HTML file
├── server.js               # Node.js backend server
├── package.json            # Dependencies
├── .env.example           # Environment variables template
├── styles/
│   └── main.css           # Custom CSS styles
└── js/
    ├── main.js            # Main JavaScript
    ├── hero.js            # Hero slider functionality
    ├── animations.js      # Scroll animations
    ├── testimonials.js    # Testimonials slider
    └── booking.js         # Booking form handling
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Twilio WhatsApp

1. Sign up for a Twilio account at https://www.twilio.com
2. Get your Account SID and Auth Token from the Twilio Console
3. Set up a WhatsApp Sandbox or use a Twilio WhatsApp-enabled number
4. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

5. Fill in your Twilio credentials in the `.env` file:

```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=whatsapp:+14155238886
ADMIN_WHATSAPP_NUMBER=+972549470080
PORT=3000
```

### 3. Run the Server

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

### 4. Access the Website

Open your browser and navigate to:
```
http://localhost:3000
```

## WhatsApp Integration

The website uses Twilio's WhatsApp API to send booking confirmations:

- **Customer**: Receives a confirmation message after submitting a booking
- **Admin**: Receives a notification with booking details at +972549470080

### Twilio WhatsApp Sandbox Setup

If you're using Twilio's WhatsApp Sandbox:

1. Go to https://www.twilio.com/console/sms/whatsapp/sandbox
2. Follow the instructions to join the sandbox
3. Use the sandbox number provided by Twilio

## Customization

### Changing Images

Replace the Unsplash image URLs in `index.html` with your own images:

- Hero slider images (lines with `background-image`)
- Gallery images (in the Gallery section)

### Branding

- Update the brand name in `index.html` header section
- Modify colors in TailwindCSS classes (teal-600, orange-500, etc.)
- Update contact information in the Contact section

### Services

Edit the services section in `index.html` to add or modify services.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: TailwindCSS (via CDN)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Backend**: Node.js, Express
- **WhatsApp**: Twilio API
- **Maps**: Google Maps Embed API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for your travel agency.

## Support

For issues or questions, please contact:
- WhatsApp: +972 54 947 0080
- Email: info@goodcaretravels.com

