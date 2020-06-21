declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Indicates that a {@link Method} object was supplied that was not
             * expected. For instance, {@link Channel#basicGet} throws this if it
             * receives anything other than {@link AMQP.Basic.GetOk} or
             * {@link AMQP.Basic.GetEmpty}, and the
             * {@link com.rabbitmq.client.impl.AMQImpl.DefaultMethodVisitor DefaultMethodVisitor}
             * throws this as the action within each visitor case.
             */
            // @ts-ignore
            class UnexpectedMethodError extends java.lang.RuntimeException {
                /**
                 * Construct an UnexpectedMethodError with the given method parameter
                 * @param method the unexpected method
                 */
                // @ts-ignore
                constructor(method: com.rabbitmq.client.Method)
                /**
                 * Return a string representation of this error.
                 * @return a string describing the error
                 */
                // @ts-ignore
                toString(): string
                /**
                 * Return the wrapped method.
                 * @return the method whose appearance was "unexpected" and was deemed an error
                 */
                // @ts-ignore
                getMethod(): com.rabbitmq.client.Method
            }
        }
    }
}
