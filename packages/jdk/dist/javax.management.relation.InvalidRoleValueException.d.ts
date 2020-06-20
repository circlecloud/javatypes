declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * Role value is invalid.
             * This exception is raised when, in a role, the number of referenced MBeans
             * in given value is less than expected minimum degree, or the number of
             * referenced MBeans in provided value exceeds expected maximum degree, or
             * one referenced MBean in the value is not an Object of the MBean
             * class expected for that role, or an MBean provided for that role does not
             * exist.
             * @since 1.5
             */
            // @ts-ignore
            class InvalidRoleValueException extends javax.management.relation.RelationException {
                /**
                 * Default constructor, no message put in exception.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructor with given message put in exception.
                 * @param message the detail message.
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
