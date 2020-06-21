declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This exception is raised when an access is done to the Relation Service and
             * that one is not registered.
             * @since 1.5
             */
            // @ts-ignore
            class RelationServiceNotRegisteredException extends javax.management.relation.RelationException {
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
