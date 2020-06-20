declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * Convenient superclass for classes that can locate any number of JNDI objects.
             * Derives from JndiAccessor to inherit the "jndiTemplate" and "jndiEnvironment"
             * bean properties.
             * <p>JNDI names may or may not include the "java:comp/env/" prefix expected
             * by Java EE applications when accessing a locally mapped (ENC - Environmental
             * Naming Context) resource. If it doesn't, the "java:comp/env/" prefix will
             * be prepended if the "resourceRef" property is true (the default is
             * <strong>false</strong>) and no other scheme (e.g. "java:") is given.
             * @author Juergen Hoeller
             * @since 1.1
             * @see #setJndiTemplate
             * @see #setJndiEnvironment
             * @see #setResourceRef
             */
            // @ts-ignore
            class JndiLocatorSupport extends org.springframework.jndi.JndiAccessor {
                // @ts-ignore
                constructor()
                /**
                 * JNDI prefix used in a Java EE container.
                 */
                // @ts-ignore
                readonly CONTAINER_PREFIX: string
                /**
                 * Set whether the lookup occurs in a Java EE container, i.e. if the prefix
                 * "java:comp/env/" needs to be added if the JNDI name doesn't already
                 * contain it. Default is "false".
                 * <p>Note: Will only get applied if no other scheme (e.g. "java:") is given.
                 */
                // @ts-ignore
                setResourceRef(resourceRef: boolean): void
                /**
                 * Return whether the lookup occurs in a Java EE container.
                 */
                // @ts-ignore
                isResourceRef(): boolean
                /**
                 * Perform an actual JNDI lookup for the given name via the JndiTemplate.
                 * <p>If the name doesn't begin with "java:comp/env/", this prefix is added
                 * if "resourceRef" is set to "true".
                 * @param jndiName the JNDI name to look up
                 * @return the obtained object
                 * @throws NamingException if the JNDI lookup failed
                 * @see #setResourceRef
                 */
                // @ts-ignore
                lookup(jndiName: string): java.lang.Object
                /**
                 * Perform an actual JNDI lookup for the given name via the JndiTemplate.
                 * <p>If the name doesn't begin with "java:comp/env/", this prefix is added
                 * if "resourceRef" is set to "true".
                 * @param jndiName the JNDI name to look up
                 * @param requiredType the required type of the object
                 * @return the obtained object
                 * @throws NamingException if the JNDI lookup failed
                 * @see #setResourceRef
                 */
                // @ts-ignore
                lookup<T>(jndiName: string, requiredType: java.lang.Class<T>): T
                /**
                 * Convert the given JNDI name into the actual JNDI name to use.
                 * <p>The default implementation applies the "java:comp/env/" prefix if
                 * "resourceRef" is "true" and no other scheme (e.g. "java:") is given.
                 * @param jndiName the original JNDI name
                 * @return the JNDI name to use
                 * @see #CONTAINER_PREFIX
                 * @see #setResourceRef
                 */
                // @ts-ignore
                convertJndiName(jndiName: string): java.lang.String
            }
        }
    }
}
