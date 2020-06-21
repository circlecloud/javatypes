declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * This runtime exception is thrown to indicate that a method parameter which was expected to be
             * an item name of a <i>composite data</i> or a row index of a <i>tabular data</i> is not valid.
             * @since 1.5
             */
            // @ts-ignore
            class InvalidKeyException extends java.lang.IllegalArgumentException {
                /**
                 * An InvalidKeyException with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * An InvalidKeyException with a detail message.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
            }
        }
    }
}
