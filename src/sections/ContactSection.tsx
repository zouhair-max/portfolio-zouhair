import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FadeInView } from '@/components/FadeInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      // If EmailJS is not configured, use mailto as fallback
      if (!serviceId || !templateId || !publicKey) {
        // Fallback to mailto link
        const subject = `Contact Form: ${formData.name}`;
        const body = `From: ${formData.name} (${formData.email})\nPhone: ${formData.phone || 'N/A'}\nBudget: ${formData.budget || 'N/A'}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:zouhairboudeir0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        
        // Show success message
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', budget: '', message: '' });
        setErrors({});
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
        
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'N/A',
        budget: formData.budget || 'N/A',
        message: formData.message,
        to_email: 'zouhairboudeir0@gmail.com',
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', budget: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-bg-primary py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <FadeInView>
            <div>
              <p className="text-xs font-medium tracking-widest text-text-secondary mb-4">
                • CONTACT
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="text-lg text-white/70 mb-12">
                I'm always open to collaborations and creative challenges.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-text-secondary mb-1">zouhairboudeir0@gmail.com</p>
                  <p className="text-sm text-white">MOROCCO</p>
                </div>

                <div className="pt-6 border-t border-border-custom">
                  <p className="text-xs text-text-secondary mb-4">LET'S CONNECT</p>
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href="https://www.linkedin.com/in/boudeir-zouhair2005/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium tracking-wider text-white hover:text-text-secondary transition-colors"
                    >
                      LINKEDIN
                    </a>
                    <a
                      href="https://github.com/zouhair-max"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium tracking-wider text-white hover:text-text-secondary transition-colors"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Right - Form */}
          <FadeInView delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded border border-green-500/50 bg-green-500/10 flex items-center gap-3 animate-in slide-in-from-top-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-green-500">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded border border-red-500/50 bg-red-500/10 flex items-center gap-3 animate-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-500">
                    Failed to send message. Please try again or contact me directly at zouhairboudeir0@gmail.com
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-text-secondary mb-2 block">NAME</label>
                  <Input
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`bg-transparent border-0 border-b rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 ${
                      errors.name 
                        ? 'border-red-500 focus-visible:border-red-500' 
                        : 'border-border-custom focus-visible:border-white'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-2 block">EMAIL</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`bg-transparent border-0 border-b rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 ${
                      errors.email 
                        ? 'border-red-500 focus-visible:border-red-500' 
                        : 'border-border-custom focus-visible:border-white'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-text-secondary mb-2 block">PHONE</label>
                  <Input
                    type="tel"
                    placeholder="+00 0123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent border-0 border-b border-border-custom rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 focus-visible:border-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-2 block">BUDGET</label>
                  <Input
                    type="text"
                    placeholder="$2000 - $5000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-transparent border-0 border-b border-border-custom rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 focus-visible:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-text-secondary mb-2 block">MESSAGE</label>
                <Textarea
                  placeholder="My message is..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  className={`bg-transparent border-0 border-b rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 min-h-[120px] resize-none ${
                    errors.message 
                      ? 'border-red-500 focus-visible:border-red-500' 
                      : 'border-border-custom focus-visible:border-white'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-6">
                <p className="text-xs text-text-secondary mb-4">
                  I USUALLY REPLY WITHIN 24 HOURS.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-bg-primary hover:bg-white/90 rounded-none py-6 text-sm font-medium tracking-widest flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND REQUEST
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
