import { CommentStatus } from '../status/comment-status';
import { Subjects } from '../subjects';

export interface CommentRejectedEvent {
  subject: Subjects.CommentRejected;
  data: {
    id: string;
    content?: string;
    postId: string;
    version: number;
    status: CommentStatus;
  };
}
