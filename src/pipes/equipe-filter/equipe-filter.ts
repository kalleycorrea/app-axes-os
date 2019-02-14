import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'ionic-angular/umd/util/util';

@Pipe({
  name: 'equipeFilter',
  pure: false
})
export class EquipeFilterPipe implements PipeTransform {

  transform(usuarios: any[], filter: any): any {
    if (!usuarios || !filter) {
        return usuarios;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return usuarios.filter(usuario => usuario.equipe.indexOf(filter) !== -1);
  }
}
