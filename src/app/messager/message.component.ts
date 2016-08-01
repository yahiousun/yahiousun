import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'message-item',
  directives: [
  ],
  styleUrls: [
    './message.style.css'
  ],
  templateUrl: './message.template.html',
  inputs: ['color']
})
export class Message {
  @Input() public message: string;
  private _color: string;
  constructor(private _elementRef:ElementRef, private _renderer: Renderer) {
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._updateColor(value);
  }

  ngOnInit() {

    console.log(this.message);
  }

  _updateColor(newColor: string) {
    this._setElementColor(this._color, false);
    this._setElementColor(newColor, true);
    this._color = newColor;
  }

  _setElementColor(color: string, isAdd: boolean) {
    if (color != null && color != '') {
      this._renderer.setElementClass(this._elementRef.nativeElement, `md-${color}`, isAdd);
    }
  }

}
