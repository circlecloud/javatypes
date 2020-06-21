declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Encapsulates a frame format error at the wire level.
             */
            // @ts-ignore
            class MalformedFrameException extends java.io.IOException {
                /**
                 * Instantiate a MalformedFrameException.
                 * @param reason a string describing the exception
                 */
                // @ts-ignore
                constructor(reason: java.lang.String | string)
            }
        }
    }
}
