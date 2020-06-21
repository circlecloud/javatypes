declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace exception {
                        /**
                         * Exception to be thrown when the execution of a listener method failed.
                         * @author Juergen Hoeller
                         * @author Gary Russell
                         * @see org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter
                         */
                        // @ts-ignore
                        class ListenerExecutionFailedException extends AmqpException {
                            /**
                             * Constructor for ListenerExecutionFailedException.
                             * @param msg the detail message
                             * @param cause the exception thrown by the listener method
                             * @param failedMessage the message that failed
                             */
                            // @ts-ignore
                            constructor(msg: java.lang.String | string, cause: java.lang.Throwable | Error, failedMessage: Message)
                            // @ts-ignore
                            public getFailedMessage(): Message
                        }
                    }
                }
            }
        }
    }
}
