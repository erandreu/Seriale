import {Image} from './image';
import {Rating} from './rating';

export interface Show {
  id: number;
  genres: any;
  name: string;
  image: Image;
  language: string;
  rating: Rating;
  summary: string;
}
