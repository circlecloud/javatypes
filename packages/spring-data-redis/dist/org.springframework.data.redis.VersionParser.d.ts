declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * Central class for reading version string (eg. {@literal 1.3.1}) into {@link Version}.
                 * @author Christoph Strobl
                 * @since 1.3
                 * @deprecated since 2.0, use {#link org.springframework.data.util.Version}.
                 */
                // @ts-ignore
                class VersionParser extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Parse version string {@literal eg. 1.1.1} to {@link Version}.
                     * @param version can be {#literal null}.
                     * @return never {#literal null}.
                     */
                    // @ts-ignore
                    public static parseVersion(version: java.lang.String | string): org.springframework.data.redis.Version
                }
            }
        }
    }
}
