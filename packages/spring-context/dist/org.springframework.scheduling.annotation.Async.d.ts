declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Annotation that marks a method as a candidate for <i>asynchronous</i> execution.
                 * Can also be used at the type level, in which case all of the type's methods are
                 * considered as asynchronous. Note, however, that {@code @Async} is not supported
                 * on methods declared within a
                 * {@link org.springframework.context.annotation.Configuration @Configuration} class.
                 * <p>In terms of target method signatures, any parameter types are supported.
                 * However, the return type is constrained to either {@code void} or
                 * {@link java.util.concurrent.Future}. In the latter case, you may declare the
                 * more specific {@link org.springframework.util.concurrent.ListenableFuture} or
                 * {@link java.util.concurrent.CompletableFuture} types which allow for richer
                 * interaction with the asynchronous task and for immediate composition with
                 * further processing steps.
                 * <p>A {@code Future} handle returned from the proxy will be an actual asynchronous
                 * {@code Future} that can be used to track the result of the asynchronous method
                 * execution. However, since the target method needs to implement the same signature,
                 * it will have to return a temporary {@code Future} handle that just passes a value
                 * through: e.g. Spring's {@link AsyncResult}, EJB 3.1's {@link javax.ejb.AsyncResult},
                 * or {@link java.util.concurrent.CompletableFuture#completedFuture(Object)}.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 3.0
                 * @see AnnotationAsyncExecutionInterceptor
                 * @see AsyncAnnotationAdvisor
                 */
                // @ts-ignore
                class Async implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
