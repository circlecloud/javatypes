declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Thrown on an unrecoverable problem encountered in the
             * beans packages or sub-packages, e.g. bad class or field.
             * @author Rod Johnson
             */
            // @ts-ignore
            class FatalBeanException extends org.springframework.beans.BeansException {
                /**
                 * Create a new FatalBeanException with the specified message.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Create a new FatalBeanException with the specified message
                 * and root cause.
                 * @param msg the detail message
                 * @param cause the root cause
                 */
                // @ts-ignore
                constructor(msg: string, cause: Error)
            }
        }
    }
}
