declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Used when we need to indicate failure but the (Servlet) API doesn't declare
             * any appropriate exceptions.
             */
            // @ts-ignore
            class ProtocolException extends java.lang.RuntimeException {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                // @ts-ignore
                constructor(message: java.lang.String | string)
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
            }
        }
    }
}
