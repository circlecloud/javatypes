declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Specialization of {@link AsyncExecutionInterceptor} that delegates method execution to
                 * an {@code Executor} based on the {@link Async} annotation. Specifically designed to
                 * support use of {@link Async#value()} executor qualification mechanism introduced in
                 * Spring 3.1.2. Supports detecting qualifier metadata via {@code @Async} at the method or
                 * declaring class level. See {@link #getExecutorQualifier(Method)} for details.
                 * @author Chris Beams
                 * @author Stephane Nicoll
                 * @since 3.1.2
                 * @see org.springframework.scheduling.annotation.Async
                 * @see org.springframework.scheduling.annotation.AsyncAnnotationAdvisor
                 */
                // @ts-ignore
                class AnnotationAsyncExecutionInterceptor extends AsyncExecutionInterceptor {
                    /**
                     * Create a new {@code AnnotationAsyncExecutionInterceptor} with the given executor
                     * and a simple {@link AsyncUncaughtExceptionHandler}.
                     * @param defaultExecutor the executor to be used by default if no more specific
                     *  executor has been qualified at the method level using {#link Async#value()};
                     *  as of 4.2.6, a local executor for this interceptor will be built otherwise
                     */
                    // @ts-ignore
                    constructor(defaultExecutor: java.util.concurrent.Executor)
                    /**
                     * Create a new {@code AnnotationAsyncExecutionInterceptor} with the given executor.
                     * @param defaultExecutor the executor to be used by default if no more specific
                     *  executor has been qualified at the method level using {#link Async#value()};
                     *  as of 4.2.6, a local executor for this interceptor will be built otherwise
                     * @param exceptionHandler the {#link AsyncUncaughtExceptionHandler} to use to
                     *  handle exceptions thrown by asynchronous method executions with {@code void}
                     *  return type
                     */
                    // @ts-ignore
                    constructor(defaultExecutor: java.util.concurrent.Executor, exceptionHandler: AsyncUncaughtExceptionHandler)
                    /**
                     * Return the qualifier or bean name of the executor to be used when executing the
                     * given method, specified via {@link Async#value} at the method or declaring
                     * class level. If {@code @Async} is specified at both the method and class level, the
                     * method's {@code #value} takes precedence (even if empty string, indicating that
                     * the default executor should be used preferentially).
                     * @param method the method to inspect for executor qualifier metadata
                     * @return the qualifier if specified, otherwise empty string indicating that the
                     *  {#linkplain #setExecutor(Executor) default executor} should be used
                     * @see #determineAsyncExecutor(Method)
                     */
                    // @ts-ignore
                    getExecutorQualifier(method: java.lang.reflect.Method): string
                }
            }
        }
    }
}
