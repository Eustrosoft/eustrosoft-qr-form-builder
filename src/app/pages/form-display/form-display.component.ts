import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AppRoutes } from '@app/app.constant';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { DatepickerElementComponent } from '@app/pages/form-constructor/components/datepicker-element/datepicker-element.component';
import { DatepickerElementSettingsComponent } from '@app/pages/form-constructor/components/datepicker-element-settings/datepicker-element-settings.component';
import { InputElementComponent } from '@app/pages/form-constructor/components/input-element/input-element.component';
import { InputElementSettingsComponent } from '@app/pages/form-constructor/components/input-element-settings/input-element-settings.component';
import { SelectElementComponent } from '@app/pages/form-constructor/components/select-element/select-element.component';
import { SelectElementSettingsComponent } from '@app/pages/form-constructor/components/select-element-settings/select-element-settings.component';
import { FormElementService } from '@app/pages/form-constructor/services/form-element.service';
import { ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'form-display',
  standalone: true,
  imports: [
    FlexBlockComponent,
    MatButton,
    RouterLink,
    DatepickerElementComponent,
    DatepickerElementSettingsComponent,
    InputElementComponent,
    InputElementSettingsComponent,
    SelectElementComponent,
    SelectElementSettingsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './form-display.component.html',
  styleUrl: './form-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDisplayComponent implements OnInit {
  protected readonly formElementService = inject(FormElementService);
  protected readonly cdRef = inject(ChangeDetectorRef);
  protected readonly destroyRef = inject(DestroyRef);

  protected readonly formTitle = select(FormConstructorState.getFormTitle$);
  protected readonly formDescription = select(FormConstructorState.getFormDescription$);
  protected readonly formFieldList = select(FormConstructorState.getFormFieldList$);

  protected readonly AppRoutes = AppRoutes;

  public ngOnInit(): void {
    this.initFormEventsSubscription();
  }

  private initFormEventsSubscription(): void {
    this.formElementService.form.events
      .pipe(
        tap(() => this.cdRef.markForCheck()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  protected submitForm(): void {
    console.log(this.formElementService.form.getRawValue());
  }

  protected clearForm(): void {
    this.formElementService.form.reset();
  }
}
