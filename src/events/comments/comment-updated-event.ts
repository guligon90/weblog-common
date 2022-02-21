import { Subjects } from '../subjects';
import { CommentStatus } from '../status/comment-status';

export interface CommentUpdatedEvent {
  subject: Subjects.CommentUpdated;
  data: {
    id: string;
    content?: string;
    postId: string;
    version: number;
    status: CommentStatus;
  };
}
