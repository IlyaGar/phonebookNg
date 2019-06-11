export class PhoneItem{
    constructor(
        public id: number,
        public place: string,
        public department: string,
        public post: string,
        public name: string,
        public description: string,
        public nomer: string,
        public email: string,
        public isDeleted: number,
    ){}
}