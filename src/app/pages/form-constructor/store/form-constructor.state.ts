import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { FormElement } from '@app/pages/form-constructor/form-constructor.model';

export interface FormConstructorStateModel {
  formElementList: FormElement[];
}

@State<FormConstructorStateModel>({
  name: 'formConstructor',
  defaults: {
    formElementList: [
      {
        name: 'Input',
        control: 'input',
      },
      {
        name: 'Select',
        control: 'select',
      },
      {
        name: 'Datepicker',
        control: 'datepicker',
      },
    ],
  },
})
@Injectable()
export class FormConstructorState {
  @Selector()
  public static getFormElementList$(state: FormConstructorStateModel): FormElement[] {
    return state.formElementList;
  }
}
