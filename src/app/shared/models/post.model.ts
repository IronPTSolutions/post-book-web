import { User } from './user.model';

export class Post {
  id?: string;
  name: string;
  content: string;
  images: Array<string>;
  tags: Array<string>;
  user?: string | User = new User();
  createdAt?: Date;
}
