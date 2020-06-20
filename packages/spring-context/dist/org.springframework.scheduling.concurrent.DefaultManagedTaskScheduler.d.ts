declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * JNDI-based variant of {@link ConcurrentTaskScheduler}, performing a default lookup for
                 * JSR-236's "java:comp/DefaultManagedScheduledExecutorService" in a Java EE 7 environment.
                 * <p>Note: This class is not strictly JSR-236 based; it can work with any regular
                 * {@link java.util.concurrent.ScheduledExecutorService} that can be found in JNDI.
                 * The actual adapting to {@link javax.enterprise.concurrent.ManagedScheduledExecutorService}
                 * happens in the base class {@link ConcurrentTaskScheduler} itself.
                 * @author Juergen Hoeller
                 * @since 4.0
                 */
                // @ts-ignore
                class DefaultManagedTaskScheduler extends org.springframework.scheduling.concurrent.ConcurrentTaskScheduler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the JNDI template to use for JNDI lookups.
                     * @see org.springframework.jndi.JndiAccessor#setJndiTemplate
                     */
                    // @ts-ignore
                    setJndiTemplate(jndiTemplate: org.springframework.jndi.JndiTemplate): void
                    /**
                     * Set the JNDI environment to use for JNDI lookups.
                     * @see org.springframework.jndi.JndiAccessor#setJndiEnvironment
                     */
                    // @ts-ignore
                    setJndiEnvironment(jndiEnvironment: java.util.Properties): void
                    /**
                     * Set whether the lookup occurs in a Java EE container, i.e. if the prefix
                     * "java:comp/env/" needs to be added if the JNDI name doesn't already
                     * contain it. PersistenceAnnotationBeanPostProcessor's default is "true".
                     * @see org.springframework.jndi.JndiLocatorSupport#setResourceRef
                     */
                    // @ts-ignore
                    setResourceRef(resourceRef: boolean): void
                    /**
                     * Specify a JNDI name of the {@link java.util.concurrent.Executor} to delegate to,
                     * replacing the default JNDI name "java:comp/DefaultManagedScheduledExecutorService".
                     * <p>This can either be a fully qualified JNDI name, or the JNDI name relative
                     * to the current environment naming context if "resourceRef" is set to "true".
                     * @see #setConcurrentExecutor
                     * @see #setResourceRef
                     */
                    // @ts-ignore
                    setJndiName(jndiName: string): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                }
            }
        }
    }
}
