declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * This exception indicates that an error has occurred while performing
             * a validate operation.
             * <p>
             * The <tt>ValidationEventHandler</tt> can cause this exception to be thrown
             * during the validate operations.  See
             * {@link ValidationEventHandler#handleEvent(ValidationEvent)
             * ValidationEventHandler.handleEvent(ValidationEvent)}.
             * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li></ul>
             * @see JAXBException
             * @see Validator
             * @since JAXB1.0
             */
            // @ts-ignore
            class ValidationException extends javax.xml.bind.JAXBException {
                /**
                 * Construct an ValidationException with the specified detail message.  The
                 * errorCode and linkedException will default to null.
                 * @param message a description of the exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Construct an ValidationException with the specified detail message and vendor
                 * specific errorCode.  The linkedException will default to null.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, errorCode: java.lang.String | string)
                /**
                 * Construct an ValidationException with a linkedException.  The detail message and
                 * vendor specific errorCode will default to null.
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(exception: java.lang.Throwable | Error)
                /**
                 * Construct an ValidationException with the specified detail message and
                 * linkedException.  The errorCode will default to null.
                 * @param message a description of the exception
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, exception: java.lang.Throwable | Error)
                /**
                 * Construct an ValidationException with the specified detail message, vendor
                 * specific errorCode, and linkedException.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, errorCode: java.lang.String | string, exception: java.lang.Throwable | Error)
            }
        }
    }
}
