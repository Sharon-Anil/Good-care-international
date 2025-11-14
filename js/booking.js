// Booking Modal and Form Handling

function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function openBookingModalWithDestination(destination) {
    const modal = document.getElementById('booking-modal');
    const destinationSelect = document.getElementById('booking-destination');
    
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        
        // Pre-fill destination if provided
        if (destination && destinationSelect) {
            destinationSelect.value = destination;
        }
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

// Handle booking form submission
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(bookingForm);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                destination: formData.get('destination'),
                date: formData.get('date'),
                notes: formData.get('notes') || ''
            };
            
            // Show loading state
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch('/api/booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    alert('Booking request sent successfully! We will contact you soon via WhatsApp.');
                    bookingForm.reset();
                    closeBookingModal();
                } else {
                    alert('Error: ' + (result.message || 'Failed to send booking request'));
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error sending booking request. Please try again or contact us directly via WhatsApp.');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Close modal on outside click
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBookingModal();
            }
        });
    }
});

