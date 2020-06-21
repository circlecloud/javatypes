declare namespace org {
    namespace springframework {
        namespace jdbc {
            namespace support {
                /**
                 * Interface for retrieving keys, typically used for auto-generated keys
                 * as potentially returned by JDBC insert statements.
                 * <p>Implementations of this interface can hold any number of keys.
                 * In the general case, the keys are returned as a List containing one Map
                 * for each row of keys.
                 * <p>Most applications only use one key per row and process only one row at a
                 * time in an insert statement. In these cases, just call {@code getKey}
                 * to retrieve the key. The returned value is a Number here, which is the
                 * usual type for auto-generated keys.
                 * @author Thomas Risberg
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see org.springframework.jdbc.core.JdbcTemplate
                 * @see org.springframework.jdbc.object.SqlUpdate
                 */
                // @ts-ignore
                interface KeyHolder {
                    /**
                     * Retrieve the first item from the first map, assuming that there is just
                     * one item and just one map, and that the item is a number.
                     * This is the typical case: a single, numeric generated key.
                     * <p>Keys are held in a List of Maps, where each item in the list represents
                     * the keys for each row. If there are multiple columns, then the Map will have
                     * multiple entries as well. If this method encounters multiple entries in
                     * either the map or the list meaning that multiple keys were returned,
                     * then an InvalidDataAccessApiUsageException is thrown.
                     * @return the generated key as a number
                     * @throws InvalidDataAccessApiUsageException if multiple keys are encountered
                     */
                    // @ts-ignore
                    getKey(): java.lang.Number
                    /**
                     * Retrieve the first map of keys.
                     * <p>If there are multiple entries in the list (meaning that multiple rows
                     * had keys returned), then an InvalidDataAccessApiUsageException is thrown.
                     * @return the Map of generated keys for a single row
                     * @throws InvalidDataAccessApiUsageException if keys for multiple rows are encountered
                     */
                    // @ts-ignore
                    getKeys(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Return a reference to the List that contains the keys.
                     * <p>Can be used for extracting keys for multiple rows (an unusual case),
                     * and also for adding new maps of keys.
                     * @return the List for the generated keys, with each entry representing
                     *  an individual row through a Map of column names and key values
                     */
                    // @ts-ignore
                    getKeyList(): Array<java.util.Map<java.lang.String | string, java.lang.Object | any>>
                }
            }
        }
    }
}
