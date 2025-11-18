import React, { useState } from 'react';
import imagec from "../../assets/imageC.jpg";
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Utilisation de Formspree
  const [state, handleSubmit] = useForm("xanpqlpb");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Soumission du formulaire avec Formspree
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Appel de la fonction handleSubmit de Formspree
    handleSubmit(e);
    
    // Réinitialiser le formulaire après soumission réussie
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { 
      icon: FiLinkedin, 
      href: "https://www.linkedin.com/in/boudeir-zouhair2005", 
      color: "hover:text-blue-600",
      name: "LinkedIn"
    },
    { 
      icon: FiGithub, 
      href: "https://github.com/zouhair-max", 
      color: "hover:text-gray-800 dark:hover:text-white",
      name: "GitHub"
    },
  ];

  // Text content with translations
  const content = {
    title: t('contact.title', 'Get in Touch'),
    subtitle: t('contact.subtitle', 'Ready to bring your ideas to life? Let\'s start a conversation about your next project.'),
    contactInfo: t('contact.contactInfo', 'Contact Information'),
    sendMessage: t('contact.sendMessage', 'Send a Message'),
    formSubtitle: t('contact.formSubtitle', 'Have a project in mind? I\'d love to hear about it. Let\'s create something amazing together.'),
    fullName: t('contact.fullName', 'Full Name'),
    emailAddress: t('contact.emailAddress', 'Email Address'),
    subject: t('contact.subject', 'Subject'),
    message: t('contact.message', 'Message'),
    yourName: t('contact.yourName', 'Your name'),
    yourEmail: t('contact.yourEmail', 'your.email@example.com'),
    whatsThisAbout: t('contact.whatsThisAbout', 'What\'s this about?'),
    tellAboutProject: t('contact.tellAboutProject', 'Tell me about your project...'),
    sendButton: t('contact.sendButton', 'Send Message'),
    sending: t('contact.sending', 'Sending...'),
    successMessage: t('contact.successMessage', 'Thanks for your message! I\'ll get back to you soon.'),
    callToAction: t('contact.callToAction', 'Don\'t hesitate to reach out. I\'ll reply as soon as possible and we can start creating something extraordinary together.'),
    emailLabel: t('contact.emailLabel', 'Email'),
    phoneLabel: t('contact.phoneLabel', 'Phone'),
    locationLabel: t('contact.locationLabel', 'Location'),
    connectWithMe: t('contact.connectWithMe', 'Connect with me'),
    viewMyWork: t('contact.viewMyWork', 'View my projects on GitHub')
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black dark:text-cyan-400 mb-4">
            {content.title} 
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <motion.img 
                  src={imagec} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full rounded-3xl shadow-2xl object-cover dark:shadow-cyan-900/20"
                  alt="Contact"
                />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg dark:shadow-gray-900"
                >
                  <FiMail className="text-2xl text-cyan-600 dark:text-cyan-400" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg dark:shadow-gray-900"
                >
                  <FiPhone className="text-2xl text-blue-600 dark:text-blue-400" />
                </motion.div>

                {/* GitHub Floating Icon */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg dark:shadow-gray-900"
                >
                  <FiGithub className="text-2xl text-gray-700 dark:text-gray-300" />
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {content.contactInfo}
              </h3>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all dark:border dark:border-gray-700"
                >
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                    <FiMail className="text-cyan-600 dark:text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{content.emailLabel}</p>
                    <p className="text-gray-800 dark:text-white font-medium">zouhairboudeir768@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all dark:border dark:border-gray-700"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{content.phoneLabel}</p>
                    <p className="text-gray-800 dark:text-white font-medium">+ (212) 701718712</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all dark:border dark:border-gray-700"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiMapPin className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{content.locationLabel}</p>
                    <p className="text-gray-800 dark:text-white font-medium">Casablanca, Morocco</p>
                  </div>
                </motion.div>

                {/* GitHub Link */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all dark:border dark:border-gray-700"
                >
                  <div className="p-2 bg-gray-100 dark:bg-gray-900/30 rounded-lg">
                    <FiGithub className="text-gray-700 dark:text-gray-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/zouhair-max" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      github.com/zouhair-max
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Links */}
              <motion.div variants={itemVariants} className="pt-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {content.connectWithMe}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 dark:shadow-gray-900 ${social.color} border border-gray-200 dark:border-gray-700 group relative`}
                      title={social.name}
                    >
                      <social.icon className="text-xl" />
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {social.name}
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                {/* GitHub Call to Action */}
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20 rounded-xl border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {content.viewMyWork}
                  </p>
                  <motion.a
                    href="https://github.com/zouhair-max"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub className="text-lg" />
                    <span>Explore my GitHub</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-10 transition-colors duration-300"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {content.sendMessage}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {content.formSubtitle}
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {content.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder={content.yourName}
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {content.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder={content.yourEmail}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {content.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={content.whatsThisAbout}
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {content.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={content.tellAboutProject}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <motion.div
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    {content.sending}
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FiSend className="mr-2" />
                    {content.sendButton}
                  </div>
                )}
              </motion.button>

              {/* Afficher les erreurs générales */}
              <ValidationError 
                errors={state.errors}
                className="text-red-500 text-sm text-center"
              />
            </form>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 dark:text-gray-400 italic">
                "{content.callToAction}"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;