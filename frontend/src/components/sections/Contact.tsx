import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { ZoomSection } from '@/components/ui/ZoomSection';

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactResponse = {
  success: boolean;
  message: string;
  emailSent?: boolean;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '',
    timeout: 15000,
  });

  const contactMutation = useMutation({
    mutationFn: async (payload: ContactFormValues) => {
      const { data } = await api.post<ContactResponse>('/api/contact', payload);
      return data;
    },
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    await contactMutation.mutateAsync(data);
  };

  const inputClass = 'block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  const submitting = isSubmitting || contactMutation.isPending;

  return (
    <section className="relative">
      <ZoomSection
        accentColor="#fbbf24"
        zoomPoint={{ x: 0.5, y: 0.5 }}
        className="min-h-[100vh] w-full flex-col items-center justify-start px-4 pt-20"
      >
        <div className="relative z-10 w-full max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center text-foreground mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground/80">
                I am open to project feedback, collaboration ideas, internships, and learning opportunities.
                Share a short note and I will get back when available.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-primary/20 rounded-full">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Email:</p>
                    <p className="text-muted-foreground/80">malthumkarvarun@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-primary/20 rounded-full">
                    <Github className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">GitHub:</p>
                    <p className="text-muted-foreground/80">github.com/varun05126</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-primary/20 rounded-full">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">LinkedIn:</p>
                    <p className="text-muted-foreground/80">Varun Malthumkar</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {contactMutation.isSuccess && (
                <div className="rounded-md border border-primary/20 bg-primary/10 p-4 text-sm text-primary">
                  {contactMutation.data.message || 'Message sent successfully.'}
                </div>
              )}
              {contactMutation.isError && (
                <div className="rounded-md border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                  {axios.isAxiosError(contactMutation.error)
                    ? contactMutation.error.response?.data?.error || contactMutation.error.message
                    : 'Message could not be sent. Please try again.'}
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
                <input
                  id="name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                  className={`${inputClass} ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                  })}
                  className={`${inputClass} ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="john.doe@example.com"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">Subject</label>
                <input
                  id="subject"
                  {...register('subject', {
                    maxLength: { value: 200, message: 'Subject must be 200 characters or fewer' },
                  })}
                  className={`${inputClass} ${errors.subject ? 'border-destructive' : ''}`}
                  placeholder="Inquiry about collaboration"
                />
                {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                  })}
                  className={`${inputClass} h-32 resize-none ${errors.message ? 'border-destructive' : ''}`}
                  rows={5}
                  placeholder="Tell me about your project or say hello."
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </ZoomSection>
    </section>
  );
};

export default Contact;