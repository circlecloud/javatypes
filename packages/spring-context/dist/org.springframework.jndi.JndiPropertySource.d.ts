declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * {@link PropertySource} implementation that reads properties from an underlying Spring
             * {@link JndiLocatorDelegate}.
             * <p>By default, the underlying {@code JndiLocatorDelegate} will be configured with its
             * {@link JndiLocatorDelegate#setResourceRef(boolean) "resourceRef"} property set to
             * {@code true}, meaning that names looked up will automatically be prefixed with
             * "java:comp/env/" in alignment with published
             * <a href="https://download.oracle.com/javase/jndi/tutorial/beyond/misc/policy.html">JNDI
             * naming conventions</a>. To override this setting or to change the prefix, manually
             * configure a {@code JndiLocatorDelegate} and provide it to one of the constructors here
             * that accepts it. The same applies when providing custom JNDI properties. These should
             * be specified using {@link JndiLocatorDelegate#setJndiEnvironment(java.util.Properties)}
             * prior to construction of the {@code JndiPropertySource}.
             * <p>Note that {@link org.springframework.web.context.support.StandardServletEnvironment
             * StandardServletEnvironment} includes a {@code JndiPropertySource} by default, and any
             * customization of the underlying {@link JndiLocatorDelegate} may be performed within an
             * {@link org.springframework.context.ApplicationContextInitializer
             * ApplicationContextInitializer} or {@link org.springframework.web.WebApplicationInitializer
             * WebApplicationInitializer}.
             * @author Chris Beams
             * @author Juergen Hoeller
             * @since 3.1
             * @see JndiLocatorDelegate
             * @see org.springframework.context.ApplicationContextInitializer
             * @see org.springframework.web.WebApplicationInitializer
             * @see org.springframework.web.context.support.StandardServletEnvironment
             */
            // @ts-ignore
            class JndiPropertySource extends <any> {
                /**
                 * Create a new {@code JndiPropertySource} with the given name
                 * and a {@link JndiLocatorDelegate} configured to prefix any names with
                 * "java:comp/env/".
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Create a new {@code JndiPropertySource} with the given name and the given
                 * {@code JndiLocatorDelegate}.
                 */
                // @ts-ignore
                constructor(name: string, jndiLocator: org.springframework.jndi.JndiLocatorDelegate)
                /**
                 * This implementation looks up and returns the value associated with the given
                 * name from the underlying {@link JndiLocatorDelegate}. If a {@link NamingException}
                 * is thrown during the call to {@link JndiLocatorDelegate#lookup(String)}, returns
                 * {@code null} and issues a DEBUG-level log statement with the exception message.
                 */
                // @ts-ignore
                getProperty(name: string): java.lang.Object
            }
        }
    }
}
