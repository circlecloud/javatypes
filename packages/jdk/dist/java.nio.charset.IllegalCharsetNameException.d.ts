declare namespace java {
    namespace nio {
        namespace charset {
            /**
             * Unchecked exception thrown when a string that is not a
             * <a href=Charset.html#names>legal charset name</a> is used as such.
             * @since 1.4
             */
            // @ts-ignore
            class IllegalCharsetNameException extends java.lang.IllegalArgumentException {
                /**
                 * Constructs an instance of this class.
                 * @param charsetName
                 *          The illegal charset name
                 */
                // @ts-ignore
                constructor(charsetName: string)
                /**
                 * Retrieves the illegal charset name.
                 * @return The illegal charset name
                 */
                // @ts-ignore
                getCharsetName(): java.lang.String
            }
        }
    }
}
