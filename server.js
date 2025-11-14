// Node.js Backend Server with Express and Twilio WhatsApp Integration

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const adminWhatsAppNumber = process.env.ADMIN_WHATSAPP_NUMBER || '+972549470080';

let twilioClient = null;

if (accountSid && authToken) {
    twilioClient = twilio(accountSid, authToken);
} else {
    console.warn('Twilio credentials not found. WhatsApp messaging will be disabled.');
}

// Helper function to send WhatsApp message
async function sendWhatsAppMessage(to, message) {
    if (!twilioClient) {
        console.log('WhatsApp message (simulated):', { to, message });
        return { success: true, message: 'Simulated - Twilio not configured' };
    }
    
    try {
        const messageResult = await twilioClient.messages.create({
            body: message,
            from: `whatsapp:${twilioPhoneNumber}`,
            to: `whatsapp:${to}`
        });
        return { success: true, sid: messageResult.sid };
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        return { success: false, error: error.message };
    }
}

// Booking API Endpoint
app.post('/api/booking', async (req, res) => {
    try {
        const { name, phone, destination, date, notes } = req.body;
        
        if (!name || !phone || !destination || !date) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }
        
        // Format phone number (ensure it starts with +)
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        
        // Create booking message for admin
        const adminMessage = `🛫 *New Booking Request*\n\n` +
            `*Name:* ${name}\n` +
            `*Phone:* ${formattedPhone}\n` +
            `*Destination:* ${destination}\n` +
            `*Travel Date:* ${date}\n` +
            `${notes ? `*Notes:* ${notes}\n` : ''}\n` +
            `Please contact the customer to confirm the booking.`;
        
        // Create confirmation message for customer
        const customerMessage = `Thank you for your booking request with Good Care International Tours and Travels!\n\n` +
            `We have received your request for:\n` +
            `📍 Destination: ${destination}\n` +
            `📅 Travel Date: ${date}\n\n` +
            `Our team will contact you shortly at ${formattedPhone} to confirm your booking and provide further details.\n\n` +
            `For immediate assistance, please contact us at +972 54 947 0080`;
        
        // Send messages
        const adminResult = await sendWhatsAppMessage(adminWhatsAppNumber, adminMessage);
        const customerResult = await sendWhatsAppMessage(formattedPhone, customerMessage);
        
        if (adminResult.success || customerResult.success) {
            res.json({ 
                success: true, 
                message: 'Booking request sent successfully',
                adminSent: adminResult.success,
                customerSent: customerResult.success
            });
        } else {
            res.status(500).json({ 
                success: false, 
                message: 'Failed to send WhatsApp messages' 
            });
        }
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Contact API Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }
        
        // Format phone number
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        
        // Create contact message for admin
        const adminMessage = `📧 *New Contact Form Submission*\n\n` +
            `*Name:* ${name}\n` +
            `*Email:* ${email}\n` +
            `*Phone:* ${formattedPhone}\n` +
            `*Message:*\n${message}\n\n` +
            `Please respond to the customer as soon as possible.`;
        
        // Send message to admin
        const adminResult = await sendWhatsAppMessage(adminWhatsAppNumber, adminMessage);
        
        if (adminResult.success) {
            res.json({ 
                success: true, 
                message: 'Contact message sent successfully' 
            });
        } else {
            res.status(500).json({ 
                success: false, 
                message: 'Failed to send message' 
            });
        }
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        twilioConfigured: !!twilioClient 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Twilio WhatsApp: ${twilioClient ? 'Configured' : 'Not configured'}`);
});

