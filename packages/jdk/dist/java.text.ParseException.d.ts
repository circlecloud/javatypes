declare namespace java {
    namespace text {
        /**
         * Signals that an error has been reached unexpectedly
         * while parsing.
         * @see java.lang.Exception
         * @see java.text.Format
         * @see java.text.FieldPosition
         * @author Mark Davis
         */
        // @ts-ignore
        class ParseException extends java.lang.Exception {
            /**
             * Constructs a ParseException with the specified detail message and
             * offset.
             * A detail message is a String that describes this particular exception.
             * @param s the detail message
             * @param errorOffset the position where the error is found while parsing.
             */
            // @ts-ignore
            constructor(s: string, errorOffset: number /*int*/)
            /**
             * Returns the position where the error was found.
             * @return the position where the error was found
             */
            // @ts-ignore
            getErrorOffset(): int
        }
    }
}
