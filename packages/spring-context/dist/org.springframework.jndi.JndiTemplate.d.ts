declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * Helper class that simplifies JNDI operations. It provides methods to lookup and
             * bind objects, and allows implementations of the {@link JndiCallback} interface
             * to perform any operation they like with a JNDI naming context provided.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @see JndiCallback
             * @see #execute
             */
            // @ts-ignore
            class JndiTemplate extends java.lang.Object {
                /**
                 * Create a new JndiTemplate instance.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new JndiTemplate instance, using the given environment.
                 */
                // @ts-ignore
                constructor(environment: java.util.Properties)
                // @ts-ignore
                readonly logger: Log
                /**
                 * Set the environment for the JNDI InitialContext.
                 */
                // @ts-ignore
                setEnvironment(environment: java.util.Properties): void
                /**
                 * Return the environment for the JNDI InitialContext, if any.
                 */
                // @ts-ignore
                getEnvironment(): java.util.Properties
                /**
                 * Execute the given JNDI context callback implementation.
                 * @param contextCallback the JndiCallback implementation to use
                 * @return a result object returned by the callback, or {#code null}
                 * @throws NamingException thrown by the callback implementation
                 * @see #createInitialContext
                 */
                // @ts-ignore
                execute<T>(contextCallback: org.springframework.jndi.JndiCallback<T>): T
                /**
                 * Obtain a JNDI context corresponding to this template's configuration.
                 * Called by {@link #execute}; may also be called directly.
                 * <p>The default implementation delegates to {@link #createInitialContext()}.
                 * @return the JNDI context (never {#code null})
                 * @throws NamingException if context retrieval failed
                 * @see #releaseContext
                 */
                // @ts-ignore
                getContext(): javax.naming.Context
                /**
                 * Release a JNDI context as obtained from {@link #getContext()}.
                 * @param ctx the JNDI context to release (may be {#code null})
                 * @see #getContext
                 */
                // @ts-ignore
                releaseContext(ctx: javax.naming.Context): void
                /**
                 * Create a new JNDI initial context. Invoked by {@link #getContext}.
                 * <p>The default implementation use this template's environment settings.
                 * Can be subclassed for custom contexts, e.g. for testing.
                 * @return the initial Context instance
                 * @throws NamingException in case of initialization errors
                 */
                // @ts-ignore
                createInitialContext(): javax.naming.Context
                /**
                 * Look up the object with the given name in the current JNDI context.
                 * @param name the JNDI name of the object
                 * @return object found (cannot be {#code null}; if a not so well-behaved
                 *  JNDI implementations returns null, a NamingException gets thrown)
                 * @throws NamingException if there is no object with the given
                 *  name bound to JNDI
                 */
                // @ts-ignore
                lookup(name: string): java.lang.Object
                /**
                 * Look up the object with the given name in the current JNDI context.
                 * @param name the JNDI name of the object
                 * @param requiredType type the JNDI object must match. Can be an interface or
                 *  superclass of the actual class, or {#code null} for any match. For example,
                 *  if the value is {@code Object.class}, this method will succeed whatever
                 *  the class of the returned instance.
                 * @return object found (cannot be {#code null}; if a not so well-behaved
                 *  JNDI implementations returns null, a NamingException gets thrown)
                 * @throws NamingException if there is no object with the given
                 *  name bound to JNDI
                 */
                // @ts-ignore
                lookup<T>(name: string, requiredType: java.lang.Class<T>): T
                /**
                 * Bind the given object to the current JNDI context, using the given name.
                 * @param name the JNDI name of the object
                 * @param object the object to bind
                 * @throws NamingException thrown by JNDI, mostly name already bound
                 */
                // @ts-ignore
                bind(name: string, object: any): void
                /**
                 * Rebind the given object to the current JNDI context, using the given name.
                 * Overwrites any existing binding.
                 * @param name the JNDI name of the object
                 * @param object the object to rebind
                 * @throws NamingException thrown by JNDI
                 */
                // @ts-ignore
                rebind(name: string, object: any): void
                /**
                 * Remove the binding for the given name from the current JNDI context.
                 * @param name the JNDI name of the object
                 * @throws NamingException thrown by JNDI, mostly name not found
                 */
                // @ts-ignore
                unbind(name: string): void
            }
        }
    }
}
