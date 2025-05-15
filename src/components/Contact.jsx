import React, { useState } from 'react'

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
    })

    // Error state
    const [errors, setErrors] = useState({})

    // Success state
    const [isSubmitted, setIsSubmitted] = useState(false)

    // License type options
    const licenseOptions = [
        { value: '', label: 'Select License Type' },
        { value: 'personal', label: 'Personal License' },
        { value: 'business', label: 'Business License' },
        { value: 'enterprise', label: 'Enterprise License' },
        { value: 'non-profit', label: 'Non-Profit License' }
    ]

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    // Validate form
    const validateForm = () => {
        const newErrors = {}

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address'
        }

        // Company validation
        if (!formData.company.trim()) {
            newErrors.company = 'Company is required'
        }

        // License type validation
        if (!formData.licenseType) {
            newErrors.licenseType = 'Please select a license type'
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', formData)
                setIsSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    licenseType: '',
                    message: ''
                })
            }, 800)
        }
    }

    return (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Have questions about our products or services? Fill out the form and our team will get back to you shortly.
                  </p>
                </div>
      
                <div className="space-y-6">
                  {/* Contact Item */}
                  {[
                    {
                      title: "Email Us",
                      detail: "contact@yourcompany.com",
                      icon: (
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )
                    },
                    {
                      title: "Call Us",
                      detail: "+1 (555) 123-4567",
                      icon: (
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      )
                    },
                    {
                      title: "Our Location",
                      detail: "123 Innovation Drive",
                      icon: (
                        <>
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </>
                      )
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Contact Form */}
              <div className="border backdrop-blur-3xl border-gray-200 rounded-2xl shadow-xl p-8 sm:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                    <div className="bg-green-100 rounded-full p-4 mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
                    <p className="text-gray-600 mt-2 mb-6">Thanks for reaching out. We'll respond shortly.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { label: "Name", name: "name", type: "text" },
                      { label: "Email", name: "email", type: "email" },
                      { label: "Company", name: "company", type: "text" }
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            errors[field.name] ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors[field.name] && (
                          <p className="text-sm text-red-500 mt-1">{errors[field.name]}</p>
                        )}
                      </div>
                    ))}
      
                    {/* License Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">License Type</label>
                      <select
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          errors.licenseType ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        {licenseOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.licenseType && (
                        <p className="text-sm text-red-500 mt-1">{errors.licenseType}</p>
                      )}
                    </div>
      
                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                      )}
                    </div>
      
                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      );
      
}

export default Contact