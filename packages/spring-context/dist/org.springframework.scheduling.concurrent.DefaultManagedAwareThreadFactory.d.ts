declare namespace org {
    namespace springframework {
        namespace scheduling {
            namespace concurrent {
                /**
                 * JNDI-based variant of {@link CustomizableThreadFactory}, performing a default lookup
                 * for JSR-236's "java:comp/DefaultManagedThreadFactory" in a Java EE 7 environment,
                 * falling back to the local {@link CustomizableThreadFactory} setup if not found.
                 * <p>This is a convenient way to use managed threads when running in a Java EE 7
                 * environment, simply using regular local threads otherwise - without conditional
                 * setup (i.e. without profiles).
                 * <p>Note: This class is not strictly JSR-236 based; it can work with any regular
                 * {@link java.util.concurrent.ThreadFactory} that can be found in JNDI. Therefore,
                 * the default JNDI name "java:comp/DefaultManagedThreadFactory" can be customized
                 * through the {@link #setJndiName "jndiName"} bean property.
                 * @author Juergen Hoeller
                 * @since 4.0
                 */
                // @ts-ignore
                class DefaultManagedAwareThreadFactory extends org.springframework.scheduling.concurrent.CustomizableThreadFactory {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the JNDI template to use for JNDI lookups.
                     * @see org.springframework.jndi.JndiAccessor#setJndiTemplate
                     */
                    // @ts-ignore
                    public setJndiTemplate(jndiTemplate: org.springframework.jndi.JndiTemplate): void
                    /**
                     * Set the JNDI environment to use for JNDI lookups.
                     * @see org.springframework.jndi.JndiAccessor#setJndiEnvironment
                     */
                    // @ts-ignore
                    public setJndiEnvironment(jndiEnvironment: java.util.Properties): void
                    /**
                     * Set whether the lookup occurs in a Java EE container, i.e. if the prefix
                     * "java:comp/env/" needs to be added if the JNDI name doesn't already
                     * contain it. PersistenceAnnotationBeanPostProcessor's default is "true".
                     * @see org.springframework.jndi.JndiLocatorSupport#setResourceRef
                     */
                    // @ts-ignore
                    public setResourceRef(resourceRef: boolean): void
                    /**
                     * Specify a JNDI name of the {@link java.util.concurrent.ThreadFactory} to delegate to,
                     * replacing the default JNDI name "java:comp/DefaultManagedThreadFactory".
                     * <p>This can either be a fully qualified JNDI name, or the JNDI name relative
                     * to the current environment naming context if "resourceRef" is set to "true".
                     * @see #setResourceRef
                     */
                    // @ts-ignore
                    public setJndiName(jndiName: java.lang.String | string): void
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public newThread(runnable: java.lang.Runnable): java.lang.Thread
                }
            }
        }
    }
}
