declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Thrown to indicate that the requested operation cannot be performed
             * because the set is unmodifiable.
             * @author Phil Race
             * @since 1.4
             */
            // @ts-ignore
            class UnmodifiableSetException extends java.lang.RuntimeException {
                /**
                 * Constructs an UnsupportedOperationException with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an UnmodifiableSetException with the specified
                 * detail message.
                 * @param message the detail message
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
