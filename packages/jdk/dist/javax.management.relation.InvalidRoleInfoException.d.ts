declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This exception is raised when, in a role info, its minimum degree is greater
             * than its maximum degree.
             * @since 1.5
             */
            // @ts-ignore
            class InvalidRoleInfoException extends javax.management.relation.RelationException {
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
