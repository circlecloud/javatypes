declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when an unknown flag is given.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class UnknownFormatFlagsException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flags.
             * @param f
             *          The set of format flags which contain an unknown flag
             */
            // @ts-ignore
            constructor(f: string)
            /**
             * Returns the set of flags which contains an unknown flag.
             * @return The flags
             */
            // @ts-ignore
            getFlags(): java.lang.String
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
