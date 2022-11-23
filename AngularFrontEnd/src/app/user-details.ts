import { FormControl } from '@angular/forms';

export interface UserDetails {
  fullName: FormControl <string>;
  email: FormControl <string>;
  phone: FormControl <string>;
  age: FormControl <number>;
}