declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                /**
                 * Exception for errors that fit response status 400 (bad request) for use in
                 * Spring Web applications. The exception provides additional fields (e.g.
                 * an optional {@link MethodParameter} if related to the error).
                 * @author Rossen Stoyanchev
                 * @since 5.0
                 */
                // @ts-ignore
                class ServerWebInputException extends org.springframework.web.server.ResponseStatusException {
                    /**
                     * Constructor with an explanation only.
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string)
                    /**
                     * Constructor for a 400 error linked to a specific {@code MethodParameter}.
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string, parameter: MethodParameter)
                    /**
                     * Constructor for a 400 error with a root cause.
                     */
                    // @ts-ignore
                    constructor(reason: java.lang.String | string, parameter: MethodParameter, cause: java.lang.Throwable | Error)
                    /**
                     * Return the {@code MethodParameter} associated with this error, if any.
                     */
                    // @ts-ignore
                    public getMethodParameter(): MethodParameter
                }
            }
        }
    }
}
