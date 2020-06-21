declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * This runtime exception is thrown to indicate that the <i>open type</i> of an <i>open data</i> value
             * is not the one expected.
             * @since 1.5
             */
            // @ts-ignore
            class InvalidOpenTypeException extends java.lang.IllegalArgumentException {
                /**
                 * An InvalidOpenTypeException with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * An InvalidOpenTypeException with a detail message.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
            }
        }
    }
}
