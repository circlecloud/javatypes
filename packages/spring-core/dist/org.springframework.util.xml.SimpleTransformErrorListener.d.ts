declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Simple {@code javax.xml.transform.ErrorListener} implementation:
                 * logs warnings using the given Commons Logging logger instance,
                 * and rethrows errors to discontinue the XML transformation.
                 * @author Juergen Hoeller
                 * @since 1.2
                 */
                // @ts-ignore
                class SimpleTransformErrorListener extends java.lang.Object implements javax.xml.transform.ErrorListener {
                    /**
                     * Create a new SimpleTransformErrorListener for the given
                     * Commons Logging logger instance.
                     */
                    // @ts-ignore
                    constructor(logger: Log)
                    // @ts-ignore
                    warning(ex: javax.xml.transform.TransformerException): void
                    // @ts-ignore
                    error(ex: javax.xml.transform.TransformerException): void
                    // @ts-ignore
                    fatalError(ex: javax.xml.transform.TransformerException): void
                }
            }
        }
    }
}
