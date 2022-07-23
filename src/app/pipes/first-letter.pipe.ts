import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(fullName: string): string {
    
	let acronym = fullName.match(/\b(\w)/g);
	if(acronym == null)
			return fullName
	else{
		let final = acronym.join('')
		return final
	}

	//acronym == null ? return fullname : return acronym.join('');

	//let acronym = fullName.match(/\b(\w)/g).join() ?? fullName;
	//console.log(fullName)
   	//return fullName;	
	//let final = acronym.join('')
	//return final	
  } 

}
