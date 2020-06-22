declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * A {@link Comparable} software version
                 * @author Jennifer Hickey
                 * @author Christoph Strobl
                 * @deprecated since 2.0, use {#link org.springframework.data.util.Version}.
                 */
                // @ts-ignore
                class Version extends java.lang.Object implements java.lang.Comparable<org.springframework.data.redis.Version> {
                    // @ts-ignore
                    constructor(major: number /*int*/, minor: number /*int*/, patch: number /*int*/)
                    // @ts-ignore
                    public static readonly UNKNOWN: org.springframework.data.redis.Version
                    // @ts-ignore
                    public compareTo(o: org.springframework.data.redis.Version): number /*int*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                }
            }
        }
    }
}
