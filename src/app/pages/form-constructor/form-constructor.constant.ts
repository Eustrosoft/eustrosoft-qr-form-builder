import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';

export const INPUT_DEFAULT_PARAMS: InputElement = {
  controlElement: 'input',
  label: 'Input',
  placeholder: '',
  hint: '',
  inputType: 'text',
  formControl: new FormControl(),
} as const;

export const SELECT_DEFAULT_PARAMS: SelectElement = {
  controlElement: 'select',
  label: 'Select',
  placeholder: '',
  hint: '',
  optionList: [],
  formControl: new FormControl(),
} as const;

export const DATEPICKER_DEFAULT_PARAMS: DatepickerElement = {
  controlElement: 'datepicker',
  label: 'Datepicker',
  placeholder: '',
  hint: '',
  formControl: new FormControl(),
} as const;

export const SETTINGS_OVERLAY_POSITION_RIGHT: ConnectedPosition = {
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top',
  offsetX: 8,
};
