declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * A <code>SkeletonNotFoundException</code> is thrown if the
             * <code>Skeleton</code> corresponding to the remote object being
             * exported is not found.  Skeletons are no longer required, so this
             * exception is never thrown.
             * @since JDK1.1
             * @deprecated no replacement.  Skeletons are no longer required for remote
             *  method calls in the Java 2 platform v1.2 and greater.
             */
            // @ts-ignore
            class SkeletonNotFoundException extends java.rmi.RemoteException {
                /**
                 * Constructs a <code>SkeletonNotFoundException</code> with the specified
                 * detail message.
                 * @param s the detail message.
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
                /**
                 * Constructs a <code>SkeletonNotFoundException</code> with the specified
                 * detail message and nested exception.
                 * @param s the detail message.
                 * @param ex the nested exception
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string, ex: java.lang.Exception)
            }
        }
    }
}
