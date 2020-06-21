declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when the precision is a negative value other than
         * <tt>-1</tt>, the conversion does not support a precision, or the value is
         * otherwise unsupported.
         * @since 1.5
         */
        // @ts-ignore
        class IllegalFormatPrecisionException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified precision.
             * @param p
             *          The precision
             */
            // @ts-ignore
            constructor(p: number /*int*/)
            /**
             * Returns the precision
             * @return The precision
             */
            // @ts-ignore
            getPrecision(): number /*int*/
            // @ts-ignore
            getMessage(): string
        }
    }
}
