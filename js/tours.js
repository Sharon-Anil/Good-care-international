// Tours Tab Switching Functionality

document.addEventListener('DOMContentLoaded', () => {
    const tourTabs = document.querySelectorAll('.tour-tab');
    const internationalTours = document.getElementById('international-tours');
    const domesticTours = document.getElementById('domestic-tours');
    
    tourTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.getAttribute('data-tab');
            
            // Update active tab
            tourTabs.forEach(t => {
                t.classList.remove('active', 'bg-teal-600', 'text-white');
                t.classList.add('bg-gray-200', 'text-gray-700');
            });
            tab.classList.add('active', 'bg-teal-600', 'text-white');
            tab.classList.remove('bg-gray-200', 'text-gray-700');
            
            // Show/hide tour content
            if (tabType === 'international') {
                internationalTours.classList.remove('hidden');
                domesticTours.classList.add('hidden');
            } else {
                internationalTours.classList.add('hidden');
                domesticTours.classList.remove('hidden');
            }
        });
    });
});

