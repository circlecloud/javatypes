declare namespace java {
    namespace util {
        /**
         * Thrown by methods in {@link Locale} and {@link Locale.Builder} to
         * indicate that an argument is not a well-formed BCP 47 tag.
         * @see Locale
         * @since 1.7
         */
        // @ts-ignore
        class IllformedLocaleException extends java.lang.RuntimeException {
            /**
             * Constructs a new <code>IllformedLocaleException</code> with no
             * detail message and -1 as the error index.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>IllformedLocaleException</code> with the
             * given message and -1 as the error index.
             * @param message the message
             */
            // @ts-ignore
            constructor(message: java.lang.String | string)
            /**
             * Constructs a new <code>IllformedLocaleException</code> with the
             * given message and the error index.  The error index is the approximate
             * offset from the start of the ill-formed value to the point where the
             * parse first detected an error.  A negative error index value indicates
             * either the error index is not applicable or unknown.
             * @param message the message
             * @param errorIndex the index
             */
            // @ts-ignore
            constructor(message: java.lang.String | string, errorIndex: number /*int*/)
            /**
             * Returns the index where the error was found. A negative value indicates
             * either the error index is not applicable or unknown.
             * @return the error index
             */
            // @ts-ignore
            getErrorIndex(): number /*int*/
        }
    }
}
