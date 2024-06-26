import{z} from 'zod'

export const createPostSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }),
    description: z.string({
        required_error:'Content is required',
    }),
    image: z.string({
        required_error:'Image must be a string',
    }).optional (),
    date: z.string(). datetime().optional(),
});