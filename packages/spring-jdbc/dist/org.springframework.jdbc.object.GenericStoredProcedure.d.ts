declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace object {
                /**
                 * Concrete implementation making it possible to define the RDBMS stored procedures
                 * in an application context without writing a custom Java implementation class.
                 * <p>
                 * This implementation does not provide a typed method for invocation so executions
                 * must use one of the generic {@link StoredProcedure#execute(java.util.Map)} or
                 * {@link StoredProcedure#execute(org.springframework.jdbc.core.ParameterMapper)} methods.
                 * @author Thomas Risberg
                 * @see org.springframework.jdbc.object.StoredProcedure
                 */
                // @ts-ignore
                class GenericStoredProcedure extends org.springframework.jdbc.object.StoredProcedure {
                    // @ts-ignore
                    constructor()
                }
            }
        }
    }
}
