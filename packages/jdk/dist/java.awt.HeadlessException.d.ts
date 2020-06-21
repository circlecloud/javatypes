declare namespace java {
    namespace awt {
        /**
         * Thrown when code that is dependent on a keyboard, display, or mouse
         * is called in an environment that does not support a keyboard, display,
         * or mouse.
         * @since 1.4
         * @author Michael Martak
         */
        // @ts-ignore
        class HeadlessException extends java.lang.UnsupportedOperationException {
            // @ts-ignore
            constructor()
            // @ts-ignore
            constructor(msg: java.lang.String | string)
            // @ts-ignore
            getMessage(): string
        }
    }
}
