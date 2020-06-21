declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This exception is raised when there is no role info with given name in a
             * given relation type.
             * @since 1.5
             */
            // @ts-ignore
            class RoleInfoNotFoundException extends javax.management.relation.RelationException {
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
                constructor(message: java.lang.String | string)
            }
        }
    }
}
