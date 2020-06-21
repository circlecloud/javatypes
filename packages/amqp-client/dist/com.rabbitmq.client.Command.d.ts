declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Interface to a container for an AMQP method-and-arguments, with optional content header and body.
             */
            // @ts-ignore
            interface Command {
                /**
                 * Retrieves the {@link Method} held within this Command. Downcast to
                 * concrete (implementation-specific!) subclasses as necessary.
                 * @return the command's method.
                 */
                // @ts-ignore
                getMethod(): com.rabbitmq.client.Method
                /**
                 * Retrieves the ContentHeader subclass instance held as part of this Command, if any.
                 * Downcast to one of the inner classes of AMQP,
                 * for instance {@link AMQP.BasicProperties}, as appropriate.
                 * @return the Command's {#link ContentHeader}, or null if none
                 */
                // @ts-ignore
                getContentHeader(): com.rabbitmq.client.ContentHeader
                /**
                 * Retrieves the body byte array that travelled as part of this
                 * Command, if any.
                 * @return the Command's content body, or null if none
                 */
                // @ts-ignore
                getContentBody(): number /*byte*/[]
            }
        }
    }
}
