declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This exception is raised when a role in a relation does not exist, or is not
             * readable, or is not settable.
             * @since 1.5
             */
            // @ts-ignore
            class RoleNotFoundException extends javax.management.relation.RelationException {
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
