
const UNIVERSIDADES  = 
[
    {nit:"32231", nombre:"Universidad de Medellín", direccion:"crr 52 alfa #451-21", telefono:"1234124"},
    {nit:"52341", nombre:"Universidad de bogota", direccion:"crr 35 omega #242-12", telefono:"325212"},
    {nit:"62342", nombre:"Universidad de MisFan", direccion:"crr 45 pan #221-21", telefono:"522345"},
    {nit:"52311", nombre:"Universidad de Lilith", direccion:"crr 21 hou #212-11", telefono:"23232"},
    {nit:"35322", nombre:"Universidad de Monterrey", direccion:"crr 42 mae #232-14", telefono:"23122"}
]

const ESTUDIANTES =
[
    {id:"52352121", nombre:"Manuel", apellido:"roja", edad:"22", semestre:"4",valorSemetre:"6400000", nitUniversidad:"32231"},
    {id:"32323122", nombre:"Santiago", apellido:"mosquera", edad:"15", semestre:"2",valorSemetre:"1000000", nitUniversidad:"35322"},
    {id:"10222231", nombre:"Julian", apellido:"salazar", edad:"23", semestre:"8",valorSemetre:"2100000", nitUniversidad:"62342"},
    {id:"12312222", nombre:"Jhonas", apellido:"alveraz", edad:"26", semestre:"10",valorSemetre:"2000000", nitUniversidad:"52311"},
    {id:"58999322", nombre:"James", apellido:"yuca", edad:"30", semestre:"5",valorSemetre:"6400000", nitUniversidad:"32231"},
    {id:"12858283", nombre:"Camile", apellido:"loaiza", edad:"16", semestre:"3",valorSemetre:"3400000", nitUniversidad:"52311"},
    {id:"32323221", nombre:"David", apellido:"jamilton", edad:"22", semestre:"5",valorSemetre:"6200000", nitUniversidad:"32231"},
    {id:"23215664", nombre:"Marcelo", apellido:"malerus", edad:"20", semestre:"3",valorSemetre:"600000", nitUniversidad:"35322"},
    {id:"65622231", nombre:"Celia", apellido:"juanaz", edad:"18", semestre:"6",valorSemetre:"3500000", nitUniversidad:"52341"},
    {id:"62334222", nombre:"Fafilia", apellido:"falaz", edad:"17", semestre:"3",valorSemetre:"6300000", nitUniversidad:"32231"},
    {id:"10112211", nombre:"Limari", apellido:"lumberg", edad:"18", semestre:"4",valorSemetre:"1500000", nitUniversidad:"62342"},
    {id:"22335511", nombre:"Paco", apellido:"paquito", edad:"25", semestre:"12",valorSemetre:"1700000", nitUniversidad:"52341"}
]

const BuscarEstudiantes = async () =>
{
    return new Promise((resolve, reject) =>
    {
        let estu = ESTUDIANTES.sort(function (prev, next)
        {
            if(parseFloat(next.valorSemetre) > parseFloat(prev.valorSemetre))
            {
                return 1;
            }
            if(parseFloat(next.valorSemetre) < parseFloat(prev.valorSemetre))
            {
                return -1;
            }
            return 0;
        })
        let response = []
        for (let i = 0; i < 5; i++) {
            response.push(estu[i])
        }
        resolve()
        console.log("Los 5 estudiantes que mas pagaron este semestre:")
        response.forEach(element => console.log("Identificación: "+element.id+" nombre: "+element.nombre+" apellidos: "+element.apellido));
    })
}

const ImprimirUniversidades = async () =>
{
    return new Promise((resolve, reject) => 
    {
        let prom1=0, prom2=0, prom3=0, prom4=0, prom5=0
        let cant1=0, cant2=0, cant3=0, cant4=0, cant5=0
        let Univ = []
        UNIVERSIDADES.forEach(element => {
            Univ.push({nit:element.nit, name:element.nombre, average:Number})
        });
        for (let i = 0; i < ESTUDIANTES.length; i++) { //Profe se que se podia hacer mas optimo y modulado este punto, pero decidi hacer rapida esta tarea.
            if(ESTUDIANTES[i].nitUniversidad == Univ[0].nit) //la proxima lo hago mas escalable.
            {
                prom1 += parseFloat(ESTUDIANTES[i].valorSemetre)
                cant1++;
                continue
            }
            else if(ESTUDIANTES[i].nitUniversidad == Univ[1].nit)
            {
                prom2 += parseFloat(ESTUDIANTES[i].valorSemetre)
                cant2++;
            }
            else if(ESTUDIANTES[i].nitUniversidad == Univ[2].nit)
            {
                prom3 += parseFloat(ESTUDIANTES[i].valorSemetre)
                cant3++;
            }
            else if(ESTUDIANTES[i].nitUniversidad == Univ[3].nit)
            {
                prom4 += parseFloat(ESTUDIANTES[i].valorSemetre)
                cant4++;
            }
            else if(ESTUDIANTES[i].nitUniversidad == Univ[4].nit)
            {
                prom5 += parseFloat(ESTUDIANTES[i].valorSemetre)
                cant5++;
            }
        }
        Univ[0].average = prom1/cant1
        Univ[1].average = prom2/cant2
        Univ[2].average = prom3/cant3
        Univ[3].average = prom4/cant4
        Univ[4].average = prom5/cant5
        resolve()
        console.log("Universidades con su promedio valor semestre:")
        Univ.forEach(element => {
            console.log("Nombre: "+element.name+" promedio valor semestre: "+element.average)
        });
    })
}

const MenoresEdad = () =>{
    console.log("Estudiantes menores de edad:")
    ESTUDIANTES.forEach(element => {
        if(parseFloat(element.edad)<18)
        {
            console.log(element)
        }
    });
}

const main = async () =>
{
    try {
        await BuscarEstudiantes();
        await ImprimirUniversidades();
        MenoresEdad();
    } catch (error) {
        
    }
}
main();

