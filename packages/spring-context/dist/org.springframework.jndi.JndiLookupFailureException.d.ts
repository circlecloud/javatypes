declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * RuntimeException to be thrown in case of JNDI lookup failures,
             * in particular from code that does not declare JNDI's checked
             * {@link javax.naming.NamingException}: for example, from Spring's
             * {@link JndiObjectTargetSource}.
             * @author Juergen Hoeller
             * @since 2.0.3
             */
            // @ts-ignore
            class JndiLookupFailureException extends NestedRuntimeException {
                /**
                 * Construct a new JndiLookupFailureException,
                 * wrapping the given JNDI NamingException.
                 * @param msg the detail message
                 * @param cause the NamingException root cause
                 */
                // @ts-ignore
                constructor(msg: string, cause: javax.naming.NamingException)
            }
        }
    }
}
