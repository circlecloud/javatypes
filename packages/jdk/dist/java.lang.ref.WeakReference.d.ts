declare namespace java {
    namespace lang {
        namespace ref {
            /**
             * WeakReference objects are used to detect referents which
             * are no longer visible.
             * @author OTI
             * @version initial
             * @since 1.2
             */
            // @ts-ignore
            class WeakReference<T> extends java.lang.ref.Reference<T> {
                /**
                 * Constructs a new instance of this class.
                 * @param r	referent to track.
                 * @param q	queue to register to the reference object with.
                 */
                // @ts-ignore
                constructor(r: T, q: java.lang.ref.ReferenceQueue<any super T>)
                /**
                 * Constructs a new instance of this class.
                 * @param r	referent to track.
                 */
                // @ts-ignore
                constructor(r: T)
            }
        }
    }
}
