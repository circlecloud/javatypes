declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class implements a convolution from the source
             * to the destination.
             * Convolution using a convolution kernel is a spatial operation that
             * computes the output pixel from an input pixel by multiplying the kernel
             * with the surround of the input pixel.
             * This allows the output pixel to be affected by the immediate neighborhood
             * in a way that can be mathematically specified with a kernel.
             * <p>
             * This class operates with BufferedImage data in which color components are
             * premultiplied with the alpha component.  If the Source BufferedImage has
             * an alpha component, and the color components are not premultiplied with
             * the alpha component, then the data are premultiplied before being
             * convolved.  If the Destination has color components which are not
             * premultiplied, then alpha is divided out before storing into the
             * Destination (if alpha is 0, the color components are set to 0).  If the
             * Destination has no alpha component, then the resulting alpha is discarded
             * after first dividing it out of the color components.
             * <p>
             * Rasters are treated as having no alpha channel.  If the above treatment
             * of the alpha channel in BufferedImages is not desired, it may be avoided
             * by getting the Raster of a source BufferedImage and using the filter method
             * of this class which works with Rasters.
             * <p>
             * If a RenderingHints object is specified in the constructor, the
             * color rendering hint and the dithering hint may be used when color
             * conversion is required.
             * <p>
             * Note that the Source and the Destination may not be the same object.
             * @see Kernel
             * @see java.awt.RenderingHints#KEY_COLOR_RENDERING
             * @see java.awt.RenderingHints#KEY_DITHERING
             */
            // @ts-ignore
            class ConvolveOp extends java.lang.Object implements java.awt.image.BufferedImageOp, java.awt.image.RasterOp {
                /**
                 * Constructs a ConvolveOp given a Kernel, an edge condition, and a
                 * RenderingHints object (which may be null).
                 * @param kernel the specified <code>Kernel</code>
                 * @param edgeCondition the specified edge condition
                 * @param hints the specified <code>RenderingHints</code> object
                 * @see Kernel
                 * @see #EDGE_NO_OP
                 * @see #EDGE_ZERO_FILL
                 * @see java.awt.RenderingHints
                 */
                // @ts-ignore
                constructor(kernel: java.awt.image.Kernel, edgeCondition: number /*int*/, hints: java.awt.RenderingHints)
                /**
                 * Constructs a ConvolveOp given a Kernel.  The edge condition
                 * will be EDGE_ZERO_FILL.
                 * @param kernel the specified <code>Kernel</code>
                 * @see Kernel
                 * @see #EDGE_ZERO_FILL
                 */
                // @ts-ignore
                constructor(kernel: java.awt.image.Kernel)
                /**
                 * Pixels at the edge of the destination image are set to zero.  This
                 * is the default.
                 */
                // @ts-ignore
                public static readonly EDGE_ZERO_FILL: number /*int*/
                /**
                 * Pixels at the edge of the source image are copied to
                 * the corresponding pixels in the destination without modification.
                 */
                // @ts-ignore
                public static readonly EDGE_NO_OP: number /*int*/
                /**
                 * Returns the edge condition.
                 * @return the edge condition of this <code>ConvolveOp</code>.
                 * @see #EDGE_NO_OP
                 * @see #EDGE_ZERO_FILL
                 */
                // @ts-ignore
                public getEdgeCondition(): number /*int*/
                /**
                 * Returns the Kernel.
                 * @return the <code>Kernel</code> of this <code>ConvolveOp</code>.
                 */
                // @ts-ignore
                public getKernel(): java.awt.image.Kernel
                /**
                 * Performs a convolution on BufferedImages.  Each component of the
                 * source image will be convolved (including the alpha component, if
                 * present).
                 * If the color model in the source image is not the same as that
                 * in the destination image, the pixels will be converted
                 * in the destination.  If the destination image is null,
                 * a BufferedImage will be created with the source ColorModel.
                 * The IllegalArgumentException may be thrown if the source is the
                 * same as the destination.
                 * @param src the source <code>BufferedImage</code> to filter
                 * @param dst the destination <code>BufferedImage</code> for the
                 *         filtered <code>src</code>
                 * @return the filtered <code>BufferedImage</code>
                 * @throws NullPointerException if <code>src</code> is <code>null</code>
                 * @throws IllegalArgumentException if <code>src</code> equals
                 *          <code>dst</code>
                 * @throws ImagingOpException if <code>src</code> cannot be filtered
                 */
                // @ts-ignore
                public filter(src: java.awt.image.BufferedImage, dst: java.awt.image.BufferedImage): java.awt.image.BufferedImage
                /**
                 * Performs a convolution on Rasters.  Each band of the source Raster
                 * will be convolved.
                 * The source and destination must have the same number of bands.
                 * If the destination Raster is null, a new Raster will be created.
                 * The IllegalArgumentException may be thrown if the source is
                 * the same as the destination.
                 * @param src the source <code>Raster</code> to filter
                 * @param dst the destination <code>WritableRaster</code> for the
                 *         filtered <code>src</code>
                 * @return the filtered <code>WritableRaster</code>
                 * @throws NullPointerException if <code>src</code> is <code>null</code>
                 * @throws ImagingOpException if <code>src</code> and <code>dst</code>
                 *          do not have the same number of bands
                 * @throws ImagingOpException if <code>src</code> cannot be filtered
                 * @throws IllegalArgumentException if <code>src</code> equals
                 *          <code>dst</code>
                 */
                // @ts-ignore
                public filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster
                /**
                 * Creates a zeroed destination image with the correct size and number
                 * of bands.  If destCM is null, an appropriate ColorModel will be used.
                 * @param src       Source image for the filter operation.
                 * @param destCM    ColorModel of the destination.  Can be null.
                 * @return a destination <code>BufferedImage</code> with the correct
                 *          size and number of bands.
                 */
                // @ts-ignore
                public createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage
                /**
                 * Creates a zeroed destination Raster with the correct size and number
                 * of bands, given this source.
                 */
                // @ts-ignore
                public createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster
                /**
                 * Returns the bounding box of the filtered destination image.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
                /**
                 * Returns the bounding box of the filtered destination Raster.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                public getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D
                /**
                 * Returns the location of the destination point given a
                 * point in the source.  If dstPt is non-null, it will
                 * be used to hold the return value.  Since this is not a geometric
                 * operation, the srcPt will equal the dstPt.
                 */
                // @ts-ignore
                public getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D
                /**
                 * Returns the rendering hints for this op.
                 */
                // @ts-ignore
                public getRenderingHints(): java.awt.RenderingHints
            }
        }
    }
}
