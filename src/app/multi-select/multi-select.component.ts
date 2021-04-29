import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
  @Input('options') options: any[] = [];
  @Input('optionLabel') optionLabel: string = '';
  selectedOptions: any[] = [];
  ngOnInit(): void {}

  onRemoveChip(option: any) {
    let index = this.selectedOptions.indexOf(option);
    this.selectedOptions.splice(index, 1);
  }
}
