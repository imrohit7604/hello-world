import { Pipe,PipeTransform } from "@angular/core"

@Pipe({
    name:"TransformData"
})
export class MyPipe implements PipeTransform{
    transform(value:any,args?:any)
    {
        return value?value:"Please Enter Data";
    }
}