declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Default implementation of the {@link LifecycleProcessor} strategy.
                 * @author Mark Fisher
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class DefaultLifecycleProcessor extends java.lang.Object implements org.springframework.context.LifecycleProcessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Specify the maximum time allotted in milliseconds for the shutdown of
                     * any phase (group of SmartLifecycle beans with the same 'phase' value).
                     * <p>The default value is 30 seconds.
                     */
                    // @ts-ignore
                    setTimeoutPerShutdownPhase(timeoutPerShutdownPhase: number /*long*/): void
                    // @ts-ignore
                    setBeanFactory(beanFactory: BeanFactory): void
                    /**
                     * Start all registered beans that implement {@link Lifecycle} and are <i>not</i>
                     * already running. Any bean that implements {@link SmartLifecycle} will be
                     * started within its 'phase', and all phases will be ordered from lowest to
                     * highest value. All beans that do not implement {@link SmartLifecycle} will be
                     * started in the default phase 0. A bean declared as a dependency of another bean
                     * will be started before the dependent bean regardless of the declared phase.
                     */
                    // @ts-ignore
                    start(): void
                    /**
                     * Stop all registered beans that implement {@link Lifecycle} and <i>are</i>
                     * currently running. Any bean that implements {@link SmartLifecycle} will be
                     * stopped within its 'phase', and all phases will be ordered from highest to
                     * lowest value. All beans that do not implement {@link SmartLifecycle} will be
                     * stopped in the default phase 0. A bean declared as dependent on another bean
                     * will be stopped before the dependency bean regardless of the declared phase.
                     */
                    // @ts-ignore
                    stop(): void
                    // @ts-ignore
                    onRefresh(): void
                    // @ts-ignore
                    onClose(): void
                    // @ts-ignore
                    isRunning(): boolean
                    /**
                     * Retrieve all applicable Lifecycle beans: all singletons that have already been created,
                     * as well as all SmartLifecycle beans (even if they are marked as lazy-init).
                     * @return the Map of applicable beans, with bean names as keys and bean instances as values
                     */
                    // @ts-ignore
                    getLifecycleBeans(): java.util.Map<java.lang.String, org.springframework.context.Lifecycle>
                    /**
                     * Determine the lifecycle phase of the given bean.
                     * <p>The default implementation checks for the {@link Phased} interface, using
                     * a default of 0 otherwise. Can be overridden to apply other/further policies.
                     * @param bean the bean to introspect
                     * @return the phase (an integer value)
                     * @see Phased#getPhase()
                     * @see SmartLifecycle
                     */
                    // @ts-ignore
                    getPhase(bean: org.springframework.context.Lifecycle): int
                }
            }
        }
    }
}
