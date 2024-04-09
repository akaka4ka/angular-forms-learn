import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit, AfterViewInit {
    @ViewChild('logArea', { read: ElementRef }) private logTextArea: ElementRef;
    public reactiveFormGroup: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.reactiveFormGroup = this.formBuilder.group({
            username: [''],
            age: [],
            email: [''],
        });

        this.reactiveFormGroup.valueChanges.subscribe(this.adjustLogTextAreaHeight);
    }

    ngAfterViewInit(): void {
        this.adjustLogTextAreaHeight();
    }

    private adjustLogTextAreaHeight() {
        this.logTextArea.nativeElement.style.height = "";
        this.logTextArea.nativeElement.style.height = this.logTextArea.nativeElement.scrollHeight + 'px';
    }
}
