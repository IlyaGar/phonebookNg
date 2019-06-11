import { PlaceItem } from 'src/app/place-edit/models/place-item';

export class Phone{
    constructor(
        public id: number,
        public placeid: number,
        public department: string,
        public post: string,
        public name: string,
        public description: string,
        public nomer: string,
        public email: string,
        public isDeleted: number,

        public place: PlaceItem,
    ){}
}