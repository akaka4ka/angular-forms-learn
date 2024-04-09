import { Component } from '@angular/core';

interface User {
    name: string;
    age: number;
    company: string;
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.less']
})
export class TemplateDrivenFormsComponent {
    public oneInputModel: string = "";
    public user: Partial<User> = {};
    private readonly oneInputResetValue: string = "Hello, World!";

    public resetOneInput(): void {
        this.oneInputModel = this.oneInputResetValue;
    }

    public logOneInputValue(): void {
        console.log('$$ change one input model: ', this.oneInputModel);
    }

    public logSeveralInputValue(name: string, value: string | number): void {
        console.log(`$$ change ${name} input, value: ${value}`);
    }

    public logUserObject(logArea: HTMLTextAreaElement): void {
        console.log(`$$ log user: `, this.user);
        logArea.value = `{\n\tname: ${this.user.name},\n\tage: ${this.user.age},\n\tcompany: ${this.user.company},\n}`;
    }
}
