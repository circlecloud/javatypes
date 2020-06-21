declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when an unknown conversion is given.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to
         * any method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class UnknownFormatConversionException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the unknown conversion.
             * @param s
             *          Unknown conversion
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
            /**
             * Returns the unknown conversion.
             * @return The unknown conversion.
             */
            // @ts-ignore
            getConversion(): string
            // @ts-ignore
            getMessage(): string
        }
    }
}
