declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * Annotation that marks a method to be the target of a Rabbit message listener on the
                     * specified {@link #queues()} (or {@link #bindings()}). The {@link #containerFactory()}
                     * identifies the
                     * {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory
                     * RabbitListenerContainerFactory} to use to build the rabbit listener container. If not
                     * set, a <em>default</em> container factory is assumed to be available with a bean name
                     * of {@code rabbitListenerContainerFactory} unless an explicit default has been provided
                     * through configuration.
                     * <p>
                     * Processing of {@code @RabbitListener} annotations is performed by registering a
                     * {@link RabbitListenerAnnotationBeanPostProcessor}. This can be done manually or, more
                     * conveniently, through the {@code <rabbit:annotation-driven/>} element or
                     * {@link EnableRabbit} annotation.
                     * <p>
                     * Annotated methods are allowed to have flexible signatures similar to what
                     * {@link MessageMapping} provides, that is
                     * <ul>
                     * <li>{@link com.rabbitmq.client.Channel} to get access to the Channel</li>
                     * <li>{@link org.springframework.amqp.core.Message} or one if subclass to get access to
                     * the raw AMQP message</li>
                     * <li>{@link org.springframework.messaging.Message} to use the messaging abstraction
                     * counterpart</li>
                     * <li>{@link org.springframework.messaging.handler.annotation.Payload @Payload}-annotated
                     * method arguments including the support of validation</li>
                     * <li>{@link org.springframework.messaging.handler.annotation.Header @Header}-annotated
                     * method arguments to extract a specific header value, including standard AMQP headers
                     * defined by {@link org.springframework.amqp.support.AmqpHeaders AmqpHeaders}</li>
                     * <li>{@link org.springframework.messaging.handler.annotation.Headers @Headers}-annotated
                     * argument that must also be assignable to {@link java.util.Map} for getting access to
                     * all headers.</li>
                     * <li>{@link org.springframework.messaging.MessageHeaders MessageHeaders} arguments for
                     * getting access to all headers.</li>
                     * <li>{@link org.springframework.messaging.support.MessageHeaderAccessor
                     * MessageHeaderAccessor} or
                     * {@link org.springframework.amqp.support.AmqpMessageHeaderAccessor
                     * AmqpMessageHeaderAccessor} for convenient access to all method arguments.</li>
                     * </ul>
                     * <p>
                     * Annotated methods may have a non {@code void} return type. When they do, the result of
                     * the method invocation is sent as a reply to the queue defined by the
                     * {@link org.springframework.amqp.core.MessageProperties#getReplyTo() ReplyTo} header of
                     * the incoming message. When this value is not set, a default queue can be provided by
                     * adding @{@link org.springframework.messaging.handler.annotation.SendTo SendTo} to the
                     * method declaration.
                     * <p>
                     * When {@link #bindings()} are provided, and the application context contains a
                     * {@link org.springframework.amqp.rabbit.core.RabbitAdmin}, the queue, exchange and
                     * binding will be automatically declared.
                     * <p>When defined at the method level, a listener container is created for each method.
                     * The {@link org.springframework.amqp.core.MessageListener} is a
                     * {@link org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter},
                     * configured with a
                     * {@link org.springframework.amqp.rabbit.listener.MethodRabbitListenerEndpoint}.
                     * <p>When defined at the class level, a single message listener container is used to
                     * service all methods annotated with {@code @RabbitHandler}. Method signatures of such
                     * annotated methods must not cause any ambiguity such that a single method can be
                     * resolved for a particular inbound message. The
                     * {@link org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter}
                     * is configured with a
                     * {@link org.springframework.amqp.rabbit.listener.MultiMethodRabbitListenerEndpoint}.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @since 1.4
                     * @see EnableRabbit
                     * @see RabbitListenerAnnotationBeanPostProcessor
                     * @see RabbitListeners
                     */
                    // @ts-ignore
                    abstract class RabbitListener implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
