import { FormGroup } from "@angular/forms";
import { Sale } from "../api-interfaces/sale";

export class SaleFactory {

  public static buildUserFromForm(form: FormGroup): Sale {
    return {
      code: form.controls.code.value,
      price: form.controls.price.value,
      date: form.controls.date.value
    };
  }
}
