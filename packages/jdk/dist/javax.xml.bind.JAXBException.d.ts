declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * This is the root exception class for all JAXB exceptions.
             * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li></ul>
             * @see JAXBContext
             * @see Marshaller
             * @see Unmarshaller
             * @since JAXB1.0
             */
            // @ts-ignore
            class JAXBException extends java.lang.Exception {
                /**
                 * Construct a JAXBException with the specified detail message.  The
                 * errorCode and linkedException will default to null.
                 * @param message a description of the exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Construct a JAXBException with the specified detail message and vendor
                 * specific errorCode.  The linkedException will default to null.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, errorCode: java.lang.String | string)
                /**
                 * Construct a JAXBException with a linkedException.  The detail message and
                 * vendor specific errorCode will default to null.
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(exception: java.lang.Throwable | Error)
                /**
                 * Construct a JAXBException with the specified detail message and
                 * linkedException.  The errorCode will default to null.
                 * @param message a description of the exception
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, exception: java.lang.Throwable | Error)
                /**
                 * Construct a JAXBException with the specified detail message, vendor
                 * specific errorCode, and linkedException.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, errorCode: java.lang.String | string, exception: java.lang.Throwable | Error)
                /**
                 * Get the vendor specific error code
                 * @return a string specifying the vendor specific error code
                 */
                // @ts-ignore
                getErrorCode(): string
                /**
                 * Get the linked exception
                 * @return the linked Exception, null if none exists
                 */
                // @ts-ignore
                getLinkedException(): Error
                /**
                 * Add a linked Exception.
                 * @param exception the linked Exception (A null value is permitted and
                 *                   indicates that the linked exception does not exist or
                 *                   is unknown).
                 */
                // @ts-ignore
                setLinkedException(exception: java.lang.Throwable | Error): void
                /**
                 * Returns a short description of this JAXBException.
                 */
                // @ts-ignore
                toString(): string
                /**
                 * Prints this JAXBException and its stack trace (including the stack trace
                 * of the linkedException if it is non-null) to the PrintStream.
                 * @param s PrintStream to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintStream): void
                /**
                 * Prints this JAXBException and its stack trace (including the stack trace
                 * of the linkedException if it is non-null) to <tt>System.err</tt>.
                 */
                // @ts-ignore
                printStackTrace(): void
                /**
                 * Prints this JAXBException and its stack trace (including the stack trace
                 * of the linkedException if it is non-null) to the PrintWriter.
                 * @param s PrintWriter to use for output
                 */
                // @ts-ignore
                printStackTrace(s: java.io.PrintWriter): void
                // @ts-ignore
                getCause(): Error
            }
        }
    }
}
