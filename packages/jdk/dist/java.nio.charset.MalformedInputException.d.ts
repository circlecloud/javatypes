declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * Checked exception thrown when an input byte sequence is not legal for given
             * charset, or an input character sequence is not a legal sixteen-bit Unicode
             * sequence.
             * @since 1.4
             */
            // @ts-ignore
            class MalformedInputException extends java.nio.charset.CharacterCodingException {
                /**
                 * Constructs an {@code MalformedInputException} with the given
                 * length.
                 * @param inputLength the length of the input
                 */
                // @ts-ignore
                constructor(inputLength: number /*int*/)
                /**
                 * Returns the length of the input.
                 * @return the length of the input
                 */
                // @ts-ignore
                getInputLength(): int
                /**
                 * Returns the message.
                 * @return the message
                 */
                // @ts-ignore
                getMessage(): java.lang.String
            }
        }
    }
}
