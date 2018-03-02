interface Person{
    name:string;
    email:string;
    salary: number;
    active: boolean;

}

var emailmal:any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

var people= Array<Person>();

function createPeople1():void {
    let newPerson:any
    for(let i=0; i<10; i++){
        newPerson={
            name:`tarea${i}`,
            email:`C${i}@gmail.com`,
            salary:(i+10000),
            active:i%2===0?true:false ///if primitivo

        }
        people.push(newPerson);
   
    }
    newPerson={
        name:"cesar",            
        email:"a",
        active:true,
    };
}

function mostrarValidos1():void{
    for(let i=0;i<people.length;i++){
        if(people[i].active && (emailmal.test(people[i].email))){
            console.log(people[i]);
        }
    }
}
createPeople1();
mostrarValidos1();





