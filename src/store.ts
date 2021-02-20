import {observable, reaction} from 'mobx';

export class Store {

  constructor() {
    // observe(this, 'selectedValue1', () => {
    reaction(() => this.selectedValue1, () => {
      this.selectedValue2 = '';
    })
  }

  @observable selectedValue1: string = '';
  @observable selectedValue2: string = '';

}
