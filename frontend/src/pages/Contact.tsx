import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import GlassPanel from '../components/ui/GlassPanel';

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

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
});

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
    <motion.div
      className="mx-auto max-w-4xl px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold text-primary">Contact</p>
        <h1 className="text-4xl font-bold">Let&apos;s build something useful.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <GlassPanel className="h-full p-6">
            <h2 className="mb-4 text-xl font-semibold">Reach Me</h2>
            <p className="mb-5 text-sm text-muted-foreground">
              I am open to project feedback, collaboration ideas, internships, and learning
              opportunities. Share a short note and I will get back when available.
            </p>
            <div className="space-y-3 text-sm">
              <p><span className="font-semibold">Email:</span> malthumkarvarun@gmail.com</p>
              <p><span className="font-semibold">GitHub:</span> github.com/varun05126</p>
              <p><span className="font-semibold">LinkedIn:</span> Varun Malthumkar</p>
            </div>
          </GlassPanel>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 }}>
          <GlassPanel className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {contactMutation.isSuccess && (
                <div className="rounded-md border border-primary/20 bg-primary/10 p-3 text-sm text-primary">
                  {contactMutation.data.message || 'Message sent successfully.'}
                </div>
              )}
              {contactMutation.isError && (
                <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
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

              <motion.button
                type="submit"
                disabled={submitting}
                className="flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </GlassPanel>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
