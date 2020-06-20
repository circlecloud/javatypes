declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when the format width is required.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class MissingFormatWidthException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified format
             * specifier.
             * @param s
             *          The format specifier which does not have a width
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Returns the format specifier which does not have a width.
             * @return The format specifier which does not have a width
             */
            // @ts-ignore
            getFormatSpecifier(): java.lang.String
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
