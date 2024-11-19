import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FormElement, FormField, InputType } from '@app/pages/form-constructor/form-constructor.model';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { FormElementFactoryService } from '@app/pages/form-constructor/services/form-element-factory.service';
import { FormElementService } from '@app/pages/form-constructor/services/form-element.service';
import {
  AddDatepickerElementToEditor,
  AddInputElementToEditor,
  AddSelectElementToEditor,
  PatchDatepickerElementSettings,
  PatchInputElementSettings,
  PatchSelectElementSettings,
  RemoveFormElement,
  SerializeFormFieldList,
  SetFormDescription,
  SetFormTitle,
} from '@app/pages/form-constructor/store/form-constructor.actions';

export interface FormConstructorStateModel {
  formElementList: FormElement[];
  formTitle: string;
  formDescription: string;
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
    formTitle: 'Form Title',
    formDescription: 'Form Description',
    formFieldList: [],
    inputTypeOptionList: ['text', 'number', 'password'],
  },
})
@Injectable()
export class FormConstructorState {
  private readonly formElementFactoryService = inject(FormElementFactoryService);
  private readonly formElementService = inject(FormElementService);

  @Selector()
  public static getFormElementList$(state: FormConstructorStateModel): FormElement[] {
    return state.formElementList;
  }

  @Selector()
  public static getFormTitle$(state: FormConstructorStateModel): string {
    return state.formTitle;
  }

  @Selector()
  public static getFormDescription$(state: FormConstructorStateModel): string {
    return state.formDescription;
  }

  @Selector()
  public static getFormFieldList$(state: FormConstructorStateModel): FormField[] {
    return state.formFieldList;
  }

  @Selector()
  public static getInputTypeOptionList$(state: FormConstructorStateModel): InputType[] {
    return state.inputTypeOptionList;
  }

  @Action(SetFormTitle)
  public setFormTitle(ctx: StateContext<FormConstructorStateModel>, action: SetFormTitle): void {
    ctx.setState(
      patch({
        formTitle: action.title,
      }),
    );
  }

  @Action(SetFormDescription)
  public setFormDescription(ctx: StateContext<FormConstructorStateModel>, action: SetFormDescription): void {
    ctx.setState(
      patch({
        formDescription: action.description,
      }),
    );
  }

  @Action(AddInputElementToEditor)
  public addInputElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: AddInputElementToEditor): void {
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

  @Action(AddSelectElementToEditor)
  public addSelectElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: AddSelectElementToEditor): void {
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

  @Action(AddDatepickerElementToEditor)
  public addDatepickerElementToEditor(ctx: StateContext<FormConstructorStateModel>, action: AddDatepickerElementToEditor): void {
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

  @Action(PatchInputElementSettings)
  public patchInputElementSettings(ctx: StateContext<FormConstructorStateModel>, action: PatchInputElementSettings): void {
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

  @Action(PatchSelectElementSettings)
  public patchSelectElementSettings(ctx: StateContext<FormConstructorStateModel>, action: PatchSelectElementSettings): void {
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

  @Action(PatchDatepickerElementSettings)
  public patchDatepickerElementSettings(ctx: StateContext<FormConstructorStateModel>, action: PatchDatepickerElementSettings): void {
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

  @Action(RemoveFormElement)
  public removeFormElement(ctx: StateContext<FormConstructorStateModel>, action: RemoveFormElement): void {
    this.formElementService.form.removeControl(`${action.controlElement}-${action.index}`);
    ctx.setState(
      patch({
        formFieldList: removeItem(action.index),
      }),
    );
  }

  @Action(SerializeFormFieldList)
  public serializeFormFieldList(ctx: StateContext<FormConstructorStateModel>, action: SerializeFormFieldList): void {
    const { formFieldList } = ctx.getState();
    const serializedFormFieldList = formFieldList.map(({ formControl, ...rest }) => ({ ...rest, value: formControl.getRawValue() }));
    console.log(serializedFormFieldList);
  }
}
