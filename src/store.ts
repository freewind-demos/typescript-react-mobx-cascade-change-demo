import {observable, reaction} from 'mobx';

export class Store {

  constructor() {
    // observe(this, 'selectedValue1', () => {
    reaction(() => this.selectedValue1, () => {
      this.selectedValue2 = '';
    })

    reaction(() => [this.selectedValue1,this.selectedValue2], ([v1, v2]) => {
      this.selectedValue3 = `${v1} - ${v2}`;
    })
  }

  @observable selectedValue1: string = '';
  @observable selectedValue2: string = '';
  @observable selectedValue3: string = '';

}
