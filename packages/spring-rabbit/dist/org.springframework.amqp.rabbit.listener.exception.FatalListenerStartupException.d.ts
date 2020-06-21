declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace exception {
                        /**
                         * Exception to be thrown when the execution of a listener method failed on startup.
                         * @author Dave Syer
                         * @see org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter
                         */
                        // @ts-ignore
                        class FatalListenerStartupException extends AmqpException {
                            /**
                             * Constructor for ListenerExecutionFailedException.
                             * @param msg the detail message
                             * @param cause the exception thrown by the listener method
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error)
                        }
                    }
                }
            }
        }
    }
}
