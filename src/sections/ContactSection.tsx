import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeInView } from '@/components/FadeInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-text-secondary mb-2 block">NAME</label>
                  <Input
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-0 border-b border-border-custom rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 focus-visible:border-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-2 block">EMAIL</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 border-b border-border-custom rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 focus-visible:border-white"
                  />
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-0 border-b border-border-custom rounded-none px-0 text-white placeholder:text-text-secondary focus-visible:ring-0 focus-visible:border-white min-h-[120px] resize-none"
                />
              </div>

              <div className="pt-6">
                <p className="text-xs text-text-secondary mb-4">
                  I USUALLY REPLY WITHIN 24 HOURS.
                </p>
                <Button
                  type="submit"
                  className="w-full bg-white text-bg-primary hover:bg-white/90 rounded-none py-6 text-sm font-medium tracking-widest flex items-center justify-center gap-2 group"
                >
                  SEND REQUEST
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
