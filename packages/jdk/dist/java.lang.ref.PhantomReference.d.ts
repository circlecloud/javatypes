declare namespace java {
    namespace lang {
        namespace ref {
            /**
             * PhantomReference objects are used to detect referents which
             * are no longer visible and are eligible to have their storage
             * reclaimed.
             * @author OTI
             * @version initial
             * @since JDK1.2
             */
            // @ts-ignore
            class PhantomReference<T> extends java.lang.ref.Reference<T> {
                /**
                 * Constructs a new instance of this class.
                 * @param r
                 * 					referent to track.
                 * @param q
                 * 					queue to register to the reference object with.
                 */
                // @ts-ignore
                constructor(r: T, q: java.lang.ref.ReferenceQueue<any super T>)
                /**
                 * Return the referent of the reference object.  Phantom reference
                 * objects referents are inaccessible, and so null is returned.
                 * @return Object
                 * 					Returns null.
                 */
                // @ts-ignore
                get(): T
            }
        }
    }
}
