import {Photo} from './photo'

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    bio: string;
    lookingFor: string;
    photos: Photo[];

    interests?: string;
}
