import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

export interface AppStateModel {
  version: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    version: 'v1',
  },
})
@Injectable()
export class AppState {
  @Selector()
  public static getVersion$(state: AppStateModel): string {
    return state.version;
  }
}
