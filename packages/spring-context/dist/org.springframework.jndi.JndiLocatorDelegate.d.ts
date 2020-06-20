declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * {@link JndiLocatorSupport} subclass with public lookup methods,
             * for convenient use as a delegate.
             * @author Juergen Hoeller
             * @since 3.0.1
             */
            // @ts-ignore
            class JndiLocatorDelegate extends org.springframework.jndi.JndiLocatorSupport {
                // @ts-ignore
                constructor()
                /**
                 * System property that instructs Spring to ignore a default JNDI environment, i.e.
                 * to always return {@code false} from {@link #isDefaultJndiEnvironmentAvailable()}.
                 * <p>The default is "false", allowing for regular default JNDI access e.g. in
                 * {@link JndiPropertySource}. Switching this flag to {@code true} is an optimization
                 * for scenarios where nothing is ever to be found for such JNDI fallback searches
                 * to begin with, avoiding the repeated JNDI lookup overhead.
                 * <p>Note that this flag just affects JNDI fallback searches, not explicitly configured
                 * JNDI lookups such as for a {@code DataSource} or some other environment resource.
                 * The flag literally just affects code which attempts JNDI searches based on the
                 * {@code JndiLocatorDelegate.isDefaultJndiEnvironmentAvailable()} check: in particular,
                 * {@code StandardServletEnvironment} and {@code StandardPortletEnvironment}.
                 * @since 4.3
                 * @see #isDefaultJndiEnvironmentAvailable()
                 * @see JndiPropertySource
                 */
                // @ts-ignore
                readonly IGNORE_JNDI_PROPERTY_NAME: string
                // @ts-ignore
                lookup(jndiName: string): java.lang.Object
                // @ts-ignore
                lookup<T>(jndiName: string, requiredType: java.lang.Class<T>): T
                /**
                 * Configure a {@code JndiLocatorDelegate} with its "resourceRef" property set to
                 * {@code true}, meaning that all names will be prefixed with "java:comp/env/".
                 * @see #setResourceRef
                 */
                // @ts-ignore
                createDefaultResourceRefLocator(): org.springframework.jndi.JndiLocatorDelegate
                /**
                 * Check whether a default JNDI environment, as in a Java EE environment,
                 * is available on this JVM.
                 * @return {#code true} if a default InitialContext can be used,
                 *  {@code false} if not
                 */
                // @ts-ignore
                isDefaultJndiEnvironmentAvailable(): boolean
            }
        }
    }
}
