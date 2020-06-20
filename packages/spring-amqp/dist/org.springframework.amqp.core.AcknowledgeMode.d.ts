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
                    // @ts-ignore
                    values(): org.springframework.amqp.core.AcknowledgeMode[]
                    // @ts-ignore
                    valueOf(name: string): org.springframework.amqp.core.AcknowledgeMode
                    /**
                     * Return if transactions are allowed - if the mode is {@link #AUTO} or
                     * {@link #MANUAL}.
                     * @return true if transactions are allowed.
                     */
                    // @ts-ignore
                    isTransactionAllowed(): boolean
                    /**
                     * Return if the mode is {@link #NONE} (which is called {@code autoAck}
                     * in RabbitMQ).
                     * @return true if the mode is {#link #NONE}.
                     */
                    // @ts-ignore
                    isAutoAck(): boolean
                    /**
                     * Return true if the mode is {@link #MANUAL}.
                     * @return true if manual.
                     */
                    // @ts-ignore
                    isManual(): boolean
                }
            }
        }
    }
}
