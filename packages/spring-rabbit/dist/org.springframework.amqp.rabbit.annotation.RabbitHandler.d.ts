declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * Annotation that marks a method to be the target of a Rabbit message
                     * listener within a class that is annotated with {@link RabbitListener}.
                     * <p>See the {@link RabbitListener} for information about permitted method signatures
                     * and available parameters.
                     * <p><b>It is important to understand that when a message arrives, the method selection
                     * depends on the payload type. The type is matched with a single non-annotated parameter,
                     * or one that is annotated with {@code @Payload}.
                     * There must be no ambiguity - the system
                     * must be able to select exactly one method based on the payload type.</b>
                     * @author Gary Russell
                     * @since 1.5
                     * @see EnableRabbit
                     * @see RabbitListener
                     * @see RabbitListenerAnnotationBeanPostProcessor
                     */
                    // @ts-ignore
                    abstract class RabbitHandler implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
