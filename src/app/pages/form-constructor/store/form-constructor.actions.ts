import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';

export namespace FormConstructorActions {
  export class AddInputToEditor {
    public static readonly type: string = '[FormConstructorActions] Add Input To Editor';
    constructor(readonly inputType: InputElement['type'] = 'text') {}
  }

  export class AddSelectToEditor {
    public static readonly type: string = '[FormConstructorActions] Add Select To Editor';
    constructor(readonly optionList: SelectElement['optionList'] = []) {}
  }

  export class AddDatepickerToEditor {
    public static readonly type: string = '[FormConstructorActions] Add Datepicker To Editor';
    constructor(readonly datepickerType: DatepickerElement['datepickerType'] = 'single') {}
  }
}
