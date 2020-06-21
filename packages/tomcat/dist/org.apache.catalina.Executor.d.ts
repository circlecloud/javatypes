declare namespace org {
    namespace apache {
        namespace catalina {
            // @ts-ignore
            interface Executor extends java.util.concurrent.Executor, org.apache.catalina.Lifecycle {
                // @ts-ignore
                getName(): string
                /**
                 * Executes the given command at some time in the future.  The command
                 * may execute in a new thread, in a pooled thread, or in the calling
                 * thread, at the discretion of the <tt>Executor</tt> implementation.
                 * If no threads are available, it will be added to the work queue.
                 * If the work queue is full, the system will wait for the specified
                 * time until it throws a RejectedExecutionException
                 * @param command the runnable task
                 * @param timeout the length of time to wait for the task to complete
                 * @param unit    the units in which timeout is expressed
                 * @throws java.util.concurrent.RejectedExecutionException if this task
                 *  cannot be accepted for execution - the queue is full
                 * @throws NullPointerException if command or unit is null
                 */
                // @ts-ignore
                execute(command: java.lang.Runnable, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): void
            }
        }
    }
}
