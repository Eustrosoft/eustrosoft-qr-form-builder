import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

export interface FormConstructorStateModel {
  items: string[];
}

@State<FormConstructorStateModel>({
  name: 'formConstructor',
  defaults: {
    items: [],
  },
})
@Injectable()
export class FormConstructorState {
  @Selector()
  public static getState(state: FormConstructorStateModel): FormConstructorStateModel {
    return state;
  }
}
