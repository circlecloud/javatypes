declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple customizable helper class for creating new {@link Thread} instances.
             * Provides various bean properties: thread name prefix, thread priority, etc.
             * <p>Serves as base class for thread factories such as
             * {@link org.springframework.scheduling.concurrent.CustomizableThreadFactory}.
             * @author Juergen Hoeller
             * @since 2.0.3
             * @see org.springframework.scheduling.concurrent.CustomizableThreadFactory
             */
            // @ts-ignore
            class CustomizableThreadCreator extends java.lang.Object implements java.io.Serializable {
                /**
                 * Create a new CustomizableThreadCreator with default thread name prefix.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new CustomizableThreadCreator with the given thread name prefix.
                 * @param threadNamePrefix the prefix to use for the names of newly created threads
                 */
                // @ts-ignore
                constructor(threadNamePrefix: string)
                /**
                 * Specify the prefix to use for the names of newly created threads.
                 * Default is "SimpleAsyncTaskExecutor-".
                 */
                // @ts-ignore
                setThreadNamePrefix(threadNamePrefix: string): void
                /**
                 * Return the thread name prefix to use for the names of newly
                 * created threads.
                 */
                // @ts-ignore
                getThreadNamePrefix(): java.lang.String
                /**
                 * Set the priority of the threads that this factory creates.
                 * Default is 5.
                 * @see java.lang.Thread#NORM_PRIORITY
                 */
                // @ts-ignore
                setThreadPriority(threadPriority: number /*int*/): void
                /**
                 * Return the priority of the threads that this factory creates.
                 */
                // @ts-ignore
                getThreadPriority(): int
                /**
                 * Set whether this factory is supposed to create daemon threads,
                 * just executing as long as the application itself is running.
                 * <p>Default is "false": Concrete factories usually support explicit cancelling.
                 * Hence, if the application shuts down, Runnables will by default finish their
                 * execution.
                 * <p>Specify "true" for eager shutdown of threads which still actively execute
                 * a {@link Runnable} at the time that the application itself shuts down.
                 * @see java.lang.Thread#setDaemon
                 */
                // @ts-ignore
                setDaemon(daemon: boolean): void
                /**
                 * Return whether this factory should create daemon threads.
                 */
                // @ts-ignore
                isDaemon(): boolean
                /**
                 * Specify the name of the thread group that threads should be created in.
                 * @see #setThreadGroup
                 */
                // @ts-ignore
                setThreadGroupName(name: string): void
                /**
                 * Specify the thread group that threads should be created in.
                 * @see #setThreadGroupName
                 */
                // @ts-ignore
                setThreadGroup(threadGroup: java.lang.ThreadGroup): void
                /**
                 * Return the thread group that threads should be created in
                 * (or {@code null} for the default group).
                 */
                // @ts-ignore
                getThreadGroup(): java.lang.ThreadGroup
                /**
                 * Template method for the creation of a new {@link Thread}.
                 * <p>The default implementation creates a new Thread for the given
                 * {@link Runnable}, applying an appropriate thread name.
                 * @param runnable the Runnable to execute
                 * @see #nextThreadName()
                 */
                // @ts-ignore
                createThread(runnable: java.lang.Runnable): java.lang.Thread
                /**
                 * Return the thread name to use for a newly created {@link Thread}.
                 * <p>The default implementation returns the specified thread name prefix
                 * with an increasing thread count appended: e.g. "SimpleAsyncTaskExecutor-0".
                 * @see #getThreadNamePrefix()
                 */
                // @ts-ignore
                nextThreadName(): java.lang.String
                /**
                 * Build the default thread name prefix for this factory.
                 * @return the default thread name prefix (never {#code null})
                 */
                // @ts-ignore
                getDefaultThreadNamePrefix(): java.lang.String
            }
        }
    }
}
