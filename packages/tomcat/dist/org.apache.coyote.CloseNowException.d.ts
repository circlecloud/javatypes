declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * This exception is thrown to signal to the Tomcat internals that an error has
             * occurred that requires the connection to be closed. For multiplexed protocols
             * such as HTTP/2, this means the channel must be closed but the connection can
             * continue. For non-multiplexed protocols, the connection must be closed. It
             * corresponds to {@link ErrorState#CLOSE_NOW}.
             */
            // @ts-ignore
            class CloseNowException extends java.io.IOException {
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
