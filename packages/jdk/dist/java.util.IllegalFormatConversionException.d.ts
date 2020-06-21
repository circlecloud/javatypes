declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when the argument corresponding to the format
         * specifier is of an incompatible type.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class IllegalFormatConversionException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the mismatched conversion and
             * the corresponding argument class.
             * @param c
             *          Inapplicable conversion
             * @param arg
             *          Class of the mismatched argument
             */
            // @ts-ignore
            constructor(c: string, arg: java.lang.Class<any>)
            /**
             * Returns the inapplicable conversion.
             * @return The inapplicable conversion
             */
            // @ts-ignore
            getConversion(): string
            /**
             * Returns the class of the mismatched argument.
             * @return The class of the mismatched argument
             */
            // @ts-ignore
            getArgumentClass(): java.lang.Class<any>
            // @ts-ignore
            getMessage(): string
        }
    }
}
