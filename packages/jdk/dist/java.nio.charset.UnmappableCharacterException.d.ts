declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * Checked exception thrown when an input character (or byte) sequence
             * is valid but cannot be mapped to an output byte (or character)
             * sequence.
             * @since 1.4
             */
            // @ts-ignore
            class UnmappableCharacterException extends java.nio.charset.CharacterCodingException {
                /**
                 * Constructs an {@code UnmappableCharacterException} with the
                 * given length.
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
