declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * Convenient superclass for JNDI-based service locators,
             * providing configurable lookup of a specific JNDI resource.
             * <p>Exposes a {@link #setJndiName "jndiName"} property. This may or may not
             * include the "java:comp/env/" prefix expected by Java EE applications when
             * accessing a locally mapped (Environmental Naming Context) resource. If it
             * doesn't, the "java:comp/env/" prefix will be prepended if the "resourceRef"
             * property is true (the default is <strong>false</strong>) and no other scheme
             * (e.g. "java:") is given.
             * <p>Subclasses may invoke the {@link #lookup()} method whenever it is appropriate.
             * Some classes might do this on initialization, while others might do it
             * on demand. The latter strategy is more flexible in that it allows for
             * initialization of the locator before the JNDI object is available.
             * @author Juergen Hoeller
             * @since 1.1
             * @see #setJndiName
             * @see #setJndiTemplate
             * @see #setJndiEnvironment
             * @see #setResourceRef
             * @see #lookup()
             */
            // @ts-ignore
            abstract class JndiObjectLocator extends org.springframework.jndi.JndiLocatorSupport {
                // @ts-ignore
                constructor()
                /**
                 * Specify the JNDI name to look up. If it doesn't begin with "java:comp/env/"
                 * this prefix is added automatically if "resourceRef" is set to "true".
                 * @param jndiName the JNDI name to look up
                 * @see #setResourceRef
                 */
                // @ts-ignore
                public setJndiName(jndiName: java.lang.String | string): void
                /**
                 * Return the JNDI name to look up.
                 */
                // @ts-ignore
                public getJndiName(): string
                /**
                 * Specify the type that the located JNDI object is supposed
                 * to be assignable to, if any.
                 */
                // @ts-ignore
                public setExpectedType(expectedType: java.lang.Class<any>): void
                /**
                 * Return the type that the located JNDI object is supposed
                 * to be assignable to, if any.
                 */
                // @ts-ignore
                public getExpectedType(): java.lang.Class<any>
                // @ts-ignore
                public afterPropertiesSet(): void
                /**
                 * Perform the actual JNDI lookup for this locator's target resource.
                 * @return the located target object
                 * @throws NamingException if the JNDI lookup failed or if the
                 *  located JNDI object is not assignable to the expected type
                 * @see #setJndiName
                 * @see #setExpectedType
                 * @see #lookup(String, Class)
                 */
                // @ts-ignore
                lookup(): any
            }
        }
    }
}
