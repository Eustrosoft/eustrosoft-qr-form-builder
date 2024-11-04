import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormElement, FormField, InputType } from '@app/pages/form-constructor/form-constructor.model';
import { FormConstructorActions } from '@app/pages/form-constructor/store/form-constructor.actions';
import { append, patch } from '@ngxs/store/operators';
import { FormElementFactoryService } from '@app/pages/form-constructor/services/form-element-factory.service';

export interface FormConstructorStateModel {
  formElementList: FormElement[];
  formFieldList: FormField[];
  inputTypeOptionList: InputType[];
}

@State<FormConstructorStateModel>({
  name: 'formConstructor',
  defaults: {
    formElementList: [
      {
        label: 'Input',
        controlElement: 'input',
        placeholder: '',
      },
      {
        label: 'Select',
        controlElement: 'select',
        placeholder: '',
      },
      {
        label: 'Datepicker',
        controlElement: 'datepicker',
        placeholder: '',
      },
    ],
    formFieldList: [],
    inputTypeOptionList: ['text', 'number', 'password'],
  },
})
@Injectable()
export class FormConstructorState {
  private readonly formElementFactoryService = inject(FormElementFactoryService);

  @Selector()
  public static getFormElementList$(state: FormConstructorStateModel): FormElement[] {
    return state.formElementList;
  }

  @Selector()
  public static getFormFieldList$(state: FormConstructorStateModel): FormField[] {
    return state.formFieldList;
  }

  @Selector()
  public static getInputTypeOptionList$(state: FormConstructorStateModel): InputType[] {
    return state.inputTypeOptionList;
  }

  @Action(FormConstructorActions.AddInputToEditor)
  public addInputToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddInputToEditor): void {
    const element = this.formElementFactoryService.makeInputElement({ inputType: action.inputType });

    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
  }

  @Action(FormConstructorActions.AddSelectToEditor)
  public addSelectToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddSelectToEditor): void {
    const element = this.formElementFactoryService.makeSelectElement({ optionList: action.optionList });

    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
  }

  @Action(FormConstructorActions.AddDatepickerToEditor)
  public addDatepickerToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddDatepickerToEditor): void {
    const element = this.formElementFactoryService.makeDatepickerElement({ datepickerType: action.datepickerType });

    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
  }
}
