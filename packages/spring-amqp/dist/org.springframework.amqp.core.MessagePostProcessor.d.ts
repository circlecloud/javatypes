declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Used in several places in the framework, such as
                 * {@code AmqpTemplate#convertAndSend(Object, MessagePostProcessor)} where it can be used
                 * to add/modify headers or properties after the message conversion has been performed. It
                 * also can be used to modify inbound messages when receiving messages in listener
                 * containers and {@code AmqpTemplate}s.
                 * <p>
                 * It is a {@link FunctionalInterface} and is often used as a lambda:
                 * <pre class="code">
                 * amqpTemplate.convertAndSend(routingKey, m -&gt; {
                 * m.getMessageProperties().setDeliveryMode(DeliveryMode.NON_PERSISTENT);
                 * return m;
                 * });
                 * </pre>
                 * @author Mark Pollack
                 * @author Gary Russell
                 */
                // @ts-ignore
                interface MessagePostProcessor {
                    /**
                     * Change (or replace) the message.
                     * @param message the message.
                     * @return the message.
                     * @throws AmqpException an exception.
                     */
                    // @ts-ignore
                    postProcessMessage(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                    /**
                     * Change (or replace) the message and/or change its correlation data.
                     * @param message the message.
                     * @param correlation the correlation data.
                     * @return the message.
                     * @since 1.6.7
                     */
                    // @ts-ignore
                    postProcessMessage(message: org.springframework.amqp.core.Message, correlation: org.springframework.amqp.core.Correlation): org.springframework.amqp.core.Message
                }
            }
        }
    }
}
