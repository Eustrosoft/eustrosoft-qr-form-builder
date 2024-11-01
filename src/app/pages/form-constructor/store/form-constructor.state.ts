import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormElement, FormField } from '@app/pages/form-constructor/form-constructor.model';
import { FormConstructorActions } from '@app/pages/form-constructor/store/form-constructor.actions';
import { append, patch } from '@ngxs/store/operators';
import { FormElementFactoryService } from '@app/pages/form-constructor/services/form-element-factory.service';

export interface FormConstructorStateModel {
  formElementList: FormElement[];
  formFieldList: FormField[];
}

@State<FormConstructorStateModel>({
  name: 'formConstructor',
  defaults: {
    formElementList: [
      {
        label: 'Input',
        controlElement: 'input',
      },
      {
        label: 'Select',
        controlElement: 'select',
      },
      {
        label: 'Datepicker',
        controlElement: 'datepicker',
      },
    ],
    formFieldList: [],
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

  @Action(FormConstructorActions.AddInputToEditor)
  public addInputToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddInputToEditor): void {
    const element = this.formElementFactoryService.makeInputElement({ type: action.inputType });

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
