import { Subjects } from '../subjects';
import { CommentStatus } from '../status/comment-status';

export interface CommentRemovedEvent {
  subject: Subjects.CommentRemoved;
  data: {
    id: string;
    content?: string;
    postId: string;
    version: number;
    status: CommentStatus;
  };
}
