declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Thrown when the command parser hits an unexpected frame type.
             */
            // @ts-ignore
            class UnexpectedFrameError extends java.lang.RuntimeException {
                // @ts-ignore
                constructor(frame: com.rabbitmq.client.impl.Frame, expectedFrameType: number /*int*/)
                // @ts-ignore
                getSerialVersionUID(): number /*long*/
                // @ts-ignore
                getReceivedFrame(): com.rabbitmq.client.impl.Frame
                // @ts-ignore
                getExpectedFrameType(): number /*int*/
            }
        }
    }
}
