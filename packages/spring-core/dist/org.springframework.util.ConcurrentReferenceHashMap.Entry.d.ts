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
                    public getKey(): K
                    // @ts-ignore
                    public getValue(): V
                    // @ts-ignore
                    public setValue(value: V): V
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
