declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when there is a format specifier which does not
         * have a corresponding argument or if an argument index refers to an argument
         * that does not exist.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class MissingFormatArgumentException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the unmatched format
             * specifier.
             * @param s
             *          Format specifier which does not have a corresponding argument
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Returns the unmatched format specifier.
             * @return The unmatched format specifier
             */
            // @ts-ignore
            getFormatSpecifier(): java.lang.String
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
