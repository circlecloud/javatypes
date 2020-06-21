declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                /**
                 * Exception thrown when multipart resolution fails.
                 * @author Trevor D. Cook
                 * @author Juergen Hoeller
                 * @since 29.09.2003
                 * @see MultipartResolver#resolveMultipart
                 * @see org.springframework.web.multipart.support.MultipartFilter
                 */
                // @ts-ignore
                class MultipartException extends NestedRuntimeException {
                    /**
                     * Constructor for MultipartException.
                     * @param msg the detail message
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                    /**
                     * Constructor for MultipartException.
                     * @param msg the detail message
                     * @param cause the root cause from the multipart parsing API in use
                     */
                    // @ts-ignore
                    constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
