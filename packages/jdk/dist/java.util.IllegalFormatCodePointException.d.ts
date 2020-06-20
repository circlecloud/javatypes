declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when a character with an invalid Unicode code
         * point as defined by {@link Character#isValidCodePoint} is passed to the
         * {@link Formatter}.
         * <p> Unless otherwise specified, passing a <tt>null</tt> argument to any
         * method or constructor in this class will cause a {@link
         * NullPointerException} to be thrown.
         * @since 1.5
         */
        // @ts-ignore
        class IllegalFormatCodePointException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified illegal code
             * point as defined by {@link Character#isValidCodePoint}.
             * @param c
             *          The illegal Unicode code point
             */
            // @ts-ignore
            constructor(c: number /*int*/)
            /**
             * Returns the illegal code point as defined by {@link
             * Character#isValidCodePoint}.
             * @return The illegal Unicode code point
             */
            // @ts-ignore
            getCodePoint(): int
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
