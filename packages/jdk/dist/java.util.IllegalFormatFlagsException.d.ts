declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when an illegal combination flags is given.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class IllegalFormatFlagsException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flags.
             * @param f
             *          The set of format flags which contain an illegal combination
             */
            // @ts-ignore
            constructor(f: java.lang.String | string)
            /**
             * Returns the set of flags which contains an illegal combination.
             * @return The flags
             */
            // @ts-ignore
            getFlags(): string
            // @ts-ignore
            getMessage(): string
        }
    }
}
