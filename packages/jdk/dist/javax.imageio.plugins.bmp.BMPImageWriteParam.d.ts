declare namespace javax {
    namespace imageio {
        namespace plugins {
            namespace bmp {
                /**
                 * A subclass of <code>ImageWriteParam</code> for encoding images in
                 * the BMP format.
                 * <p> This class allows for the specification of various parameters
                 * while writing a BMP format image file.  By default, the data layout
                 * is bottom-up, such that the pixels are stored in bottom-up order,
                 * the first scanline being stored last.
                 * <p>The particular compression scheme to be used can be specified by using
                 * the <code>setCompressionType()</code> method with the appropriate type
                 * string.  The compression scheme specified will be honored if and only if it
                 * is compatible with the type of image being written. If the specified
                 * compression scheme is not compatible with the type of image being written
                 * then the <code>IOException</code> will be thrown by the BMP image writer.
                 * If the compression type is not set explicitly then <code>getCompressionType()</code>
                 * will return <code>null</code>. In this case the BMP image writer will select
                 * a compression type that supports encoding of the given image without loss
                 * of the color resolution.
                 * <p>The compression type strings and the image type(s) each supports are
                 * listed in the following
                 * table:
                 * <p><table border=1>
                 * <caption><b>Compression Types</b></caption>
                 * <tr><th>Type String</th> <th>Description</th>  <th>Image Types</th></tr>
                 * <tr><td>BI_RGB</td>  <td>Uncompressed RLE</td> <td>{@literal <= } 8-bits/sample</td></tr>
                 * <tr><td>BI_RLE8</td> <td>8-bit Run Length Encoding</td> <td>{@literal <=} 8-bits/sample</td></tr>
                 * <tr><td>BI_RLE4</td> <td>4-bit Run Length Encoding</td> <td>{@literal <=} 4-bits/sample</td></tr>
                 * <tr><td>BI_BITFIELDS</td> <td>Packed data</td> <td> 16 or 32 bits/sample</td></tr>
                 * </table>
                 */
                // @ts-ignore
                class BMPImageWriteParam extends javax.imageio.ImageWriteParam {
                    /**
                     * Constructs a <code>BMPImageWriteParam</code> set to use a given
                     * <code>Locale</code> and with default values for all parameters.
                     * @param locale a <code>Locale</code> to be used to localize
                     *  compression type names and quality descriptions, or
                     *  <code>null</code>.
                     */
                    // @ts-ignore
                    constructor(locale: java.util.Locale)
                    /**
                     * Constructs an <code>BMPImageWriteParam</code> object with default
                     * values for all parameters and a <code>null</code> <code>Locale</code>.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * If set, the data will be written out in a top-down manner, the first
                     * scanline being written first.
                     * @param topDown whether the data are written in top-down order.
                     */
                    // @ts-ignore
                    setTopDown(topDown: boolean): void
                    /**
                     * Returns the value of the <code>topDown</code> parameter.
                     * The default is <code>false</code>.
                     * @return whether the data are written in top-down order.
                     */
                    // @ts-ignore
                    isTopDown(): boolean
                }
            }
        }
    }
}
