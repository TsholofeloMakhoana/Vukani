export interface Posts {
    id: string;
    postedBy: string;
    title: string;
    description:string;
    imageUrl: string;
    createdOn: Date;
    comments: [];   
}