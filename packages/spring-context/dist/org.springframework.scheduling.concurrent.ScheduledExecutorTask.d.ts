declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * JavaBean that describes a scheduled executor task, consisting of the
                 * {@link Runnable} and a delay plus period. The period needs to be specified;
                 * there is no point in a default for it.
                 * <p>The {@link java.util.concurrent.ScheduledExecutorService} does not offer
                 * more sophisticated scheduling options such as cron expressions.
                 * Consider using {@link ThreadPoolTaskScheduler} for such needs.
                 * <p>Note that the {@link java.util.concurrent.ScheduledExecutorService} mechanism
                 * uses a {@link Runnable} instance that is shared between repeated executions,
                 * in contrast to Quartz which creates a new Job instance for each execution.
                 * @author Juergen Hoeller
                 * @since 2.0
                 * @see java.util.concurrent.ScheduledExecutorService#scheduleWithFixedDelay(java.lang.Runnable, long, long, java.util.concurrent.TimeUnit)
                 * @see java.util.concurrent.ScheduledExecutorService#scheduleAtFixedRate(java.lang.Runnable, long, long, java.util.concurrent.TimeUnit)
                 */
                // @ts-ignore
                class ScheduledExecutorTask extends java.lang.Object {
                    /**
                     * Create a new ScheduledExecutorTask,
                     * to be populated via bean properties.
                     * @see #setDelay
                     * @see #setPeriod
                     * @see #setFixedRate
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new ScheduledExecutorTask, with default
                     * one-time execution without delay.
                     * @param executorTask the Runnable to schedule
                     */
                    // @ts-ignore
                    constructor(executorTask: java.lang.Runnable)
                    /**
                     * Create a new ScheduledExecutorTask, with default
                     * one-time execution with the given delay.
                     * @param executorTask the Runnable to schedule
                     * @param delay the delay before starting the task for the first time (ms)
                     */
                    // @ts-ignore
                    constructor(executorTask: java.lang.Runnable, delay: number /*long*/)
                    /**
                     * Create a new ScheduledExecutorTask.
                     * @param executorTask the Runnable to schedule
                     * @param delay the delay before starting the task for the first time (ms)
                     * @param period the period between repeated task executions (ms)
                     * @param fixedRate whether to schedule as fixed-rate execution
                     */
                    // @ts-ignore
                    constructor(executorTask: java.lang.Runnable, delay: number /*long*/, period: number /*long*/, fixedRate: boolean)
                    /**
                     * Set the Runnable to schedule as executor task.
                     */
                    // @ts-ignore
                    setRunnable(executorTask: java.lang.Runnable): void
                    /**
                     * Return the Runnable to schedule as executor task.
                     */
                    // @ts-ignore
                    getRunnable(): java.lang.Runnable
                    /**
                     * Set the delay before starting the task for the first time,
                     * in milliseconds. Default is 0, immediately starting the
                     * task after successful scheduling.
                     */
                    // @ts-ignore
                    setDelay(delay: number /*long*/): void
                    /**
                     * Return the delay before starting the job for the first time.
                     */
                    // @ts-ignore
                    getDelay(): long
                    /**
                     * Set the period between repeated task executions, in milliseconds.
                     * <p>Default is -1, leading to one-time execution. In case of a positive value,
                     * the task will be executed repeatedly, with the given interval in-between executions.
                     * <p>Note that the semantics of the period value vary between fixed-rate and
                     * fixed-delay execution.
                     * <p><b>Note:</b> A period of 0 (for example as fixed delay) is <i>not</i> supported,
                     * simply because {@code java.util.concurrent.ScheduledExecutorService} itself
                     * does not support it. Hence a value of 0 will be treated as one-time execution;
                     * however, that value should never be specified explicitly in the first place!
                     * @see #setFixedRate
                     * @see #isOneTimeTask()
                     * @see java.util.concurrent.ScheduledExecutorService#scheduleWithFixedDelay(Runnable, long, long, java.util.concurrent.TimeUnit)
                     */
                    // @ts-ignore
                    setPeriod(period: number /*long*/): void
                    /**
                     * Return the period between repeated task executions.
                     */
                    // @ts-ignore
                    getPeriod(): long
                    /**
                     * Is this task only ever going to execute once?
                     * @return {#code true} if this task is only ever going to execute once
                     * @see #getPeriod()
                     */
                    // @ts-ignore
                    isOneTimeTask(): boolean
                    /**
                     * Specify the time unit for the delay and period values.
                     * Default is milliseconds ({@code TimeUnit.MILLISECONDS}).
                     * @see java.util.concurrent.TimeUnit#MILLISECONDS
                     * @see java.util.concurrent.TimeUnit#SECONDS
                     */
                    // @ts-ignore
                    setTimeUnit(timeUnit: java.util.concurrent.TimeUnit): void
                    /**
                     * Return the time unit for the delay and period values.
                     */
                    // @ts-ignore
                    getTimeUnit(): java.util.concurrent.TimeUnit
                    /**
                     * Set whether to schedule as fixed-rate execution, rather than
                     * fixed-delay execution. Default is "false", that is, fixed delay.
                     * <p>See ScheduledExecutorService javadoc for details on those execution modes.
                     * @see java.util.concurrent.ScheduledExecutorService#scheduleWithFixedDelay(java.lang.Runnable, long, long, java.util.concurrent.TimeUnit)
                     * @see java.util.concurrent.ScheduledExecutorService#scheduleAtFixedRate(java.lang.Runnable, long, long, java.util.concurrent.TimeUnit)
                     */
                    // @ts-ignore
                    setFixedRate(fixedRate: boolean): void
                    /**
                     * Return whether to schedule as fixed-rate execution.
                     */
                    // @ts-ignore
                    isFixedRate(): boolean
                }
            }
        }
    }
}
