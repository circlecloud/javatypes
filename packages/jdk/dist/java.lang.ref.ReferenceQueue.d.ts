declare namespace java {
    namespace lang {
        namespace ref {
            /**
             * ReferenceQueue is the container on which reference objects
             * are enqueued when their reachability type is detected for
             * the referent.
             * @author OTI
             * @version initial
             * @since 1.2
             */
            // @ts-ignore
            class ReferenceQueue<T> extends java.lang.Object {
                /**
                 * Constructs a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the next available reference from the queue
                 * if one is enqueued, null otherwise.  Does not wait
                 * for a reference to become available.
                 * @return Reference
                 * 					next available Reference or NULL.
                 */
                // @ts-ignore
                poll(): java.lang.ref.Reference<? extends T>
                /**
                 * Return the next available enqueued reference on the queue, blocking
                 * indefinitely until one is available.
                 * @author OTI
                 * @version initial
                 * @return Reference
                 * 					a Reference object if one is available,
                 *                   null otherwise.
                 * @exception InterruptedException
                 * 					to interrupt the wait.
                 */
                // @ts-ignore
                remove(): java.lang.ref.Reference<? extends T>
                /**
                 * Return the next available enqueued reference on the queue, blocking
                 * up to the time given until one is available.  Return null if no
                 * reference became available.
                 * @author OTI
                 * @version initial
                 * @param timeout
                 * 					maximum time spent waiting for a reference object
                 * 					to become available.
                 * @return Reference
                 * 					a Reference object if one is available,
                 *                   null otherwise.
                 * @exception IllegalArgumentException
                 * 					if the wait period is negative.
                 * @exception InterruptedException
                 * 					to interrupt the wait.
                 */
                // @ts-ignore
                remove(timeout: number /*long*/): java.lang.ref.Reference<? extends T>
            }
        }
    }
}
