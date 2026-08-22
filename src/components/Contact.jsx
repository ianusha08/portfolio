import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, Loader2, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { validateContactForm, sendContactNote } from '../services/contactService';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate inputs
    const { isValid, errors } = validateContactForm(formData);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormStatus('idle');
    setErrorMessage('');

    try {
      await sendContactNote(formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch (error) {
      console.error('Contact form submission error:', error);
      setFormStatus('error');
      setErrorMessage(
        error?.message || 'Unable to deliver message right now. Please try again or email directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormStatus('idle');
    setErrorMessage('');
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-12 border-t border-dark-border">
      {/* Monospace Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-dark-faint uppercase">
          <span className="text-accent-amber font-semibold">07 //</span>
          <span className="text-dark-muted font-medium">CONTACT & INQUIRIES</span>
        </div>
        <span className="text-[11px] font-mono text-dark-faint">
          open to connect
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-dark-text mb-2">
          Let's build something interesting.
        </h2>
        <p className="text-xs sm:text-sm text-dark-muted leading-relaxed max-w-xl">
          Interested in discussing an internship role, open-source collaboration, AI project ideas, or software engineering? Feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Quick Copy Email & Channels */}
        <div className="space-y-4">
          
          {/* Quick Copy Email Card */}
          <div className="tech-card p-4 rounded-xl border border-dark-border">
            <div className="text-[11px] font-mono text-dark-faint uppercase mb-2">
              Direct Contact
            </div>
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-dark-subtle border border-dark-border">
              <span className="font-mono text-xs text-dark-text truncate">
                {personalInfo.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded bg-accent-amber hover:bg-amber-400 text-zinc-950 text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="tech-card p-4 rounded-xl border border-dark-border space-y-2">
            <div className="text-[11px] font-mono text-dark-faint uppercase mb-2">
              Channels
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-dark-subtle border border-dark-border hover:border-dark-borderLight transition-colors text-xs font-mono text-dark-text"
            >
              <span className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-accent-amber" />
                <span>GitHub</span>
              </span>
              <span className="text-[11px] text-dark-faint">@ianusha08</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-dark-subtle border border-dark-border hover:border-dark-borderLight transition-colors text-xs font-mono text-dark-text"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-accent-blue" />
                <span>LinkedIn</span>
              </span>
              <span className="text-[11px] text-dark-faint">anushasingh18</span>
            </a>

            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-dark-subtle border border-dark-border hover:border-dark-borderLight transition-colors text-xs font-mono text-dark-text"
            >
              <span className="flex items-center gap-2">
                <Twitter className="w-3.5 h-3.5 text-sky-400" />
                <span>X / Twitter</span>
              </span>
              <span className="text-[11px] text-dark-faint">@imanusha09</span>
            </a>
          </div>

        </div>

        {/* Right: Direct Note Form */}
        <div className="tech-card p-5 rounded-xl border border-dark-border relative">
          <div className="text-[11px] font-mono text-dark-faint uppercase mb-3 flex items-center justify-between">
            <span>Quick Note</span>
            <span className="text-[10px] text-dark-faint">Direct Email Dispatch</span>
          </div>

          {formStatus === 'success' ? (
            <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-sm font-mono font-bold text-emerald-400">
                Note Delivered Successfully!
              </div>
              <p className="text-xs text-dark-text max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. Your message has been sent directly to <strong className="text-dark-text font-mono">{personalInfo.email}</strong>.
              </p>
              <button
                onClick={handleResetForm}
                className="mt-3 px-3.5 py-1.5 rounded-lg bg-dark-subtle hover:bg-dark-surface border border-dark-border text-dark-text font-mono text-xs transition-colors inline-flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3 text-accent-amber" />
                <span>Send Another Note</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              
              {/* Error Notification Banner */}
              {formStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-snug">
                    <span>{errorMessage}</span>
                    <div className="mt-1 text-[11px] text-dark-muted">
                      Or email directly:{' '}
                      <a href={`mailto:${personalInfo.email}`} className="text-accent-amber underline hover:text-amber-300">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] font-mono text-dark-faint uppercase">Your Name</label>
                  {formErrors.name && (
                    <span className="text-[10px] font-mono text-red-400">{formErrors.name}</span>
                  )}
                </div>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs outline-none bg-dark-subtle text-dark-text font-mono transition-colors disabled:opacity-60 ${
                    formErrors.name ? 'border-red-500/60 focus:border-red-400' : 'border-dark-border focus:border-accent-amber'
                  }`}
                />
              </div>

              {/* Email Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] font-mono text-dark-faint uppercase">Email Address</label>
                  {formErrors.email && (
                    <span className="text-[10px] font-mono text-red-400">{formErrors.email}</span>
                  )}
                </div>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs outline-none bg-dark-subtle text-dark-text font-mono transition-colors disabled:opacity-60 ${
                    formErrors.email ? 'border-red-500/60 focus:border-red-400' : 'border-dark-border focus:border-accent-amber'
                  }`}
                />
              </div>

              {/* Message Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] font-mono text-dark-faint uppercase">Message</label>
                  {formErrors.message && (
                    <span className="text-[10px] font-mono text-red-400">{formErrors.message}</span>
                  )}
                </div>
                <textarea
                  required
                  rows={3}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs outline-none bg-dark-subtle text-dark-text font-mono resize-none transition-colors disabled:opacity-60 ${
                    formErrors.message ? 'border-red-500/60 focus:border-red-400' : 'border-dark-border focus:border-accent-amber'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-accent-amber hover:bg-amber-400 text-zinc-950 font-mono font-semibold text-xs transition-all flex items-center justify-center gap-1.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending Note...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Note</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
