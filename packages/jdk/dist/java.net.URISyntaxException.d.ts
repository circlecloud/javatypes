declare namespace java {
    namespace net {
        /**
         * Checked exception thrown to indicate that a string could not be parsed as a
         * URI reference.
         * @author Mark Reinhold
         * @see URI
         * @since 1.4
         */
        // @ts-ignore
        class URISyntaxException extends java.lang.Exception {
            /**
             * Constructs an instance from the given input string, reason, and error
             * index.
             * @param input   The input string
             * @param reason  A string explaining why the input could not be parsed
             * @param index   The index at which the parse error occurred,
             *                  or {#code -1} if the index is not known
             * @throws NullPointerException
             *           If either the input or reason strings are {#code null}
             * @throws IllegalArgumentException
             *           If the error index is less than {#code -1}
             */
            // @ts-ignore
            constructor(input: string, reason: string, index: number /*int*/)
            /**
             * Constructs an instance from the given input string and reason.  The
             * resulting object will have an error index of {@code -1}.
             * @param input   The input string
             * @param reason  A string explaining why the input could not be parsed
             * @throws NullPointerException
             *           If either the input or reason strings are {#code null}
             */
            // @ts-ignore
            constructor(input: string, reason: string)
            /**
             * Returns the input string.
             * @return The input string
             */
            // @ts-ignore
            getInput(): java.lang.String
            /**
             * Returns a string explaining why the input string could not be parsed.
             * @return The reason string
             */
            // @ts-ignore
            getReason(): java.lang.String
            /**
             * Returns an index into the input string of the position at which the
             * parse error occurred, or {@code -1} if this position is not known.
             * @return The error index
             */
            // @ts-ignore
            getIndex(): int
            /**
             * Returns a string describing the parse error.  The resulting string
             * consists of the reason string followed by a colon character
             * ({@code ':'}), a space, and the input string.  If the error index is
             * defined then the string {@code " at index "} followed by the index, in
             * decimal, is inserted after the reason string and before the colon
             * character.
             * @return A string describing the parse error
             */
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
