declare namespace org {
    namespace springframework {
        namespace util {
            namespace ConcurrentReferenceHashMap {
                /**
                 * A single map entry.
                 * @param <K> the key type
                 * @param <V> the value type
                 */
                // @ts-ignore
                class Entry<K, V> extends java.lang.Object implements java.util.Map.Entry<K, V> {
                    // @ts-ignore
                    constructor(key: K, value: V)
                    // @ts-ignore
                    getKey(): K
                    // @ts-ignore
                    getValue(): V
                    // @ts-ignore
                    setValue(value: V): V
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
