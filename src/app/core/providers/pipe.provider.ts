import { Provider } from '@angular/core';
import { PxToRemPipe } from '@core/pipe/px-to-rem.pipe';

export function providePipes(): Provider[] {
  return [PxToRemPipe];
}
