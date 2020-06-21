declare namespace javax {
    namespace imageio {
        namespace plugins {
            namespace jpeg {
                /**
                 * A class encapsulating a single JPEG Huffman table.
                 * Fields are provided for the "standard" tables taken
                 * from Annex K of the JPEG specification.
                 * These are the tables used as defaults.
                 * <p>
                 * For more information about the operation of the standard JPEG plug-in,
                 * see the <A HREF="../../metadata/doc-files/jpeg_metadata.html">JPEG
                 * metadata format specification and usage notes</A>
                 */
                // @ts-ignore
                class JPEGHuffmanTable extends java.lang.Object {
                    /**
                     * Creates a Huffman table and initializes it. The input arrays are copied.
                     * The arrays must describe a possible Huffman table.
                     * For example, 3 codes cannot be expressed with a single bit.
                     * @param lengths an array of {#code short}s where <code>lengths[k]</code>
                     *  is equal to the number of values with corresponding codes of
                     *  length <code>k + 1</code> bits.
                     * @param values an array of shorts containing the values in
                     *  order of increasing code length.
                     * @throws IllegalArgumentException if <code>lengths</code> or
                     *  <code>values</code> are null, the length of <code>lengths</code> is
                     *  greater than 16, the length of <code>values</code> is greater than 256,
                     *  if any value in <code>lengths</code> or <code>values</code> is less
                     *  than zero, or if the arrays do not describe a valid Huffman table.
                     */
                    // @ts-ignore
                    constructor(lengths: number /*short*/[], values: number /*short*/[])
                    /**
                     * The standard DC luminance Huffman table.
                     */
                    // @ts-ignore
                    public static readonly StdDCLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    /**
                     * The standard DC chrominance Huffman table.
                     */
                    // @ts-ignore
                    public static readonly StdDCChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    /**
                     * The standard AC luminance Huffman table.
                     */
                    // @ts-ignore
                    public static readonly StdACLuminance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    /**
                     * The standard AC chrominance Huffman table.
                     */
                    // @ts-ignore
                    public static readonly StdACChrominance: javax.imageio.plugins.jpeg.JPEGHuffmanTable
                    /**
                     * Returns an array of <code>short</code>s containing the number of values
                     * for each length in the Huffman table. The returned array is a copy.
                     * @return a <code>short</code> array where <code>array[k-1]</code>
                     *  is equal to the number of values in the table of length <code>k</code>.
                     * @see #getValues
                     */
                    // @ts-ignore
                    public getLengths(): number /*short*/[]
                    /**
                     * Returns an array of <code>short</code>s containing the values arranged
                     * by increasing length of their corresponding codes.
                     * The interpretation of the array is dependent on the values returned
                     * from <code>getLengths</code>. The returned array is a copy.
                     * @return a <code>short</code> array of values.
                     * @see #getLengths
                     */
                    // @ts-ignore
                    public getValues(): number /*short*/[]
                    /**
                     * Returns a {@code String} representing this Huffman table.
                     * @return a {#code String} representing this Huffman table.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
