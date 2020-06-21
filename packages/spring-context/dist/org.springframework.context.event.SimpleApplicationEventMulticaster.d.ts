declare namespace org {
    namespace springframework {
        namespace context {
            namespace event {
                /**
                 * Simple implementation of the {@link ApplicationEventMulticaster} interface.
                 * <p>Multicasts all events to all registered listeners, leaving it up to
                 * the listeners to ignore events that they are not interested in.
                 * Listeners will usually perform corresponding {@code instanceof}
                 * checks on the passed-in event object.
                 * <p>By default, all listeners are invoked in the calling thread.
                 * This allows the danger of a rogue listener blocking the entire application,
                 * but adds minimal overhead. Specify an alternative task executor to have
                 * listeners executed in different threads, for example from a thread pool.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @author Stephane Nicoll
                 * @see #setTaskExecutor
                 */
                // @ts-ignore
                class SimpleApplicationEventMulticaster extends org.springframework.context.event.AbstractApplicationEventMulticaster {
                    /**
                     * Create a new SimpleApplicationEventMulticaster.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new SimpleApplicationEventMulticaster for the given BeanFactory.
                     */
                    // @ts-ignore
                    constructor(beanFactory: BeanFactory)
                    /**
                     * Set a custom executor (typically a {@link org.springframework.core.task.TaskExecutor})
                     * to invoke each listener with.
                     * <p>Default is equivalent to {@link org.springframework.core.task.SyncTaskExecutor},
                     * executing all listeners synchronously in the calling thread.
                     * <p>Consider specifying an asynchronous task executor here to not block the
                     * caller until all listeners have been executed. However, note that asynchronous
                     * execution will not participate in the caller's thread context (class loader,
                     * transaction association) unless the TaskExecutor explicitly supports this.
                     * @see org.springframework.core.task.SyncTaskExecutor
                     * @see org.springframework.core.task.SimpleAsyncTaskExecutor
                     */
                    // @ts-ignore
                    public setTaskExecutor(taskExecutor: java.util.concurrent.Executor): void
                    /**
                     * Return the current task executor for this multicaster.
                     */
                    // @ts-ignore
                    getTaskExecutor(): java.util.concurrent.Executor
                    /**
                     * Set the {@link ErrorHandler} to invoke in case an exception is thrown
                     * from a listener.
                     * <p>Default is none, with a listener exception stopping the current
                     * multicast and getting propagated to the publisher of the current event.
                     * If a {@linkplain #setTaskExecutor task executor} is specified, each
                     * individual listener exception will get propagated to the executor but
                     * won't necessarily stop execution of other listeners.
                     * <p>Consider setting an {@link ErrorHandler} implementation that catches
                     * and logs exceptions (a la
                     * {@link org.springframework.scheduling.support.TaskUtils#LOG_AND_SUPPRESS_ERROR_HANDLER})
                     * or an implementation that logs exceptions while nevertheless propagating them
                     * (e.g. {@link org.springframework.scheduling.support.TaskUtils#LOG_AND_PROPAGATE_ERROR_HANDLER}).
                     * @since 4.1
                     */
                    // @ts-ignore
                    public setErrorHandler(errorHandler: ErrorHandler): void
                    /**
                     * Return the current error handler for this multicaster.
                     * @since 4.1
                     */
                    // @ts-ignore
                    getErrorHandler(): ErrorHandler
                    // @ts-ignore
                    public multicastEvent(event: org.springframework.context.ApplicationEvent): void
                    // @ts-ignore
                    public multicastEvent(event: org.springframework.context.ApplicationEvent, eventType: ResolvableType): void
                    /**
                     * Invoke the given listener with the given event.
                     * @param listener the ApplicationListener to invoke
                     * @param event the current event to propagate
                     * @since 4.1
                     */
                    // @ts-ignore
                    invokeListener(listener: org.springframework.context.ApplicationListener<any>, event: org.springframework.context.ApplicationEvent): void
                }
            }
        }
    }
}
