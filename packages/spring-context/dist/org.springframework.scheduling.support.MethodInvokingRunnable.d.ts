declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace support {
                /**
                 * Adapter that implements the {@link Runnable} interface as a configurable
                 * method invocation based on Spring's MethodInvoker.
                 * <p>Inherits common configuration properties from
                 * {@link org.springframework.util.MethodInvoker}.
                 * @author Juergen Hoeller
                 * @since 1.2.4
                 * @see java.util.concurrent.Executor#execute(Runnable)
                 */
                // @ts-ignore
                class MethodInvokingRunnable extends ArgumentConvertingMethodInvoker implements java.lang.Runnable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    // @ts-ignore
                    resolveClassName(className: java.lang.String | string): java.lang.Class<any>
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public run(): void
                    /**
                     * Build a message for an invocation failure exception.
                     * @return the error message, including the target method name etc
                     */
                    // @ts-ignore
                    getInvocationFailureMessage(): string
                }
            }
        }
    }
}
