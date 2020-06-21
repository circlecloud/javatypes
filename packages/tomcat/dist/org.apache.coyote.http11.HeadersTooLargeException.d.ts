declare namespace org {
    namespace apache {
        namespace coyote {
            namespace http11 {
                /**
                 * Exception used to mark the specific error condition of the HTTP headers
                 * exceeding the maximum permitted size.
                 */
                // @ts-ignore
                class HeadersTooLargeException extends java.lang.IllegalStateException {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                    // @ts-ignore
                    constructor(s: java.lang.String | string)
                    // @ts-ignore
                    constructor(cause: java.lang.Throwable | Error)
                }
            }
        }
    }
}
