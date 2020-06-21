declare namespace java {
    namespace lang {
        namespace invoke {
            /**
             * WrongMethodTypeException is thrown to indicate an attempt to invoke a MethodHandle with the wrong MethodType.
             * This exception can also be thrown when adapting a MethodHandle in a way that is incompatible with its MethodType.
             * @author OTI
             * @version initial
             * @since 1.7
             */
            // @ts-ignore
            class WrongMethodTypeException extends java.lang.RuntimeException {
                /**
                 * Construct a WrongMethodTypeException.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a WrongMethodTypeException with the supplied message.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}
