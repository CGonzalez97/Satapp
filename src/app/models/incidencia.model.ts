export class Incidencia {
    id:string;
    data:IncidenciaData;
    constructor(/*id,*/ data){
        //this.id=id;
        this.data = data;
    }
}

export class IncidenciaData {
    created: Date;
    description:string;      
    priority:number;
    title:string;  
    
    constructor(title, description, priority){
        this.title= title;
        this.description= description;
        this.priority= priority;
        this.created= new Date();
    }
}
export class IncidenciaEnviar{
    //id:string;
    created: Date;
    description:string;      
    priority:number;
    title:string; 
    
    constructor(/*id,*/title, description, priority){
        //this.id=id;
        this.title= title;
        this.description= description;
        this.priority= priority;
        this.created= new Date();
    }
}