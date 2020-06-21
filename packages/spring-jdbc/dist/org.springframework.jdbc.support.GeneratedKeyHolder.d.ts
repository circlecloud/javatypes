declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * The standard implementation of the {@link KeyHolder} interface, to be used for
                 * holding auto-generated keys (as potentially returned by JDBC insert statements).
                 * <p>Create an instance of this class for each insert operation, and pass it
                 * to the corresponding {@link org.springframework.jdbc.core.JdbcTemplate} or
                 * {@link org.springframework.jdbc.object.SqlUpdate} methods.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 1.1
                 */
                // @ts-ignore
                class GeneratedKeyHolder extends java.lang.Object implements org.springframework.jdbc.support.KeyHolder {
                    /**
                     * Create a new GeneratedKeyHolder with a default list.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new GeneratedKeyHolder with a given list.
                     * @param keyList a list to hold maps of keys
                     */
                    // @ts-ignore
                    constructor(keyList: java.util.List<java.util.Map<java.lang.String | string, java.lang.Object | any>> | Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>)
                    // @ts-ignore
                    public getKey(): java.lang.Number
                    // @ts-ignore
                    public getKeys(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public getKeyList(): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                }
            }
        }
    }
}
