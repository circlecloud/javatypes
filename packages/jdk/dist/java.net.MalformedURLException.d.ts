declare namespace java {
    namespace net {
        /**
         * Thrown to indicate that a malformed URL has occurred. Either no
         * legal protocol could be found in a specification string or the
         * string could not be parsed.
         * @author Arthur van Hoff
         * @since JDK1.0
         */
        // @ts-ignore
        class MalformedURLException extends java.io.IOException {
            /**
             * Constructs a {@code MalformedURLException} with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a {@code MalformedURLException} with the
             * specified detail message.
             * @param msg   the detail message.
             */
            // @ts-ignore
            constructor(msg: java.lang.String | string)
        }
    }
}
