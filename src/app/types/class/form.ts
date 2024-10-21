


export class comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  at: Date;
  constructor(){
    this.id= 0;
    this.name= 'guest';
    this.email= 'shadow77@gmail.com';
    this.comment= '';
    this.at=new Date();
  }
}
