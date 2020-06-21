declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when duplicate flags are provided in the format
         * specifier.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class DuplicateFormatFlagsException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flags.
             * @param f
             *          The set of format flags which contain a duplicate flag.
             */
            // @ts-ignore
            constructor(f: java.lang.String | string)
            /**
             * Returns the set of flags which contains a duplicate flag.
             * @return The flags
             */
            // @ts-ignore
            getFlags(): string
            // @ts-ignore
            getMessage(): string
        }
    }
}
