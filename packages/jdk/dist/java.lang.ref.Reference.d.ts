declare namespace java {
    namespace lang {
        namespace ref {
            /**
             * Abstract class which describes behavior common to all reference objects.
             * @author OTI
             * @version initial
             * @since 1.2
             */
            // @ts-ignore
            abstract class Reference<T> extends java.lang.Object {
                /**
                 * Make the referent null.  This does not force the reference object to be enqueued.
                 */
                // @ts-ignore
                public clear(): void
                /**
                 * Force the reference object to be enqueued if it has been associated with a queue.
                 * @return true if Reference is enqueued, false otherwise.
                 */
                // @ts-ignore
                public enqueue(): boolean
                /**
                 * Return the referent of the reference object.
                 * @return the referent to which reference refers,
                 * 			or null if object has been cleared.
                 */
                // @ts-ignore
                public get(): T
                /**
                 * Return whether the reference object has been enqueued.
                 * @return true if Reference has been enqueued, false otherwise.
                 */
                // @ts-ignore
                public isEnqueued(): boolean
            }
        }
    }
}
