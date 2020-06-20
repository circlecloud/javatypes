declare namespace org {
    namespace springframework {
        namespace jndi {
            /**
             * Exception thrown if a type mismatch is encountered for an object
             * located in a JNDI environment. Thrown by JndiTemplate.
             * @author Juergen Hoeller
             * @since 1.2.8
             * @see JndiTemplate#lookup(String, Class)
             */
            // @ts-ignore
            class TypeMismatchNamingException extends javax.naming.NamingException {
                /**
                 * Construct a new TypeMismatchNamingException,
                 * building an explanation text from the given arguments.
                 * @param jndiName the JNDI name
                 * @param requiredType the required type for the lookup
                 * @param actualType the actual type that the lookup returned
                 */
                // @ts-ignore
                constructor(jndiName: string, requiredType: java.lang.Class<any>, actualType: java.lang.Class<any>)
                /**
                 * Return the required type for the lookup, if available.
                 */
                // @ts-ignore
                getRequiredType(): java.lang.Class<?>
                /**
                 * Return the actual type that the lookup returned, if available.
                 */
                // @ts-ignore
                getActualType(): java.lang.Class<?>
            }
        }
    }
}
