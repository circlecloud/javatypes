declare namespace javax {
    namespace management {
        namespace modelmbean {
            /**
             * Exception thrown when an invalid target object type is specified.
             * <p>The <b>serialVersionUID</b> of this class is <code>1190536278266811217L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class InvalidTargetObjectTypeException extends java.lang.Exception {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructor from a string.
                 * @param s String value that will be incorporated in the message for
                 *     this exception.
                 */
                // @ts-ignore
                constructor(s: string)
                /**
                 * Constructor taking an exception and a string.
                 * @param e Exception that we may have caught to reissue as an
                 *     InvalidTargetObjectTypeException.  The message will be used, and we may want to
                 *     consider overriding the printStackTrace() methods to get data
                 *     pointing back to original throw stack.
                 * @param s String value that will be incorporated in message for
                 *     this exception.
                 */
                // @ts-ignore
                constructor(e: java.lang.Exception, s: string)
            }
        }
    }
}
