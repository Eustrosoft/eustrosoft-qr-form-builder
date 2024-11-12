import {
  ControlElement,
  DatepickerSettingsForm,
  InputElement,
  InputSettingsForm,
  SelectElement,
  SelectSettingsForm,
} from '@app/pages/form-constructor/form-constructor.model';

export namespace FormConstructorActions {
  export class SetFormTitle {
    public static readonly type: string = '[FormConstructorActions] Set Form Title';
    constructor(readonly title: string) {}
  }

  export class SetFormDescription {
    public static readonly type: string = '[FormConstructorActions] Set Form Description';
    constructor(readonly description: string) {}
  }

  export class AddInputElementToEditor {
    public static readonly type: string = '[FormConstructorActions] Add Input Element To Editor';
    constructor(readonly inputType: InputElement['inputType'] = 'text') {}
  }

  export class AddSelectElementToEditor {
    public static readonly type: string = '[FormConstructorActions] Add Select Element To Editor';
    constructor(readonly optionList: SelectElement['optionList'] = []) {}
  }

  export class AddDatepickerElementToEditor {
    public static readonly type: string = '[FormConstructorActions] Add Datepicker Element To Editor';
  }

  export class PatchInputElementSettings {
    public static readonly type: string = '[FormConstructorActions] Patch Input Element Settings';
    constructor(
      readonly settings: ReturnType<InputSettingsForm['getRawValue']>,
      readonly index: number,
    ) {}
  }

  export class PatchSelectElementSettings {
    public static readonly type: string = '[FormConstructorActions] Patch Select Element Settings';
    constructor(
      readonly settings: ReturnType<SelectSettingsForm['getRawValue']>,
      readonly index: number,
    ) {}
  }

  export class PatchDatepickerElementSettings {
    public static readonly type: string = '[FormConstructorActions] Patch Datepicker Element Settings';
    constructor(
      readonly settings: ReturnType<DatepickerSettingsForm['getRawValue']>,
      readonly index: number,
    ) {}
  }

  export class RemoveFormElement {
    public static readonly type: string = '[FormConstructorActions] Remove Form Element';
    constructor(
      readonly controlElement: ControlElement,
      readonly index: number,
    ) {}
  }
}
