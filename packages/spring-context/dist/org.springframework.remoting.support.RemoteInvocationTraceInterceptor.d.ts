declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * AOP Alliance MethodInterceptor for tracing remote invocations.
                 * Automatically applied by RemoteExporter and its subclasses.
                 * <p>Logs an incoming remote call as well as the finished processing of a remote call
                 * at DEBUG level. If the processing of a remote call results in a checked exception,
                 * the exception will get logged at INFO level; if it results in an unchecked
                 * exception (or error), the exception will get logged at WARN level.
                 * <p>The logging of exceptions is particularly useful to save the stacktrace
                 * information on the server-side rather than just propagating the exception
                 * to the client (who might or might not log it properly).
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see RemoteExporter#setRegisterTraceInterceptor
                 * @see RemoteExporter#getProxyForService
                 */
                // @ts-ignore
                class RemoteInvocationTraceInterceptor extends java.lang.Object {
                    /**
                     * Create a new RemoteInvocationTraceInterceptor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new RemoteInvocationTraceInterceptor.
                     * @param exporterName the name of the remote exporter
                     *  (to be used as context information in log messages)
                     */
                    // @ts-ignore
                    constructor(exporterName: string)
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                }
            }
        }
    }
}
