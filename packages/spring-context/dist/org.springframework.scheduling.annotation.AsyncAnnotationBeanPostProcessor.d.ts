declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Bean post-processor that automatically applies asynchronous invocation
                 * behavior to any bean that carries the {@link Async} annotation at class or
                 * method-level by adding a corresponding {@link AsyncAnnotationAdvisor} to the
                 * exposed proxy (either an existing AOP proxy or a newly generated proxy that
                 * implements all of the target's interfaces).
                 * <p>The {@link TaskExecutor} responsible for the asynchronous execution may
                 * be provided as well as the annotation type that indicates a method should be
                 * invoked asynchronously. If no annotation type is specified, this post-
                 * processor will detect both Spring's {@link Async @Async} annotation as well
                 * as the EJB 3.1 {@code javax.ejb.Asynchronous} annotation.
                 * <p>For methods having a {@code void} return type, any exception thrown
                 * during the asynchronous method invocation cannot be accessed by the
                 * caller. An {@link AsyncUncaughtExceptionHandler} can be specified to handle
                 * these cases.
                 * <p>Note: The underlying async advisor applies before existing advisors by default,
                 * in order to switch to async execution as early as possible in the invocation chain.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @since 3.0
                 * @see Async
                 * @see AsyncAnnotationAdvisor
                 * @see #setBeforeExistingAdvisors
                 * @see ScheduledAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class AsyncAnnotationBeanPostProcessor extends AbstractBeanFactoryAwareAdvisingPostProcessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default name of the {@link TaskExecutor} bean to pick up: "taskExecutor".
                     * <p>Note that the initial lookup happens by type; this is just the fallback
                     * in case of multiple executor beans found in the context.
                     * @since 4.2
                     * @see AnnotationAsyncExecutionInterceptor#DEFAULT_TASK_EXECUTOR_BEAN_NAME
                     */
                    // @ts-ignore
                    readonly DEFAULT_TASK_EXECUTOR_BEAN_NAME: string
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Configure this post-processor with the given executor and exception handler suppliers,
                     * applying the corresponding default if a supplier is not resolvable.
                     * @since 5.1
                     */
                    // @ts-ignore
                    configure(executor: java.util.function.Supplier<java.util.concurrent.Executor> | java.util.function$.Supplier<java.util.concurrent.Executor>, exceptionHandler: java.util.function.Supplier<AsyncUncaughtExceptionHandler> | java.util.function$.Supplier<AsyncUncaughtExceptionHandler>): void
                    /**
                     * Set the {@link Executor} to use when invoking methods asynchronously.
                     * <p>If not specified, default executor resolution will apply: searching for a
                     * unique {@link TaskExecutor} bean in the context, or for an {@link Executor}
                     * bean named "taskExecutor" otherwise. If neither of the two is resolvable,
                     * a local default executor will be created within the interceptor.
                     * @see AnnotationAsyncExecutionInterceptor#getDefaultExecutor(BeanFactory)
                     * @see #DEFAULT_TASK_EXECUTOR_BEAN_NAME
                     */
                    // @ts-ignore
                    setExecutor(executor: java.util.concurrent.Executor): void
                    /**
                     * Set the {@link AsyncUncaughtExceptionHandler} to use to handle uncaught
                     * exceptions thrown by asynchronous method executions.
                     * @since 4.1
                     */
                    // @ts-ignore
                    setExceptionHandler(exceptionHandler: AsyncUncaughtExceptionHandler): void
                    /**
                     * Set the 'async' annotation type to be detected at either class or method
                     * level. By default, both the {@link Async} annotation and the EJB 3.1
                     * {@code javax.ejb.Asynchronous} annotation will be detected.
                     * <p>This setter property exists so that developers can provide their own
                     * (non-Spring-specific) annotation type to indicate that a method (or all
                     * methods of a given class) should be invoked asynchronously.
                     * @param asyncAnnotationType the desired annotation type
                     */
                    // @ts-ignore
                    setAsyncAnnotationType(asyncAnnotationType: java.lang.Class<java.lang.annotation.Annotation>): void
                    // @ts-ignore
                    setBeanFactory(beanFactory: BeanFactory): void
                }
            }
        }
    }
}
