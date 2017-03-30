export class Person{

  public id: number;
  public name: string;
  public birthDate: Date;
  public email: string;
  public gender: number;

  constructor({id, name, birthDate, email, gender}:
    {
      id?: number, name?: string, birthDate?: Date, email?: string, gender?: number
    }){
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.email = email;
    this.gender = gender;
  }
}
