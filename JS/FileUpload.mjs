/**
 * Copyright meandering 2024
 */
class FileUpload extends HTMLElement {
    #file_input
    constructor() {
        super();
    }

    connectedCallback() {
        this.#file_input = document.createElement('input');
        this.#file_input.type = 'file';
        this.#file_input.accept = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        
        this.appendChild(this.#file_input);

        this.#file_input.addEventListener('change', this.#fileChange(), false);
        this.#file_input.addEventListener('cancel', this.#fileCancel(), false);
    }

    #fileChange() {
        function fileChanged(event) {
            console.log('changed');
            console.log(event);
        }
        fileChanged.bind(this);
        return fileChanged;
    }
    #fileCancel() {
        function fileCancelled(event) {
            console.log('Cancelled');
            console.log(event);
        }
        fileChanged.bind(this);
        return fileCancelled;
    }
}

export { FileUpload };