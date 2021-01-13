export class Incidencia {
    id:string;
    data:IncidenciaData;
    constructor(id, data){
        this.id=id;
        this.data = data;
    }
}

export class IncidenciaData {
    title:string;
    description:string;
    priority:number;
    created: Date;
    constructor(title, description, priority){
        this.title= title;
        this.description= description;
        this.priority= priority;
        this.created= new Date();
    }
}
