declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Comparator capable of sorting exceptions based on their depth from the thrown exception type.
             * @author Juergen Hoeller
             * @author Arjen Poutsma
             * @since 3.0.3
             */
            // @ts-ignore
            class ExceptionDepthComparator extends java.lang.Object implements java.util.Comparator<java.lang.Class<any>> {
                /**
                 * Create a new ExceptionDepthComparator for the given exception.
                 * @param exception the target exception to compare to when sorting by depth
                 */
                // @ts-ignore
                constructor(exception: java.lang.Throwable | Error)
                /**
                 * Create a new ExceptionDepthComparator for the given exception type.
                 * @param exceptionType the target exception type to compare to when sorting by depth
                 */
                // @ts-ignore
                constructor(exceptionType: java.lang.Class<any>)
                // @ts-ignore
                public compare(o1: java.lang.Class<any>, o2: java.lang.Class<any>): number /*int*/
                /**
                 * Obtain the closest match from the given exception types for the given target exception.
                 * @param exceptionTypes the collection of exception types
                 * @param targetException the target exception to find a match for
                 * @return the closest matching exception type from the given collection
                 */
                // @ts-ignore
                public static findClosestMatch(exceptionTypes: java.util.Collection<java.lang.Class<any>> | Array<java.lang.Class<any>>, targetException: java.lang.Throwable | Error): java.lang.Class<any>
            }
        }
    }
}
