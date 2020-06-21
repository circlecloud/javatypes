declare namespace org {
    namespace springframework {
        namespace util {
            namespace ConcurrentReferenceHashMap {
                /**
                 * Various reference types supported by this map.
                 */
                // @ts-ignore
                class ReferenceType extends java.lang.Enum<org.springframework.util.ConcurrentReferenceHashMap.ReferenceType> {
                    /**
                     * Use {@link SoftReference SoftReferences}.
                     */
                    // @ts-ignore
                    readonly SOFT: org.springframework.util.ConcurrentReferenceHashMap.ReferenceType
                    /**
                     * Use {@link WeakReference WeakReferences}.
                     */
                    // @ts-ignore
                    readonly WEAK: org.springframework.util.ConcurrentReferenceHashMap.ReferenceType
                    // @ts-ignore
                    values(): org.springframework.util.ConcurrentReferenceHashMap.ReferenceType[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.springframework.util.ConcurrentReferenceHashMap.ReferenceType
                }
            }
        }
    }
}
