declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Acknowledgment modes supported by the listener container.
                 * @author Dave Syer
                 * @author Gary Russell
                 */
                // @ts-ignore
                class AcknowledgeMode extends java.lang.Enum<org.springframework.amqp.core.AcknowledgeMode> {
                    /**
                     * No acks - {@code autoAck=true} in {@code Channel.basicConsume()}.
                     */
                    // @ts-ignore
                    public static readonly NONE: org.springframework.amqp.core.AcknowledgeMode
                    /**
                     * Manual acks - user must ack/nack via a channel aware listener.
                     */
                    // @ts-ignore
                    public static readonly MANUAL: org.springframework.amqp.core.AcknowledgeMode
                    /**
                     * Auto - the container will issue the ack/nack based on whether
                     * the listener returns normally, or throws an exception.
                     * <p><em>Do not confuse with RabbitMQ {@code autoAck} which is
                     * represented by {@link #NONE} here</em>.
                     */
                    // @ts-ignore
                    public static readonly AUTO: org.springframework.amqp.core.AcknowledgeMode
                    // @ts-ignore
                    public static values(): org.springframework.amqp.core.AcknowledgeMode[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.springframework.amqp.core.AcknowledgeMode
                    /**
                     * Return if transactions are allowed - if the mode is {@link #AUTO} or
                     * {@link #MANUAL}.
                     * @return true if transactions are allowed.
                     */
                    // @ts-ignore
                    public isTransactionAllowed(): boolean
                    /**
                     * Return if the mode is {@link #NONE} (which is called {@code autoAck}
                     * in RabbitMQ).
                     * @return true if the mode is {#link #NONE}.
                     */
                    // @ts-ignore
                    public isAutoAck(): boolean
                    /**
                     * Return true if the mode is {@link #MANUAL}.
                     * @return true if manual.
                     */
                    // @ts-ignore
                    public isManual(): boolean
                }
            }
        }
    }
}
