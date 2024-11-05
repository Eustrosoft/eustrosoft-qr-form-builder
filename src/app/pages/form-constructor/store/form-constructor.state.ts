import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormElement, FormField, InputType } from '@app/pages/form-constructor/form-constructor.model';
import { FormConstructorActions } from '@app/pages/form-constructor/store/form-constructor.actions';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
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
        controlElement: 'input',
        label: 'Input',
        placeholder: '',
        hint: '',
      },
      {
        controlElement: 'select',
        label: 'Select',
        placeholder: '',
        hint: '',
      },
      {
        controlElement: 'datepicker',
        label: 'Datepicker',
        placeholder: '',
        hint: '',
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

  @Action(FormConstructorActions.AddInputElementToEditor)
  public addInputElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddInputElementToEditor): void {
    const element = this.formElementFactoryService.makeInputElement({ inputType: action.inputType });

    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
  }

  @Action(FormConstructorActions.AddSelectElementToEditor)
  public addSelectElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddSelectElementToEditor): void {
    const element = this.formElementFactoryService.makeSelectElement({ optionList: action.optionList });

    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
  }

  @Action(FormConstructorActions.AddDatepickerElementToEditor)
  public addDatepickerElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddDatepickerElementToEditor): void {
    const element = this.formElementFactoryService.makeDatepickerElement({ datepickerType: action.datepickerType });

    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
  }

  @Action(FormConstructorActions.PatchInputElementSettings)
  public patchInputElementSettings(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.PatchInputElementSettings): void {
    ctx.setState(
      patch({
        formFieldList: updateItem(
          action.index,
          patch({
            label: action.settings.label,
            placeholder: action.settings.placeholder,
            hint: action.settings.hint,
            inputType: action.settings.inputType,
          }),
        ),
      }),
    );
  }

  @Action(FormConstructorActions.PatchSelectElementSettings)
  public patchSelectElementSettings(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.PatchSelectElementSettings): void {
    ctx.setState(
      patch({
        formFieldList: updateItem(
          action.index,
          patch({
            label: action.settings.label,
            placeholder: action.settings.placeholder,
            hint: action.settings.hint,
            optionList: action.settings.optionList,
          }),
        ),
      }),
    );
  }

  @Action(FormConstructorActions.RemoveFormElement)
  public removeFormElement(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.RemoveFormElement): void {
    ctx.setState(
      patch({
        formFieldList: removeItem(action.index),
      }),
    );
  }
}
