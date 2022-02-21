import { CommentStatus } from '../status/comment-status';
import { Subjects } from '../subjects';

export interface CommentCreatedEvent {
  subject: Subjects.CommentCreated;
  data: {
    id: string;
    content: string;
    postId: string;
    version: number;
    status: CommentStatus;
  };
}
