declare namespace org {
    namespace springframework {
        namespace util {
            namespace unit {
                /**
                 * A standard set of {@link DataSize} units.
                 * <p>The unit prefixes used in this class are
                 * <a href="https://en.wikipedia.org/wiki/Binary_prefix">binary prefixes</a>
                 * indicating multiplication by powers of 2. The following table displays the
                 * enum constants defined in this class and corresponding values.
                 * <p>
                 * <table border="1">
                 * <tr><th>Constant</th><th>Data Size</th><th>Power&nbsp;of&nbsp;2</th><th>Size in Bytes</th></tr>
                 * <tr><td>{@link #BYTES}</td><td>1B</td><td>2^0</td><td>1</td></tr>
                 * <tr><td>{@link #KILOBYTES}</td><td>1KB</td><td>2^10</td><td>1,024</td></tr>
                 * <tr><td>{@link #MEGABYTES}</td><td>1MB</td><td>2^20</td><td>1,048,576</td></tr>
                 * <tr><td>{@link #GIGABYTES}</td><td>1GB</td><td>2^30</td><td>1,073,741,824</td></tr>
                 * <tr><td>{@link #TERABYTES}</td><td>1TB</td><td>2^40</td><td>1,099,511,627,776</td></tr>
                 * </table>
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 5.1
                 * @see DataSize
                 */
                // @ts-ignore
                class DataUnit extends java.lang.Enum<org.springframework.util.unit.DataUnit> {
                    // @ts-ignore
                    values(): org.springframework.util.unit.DataUnit[]
                    // @ts-ignore
                    valueOf(name: string): org.springframework.util.unit.DataUnit
                    /**
                     * Return the {@link DataUnit} matching the specified {@code suffix}.
                     * @param suffix one of the standard suffixes
                     * @return the {#link DataUnit} matching the specified {@code suffix}
                     * @throws IllegalArgumentException if the suffix does not match the suffix
                     *  of any of this enum's constants
                     */
                    // @ts-ignore
                    fromSuffix(suffix: string): org.springframework.util.unit.DataUnit
                }
            }
        }
    }
}
