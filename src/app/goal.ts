export class Goal {
    showDescription: boolean;
    id:number;
    name:string;
    description: string;

    constructor( id:number, name:string, description: string, public completeDate:Date){
      this.id=id;
      this.name=name;
      this.description=description;
      this.showDescription=false;
    }


}
