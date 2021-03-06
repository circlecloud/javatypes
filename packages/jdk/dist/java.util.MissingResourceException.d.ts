declare namespace java {
    namespace util {
        /**
         * Signals that a resource is missing.
         * @see java.lang.Exception
         * @see ResourceBundle
         * @author Mark Davis
         * @since JDK1.1
         */
        // @ts-ignore
        class MissingResourceException extends java.lang.RuntimeException {
            /**
             * Constructs a MissingResourceException with the specified information.
             * A detail message is a String that describes this particular exception.
             * @param s the detail message
             * @param className the name of the resource class
             * @param key the key for the missing resource.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string, className: java.lang.String | string, key: java.lang.String | string)
            /**
             * Gets parameter passed by constructor.
             * @return the name of the resource class
             */
            // @ts-ignore
            getClassName(): string
            /**
             * Gets parameter passed by constructor.
             * @return the key for the missing resource
             */
            // @ts-ignore
            getKey(): string
        }
    }
}
