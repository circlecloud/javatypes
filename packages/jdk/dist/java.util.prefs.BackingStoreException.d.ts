declare namespace java {
    namespace util {
        namespace prefs {
            /**
             * Thrown to indicate that a preferences operation could not complete because
             * of a failure in the backing store, or a failure to contact the backing
             * store.
             * @author Josh Bloch
             * @since 1.4
             */
            // @ts-ignore
            class BackingStoreException extends java.lang.Exception {
                /**
                 * Constructs a BackingStoreException with the specified detail message.
                 * @param s the detail message.
                 */
                // @ts-ignore
                constructor(s: string)
                /**
                 * Constructs a BackingStoreException with the specified cause.
                 * @param cause the cause
                 */
                // @ts-ignore
                constructor(cause: Error)
            }
        }
    }
}
