import { z } from 'zod';

export const contactSchema = z.object({
  firstname: z.string().min(1, 'Firstname field required!'),
  lastname: z.string().min(1, 'Lastname field required!'),
  email: z.string().min(6, 'Email field required!'),
  phone: z.string().min(10, 'Phone field required!'),
  message: z.string().min(1, 'Message field required!'),
});
