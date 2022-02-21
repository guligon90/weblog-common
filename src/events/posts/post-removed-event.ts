import { PostStatus } from '../status/post-status';
import { Subjects } from '../subjects';

export interface PostApprovedEvent {
  subject: Subjects.PostRemoved;
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
