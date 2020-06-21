declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Simple {@code org.xml.sax.ErrorHandler} implementation:
                 * logs warnings using the given Commons Logging logger instance,
                 * and rethrows errors to discontinue the XML transformation.
                 * @author Juergen Hoeller
                 * @since 1.2
                 */
                // @ts-ignore
                class SimpleSaxErrorHandler extends java.lang.Object implements org.xml.sax.ErrorHandler {
                    /**
                     * Create a new SimpleSaxErrorHandler for the given
                     * Commons Logging logger instance.
                     */
                    // @ts-ignore
                    constructor(logger: Log)
                    // @ts-ignore
                    public warning(ex: org.xml.sax.SAXParseException): void
                    // @ts-ignore
                    public error(ex: org.xml.sax.SAXParseException): void
                    // @ts-ignore
                    public fatalError(ex: org.xml.sax.SAXParseException): void
                }
            }
        }
    }
}
