declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * Container annotation that aggregates several {@link RabbitListener} annotations.
                     * <p>
                     * Can be used natively, declaring several nested {@link RabbitListener} annotations.
                     * Can also be used in conjunction with Java 8's support for repeatable annotations,
                     * where {@link RabbitListener} can simply be declared several times on the same method
                     * (or class), implicitly generating this container annotation.
                     * @author Gary Russell
                     * @since 1.6
                     * @see RabbitListener
                     */
                    // @ts-ignore
                    abstract class RabbitListeners implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
