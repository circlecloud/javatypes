declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Exception for an {@link HttpStatus#INTERNAL_SERVER_ERROR} that exposes extra
                 * information about a controller method that failed, or a controller method
                 * argument that could not be resolved.
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ServerErrorException extends org.springframework.web.server.ResponseStatusException {
                    /**
                     * Constructor for a 500 error with a reason and an optional cause.
                     * @since 5.0.5
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string, cause: java.lang.Throwable | Error)
                    /**
                     * Constructor for a 500 error with a handler {@link Method} and an optional cause.
                     * @since 5.0.5
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string, handlerMethod: java.lang.reflect.Method, cause: java.lang.Throwable | Error)
                    /**
                     * Constructor for a 500 error with a {@link MethodParameter} and an optional cause.
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string, parameter: MethodParameter, cause: java.lang.Throwable | Error)
                    /**
                     * Constructor for a 500 error linked to a specific {@code MethodParameter}.
                     * @deprecated in favor of {#link #ServerErrorException(String, MethodParameter, Throwable)}
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string, parameter: MethodParameter)
                    /**
                     * Constructor for a 500 error with a reason only.
                     * @deprecated in favor of {#link #ServerErrorException(String, Throwable)}
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string)
                    /**
                     * Return the handler method associated with the error, if any.
                     * @since 5.0.5
                     */
                    // @ts-ignore
                    public getHandlerMethod(): java.lang.reflect.Method
                    /**
                     * Return the specific method parameter associated with the error, if any.
                     */
                    // @ts-ignore
                    public getMethodParameter(): MethodParameter
                }
            }
        }
    }
}
