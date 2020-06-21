declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Public interface to objects representing an AMQP 0-9-1 method
             * @see https://www.rabbitmq.com/specification.html.
             */
            // @ts-ignore
            interface Method {
                /**
                 * Retrieve the protocol class ID
                 * @return the AMQP protocol class ID of this Method
                 */
                // @ts-ignore
                protocolClassId(): number /*int*/
                /**
                 * Retrieve the protocol method ID
                 * @return the AMQP protocol method ID of this Method
                 */
                // @ts-ignore
                protocolMethodId(): number /*int*/
                /**
                 * Retrieve the method name
                 * @return the AMQP protocol method name of this Method
                 */
                // @ts-ignore
                protocolMethodName(): string
            }
        }
    }
}
