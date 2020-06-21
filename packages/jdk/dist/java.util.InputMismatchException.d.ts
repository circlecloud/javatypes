declare namespace java {
    namespace util {
        /**
         * Thrown by a <code>Scanner</code> to indicate that the token
         * retrieved does not match the pattern for the expected type, or
         * that the token is out of range for the expected type.
         * @author unascribed
         * @see java.util.Scanner
         * @since 1.5
         */
        // @ts-ignore
        class InputMismatchException extends java.util.NoSuchElementException {
            /**
             * Constructs an <code>InputMismatchException</code> with <tt>null</tt>
             * as its error message string.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an <code>InputMismatchException</code>, saving a reference
             * to the error message string <tt>s</tt> for later retrieval by the
             * <tt>getMessage</tt> method.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
