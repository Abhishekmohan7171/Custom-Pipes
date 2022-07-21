import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEmail'
})
export class MaskEmailPipe implements PipeTransform {

  transform(mainEmail: string, visibleEmail: number = 1): string {
    // return null;
    let firstVisibleEmail = mainEmail.slice(0, visibleEmail);
    let maskedEmail = mainEmail.slice(visibleEmail, mainEmail.indexOf('@'));
    let lastVisibleEmail = mainEmail.slice(mainEmail.indexOf('@'));    
    return firstVisibleEmail + maskedEmail.replace(/./g, '*') + lastVisibleEmail;

  }

}


//return firstVisibleEmail + maskedEmail.replace(/./g, '*') + lastVisibleEmail;
