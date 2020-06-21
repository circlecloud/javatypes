declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace api {
                        /**
                         * An error handler which is called when a {code @RabbitListener} method
                         * throws an exception. This is invoked higher up the stack than the
                         * listener container's error handler.
                         * @author Gary Russell
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface RabbitListenerErrorHandler {
                            /**
                             * Handle the error. If an exception is not thrown, the return value is returned to
                             * the sender using normal {@code replyTo/@SendTo} semantics.
                             * @param amqpMessage the raw message received.
                             * @param message the converted spring-messaging message.
                             * @param exception the exception the listener threw, wrapped in a
                             *  {#link ListenerExecutionFailedException}.
                             * @return the return value to be sent to the sender.
                             * @throws Exception an exception which may be the original or different.
                             */
                            // @ts-ignore
                            handleError(amqpMessage: Message, message: object, exception: org.springframework.amqp.rabbit.listener.exception.ListenerExecutionFailedException): any
                        }
                    }
                }
            }
        }
    }
}
