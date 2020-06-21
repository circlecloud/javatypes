declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * Runnable wrapper that catches any exception or error thrown from its
                 * delegate Runnable and allows an {@link ErrorHandler} to handle it.
                 * @author Juergen Hoeller
                 * @author Mark Fisher
                 * @since 3.0
                 */
                // @ts-ignore
                class DelegatingErrorHandlingRunnable extends java.lang.Object implements java.lang.Runnable {
                    /**
                     * Create a new DelegatingErrorHandlingRunnable.
                     * @param delegate the Runnable implementation to delegate to
                     * @param errorHandler the ErrorHandler for handling any exceptions
                     */
                    // @ts-ignore
                    constructor(delegate: java.lang.Runnable, errorHandler: ErrorHandler)
                    // @ts-ignore
                    public run(): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
