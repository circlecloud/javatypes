declare namespace java {
    namespace awt {
        namespace dnd {
            /**
             * This exception is thrown by various methods in the java.awt.dnd package.
             * It is usually thrown to indicate that the target in question is unable
             * to undertake the requested operation that the present time, since the
             * underlying DnD system is not in the appropriate state.
             * @since 1.2
             */
            // @ts-ignore
            class InvalidDnDOperationException extends java.lang.IllegalStateException {
                /**
                 * Create a default Exception
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create an Exception with its own descriptive message
                 * <P>
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
            }
        }
    }
}
