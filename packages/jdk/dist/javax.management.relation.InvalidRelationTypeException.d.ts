declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * Invalid relation type.
             * This exception is raised when, in a relation type, there is already a
             * relation type with that name, or the same name has been used for two
             * different role infos, or no role info provided, or one null role info
             * provided.
             * @since 1.5
             */
            // @ts-ignore
            class InvalidRelationTypeException extends javax.management.relation.RelationException {
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
