import mapboxgl from "mapbox-gl";

export class ExtrudeButtonControl implements mapboxgl.IControl {
    eventIncrement: Function;
    eventDec: Function;
    constructor(eventIncrement: Function, eventDec: Function) {
        this.eventIncrement = eventIncrement;
        this.eventDec = eventDec;
    }
    onRemove(){ }
    getDefaultPosition?: (() => string) | undefined;
    onAdd() {
        const div = document.createElement('div'); 0
        const buttonInc = document.createElement('button');
        const buttonDec = document.createElement('button');
        div.classList.add('mapboxgl-ctrl-group', 'mapboxgl-ctrl');
        buttonInc.addEventListener("click", (e) => this.eventIncrement());
        buttonDec.addEventListener("click", (e) => this.eventDec());
        // чтобы не засорять через inner
        buttonInc.innerHTML = '<i class="pi pi-plus-circle"></i>'
        buttonDec.innerHTML = '<i class="pi pi-minus-circle"></i>'
        div.appendChild(buttonInc);
        div.appendChild(buttonDec);
        return div;
    }
}