import { FormGroup } from "@angular/forms";
import { User } from "../api-interfaces/user";

export class AuthFactory {

  public static buildUserFromForm(form: FormGroup): User {
    return {
      name: form.controls.name.value,
      email: form.controls.email.value,
      cpf: form.controls.cpf.value,
      password: form.controls.password.value,
    };
  }
}
