declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * An exception thrown if the connection is an auto recover connection that is not
                     * currently open and is in the process of being recovered.
                     * <p>
                     * Spring AMQP has had its own recovery logic since day one. The amqp-client library now
                     * supports automatic connection and topology recovery; and, since 4.0.0, it is enabled by
                     * default. While Spring AMQP is compatible with the client recovery logic, it's generally
                     * not necessary to use it; in fact, you may recover faster when relying on Spring AMQP's
                     * recovery, especially on the producer side, when a
                     * {@link org.springframework.amqp.rabbit.core.RabbitTemplate} has a
                     * {@link org.springframework.retry.support.RetryTemplate}.
                     * <p>
                     * If you get this exception, consider disabling the client auto recovery. Spring AMQP
                     * disables it by default, unless you configure the underlying rabbit connection factory
                     * yourself.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    class AutoRecoverConnectionNotCurrentlyOpenException extends AmqpException {
                    }
                }
            }
        }
    }
}
