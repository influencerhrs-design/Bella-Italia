function Contact() {
  try {
    return (
      <section id="contact" className="py-20 bg-white" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Visit Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-[var(--text-light)]">123 Italian Street, Culinary District<br/>New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-[var(--text-light)] hover:text-[var(--primary-color)]">+1 (234) 567-8900</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:info@bellaitalia.com" className="text-[var(--text-light)] hover:text-[var(--primary-color)]">info@bellaitalia.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="icon-clock text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-[var(--text-light)]">Monday - Sunday<br/>11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959802180!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
