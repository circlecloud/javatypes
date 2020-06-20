declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when a conversion and flag are incompatible.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class FormatFlagsConversionMismatchException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flag
             * and conversion.
             * @param f
             *          The flag
             * @param c
             *          The conversion
             */
            // @ts-ignore
            constructor(f: string, c: string)
            /**
             * Returns the incompatible flag.
             * @return The flag
             */
            // @ts-ignore
            getFlags(): java.lang.String
            /**
             * Returns the incompatible conversion.
             * @return The conversion
             */
            // @ts-ignore
            getConversion(): char
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
