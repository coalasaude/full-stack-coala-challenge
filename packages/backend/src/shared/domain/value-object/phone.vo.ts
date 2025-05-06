import { InvalidPhoneNumberError } from "../error/invalid-phone-number.error";

class PhoneVO {
  private readonly _phoneRegex: RegExp =
    /^\+\d{1,3} \(\d{2,3}\) \d{4,5}-\d{4}$/;
  private readonly _value: string;

  constructor(value: string) {
    this.validate(value);
    this._value = value;
  }

  private validate(value: string): void {
    if (!this._phoneRegex.test(value)) {
      throw new InvalidPhoneNumberError(value);
    }
  }

  get value(): string {
    return this._value;
  }

  get countryCode(): string {
    return this._value.split(" ")[0].substring(1);
  }

  get areaCode(): string {
    return this._value.split(" ")[1].substring(1, 4);
  }

  get number(): string {
    return this._value.split(" ")[2].replace("-", "");
  }

  get formatted(): string {
    return this._value.replace(" ", "").replace("-", "");
  }

  get isValid(): boolean {
    return this._phoneRegex.test(this._value);
  }
}

export { PhoneVO };
