declare namespace javax {
    namespace imageio {
        namespace plugins {
            namespace jpeg {
                /**
                 * A class encapsulating a single JPEG quantization table.
                 * The elements appear in natural order (as opposed to zig-zag order).
                 * Static variables are provided for the "standard" tables taken from
                 * Annex K of the JPEG specification, as well as the default tables
                 * conventionally used for visually lossless encoding.
                 * <p>
                 * For more information about the operation of the standard JPEG plug-in,
                 * see the <A HREF="../../metadata/doc-files/jpeg_metadata.html">JPEG
                 * metadata format specification and usage notes</A>
                 */
                // @ts-ignore
                class JPEGQTable extends java.lang.Object {
                    /**
                     * Constructs a quantization table from the argument, which must
                     * contain 64 elements in natural order (not zig-zag order).
                     * A copy is made of the the input array.
                     * @param table the quantization table, as an <code>int</code> array.
                     * @throws IllegalArgumentException if <code>table</code> is
                     *  <code>null</code> or <code>table.length</code> is not equal to 64.
                     */
                    // @ts-ignore
                    constructor(table: number /*int*/[])
                    /**
                     * The sample luminance quantization table given in the JPEG
                     * specification, table K.1. According to the specification,
                     * these values produce "good" quality output.
                     * @see #K1Div2Luminance
                     */
                    // @ts-ignore
                    readonly K1Luminance: javax.imageio.plugins.jpeg.JPEGQTable
                    /**
                     * The sample luminance quantization table given in the JPEG
                     * specification, table K.1, with all elements divided by 2.
                     * According to the specification, these values produce "very good"
                     * quality output. This is the table usually used for "visually lossless"
                     * encoding, and is the default luminance table used if the default
                     * tables and quality settings are used.
                     * @see #K1Luminance
                     */
                    // @ts-ignore
                    readonly K1Div2Luminance: javax.imageio.plugins.jpeg.JPEGQTable
                    /**
                     * The sample chrominance quantization table given in the JPEG
                     * specification, table K.2. According to the specification,
                     * these values produce "good" quality output.
                     * @see #K2Div2Chrominance
                     */
                    // @ts-ignore
                    readonly K2Chrominance: javax.imageio.plugins.jpeg.JPEGQTable
                    /**
                     * The sample chrominance quantization table given in the JPEG
                     * specification, table K.1, with all elements divided by 2.
                     * According to the specification, these values produce "very good"
                     * quality output. This is the table usually used for "visually lossless"
                     * encoding, and is the default chrominance table used if the default
                     * tables and quality settings are used.
                     * @see #K2Chrominance
                     */
                    // @ts-ignore
                    readonly K2Div2Chrominance: javax.imageio.plugins.jpeg.JPEGQTable
                    /**
                     * Returns a copy of the current quantization table as an array
                     * of {@code int}s in natural (not zig-zag) order.
                     * @return A copy of the current quantization table.
                     */
                    // @ts-ignore
                    getTable(): int[]
                    /**
                     * Returns a new quantization table where the values are multiplied
                     * by <code>scaleFactor</code> and then clamped to the range 1..32767
                     * (or to 1..255 if <code>forceBaseline</code> is true).
                     * <p>
                     * Values of <code>scaleFactor</code> less than 1 tend to improve
                     * the quality level of the table, and values greater than 1.0
                     * degrade the quality level of the table.
                     * @param scaleFactor multiplication factor for the table.
                     * @param forceBaseline if <code>true</code>,
                     *  the values will be clamped to the range 1..255
                     * @return a new quantization table that is a linear multiple
                     *  of the current table.
                     */
                    // @ts-ignore
                    getScaledInstance(scaleFactor: number /*float*/, forceBaseline: boolean): javax.imageio.plugins.jpeg.JPEGQTable
                    /**
                     * Returns a {@code String} representing this quantization table.
                     * @return a {#code String} representing this quantization table.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
