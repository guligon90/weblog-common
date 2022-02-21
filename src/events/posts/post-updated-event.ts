import { Subjects } from '../subjects';
import { PostStatus } from '../status/post-status';

export interface PostUpdatedEvent {
  subject: Subjects.PostUpdated;
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
