import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilter'
})
export class CategoryfilterPipe implements PipeTransform {

  transform(value:any,filterName:string,propName:string) {
    if(value.length==0||filterName=='' || filterName==undefined || filterName=='All Products'){
      return value;
    }
    const resultArray=[];
    for(let val of value){
      if(val[propName].toLowerCase().match(filterName.toLowerCase())){
          resultArray.push(val);
      }
    }
    return resultArray;
  }

}
