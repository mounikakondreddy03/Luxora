document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Form validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !phone || !service || !date || !time) {
        alert("Please fill in all the required fields!");
        return;
    }

    const formData = new FormData(this);

    console.log("Form Data Submitted: ");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    document.getElementById("form-feedback").innerHTML = `
        <p>Your appointment has been booked! We will get back to you soon.</p>
    `;
});

document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', function () {
        let title = this.querySelector('h3').innerText;
        let descriptionText = '';
        switch (title) {
            case 'Stylish Dresses':
                descriptionText = 'Explore our collection of elegant and trendy dresses, perfect for any occasion. From casual to formal, we have something for everyone!';
                break;
            case 'Fashion Accessories':
                descriptionText = 'Complete your look with our curated collection of accessories including bags, jewelry, scarves, and more!';
                break;
            case 'Stylish Footwear':
                descriptionText = 'Step into style with our wide range of stylish footwear, from heels to flats, for every outfit and occasion.';
                break;
        }

        document.getElementById('carousel-description').innerHTML = `<p>${descriptionText}</p>`;
    });
});
