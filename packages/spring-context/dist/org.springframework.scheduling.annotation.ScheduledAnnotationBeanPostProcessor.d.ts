declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace annotation {
                /**
                 * Bean post-processor that registers methods annotated with @{@link Scheduled}
                 * to be invoked by a {@link org.springframework.scheduling.TaskScheduler} according
                 * to the "fixedRate", "fixedDelay", or "cron" expression provided via the annotation.
                 * <p>This post-processor is automatically registered by Spring's
                 * {@code <task:annotation-driven>} XML element, and also by the
                 * {@link EnableScheduling @EnableScheduling} annotation.
                 * <p>Autodetects any {@link SchedulingConfigurer} instances in the container,
                 * allowing for customization of the scheduler to be used or for fine-grained
                 * control over task registration (e.g. registration of {@link Trigger} tasks.
                 * See the @{@link EnableScheduling} javadocs for complete usage details.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @author Elizabeth Chatman
                 * @since 3.0
                 * @see Scheduled
                 * @see EnableScheduling
                 * @see SchedulingConfigurer
                 * @see org.springframework.scheduling.TaskScheduler
                 * @see org.springframework.scheduling.config.ScheduledTaskRegistrar
                 * @see AsyncAnnotationBeanPostProcessor
                 */
                // @ts-ignore
                class ScheduledAnnotationBeanPostProcessor extends java.lang.Object implements org.springframework.scheduling.config.ScheduledTaskHolder, org.springframework.context.EmbeddedValueResolverAware, org.springframework.context.ApplicationContextAware, org.springframework.context.ApplicationListener<org.springframework.context.event.ContextRefreshedEvent> {
                    /**
                     * Create a default {@code ScheduledAnnotationBeanPostProcessor}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a {@code ScheduledAnnotationBeanPostProcessor} delegating to the
                     * specified {@link ScheduledTaskRegistrar}.
                     * @param registrar the ScheduledTaskRegistrar to register #Scheduled tasks on
                     * @since 5.1
                     */
                    // @ts-ignore
                    constructor(registrar: org.springframework.scheduling.config.ScheduledTaskRegistrar)
                    /**
                     * The default name of the {@link TaskScheduler} bean to pick up: {@value}.
                     * <p>Note that the initial lookup happens by type; this is just the fallback
                     * in case of multiple scheduler beans found in the context.
                     * @since 4.2
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_TASK_SCHEDULER_BEAN_NAME: java.lang.String | string
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public getOrder(): number /*int*/
                    /**
                     * Set the {@link org.springframework.scheduling.TaskScheduler} that will invoke
                     * the scheduled methods, or a {@link java.util.concurrent.ScheduledExecutorService}
                     * to be wrapped as a TaskScheduler.
                     * <p>If not specified, default scheduler resolution will apply: searching for a
                     * unique {@link TaskScheduler} bean in the context, or for a {@link TaskScheduler}
                     * bean named "taskScheduler" otherwise; the same lookup will also be performed for
                     * a {@link ScheduledExecutorService} bean. If neither of the two is resolvable,
                     * a local single-threaded default scheduler will be created within the registrar.
                     * @see #DEFAULT_TASK_SCHEDULER_BEAN_NAME
                     */
                    // @ts-ignore
                    public setScheduler(scheduler: java.lang.Object | any): void
                    // @ts-ignore
                    public setEmbeddedValueResolver(resolver: StringValueResolver): void
                    // @ts-ignore
                    public setBeanName(beanName: java.lang.String | string): void
                    /**
                     * Making a {@link BeanFactory} available is optional; if not set,
                     * {@link SchedulingConfigurer} beans won't get autodetected and
                     * a {@link #setScheduler scheduler} has to be explicitly configured.
                     */
                    // @ts-ignore
                    public setBeanFactory(beanFactory: BeanFactory): void
                    /**
                     * Setting an {@link ApplicationContext} is optional: If set, registered
                     * tasks will be activated in the {@link ContextRefreshedEvent} phase;
                     * if not set, it will happen at {@link #afterSingletonsInstantiated} time.
                     */
                    // @ts-ignore
                    public setApplicationContext(applicationContext: org.springframework.context.ApplicationContext): void
                    // @ts-ignore
                    public afterSingletonsInstantiated(): void
                    // @ts-ignore
                    public onApplicationEvent(event: org.springframework.context.event.ContextRefreshedEvent): void
                    // @ts-ignore
                    public postProcessMergedBeanDefinition(beanDefinition: RootBeanDefinition, beanType: java.lang.Class<any>, beanName: java.lang.String | string): void
                    // @ts-ignore
                    public postProcessBeforeInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    // @ts-ignore
                    public postProcessAfterInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                    /**
                     * Process the given {@code @Scheduled} method declaration on the given bean.
                     * @param scheduled the #Scheduled annotation
                     * @param method the method that the annotation has been declared on
                     * @param bean the target bean instance
                     * @see #createRunnable(Object, Method)
                     */
                    // @ts-ignore
                    processScheduled(scheduled: org.springframework.scheduling.annotation.Scheduled, method: java.lang.reflect.Method, bean: java.lang.Object | any): void
                    /**
                     * Create a {@link Runnable} for the given bean instance,
                     * calling the specified scheduled method.
                     * <p>The default implementation creates a {@link ScheduledMethodRunnable}.
                     * @param target the target bean instance
                     * @param method the scheduled method to call
                     * @since 5.1
                     * @see ScheduledMethodRunnable#ScheduledMethodRunnable(Object, Method)
                     */
                    // @ts-ignore
                    createRunnable(target: java.lang.Object | any, method: java.lang.reflect.Method): java.lang.Runnable
                    /**
                     * Return all currently scheduled tasks, from {@link Scheduled} methods
                     * as well as from programmatic {@link SchedulingConfigurer} interaction.
                     * @since 5.0.2
                     */
                    // @ts-ignore
                    public getScheduledTasks(): Array<org.springframework.scheduling.config.ScheduledTask>
                    // @ts-ignore
                    public postProcessBeforeDestruction(bean: java.lang.Object | any, beanName: java.lang.String | string): void
                    // @ts-ignore
                    public requiresDestruction(bean: java.lang.Object | any): boolean
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
