import { Content } from "./content-interface";

class ContentList {
    private _items: Content [];

    constructor() {
        this._items = [];
    }

    getItems(): Content [] {
        return this._items;
    }

    addFunction(contentItem: Content) {
        return this._items.push(contentItem);
    }

    getLength(){
        return this._items.length;
    }

    printIndex(index: number) {
        let readerFriendlyHtml = `<div>`;
        readerFriendlyHtml += `<p>` + this._items[index].title + `<p>`;
        readerFriendlyHtml += `<p>` + this._items[index].description + `<p>`;
        readerFriendlyHtml += `<p>` + this._items[index].type + `<p>`;
        readerFriendlyHtml += `<p>` + this._items[index].creator + `<p>`;
        readerFriendlyHtml += `<img src ="` + this._items[index].imgURL + `">`;
        readerFriendlyHtml += `</div>`;
        return readerFriendlyHtml;
    }
}