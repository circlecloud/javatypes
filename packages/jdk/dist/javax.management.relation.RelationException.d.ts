declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * This class is the superclass of any exception which can be raised during
             * relation management.
             * @since 1.5
             */
            // @ts-ignore
            class RelationException extends javax.management.JMException {
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
