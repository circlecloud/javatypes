declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * Configuration interface for executing HTTP invoker requests.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see HttpInvokerRequestExecutor
                 * @see HttpInvokerClientInterceptor
                 */
                // @ts-ignore
                interface HttpInvokerClientConfiguration {
                    /**
                     * Return the HTTP URL of the target service.
                     */
                    // @ts-ignore
                    getServiceUrl(): string
                    /**
                     * Return the codebase URL to download classes from if not found locally.
                     * Can consist of multiple URLs, separated by spaces.
                     * @return the codebase URL, or {#code null} if none
                     * @see java.rmi.server.RMIClassLoader
                     */
                    // @ts-ignore
                    getCodebaseUrl(): string
                }
            }
        }
    }
}
