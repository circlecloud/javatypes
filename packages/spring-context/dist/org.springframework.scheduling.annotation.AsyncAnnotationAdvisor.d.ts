declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Advisor that activates asynchronous method execution through the {@link Async}
                 * annotation. This annotation can be used at the method and type level in
                 * implementation classes as well as in service interfaces.
                 * <p>This advisor detects the EJB 3.1 {@code javax.ejb.Asynchronous}
                 * annotation as well, treating it exactly like Spring's own {@code Async}.
                 * Furthermore, a custom async annotation type may get specified through the
                 * {@link #setAsyncAnnotationType "asyncAnnotationType"} property.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see Async
                 * @see AnnotationAsyncExecutionInterceptor
                 */
                // @ts-ignore
                class AsyncAnnotationAdvisor extends AbstractPointcutAdvisor {
                    /**
                     * Create a new {@code AsyncAnnotationAdvisor} for bean-style configuration.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code AsyncAnnotationAdvisor} for the given task executor.
                     * @param executor the task executor to use for asynchronous methods
                     *  (can be {#code null} to trigger default executor resolution)
                     * @param exceptionHandler the {#link AsyncUncaughtExceptionHandler} to use to
                     *  handle unexpected exception thrown by asynchronous method executions
                     * @see AnnotationAsyncExecutionInterceptor#getDefaultExecutor(BeanFactory)
                     */
                    // @ts-ignore
                    constructor(executor: java.util.concurrent.Executor, exceptionHandler: AsyncUncaughtExceptionHandler)
                    /**
                     * Create a new {@code AsyncAnnotationAdvisor} for the given task executor.
                     * @param executor the task executor to use for asynchronous methods
                     *  (can be {#code null} to trigger default executor resolution)
                     * @param exceptionHandler the {#link AsyncUncaughtExceptionHandler} to use to
                     *  handle unexpected exception thrown by asynchronous method executions
                     * @since 5.1
                     * @see AnnotationAsyncExecutionInterceptor#getDefaultExecutor(BeanFactory)
                     */
                    // @ts-ignore
                    constructor(executor: java.util.function.Supplier<java.util.concurrent.Executor> | java.util.function$.Supplier<java.util.concurrent.Executor>, exceptionHandler: java.util.function.Supplier<AsyncUncaughtExceptionHandler> | java.util.function$.Supplier<AsyncUncaughtExceptionHandler>)
                    /**
                     * Set the 'async' annotation type.
                     * <p>The default async annotation type is the {@link Async} annotation, as well
                     * as the EJB 3.1 {@code javax.ejb.Asynchronous} annotation (if present).
                     * <p>This setter property exists so that developers can provide their own
                     * (non-Spring-specific) annotation type to indicate that a method is to
                     * be executed asynchronously.
                     * @param asyncAnnotationType the desired annotation type
                     */
                    // @ts-ignore
                    setAsyncAnnotationType(asyncAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): void
                    /**
                     * Set the {@code BeanFactory} to be used when looking up executors by qualifier.
                     */
                    // @ts-ignore
                    setBeanFactory(beanFactory: BeanFactory): void
                    // @ts-ignore
                    getAdvice(): Advice
                    // @ts-ignore
                    getPointcut(): Pointcut
                    // @ts-ignore
                    buildAdvice(executor: java.util.function.Supplier<java.util.concurrent.Executor> | java.util.function$.Supplier<java.util.concurrent.Executor>, exceptionHandler: java.util.function.Supplier<AsyncUncaughtExceptionHandler> | java.util.function$.Supplier<AsyncUncaughtExceptionHandler>): Advice
                    /**
                     * Calculate a pointcut for the given async annotation types, if any.
                     * @param asyncAnnotationTypes the async annotation types to introspect
                     * @return the applicable Pointcut object, or {#code null} if none
                     */
                    // @ts-ignore
                    buildPointcut(asyncAnnotationTypes: Array<java.lang.Class<java.lang.annotation.Annotation>>): Pointcut
                }
            }
        }
    }
}
