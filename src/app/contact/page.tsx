"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const serviceAreas = [
  "Woodstock", "Canton", "Roswell", "Alpharetta", "Marietta", 
  "Kennesaw", "Acworth", "Holly Springs", "Ball Ground", "Cumming",
  "Towne Lake", "Eagle Watch", "BridgeMill", "Lake Allatoona"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("Image must be under 10MB.");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Only JPEG, PNG, WebP, and HEIC images are accepted.");
      return;
    }

    setErrorMessage("");
    setImage(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("service", formData.service);
      body.append("message", formData.message);
      if (image) body.append("image", image);

      const res = await fetch("/api/contact", { method: "POST", body });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      removeImage();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "V-Pro Leather Repair",
              "telephone": "(770) 592-4689",
              "email": "vpro@bellsouth.net",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "298 N Briar Ridge",
                "addressLocality": "Woodstock",
                "addressRegion": "GA",
                "postalCode": "30189",
                "addressCountry": "US"
              }
            }
          })
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Contact <span className="text-[#C9A327]">V-Pro Leather Repair</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Ready to help. Call now or send us a message.
          </p>
          
          {/* Large Phone Number */}
          <a
            href="tel:+17705924689"
            className="inline-flex items-center px-10 py-5 bg-[#C9A327] text-black font-bold rounded-full hover:bg-[#d4af37] transition-all text-2xl"
          >
            <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (770) 592-4689
          </a>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Same-Day Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              
              {/* Phone Section */}
              <div className="mb-8 p-6 bg-[#fafafa] rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A327] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">Call Us</h3>
                    <a 
                      href="tel:+17705924689" 
                      className="text-2xl font-bold text-[#C9A327] hover:underline"
                    >
                      (770) 592-4689
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Call or text anytime</p>
                  </div>
                </div>
              </div>
              
              {/* Email Section */}
              <div className="mb-8 p-6 bg-[#fafafa] rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A327] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">Email Us</h3>
                    <a 
                      href="mailto:vpro@bellsouth.net" 
                      className="text-lg text-[#C9A327] hover:underline"
                    >
                      vpro@bellsouth.net
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Address Section */}
              <div className="mb-8 p-6 bg-[#fafafa] rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A327] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-lg mb-1">Our Location</h3>
                    <p className="text-gray-700">298 N Briar Ridge</p>
                    <p className="text-gray-700">Woodstock, GA 30189</p>
                    <p className="text-gray-500 text-sm mt-1">Mobile service available throughout Cherokee County</p>
                  </div>
                </div>
              </div>
              
              {/* Hours Section */}
              <div className="p-6 bg-black rounded-xl text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A327] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg mb-3">Hours</h3>
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="text-[#C9A327]">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="text-[#C9A327]">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-white/50">Closed</span>
                      </div>
                    </div>
                    <p className="text-[#C9A327] text-sm mt-4 font-medium">
                      Emergency service available by request
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A327] focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A327] focus:border-transparent outline-none transition-all"
                        placeholder="(770) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A327] focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A327] focus:border-transparent outline-none transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service...</option>
                      <optgroup label="Leather Repair">
                        <option value="leather-sofa">Leather Sofa Repair</option>
                        <option value="leather-car">Leather Car Seat Repair</option>
                        <option value="leather-furniture">Leather Furniture Restoration</option>
                        <option value="leather-color">Leather Color Restoration</option>
                        <option value="leather-cleaning">Leather Cleaning & Conditioning</option>
                        <option value="leather-recoloring">Leather Recoloring</option>
                        <option value="leather-scratch">Leather Scratch Repair</option>
                        <option value="leather-tear">Leather Tear Repair</option>
                        <option value="leather-dyeing">Leather Dyeing</option>
                        <option value="commercial-leather">Commercial Leather Repair</option>
                        <option value="aircraft-leather">Aircraft Seat Repair</option>
                        <option value="marine-leather">Marine Seat Repair</option>
                      </optgroup>
                      <optgroup label="Upholstery">
                        <option value="commercial-upholstery">Commercial Upholstery</option>
                        <option value="restaurant-upholstery">Restaurant Seat Upholstery</option>
                        <option value="hospitality-upholstery">Hospitality Upholstery</option>
                        <option value="health-club-upholstery">Health Club/Gym Upholstery</option>
                        <option value="medical-upholstery">Medical Seat Upholstery</option>
                        <option value="dining-chair-upholstery">Dining Chair Upholstery</option>
                        <option value="marine-upholstery">Marine Upholstery</option>
                      </optgroup>
                      <optgroup label="Furniture Repair">
                        <option value="furniture-regluing">Furniture Regluing</option>
                        <option value="loose-joint">Loose Joint Repair</option>
                        <option value="recliner-repair">Recliner Repair</option>
                        <option value="dining-chair-repair">Dining Chair Repair</option>
                        <option value="kitchen-chair-repair">Kitchen Chair Repair</option>
                        <option value="vintage-restoration">Vintage Furniture Restoration</option>
                        <option value="water-damage">Water Damaged Furniture Repair</option>
                        <option value="fire-damage">Fire Damaged Furniture Repair</option>
                        <option value="pet-damage">Pet Damage Repair</option>
                      </optgroup>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C9A327] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project - what needs repair, type of damage, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attach a Photo <span className="text-gray-400">(optional)</span>
                    </label>
                    <p className="text-xs text-gray-500 mb-3">
                      A photo helps us give you a more accurate estimate. JPEG, PNG, WebP or HEIC up to 10MB.
                    </p>

                    {imagePreview ? (
                      <div className="relative inline-block">
                        <img
                          src={imagePreview}
                          alt="Upload preview"
                          className="w-40 h-40 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-2 -right-2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                          aria-label="Remove image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="image"
                        className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#C9A327] hover:bg-[#fdfbf0] transition-all"
                      >
                        <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm text-gray-500">Click to upload a photo</span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          id="image"
                          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    )}
                  </div>

                  {/* Error message */}
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#C9A327] text-black font-semibold rounded-full hover:bg-[#d4af37] transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Request Service"}
                  </button>
                  
                  <p className="text-center text-gray-500">
                    Prefer to talk? Call us at{" "}
                    <a href="tel:+17705924689" className="text-[#C9A327] font-medium hover:underline">
                      (770) 592-4689
                    </a>{" "}
                    for immediate assistance.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Coverage Area
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Areas We Serve
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {serviceAreas.map((area) => (
              <span 
                key={area} 
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#C9A327] transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
          
          <p className="text-center text-gray-500 max-w-2xl mx-auto">
            Not sure if we serve your area? Give us a call — we'll let you know. We're happy to discuss projects throughout North Georgia.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A327] font-medium tracking-widest uppercase text-sm mb-4">
              Location
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Find Us
            </h2>
          </div>
          
          {/* Google Maps Embed */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260396.0718128909!2d-84.70788525767176!3d34.02804631858549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a1742b4d515ebc9%3A0xa987ed947983ac5!2sV-Pro%20Vinyl%20and%20Leather%20Repair!5e1!3m2!1sen!2sus!4v1769199870791!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="V-Pro Leather Repair Location"
              className="w-full"
            />
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://maps.google.com/?q=298+N+Briar+Ridge,+Woodstock,+GA+30189" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#C9A327] font-semibold hover:underline"
            >
              Get Directions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Reinforcement */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Same-Day Estimates</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Satisfaction Guaranteed</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#C9A327]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
