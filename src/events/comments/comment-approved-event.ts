import { CommentStatus } from '../status/comment-status';
import { Subjects } from '../subjects';

export interface CommentApprovedEvent {
  subject: Subjects.CommentApproved;
  data: {
    id: string;
    content?: string;
    postId: string;
    version: number;
    status: CommentStatus;
  };
}
