import { FormGroup } from "@angular/forms";
import { Sale } from "../api-interfaces/sale";
import { DateFactory } from "./date-factory";

export class SaleFactory {

  public static buildUserFromForm(form: FormGroup): Sale {
    return {
      code: form.controls.code.value,
      price: form.controls.price.value,
      date: DateFactory.convertToDate(form.controls.date.value)
    };
  }
}
