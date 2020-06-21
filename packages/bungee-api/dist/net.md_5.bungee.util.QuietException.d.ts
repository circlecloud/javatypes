declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace util {
                /**
                 * Exception without a stack trace component.
                 */
                // @ts-ignore
                class QuietException extends java.lang.RuntimeException {
                    // @ts-ignore
                    constructor(message: java.lang.String | string)
                    // @ts-ignore
                    initCause(cause: java.lang.Throwable | Error): Error
                    // @ts-ignore
                    fillInStackTrace(): Error
                }
            }
        }
    }
}
