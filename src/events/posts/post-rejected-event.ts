import { PostStatus } from '../status/post-status';
import { Subjects } from '../subjects';

export interface PostRejectedEvent {
  subject: Subjects.PostRejected;
  data: {
    id: string;
    title?: string;
    body?: string;
    tags?: string[];
    userId: string;
    version: number;
    status: PostStatus;
  };
}
