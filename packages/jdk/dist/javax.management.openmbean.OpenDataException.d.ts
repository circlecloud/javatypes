declare namespace javax {
    namespace management {
        namespace openmbean {
            /**
             * This checked exception is thrown when an <i>open type</i>, an <i>open data</i>  or an <i>open MBean metadata info</i> instance
             * could not be constructed because one or more validity constraints were not met.
             * @since 1.5
             */
            // @ts-ignore
            class OpenDataException extends javax.management.JMException {
                /**
                 * An OpenDataException with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * An OpenDataException with a detail message.
                 * @param msg the detail message.
                 */
                // @ts-ignore
                constructor(msg: string)
            }
        }
    }
}
