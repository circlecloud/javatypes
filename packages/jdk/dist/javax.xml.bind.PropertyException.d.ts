declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * This exception indicates that an error was encountered while getting or
             * setting a property.
             * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Joe Fialli, Sun Microsystems, Inc.</li></ul>
             * @see JAXBContext
             * @see Validator
             * @see Unmarshaller
             * @since JAXB1.0
             */
            // @ts-ignore
            class PropertyException extends javax.xml.bind.JAXBException {
                /**
                 * Construct a PropertyException with the specified detail message.  The
                 * errorCode and linkedException will default to null.
                 * @param message a description of the exception
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * Construct a PropertyException with the specified detail message and
                 * vendor specific errorCode.  The linkedException will default to null.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 */
                // @ts-ignore
                constructor(message: string, errorCode: string)
                /**
                 * Construct a PropertyException with a linkedException.  The detail
                 * message and vendor specific errorCode will default to null.
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(exception: Error)
                /**
                 * Construct a PropertyException with the specified detail message and
                 * linkedException.  The errorCode will default to null.
                 * @param message a description of the exception
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: string, exception: Error)
                /**
                 * Construct a PropertyException with the specified detail message, vendor
                 * specific errorCode, and linkedException.
                 * @param message a description of the exception
                 * @param errorCode a string specifying the vendor specific error code
                 * @param exception the linked exception
                 */
                // @ts-ignore
                constructor(message: string, errorCode: string, exception: Error)
                /**
                 * Construct a PropertyException whose message field is set based on the
                 * name of the property and value.toString().
                 * @param name the name of the property related to this exception
                 * @param value the value of the property related to this exception
                 */
                // @ts-ignore
                constructor(name: string, value: any)
            }
        }
    }
}
