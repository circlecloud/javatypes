declare namespace javax {
    namespace xml {
        namespace transform {
            /**
             * Indicates a serious configuration error.
             */
            // @ts-ignore
            class TransformerConfigurationException extends javax.xml.transform.TransformerException {
                /**
                 * Create a new <code>TransformerConfigurationException</code> with no
                 * detail mesage.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new <code>TransformerConfigurationException</code> with
                 * the <code>String </code> specified as an error message.
                 * @param msg The error message for the exception.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string)
                /**
                 * Create a new <code>TransformerConfigurationException</code> with a
                 * given <code>Exception</code> base cause of the error.
                 * @param e The exception to be encapsulated in a
                 *  TransformerConfigurationException.
                 */
                // @ts-ignore
                constructor(e: java.lang.Throwable | Error)
                /**
                 * Create a new <code>TransformerConfigurationException</code> with the
                 * given <code>Exception</code> base cause and detail message.
                 * @param e The exception to be encapsulated in a
                 *       TransformerConfigurationException
                 * @param msg The detail message.
                 */
                // @ts-ignore
                constructor(msg: java.lang.String | string, e: java.lang.Throwable | Error)
                /**
                 * Create a new TransformerConfigurationException from a message and a Locator.
                 * <p>This constructor is especially useful when an application is
                 * creating its own exception from within a DocumentHandler
                 * callback.</p>
                 * @param message The error or warning message.
                 * @param locator The locator object for the error or warning.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, locator: javax.xml.transform.SourceLocator)
                /**
                 * Wrap an existing exception in a TransformerConfigurationException.
                 * @param message The error or warning message, or null to
                 *                 use the message from the embedded exception.
                 * @param locator The locator object for the error or warning.
                 * @param e Any exception.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, locator: javax.xml.transform.SourceLocator, e: java.lang.Throwable | Error)
            }
        }
    }
}
