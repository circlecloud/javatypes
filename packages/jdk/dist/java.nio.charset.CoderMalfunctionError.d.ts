declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * Error thrown when the {@link CharsetDecoder#decodeLoop decodeLoop} method of
             * a {@link CharsetDecoder}, or the {@link CharsetEncoder#encodeLoop
             * encodeLoop} method of a {@link CharsetEncoder}, throws an unexpected
             * exception.
             * @since 1.4
             */
            // @ts-ignore
            class CoderMalfunctionError extends java.lang.Error {
                /**
                 * Initializes an instance of this class.
                 * @param cause
                 *          The unexpected exception that was thrown
                 */
                // @ts-ignore
                constructor(cause: java.lang.Exception)
            }
        }
    }
}
