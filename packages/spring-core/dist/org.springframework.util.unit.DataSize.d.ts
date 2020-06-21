declare namespace org {
    namespace springframework {
        namespace util {
            namespace unit {
                /**
                 * A data size, such as '12MB'.
                 * <p>This class models data size in terms of bytes and is immutable and thread-safe.
                 * <p>The terms and units used in this class are based on
                 * <a href="https://en.wikipedia.org/wiki/Binary_prefix">binary prefixes</a>
                 * indicating multiplication by powers of 2. Consult the following table and
                 * the Javadoc for {@link DataUnit} for details.
                 * <p>
                 * <table border="1">
                 * <tr><th>Term</th><th>Data Size</th><th>Size in Bytes</th></tr>
                 * <tr><td>byte</td><td>1B</td><td>1</td></tr>
                 * <tr><td>kilobyte</td><td>1KB</td><td>1,024</td></tr>
                 * <tr><td>megabyte</td><td>1MB</td><td>1,048,576</td></tr>
                 * <tr><td>gigabyte</td><td>1GB</td><td>1,073,741,824</td></tr>
                 * <tr><td>terabyte</td><td>1TB</td><td>1,099,511,627,776</td></tr>
                 * </table>
                 * @author Stephane Nicoll
                 * @author Sam Brannen
                 * @since 5.1
                 * @see DataUnit
                 */
                // @ts-ignore
                class DataSize extends java.lang.Object implements java.lang.Comparable<org.springframework.util.unit.DataSize> {
                    /**
                     * Obtain a {@link DataSize} representing the specified number of bytes.
                     * @param bytes the number of bytes, positive or negative
                     * @return a {#link DataSize}
                     */
                    // @ts-ignore
                    public static ofBytes(bytes: number /*long*/): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} representing the specified number of kilobytes.
                     * @param kilobytes the number of kilobytes, positive or negative
                     * @return a {#link DataSize}
                     */
                    // @ts-ignore
                    public static ofKilobytes(kilobytes: number /*long*/): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} representing the specified number of megabytes.
                     * @param megabytes the number of megabytes, positive or negative
                     * @return a {#link DataSize}
                     */
                    // @ts-ignore
                    public static ofMegabytes(megabytes: number /*long*/): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} representing the specified number of gigabytes.
                     * @param gigabytes the number of gigabytes, positive or negative
                     * @return a {#link DataSize}
                     */
                    // @ts-ignore
                    public static ofGigabytes(gigabytes: number /*long*/): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} representing the specified number of terabytes.
                     * @param terabytes the number of terabytes, positive or negative
                     * @return a {#link DataSize}
                     */
                    // @ts-ignore
                    public static ofTerabytes(terabytes: number /*long*/): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} representing an amount in the specified {@link DataUnit}.
                     * @param amount the amount of the size, measured in terms of the unit,
                     *  positive or negative
                     * @return a corresponding {#link DataSize}
                     */
                    // @ts-ignore
                    public static of(amount: number /*long*/, unit: org.springframework.util.unit.DataUnit): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} from a text string such as {@code 12MB} using
                     * {@link DataUnit#BYTES} if no unit is specified.
                     * <p>
                     * Examples:
                     * <pre>
                     * "12KB" -- parses as "12 kilobytes"
                     * "5MB"  -- parses as "5 megabytes"
                     * "20"   -- parses as "20 bytes"
                     * </pre>
                     * @param text the text to parse
                     * @return the parsed {#link DataSize}
                     * @see #parse(CharSequence, DataUnit)
                     */
                    // @ts-ignore
                    public static parse(text: java.lang.CharSequence): org.springframework.util.unit.DataSize
                    /**
                     * Obtain a {@link DataSize} from a text string such as {@code 12MB} using
                     * the specified default {@link DataUnit} if no unit is specified.
                     * <p>
                     * The string starts with a number followed optionally by a unit matching one of the
                     * supported {@linkplain DataUnit suffixes}.
                     * <p>
                     * Examples:
                     * <pre>
                     * "12KB" -- parses as "12 kilobytes"
                     * "5MB"  -- parses as "5 megabytes"
                     * "20"   -- parses as "20 kilobytes" (where the {@code defaultUnit} is {@link DataUnit#KILOBYTES})
                     * </pre>
                     * @param text the text to parse
                     * @return the parsed {#link DataSize}
                     */
                    // @ts-ignore
                    public static parse(text: java.lang.CharSequence, defaultUnit: org.springframework.util.unit.DataUnit): org.springframework.util.unit.DataSize
                    /**
                     * Checks if this size is negative, excluding zero.
                     * @return true if this size has a size less than zero bytes
                     */
                    // @ts-ignore
                    public isNegative(): boolean
                    /**
                     * Return the number of bytes in this instance.
                     * @return the number of bytes
                     */
                    // @ts-ignore
                    public toBytes(): number /*long*/
                    /**
                     * Return the number of kilobytes in this instance.
                     * @return the number of kilobytes
                     */
                    // @ts-ignore
                    public toKilobytes(): number /*long*/
                    /**
                     * Return the number of megabytes in this instance.
                     * @return the number of megabytes
                     */
                    // @ts-ignore
                    public toMegabytes(): number /*long*/
                    /**
                     * Return the number of gigabytes in this instance.
                     * @return the number of gigabytes
                     */
                    // @ts-ignore
                    public toGigabytes(): number /*long*/
                    /**
                     * Return the number of terabytes in this instance.
                     * @return the number of terabytes
                     */
                    // @ts-ignore
                    public toTerabytes(): number /*long*/
                    // @ts-ignore
                    public compareTo(other: org.springframework.util.unit.DataSize): number /*int*/
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
