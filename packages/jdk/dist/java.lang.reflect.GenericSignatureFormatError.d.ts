declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * Thrown when a syntactically malformed signature attribute is
             * encountered by a reflective method that needs to interpret the
             * generic signature information for a type, method or constructor.
             * @since 1.5
             */
            // @ts-ignore
            class GenericSignatureFormatError extends java.lang.ClassFormatError {
                /**
                 * Constructs a new {@code GenericSignatureFormatError}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new {@code GenericSignatureFormatError} with the
                 * specified message.
                 * @param message the detail message, may be {#code null}
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}
