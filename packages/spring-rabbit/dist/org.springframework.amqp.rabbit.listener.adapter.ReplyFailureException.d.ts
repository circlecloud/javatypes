declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * Exception to be thrown when the reply of a message failed to be sent.
                         * @author Stephane Nicoll
                         * @since 1.4
                         */
                        // @ts-ignore
                        class ReplyFailureException extends AmqpException {
                            // @ts-ignore
                            constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                        }
                    }
                }
            }
        }
    }
}
