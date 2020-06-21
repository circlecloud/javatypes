declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * Unchecked exception thrown when no support is available
             * for a requested charset.
             * @since 1.4
             */
            // @ts-ignore
            class UnsupportedCharsetException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs an instance of this class.
                 * @param charsetName
                 *          The name of the unsupported charset
                 */
                // @ts-ignore
                constructor(charsetName: java.lang.String | string)
                /**
                 * Retrieves the name of the unsupported charset.
                 * @return The name of the unsupported charset
                 */
                // @ts-ignore
                getCharsetName(): string
            }
        }
    }
}
