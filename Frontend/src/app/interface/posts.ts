export interface Posts {
    id: string;
    postedBy: [{firstname},{_id}];
    title: string;
    description:string;
    imageUrl: string;
    createdAt: string;
    comments: [];   
}