declare namespace java {
    namespace lang {
        namespace ref {
            /**
             * SoftReference objects are used to detect referents which
             * are no longer visible and who's memory is to be reclaimed.
             * @author OTI
             * @version initial
             * @since 1.2
             */
            // @ts-ignore
            class SoftReference<T> extends java.lang.ref.Reference<T> {
                /**
                 * Constructs a new instance of this class.
                 * @param r	referent to track.
                 * @param q	queue to register to the reference object with.
                 */
                // @ts-ignore
                constructor(r: T, q: java.lang.ref.ReferenceQueue<any>)
                /**
                 * Constructs a new instance of this class.
                 * @param r	referent to track.
                 */
                // @ts-ignore
                constructor(r: T)
                /**
                 * Return the referent of the reference object.
                 * @return Referent to which reference refers,
                 * 			or null if object has been cleared.
                 */
                // @ts-ignore
                public get(): T
            }
        }
    }
}
