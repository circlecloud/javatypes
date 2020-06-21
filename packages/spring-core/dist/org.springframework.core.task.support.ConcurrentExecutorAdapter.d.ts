declare namespace org {
    namespace springframework {
        namespace core {
            namespace task {
                namespace support {
                    /**
                     * Adapter that exposes the {@link java.util.concurrent.Executor} interface
                     * for any Spring {@link org.springframework.core.task.TaskExecutor}.
                     * <p>This is less useful as of Spring 3.0, since TaskExecutor itself
                     * extends the Executor interface. The adapter is only relevant for
                     * <em>hiding</em> the TaskExecutor nature of a given object now,
                     * solely exposing the standard Executor interface to a client.
                     * @author Juergen Hoeller
                     * @since 2.5
                     * @see java.util.concurrent.Executor
                     * @see org.springframework.core.task.TaskExecutor
                     */
                    // @ts-ignore
                    class ConcurrentExecutorAdapter extends java.lang.Object implements java.util.concurrent.Executor {
                        /**
                         * Create a new ConcurrentExecutorAdapter for the given Spring TaskExecutor.
                         * @param taskExecutor the Spring TaskExecutor to wrap
                         */
                        // @ts-ignore
                        constructor(taskExecutor: org.springframework.core.task.TaskExecutor)
                        // @ts-ignore
                        public execute(command: java.lang.Runnable): void
                    }
                }
            }
        }
    }
}
