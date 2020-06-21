declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Combined exception, composed of individual PropertyAccessException instances.
             * An object of this class is created at the beginning of the binding
             * process, and errors added to it as necessary.
             * <p>The binding process continues when it encounters application-level
             * PropertyAccessExceptions, applying those changes that can be applied
             * and storing rejected changes in an object of this class.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 18 April 2001
             */
            // @ts-ignore
            class PropertyBatchUpdateException extends org.springframework.beans.BeansException {
                /**
                 * Create a new PropertyBatchUpdateException.
                 * @param propertyAccessExceptions the List of PropertyAccessExceptions
                 */
                // @ts-ignore
                constructor(propertyAccessExceptions: org.springframework.beans.PropertyAccessException[])
                /**
                 * If this returns 0, no errors were encountered during binding.
                 */
                // @ts-ignore
                public getExceptionCount(): number /*int*/
                /**
                 * Return an array of the propertyAccessExceptions stored in this object.
                 * <p>Will return the empty array (not {@code null}) if there were no errors.
                 */
                // @ts-ignore
                public getPropertyAccessExceptions(): org.springframework.beans.PropertyAccessException[]
                /**
                 * Return the exception for this field, or {@code null} if there isn't any.
                 */
                // @ts-ignore
                public getPropertyAccessException(propertyName: java.lang.String | string): org.springframework.beans.PropertyAccessException
                // @ts-ignore
                public getMessage(): string
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public printStackTrace(ps: java.io.PrintStream): void
                // @ts-ignore
                public printStackTrace(pw: java.io.PrintWriter): void
                // @ts-ignore
                public contains(exType: java.lang.Class<any>): boolean
            }
        }
    }
}
