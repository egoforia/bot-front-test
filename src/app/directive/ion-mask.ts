// Angular
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';

// Ionic
import { IonInput } from '@ionic/angular';

// Rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// Text-mask
import { createTextMaskInputElement } from 'text-mask-core';

/**
 * ion-mask directive, based on text-mask module
 */
@Directive({
  selector: '[ionMask]',
  providers: [IonInput],
})
export class IonMask implements OnInit, OnDestroy {

  @Input('ionMask')
  public mask: false | (string | RegExp)[] | ((raw: string) => (string | RegExp)[]) = [];
  private onDestroy: Subject<void> = new Subject<void>();

  private lastMask: false | (string | RegExp)[] | ((raw: string) => (string | RegExp)[]) = [];

  constructor(public ionInput: IonInput) {}

  public ngOnInit() {
    this.configureInput();
  }

  public ngOnDestroy() {
    this.onDestroy.next();
  }

  public async configureInput() {
    if (this.mask) {
      const input       = await this.ionInput.getInputElement();
      let maskedInput   = createTextMaskInputElement({
        inputElement  : input,
        mask          : this.mask,
        guide         : false
      });

      // masking when event is not generated
      maskedInput.update(input.value);
      this.ionInput.value = input.value;

      // masking when event is  generated
      this.ionInput
        .ionChange
        .pipe( takeUntil( this.onDestroy ) )
        .subscribe( ( event: CustomEvent ) => {
          // console.log('mask', this.mask, maskedInput.mask);
          if (JSON.stringify(this.lastMask) !== JSON.stringify(this.mask)) {
            maskedInput   = createTextMaskInputElement({
              inputElement  : input,
              mask          : this.mask,
              guide         : false
            });

            this.lastMask = this.mask;
          }

          const { value } = event.detail;
          maskedInput.update(value);
          this.ionInput.value = input.value;
        });

      this.lastMask = this.mask;
    }
  }
}
