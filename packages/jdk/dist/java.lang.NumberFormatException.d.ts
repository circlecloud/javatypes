declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that the application has attempted to convert
         * a string to one of the numeric types, but that the string does not
         * have the appropriate format.
         * @author unascribed
         * @see java.lang.Integer#parseInt(String)
         * @since JDK1.0
         */
        // @ts-ignore
        class NumberFormatException extends java.lang.IllegalArgumentException {
            /**
             * Constructs a <code>NumberFormatException</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>NumberFormatException</code> with the
             * specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
