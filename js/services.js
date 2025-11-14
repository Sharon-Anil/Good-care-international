// Services Expand/Collapse Functionality

document.addEventListener('DOMContentLoaded', () => {
    const viewAllBtn = document.getElementById('view-all-services-btn');
    const hiddenServices = document.querySelectorAll('.hidden-service');
    let isExpanded = false;
    
    if (viewAllBtn && hiddenServices.length > 0) {
        viewAllBtn.addEventListener('click', () => {
            if (!isExpanded) {
                // Show all hidden services
                hiddenServices.forEach((service, index) => {
                    setTimeout(() => {
                        service.style.display = 'block';
                        service.classList.add('fade-in-up');
                        service.classList.add('visible');
                    }, index * 100);
                });
                viewAllBtn.textContent = 'Show Less';
                isExpanded = true;
            } else {
                // Hide additional services
                hiddenServices.forEach((service) => {
                    service.style.display = 'none';
                    service.classList.remove('visible');
                });
                viewAllBtn.textContent = 'View All Services';
                isExpanded = false;
            }
        });
    }
});

