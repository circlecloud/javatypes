declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * Callback interface to be implemented by classes that need to perform an
             * operation (such as a lookup) in a JNDI context. This callback approach
             * is valuable in simplifying error handling, which is performed by the
             * JndiTemplate class. This is a similar to JdbcTemplate's approach.
             * <p>Note that there is hardly any need to implement this callback
             * interface, as JndiTemplate provides all usual JNDI operations via
             * convenience methods.
             * @author Rod Johnson
             * @param <T> the resulting object type
             * @see JndiTemplate
             * @see org.springframework.jdbc.core.JdbcTemplate
             */
            // @ts-ignore
            interface JndiCallback<T> {
                /**
                 * Do something with the given JNDI context.
                 * <p>Implementations don't need to worry about error handling
                 * or cleanup, as the JndiTemplate class will handle this.
                 * @param ctx the current JNDI context
                 * @throws NamingException if thrown by JNDI methods
                 * @return a result object, or {#code null}
                 */
                // @ts-ignore
                doInContext(ctx: javax.naming.Context): T
            }
        }
    }
}
