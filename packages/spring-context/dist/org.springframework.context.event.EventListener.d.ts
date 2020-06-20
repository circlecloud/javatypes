declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Annotation that marks a method as a listener for application events.
                 * <p>If an annotated method supports a single event type, the method may
                 * declare a single parameter that reflects the event type to listen to.
                 * If an annotated method supports multiple event types, this annotation
                 * may refer to one or more supported event types using the {@code classes}
                 * attribute. See the {@link #classes} javadoc for further details.
                 * <p>Events can be {@link ApplicationEvent} instances as well as arbitrary
                 * objects.
                 * <p>Processing of {@code @EventListener} annotations is performed via
                 * the internal {@link EventListenerMethodProcessor} bean which gets
                 * registered automatically when using Java config or manually via the
                 * {@code <context:annotation-config/>} or {@code <context:component-scan/>}
                 * element when using XML config.
                 * <p>Annotated methods may have a non-{@code void} return type. When they
                 * do, the result of the method invocation is sent as a new event. If the
                 * return type is either an array or a collection, each element is sent
                 * as a new individual event.
                 * <p>This annotation may be used as a <em>meta-annotation</em> to create custom
                 * <em>composed annotations</em>.
                 * <h3>Exception Handling</h3>
                 * <p>While it is possible for an event listener to declare that it
                 * throws arbitrary exception types, any checked exceptions thrown
                 * from an event listener will be wrapped in an
                 * {@link java.lang.reflect.UndeclaredThrowableException UndeclaredThrowableException}
                 * since the event publisher can only handle runtime exceptions.
                 * <h3>Asynchronous Listeners</h3>
                 * <p>If you want a particular listener to process events asynchronously, you
                 * can use Spring's {@link org.springframework.scheduling.annotation.Async @Async}
                 * support, but be aware of the following limitations when using asynchronous events.
                 * <ul>
                 * <li>If an asynchronous event listener throws an exception, it is not propagated
                 * to the caller. See {@link org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler
                 * AsyncUncaughtExceptionHandler} for more details.</li>
                 * <li>Asynchronous event listener methods cannot publish a subsequent event by returning a
                 * value. If you need to publish another event as the result of the processing, inject an
                 * {@link org.springframework.context.ApplicationEventPublisher ApplicationEventPublisher}
                 * to publish the event manually.</li>
                 * </ul>
                 * <h3>Ordering Listeners</h3>
                 * <p>It is also possible to define the order in which listeners for a
                 * certain event are to be invoked. To do so, add Spring's common
                 * {@link org.springframework.core.annotation.Order @Order} annotation
                 * alongside this event listener annotation.
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 4.2
                 * @see EventListenerMethodProcessor
                 */
                // @ts-ignore
                class EventListener implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
