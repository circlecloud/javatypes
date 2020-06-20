declare namespace org {
    namespace springframework {
        namespace ejb {
            namespace access {
                /**
                 * Exception that gets thrown when an EJB stub cannot be accessed properly.
                 * @author Juergen Hoeller
                 * @since 2.0
                 */
                // @ts-ignore
                class EjbAccessException extends NestedRuntimeException {
                    /**
                     * Constructor for EjbAccessException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: string)
                    /**
                     * Constructor for EjbAccessException.
                     * @param msg the detail message
                     * @param cause the root cause
                     */
                    // @ts-ignore
                    constructor(msg: string, cause: Error)
                }
            }
        }
    }
}
