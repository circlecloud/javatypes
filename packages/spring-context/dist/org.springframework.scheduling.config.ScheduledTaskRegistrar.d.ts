declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace config {
                /**
                 * Helper bean for registering tasks with a {@link TaskScheduler}, typically using cron
                 * expressions.
                 * <p>As of Spring 3.1, {@code ScheduledTaskRegistrar} has a more prominent user-facing
                 * role when used in conjunction with the {@link
                 * org.springframework.scheduling.annotation.EnableAsync @EnableAsync} annotation and its
                 * {@link org.springframework.scheduling.annotation.SchedulingConfigurer
                 * SchedulingConfigurer} callback interface.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @author Tobias Montagna-Hay
                 * @author Sam Brannen
                 * @since 3.0
                 * @see org.springframework.scheduling.annotation.EnableAsync
                 * @see org.springframework.scheduling.annotation.SchedulingConfigurer
                 */
                // @ts-ignore
                class ScheduledTaskRegistrar extends java.lang.Object implements org.springframework.scheduling.config.ScheduledTaskHolder {
                    // @ts-ignore
                    constructor()
                    /**
                     * A special cron expression value that indicates a disabled trigger: {@value}.
                     * <p>This is primarily meant for use with {@link #addCronTask(Runnable, String)}
                     * when the value for the supplied {@code expression} is retrieved from an
                     * external source &mdash; for example, from a property in the
                     * {@link org.springframework.core.env.Environment Environment}.
                     * @since 5.2
                     * @see org.springframework.scheduling.annotation.Scheduled#CRON_DISABLED
                     */
                    // @ts-ignore
                    public static readonly CRON_DISABLED: java.lang.String | string
                    /**
                     * Set the {@link TaskScheduler} to register scheduled tasks with.
                     */
                    // @ts-ignore
                    public setTaskScheduler(taskScheduler: org.springframework.scheduling.TaskScheduler): void
                    /**
                     * Set the {@link TaskScheduler} to register scheduled tasks with, or a
                     * {@link java.util.concurrent.ScheduledExecutorService} to be wrapped as a
                     * {@code TaskScheduler}.
                     */
                    // @ts-ignore
                    public setScheduler(scheduler: java.lang.Object | any): void
                    /**
                     * Return the {@link TaskScheduler} instance for this registrar (may be {@code null}).
                     */
                    // @ts-ignore
                    public getScheduler(): org.springframework.scheduling.TaskScheduler
                    /**
                     * Specify triggered tasks as a Map of Runnables (the tasks) and Trigger objects
                     * (typically custom implementations of the {@link Trigger} interface).
                     */
                    // @ts-ignore
                    public setTriggerTasks(triggerTasks: java.util.Map<java.lang.Runnable, org.springframework.scheduling.Trigger>): void
                    /**
                     * Specify triggered tasks as a list of {@link TriggerTask} objects. Primarily used
                     * by {@code <task:*>} namespace parsing.
                     * @since 3.2
                     * @see ScheduledTasksBeanDefinitionParser
                     */
                    // @ts-ignore
                    public setTriggerTasksList(triggerTasks: java.util.List<org.springframework.scheduling.config.TriggerTask> | Array<org.springframework.scheduling.config.TriggerTask>): void
                    /**
                     * Get the trigger tasks as an unmodifiable list of {@link TriggerTask} objects.
                     * @return the list of tasks (never {#code null})
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getTriggerTaskList(): Array<org.springframework.scheduling.config.TriggerTask>
                    /**
                     * Specify triggered tasks as a Map of Runnables (the tasks) and cron expressions.
                     * @see CronTrigger
                     */
                    // @ts-ignore
                    public setCronTasks(cronTasks: java.util.Map<java.lang.Runnable, java.lang.String | string>): void
                    /**
                     * Specify triggered tasks as a list of {@link CronTask} objects. Primarily used by
                     * {@code <task:*>} namespace parsing.
                     * @since 3.2
                     * @see ScheduledTasksBeanDefinitionParser
                     */
                    // @ts-ignore
                    public setCronTasksList(cronTasks: java.util.List<org.springframework.scheduling.config.CronTask> | Array<org.springframework.scheduling.config.CronTask>): void
                    /**
                     * Get the cron tasks as an unmodifiable list of {@link CronTask} objects.
                     * @return the list of tasks (never {#code null})
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getCronTaskList(): Array<org.springframework.scheduling.config.CronTask>
                    /**
                     * Specify triggered tasks as a Map of Runnables (the tasks) and fixed-rate values.
                     * @see TaskScheduler#scheduleAtFixedRate(Runnable, long)
                     */
                    // @ts-ignore
                    public setFixedRateTasks(fixedRateTasks: java.util.Map<java.lang.Runnable, java.lang.Long | number>): void
                    /**
                     * Specify fixed-rate tasks as a list of {@link IntervalTask} objects. Primarily used
                     * by {@code <task:*>} namespace parsing.
                     * @since 3.2
                     * @see ScheduledTasksBeanDefinitionParser
                     */
                    // @ts-ignore
                    public setFixedRateTasksList(fixedRateTasks: java.util.List<org.springframework.scheduling.config.IntervalTask> | Array<org.springframework.scheduling.config.IntervalTask>): void
                    /**
                     * Get the fixed-rate tasks as an unmodifiable list of {@link IntervalTask} objects.
                     * @return the list of tasks (never {#code null})
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getFixedRateTaskList(): Array<org.springframework.scheduling.config.IntervalTask>
                    /**
                     * Specify triggered tasks as a Map of Runnables (the tasks) and fixed-delay values.
                     * @see TaskScheduler#scheduleWithFixedDelay(Runnable, long)
                     */
                    // @ts-ignore
                    public setFixedDelayTasks(fixedDelayTasks: java.util.Map<java.lang.Runnable, java.lang.Long | number>): void
                    /**
                     * Specify fixed-delay tasks as a list of {@link IntervalTask} objects. Primarily used
                     * by {@code <task:*>} namespace parsing.
                     * @since 3.2
                     * @see ScheduledTasksBeanDefinitionParser
                     */
                    // @ts-ignore
                    public setFixedDelayTasksList(fixedDelayTasks: java.util.List<org.springframework.scheduling.config.IntervalTask> | Array<org.springframework.scheduling.config.IntervalTask>): void
                    /**
                     * Get the fixed-delay tasks as an unmodifiable list of {@link IntervalTask} objects.
                     * @return the list of tasks (never {#code null})
                     * @since 4.2
                     */
                    // @ts-ignore
                    public getFixedDelayTaskList(): Array<org.springframework.scheduling.config.IntervalTask>
                    /**
                     * Add a Runnable task to be triggered per the given {@link Trigger}.
                     * @see TaskScheduler#scheduleAtFixedRate(Runnable, long)
                     */
                    // @ts-ignore
                    public addTriggerTask(task: java.lang.Runnable, trigger: org.springframework.scheduling.Trigger): void
                    /**
                     * Add a {@code TriggerTask}.
                     * @since 3.2
                     * @see TaskScheduler#scheduleAtFixedRate(Runnable, long)
                     */
                    // @ts-ignore
                    public addTriggerTask(task: org.springframework.scheduling.config.TriggerTask): void
                    /**
                     * Add a {@link Runnable} task to be triggered per the given cron {@code expression}.
                     * <p>As of Spring Framework 5.2, this method will not register the task if the
                     * {@code expression} is equal to {@link #CRON_DISABLED}.
                     */
                    // @ts-ignore
                    public addCronTask(task: java.lang.Runnable, expression: java.lang.String | string): void
                    /**
                     * Add a {@link CronTask}.
                     * @since 3.2
                     */
                    // @ts-ignore
                    public addCronTask(task: org.springframework.scheduling.config.CronTask): void
                    /**
                     * Add a {@code Runnable} task to be triggered at the given fixed-rate interval.
                     * @see TaskScheduler#scheduleAtFixedRate(Runnable, long)
                     */
                    // @ts-ignore
                    public addFixedRateTask(task: java.lang.Runnable, interval: number /*long*/): void
                    /**
                     * Add a fixed-rate {@link IntervalTask}.
                     * @since 3.2
                     * @see TaskScheduler#scheduleAtFixedRate(Runnable, long)
                     */
                    // @ts-ignore
                    public addFixedRateTask(task: org.springframework.scheduling.config.IntervalTask): void
                    /**
                     * Add a Runnable task to be triggered with the given fixed delay.
                     * @see TaskScheduler#scheduleWithFixedDelay(Runnable, long)
                     */
                    // @ts-ignore
                    public addFixedDelayTask(task: java.lang.Runnable, delay: number /*long*/): void
                    /**
                     * Add a fixed-delay {@link IntervalTask}.
                     * @since 3.2
                     * @see TaskScheduler#scheduleWithFixedDelay(Runnable, long)
                     */
                    // @ts-ignore
                    public addFixedDelayTask(task: org.springframework.scheduling.config.IntervalTask): void
                    /**
                     * Return whether this {@code ScheduledTaskRegistrar} has any tasks registered.
                     * @since 3.2
                     */
                    // @ts-ignore
                    public hasTasks(): boolean
                    /**
                     * Calls {@link #scheduleTasks()} at bean construction time.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Schedule all registered tasks against the underlying
                     * {@linkplain #setTaskScheduler(TaskScheduler) task scheduler}.
                     */
                    // @ts-ignore
                    scheduleTasks(): void
                    /**
                     * Schedule the specified trigger task, either right away if possible
                     * or on initialization of the scheduler.
                     * @return a handle to the scheduled task, allowing to cancel it
                     * @since 4.3
                     */
                    // @ts-ignore
                    public scheduleTriggerTask(task: org.springframework.scheduling.config.TriggerTask): org.springframework.scheduling.config.ScheduledTask
                    /**
                     * Schedule the specified cron task, either right away if possible
                     * or on initialization of the scheduler.
                     * @return a handle to the scheduled task, allowing to cancel it
                     *  (or {#code null} if processing a previously registered task)
                     * @since 4.3
                     */
                    // @ts-ignore
                    public scheduleCronTask(task: org.springframework.scheduling.config.CronTask): org.springframework.scheduling.config.ScheduledTask
                    /**
                     * Schedule the specified fixed-rate task, either right away if possible
                     * or on initialization of the scheduler.
                     * @return a handle to the scheduled task, allowing to cancel it
                     *  (or {#code null} if processing a previously registered task)
                     * @since 4.3
                     * @deprecated as of 5.0.2, in favor of {#link #scheduleFixedRateTask(FixedRateTask)}
                     */
                    // @ts-ignore
                    public scheduleFixedRateTask(task: org.springframework.scheduling.config.IntervalTask): org.springframework.scheduling.config.ScheduledTask
                    /**
                     * Schedule the specified fixed-rate task, either right away if possible
                     * or on initialization of the scheduler.
                     * @return a handle to the scheduled task, allowing to cancel it
                     *  (or {#code null} if processing a previously registered task)
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public scheduleFixedRateTask(task: org.springframework.scheduling.config.FixedRateTask): org.springframework.scheduling.config.ScheduledTask
                    /**
                     * Schedule the specified fixed-delay task, either right away if possible
                     * or on initialization of the scheduler.
                     * @return a handle to the scheduled task, allowing to cancel it
                     *  (or {#code null} if processing a previously registered task)
                     * @since 4.3
                     * @deprecated as of 5.0.2, in favor of {#link #scheduleFixedDelayTask(FixedDelayTask)}
                     */
                    // @ts-ignore
                    public scheduleFixedDelayTask(task: org.springframework.scheduling.config.IntervalTask): org.springframework.scheduling.config.ScheduledTask
                    /**
                     * Schedule the specified fixed-delay task, either right away if possible
                     * or on initialization of the scheduler.
                     * @return a handle to the scheduled task, allowing to cancel it
                     *  (or {#code null} if processing a previously registered task)
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public scheduleFixedDelayTask(task: org.springframework.scheduling.config.FixedDelayTask): org.springframework.scheduling.config.ScheduledTask
                    /**
                     * Return all locally registered tasks that have been scheduled by this registrar.
                     * @since 5.0.2
                     * @see #addTriggerTask
                     * @see #addCronTask
                     * @see #addFixedRateTask
                     * @see #addFixedDelayTask
                     */
                    // @ts-ignore
                    public getScheduledTasks(): Array<org.springframework.scheduling.config.ScheduledTask>
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
