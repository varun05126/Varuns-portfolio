import React from 'react';
import { useForm } from 'react-hook-form';
import GlassPanel from '../components/ui/GlassPanel';

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Step 3 will replace this local handoff with the backend mutation.
    console.log('Form submitted:', data);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
      <GlassPanel className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
              className={`
                block w-full rounded-md border border-input bg-background
                px-3 py-2 text-sm ring-offset-background file:border-0
                file:bg-transparent file:text-sm file:font-medium
                placeholder:text-muted-foreground focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50
                ${errors.name ? 'border-destructive' : ''}
              `}
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              className={`
                block w-full rounded-md border border-input bg-background
                px-3 py-2 text-sm ring-offset-background file:border-0
                file:bg-transparent file:text-sm file:font-medium
                placeholder:text-muted-foreground focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50
                ${errors.email ? 'border-destructive' : ''}
              `}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
              Subject (Optional)
            </label>
            <input
              id="subject"
              {...register('subject', {
                maxLength: {
                  value: 200,
                  message: 'Subject must be 200 characters or fewer',
                },
              })}
              className={`
                block w-full rounded-md border border-input bg-background
                px-3 py-2 text-sm ring-offset-background file:border-0
                file:bg-transparent file:text-sm file:font-medium
                placeholder:text-muted-foreground focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50
                ${errors.subject ? 'border-destructive' : ''}
              `}
              placeholder="Inquiry about collaboration"
            />
            {errors.subject && (
              <p className="text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
              className={`
                block w-full rounded-md border border-input bg-background
                px-3 py-2 text-sm ring-offset-background file:border-0
                file:bg-transparent file:text-sm file:font-medium
                placeholder:text-muted-foreground focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                h-32 resize-none disabled:cursor-not-allowed disabled:opacity-50
                ${errors.message ? 'border-destructive' : ''}
              `}
              rows={5}
              placeholder="Tell me about your project or say hello!"
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              flex w-full justify-center rounded-md bg-primary px-4 py-2
              text-sm font-medium text-primary-foreground hover:bg-primary/90
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              focus-visible:ring-offset-2 disabled:opacity-50
              transition-all
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Backend delivery will be connected in the next API wiring step.
          </p>
        </form>
      </GlassPanel>
    </div>
  );
};

export default Contact;
