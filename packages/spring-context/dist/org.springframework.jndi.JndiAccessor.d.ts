declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * Convenient superclass for JNDI accessors, providing "jndiTemplate"
             * and "jndiEnvironment" bean properties.
             * @author Juergen Hoeller
             * @since 1.1
             * @see #setJndiTemplate
             * @see #setJndiEnvironment
             */
            // @ts-ignore
            class JndiAccessor extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Logger, available to subclasses.
                 */
                // @ts-ignore
                readonly logger: Log
                /**
                 * Set the JNDI template to use for JNDI lookups.
                 * <p>You can also specify JNDI environment settings via "jndiEnvironment".
                 * @see #setJndiEnvironment
                 */
                // @ts-ignore
                setJndiTemplate(jndiTemplate: org.springframework.jndi.JndiTemplate): void
                /**
                 * Return the JNDI template to use for JNDI lookups.
                 */
                // @ts-ignore
                getJndiTemplate(): org.springframework.jndi.JndiTemplate
                /**
                 * Set the JNDI environment to use for JNDI lookups.
                 * <p>Creates a JndiTemplate with the given environment settings.
                 * @see #setJndiTemplate
                 */
                // @ts-ignore
                setJndiEnvironment(jndiEnvironment: java.util.Properties): void
                /**
                 * Return the JNDI environment to use for JNDI lookups.
                 */
                // @ts-ignore
                getJndiEnvironment(): java.util.Properties
            }
        }
    }
}
