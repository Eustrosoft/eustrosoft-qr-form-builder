import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormElement, FormField, InputType } from '@app/pages/form-constructor/form-constructor.model';
import { FormConstructorActions } from '@app/pages/form-constructor/store/form-constructor.actions';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { FormElementFactoryService } from '@app/pages/form-constructor/services/form-element-factory.service';
import { FormElementService } from '@app/pages/form-constructor/services/form-element.service';

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
      {
        controlElement: 'ranged-datepicker',
        label: 'Ranged Datepicker',
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
  /**
   * TODO
   *  Добавить режим предпросмотра формы
   *  Добавить header как в qr-tiger
   *  Продумать сериализацию формы
   *  Сделать custom control из input-element, select-element, datepicker-element
   */

  private readonly formElementFactoryService = inject(FormElementFactoryService);
  private readonly formElementService = inject(FormElementService);

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
    const control = this.formElementService.makeInputElementControl();
    const element = this.formElementFactoryService.makeInputElement({ inputType: action.inputType, formControl: control });
    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
    const { formFieldList } = ctx.getState();
    this.formElementService.form.addControl(`${element.controlElement}-${formFieldList.length - 1}`, control);
  }

  @Action(FormConstructorActions.AddSelectElementToEditor)
  public addSelectElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddSelectElementToEditor): void {
    const control = this.formElementService.makeSelectElementControl();
    const element = this.formElementFactoryService.makeSelectElement({ optionList: action.optionList, formControl: control });
    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
    const { formFieldList } = ctx.getState();
    this.formElementService.form.addControl(`${element.controlElement}-${formFieldList.length - 1}`, control);
  }

  @Action(FormConstructorActions.AddDatepickerElementToEditor)
  public addDatepickerElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.AddDatepickerElementToEditor): void {
    const control = this.formElementService.makeDatepickerElementControl();
    const element = this.formElementFactoryService.makeDatepickerElement({ formControl: control });
    ctx.setState(
      patch({
        formFieldList: append([element]),
      }),
    );
    const { formFieldList } = ctx.getState();
    this.formElementService.form.addControl(`${element.controlElement}-${formFieldList.length - 1}`, control);
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
    const optionList = action.settings.optionList
      .trim()
      .split(',')
      .map((value) => value.trim());

    ctx.setState(
      patch({
        formFieldList: updateItem(
          action.index,
          patch({
            label: action.settings.label,
            placeholder: action.settings.placeholder,
            hint: action.settings.hint,
            optionList,
          }),
        ),
      }),
    );
  }

  @Action(FormConstructorActions.PatchDatepickerElementSettings)
  public patchDatepickerElementSettings(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.PatchDatepickerElementSettings): void {
    ctx.setState(
      patch({
        formFieldList: updateItem(
          action.index,
          patch({
            label: action.settings.label,
            placeholder: action.settings.placeholder,
            hint: action.settings.hint,
          }),
        ),
      }),
    );
  }

  @Action(FormConstructorActions.RemoveFormElement)
  public removeFormElement(ctx: StateContext<FormConstructorStateModel>, action: FormConstructorActions.RemoveFormElement): void {
    this.formElementService.form.removeControl(`${action.controlElement}-${action.index}`);
    ctx.setState(
      patch({
        formFieldList: removeItem(action.index),
      }),
    );
  }
}
