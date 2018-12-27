export class TimeSpanOverflowError extends Error {
    // https://github.com/Microsoft/TypeScript/issues/13965
    public __proto__: Error;
    public innerError: Error;

    constructor(message?: string, innerError?: Error) {
        const trueProto = new.target.prototype;
        super(message);

        // Alternatively use Object.setPrototypeOf if you have an ES6 environment.
        this.__proto__ = trueProto;
        this.message = message != undefined ? message : "[No error message]";

        if (innerError != undefined) {
            this.innerError = innerError;
        }
    }
}
