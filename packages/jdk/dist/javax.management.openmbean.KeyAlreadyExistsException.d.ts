declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * This runtime exception is thrown to indicate that the index of a row to be added to a <i>tabular data</i> instance
             * is already used to refer to another row in this <i>tabular data</i> instance.
             * @since 1.5
             */
            // @ts-ignore
            class KeyAlreadyExistsException extends java.lang.IllegalArgumentException {
                /**
                 * A KeyAlreadyExistsException with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * A KeyAlreadyExistsException with a detail message.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
