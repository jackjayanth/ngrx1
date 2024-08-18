import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css'],
})
export class CodeDisplayComponent implements AfterViewInit, OnChanges {
  @Input() code: string = '';
  @Input() language: string = 'typescript';

  ngAfterViewInit() {
    this.highlightCode();
  }

  ngOnChanges() {
    this.highlightCode();
  }

  highlightCode() {
    Prism.highlightAll();
  }
}
