import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';
import { ConnectedPosition } from '@angular/cdk/overlay';

export const INPUT_DEFAULT_PARAMS: InputElement = {
  label: 'Input',
  placeholder: '',
  hint: '',
  controlElement: 'input',
  inputType: 'text',
} as const;

export const SELECT_DEFAULT_PARAMS: SelectElement = {
  label: 'Select',
  placeholder: '',
  hint: '',
  controlElement: 'select',
  optionList: [],
} as const;

export const DATEPICKER_DEFAULT_PARAMS: DatepickerElement = {
  label: 'Datepicker',
  placeholder: '',
  hint: '',
  controlElement: 'datepicker',
  datepickerType: 'single',
} as const;

export const SETTINGS_OVERLAY_POSITION_RIGHT: ConnectedPosition = {
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top',
  offsetX: 8,
};
