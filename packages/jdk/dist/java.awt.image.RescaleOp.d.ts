declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class performs a pixel-by-pixel rescaling of the data in the
             * source image by multiplying the sample values for each pixel by a scale
             * factor and then adding an offset. The scaled sample values are clipped
             * to the minimum/maximum representable in the destination image.
             * <p>
             * The pseudo code for the rescaling operation is as follows:
             * <pre>
             * for each pixel from Source object {
             * for each band/component of the pixel {
             * dstElement = (srcElement*scaleFactor) + offset
             * }
             * }
             * </pre>
             * <p>
             * For Rasters, rescaling operates on bands.  The number of
             * sets of scaling constants may be one, in which case the same constants
             * are applied to all bands, or it must equal the number of Source
             * Raster bands.
             * <p>
             * For BufferedImages, rescaling operates on color and alpha components.
             * The number of sets of scaling constants may be one, in which case the
             * same constants are applied to all color (but not alpha) components.
             * Otherwise, the  number of sets of scaling constants may
             * equal the number of Source color components, in which case no
             * rescaling of the alpha component (if present) is performed.
             * If neither of these cases apply, the number of sets of scaling constants
             * must equal the number of Source color components plus alpha components,
             * in which case all color and alpha components are rescaled.
             * <p>
             * BufferedImage sources with premultiplied alpha data are treated in the same
             * manner as non-premultiplied images for purposes of rescaling.  That is,
             * the rescaling is done per band on the raw data of the BufferedImage source
             * without regard to whether the data is premultiplied.  If a color conversion
             * is required to the destination ColorModel, the premultiplied state of
             * both source and destination will be taken into account for this step.
             * <p>
             * Images with an IndexColorModel cannot be rescaled.
             * <p>
             * If a RenderingHints object is specified in the constructor, the
             * color rendering hint and the dithering hint may be used when color
             * conversion is required.
             * <p>
             * Note that in-place operation is allowed (i.e. the source and destination can
             * be the same object).
             * @see java.awt.RenderingHints#KEY_COLOR_RENDERING
             * @see java.awt.RenderingHints#KEY_DITHERING
             */
            // @ts-ignore
            class RescaleOp extends java.lang.Object implements java.awt.image.BufferedImageOp, java.awt.image.RasterOp {
                /**
                 * Constructs a new RescaleOp with the desired scale factors
                 * and offsets.  The length of the scaleFactor and offset arrays
                 * must meet the restrictions stated in the class comments above.
                 * The RenderingHints argument may be null.
                 * @param scaleFactors the specified scale factors
                 * @param offsets the specified offsets
                 * @param hints the specified <code>RenderingHints</code>, or
                 *         <code>null</code>
                 */
                // @ts-ignore
                constructor(scaleFactors: number /*float*/[], offsets: number /*float*/[], hints: java.awt.RenderingHints)
                /**
                 * Constructs a new RescaleOp with the desired scale factor
                 * and offset.  The scaleFactor and offset will be applied to
                 * all bands in a source Raster and to all color (but not alpha)
                 * components in a BufferedImage.
                 * The RenderingHints argument may be null.
                 * @param scaleFactor the specified scale factor
                 * @param offset the specified offset
                 * @param hints the specified <code>RenderingHints</code>, or
                 *         <code>null</code>
                 */
                // @ts-ignore
                constructor(scaleFactor: number /*float*/, offset: number /*float*/, hints: java.awt.RenderingHints)
                /**
                 * Returns the scale factors in the given array. The array is also
                 * returned for convenience.  If scaleFactors is null, a new array
                 * will be allocated.
                 * @param scaleFactors the array to contain the scale factors of
                 *         this <code>RescaleOp</code>
                 * @return the scale factors of this <code>RescaleOp</code>.
                 */
                // @ts-ignore
                getScaleFactors(scaleFactors: number /*float*/[]): float[]
                /**
                 * Returns the offsets in the given array. The array is also returned
                 * for convenience.  If offsets is null, a new array
                 * will be allocated.
                 * @param offsets the array to contain the offsets of
                 *         this <code>RescaleOp</code>
                 * @return the offsets of this <code>RescaleOp</code>.
                 */
                // @ts-ignore
                getOffsets(offsets: number /*float*/[]): float[]
                /**
                 * Returns the number of scaling factors and offsets used in this
                 * RescaleOp.
                 * @return the number of scaling factors and offsets of this
                 *          <code>RescaleOp</code>.
                 */
                // @ts-ignore
                getNumFactors(): int
                /**
                 * Rescales the source BufferedImage.
                 * If the color model in the source image is not the same as that
                 * in the destination image, the pixels will be converted
                 * in the destination.  If the destination image is null,
                 * a BufferedImage will be created with the source ColorModel.
                 * An IllegalArgumentException may be thrown if the number of
                 * scaling factors/offsets in this object does not meet the
                 * restrictions stated in the class comments above, or if the
                 * source image has an IndexColorModel.
                 * @param src the <code>BufferedImage</code> to be filtered
                 * @param dst the destination for the filtering operation
                 *             or <code>null</code>
                 * @return the filtered <code>BufferedImage</code>.
                 * @throws IllegalArgumentException if the <code>ColorModel</code>
                 *          of <code>src</code> is an <code>IndexColorModel</code>,
                 *          or if the number of scaling factors and offsets in this
                 *          <code>RescaleOp</code> do not meet the requirements
                 *          stated in the class comments.
                 */
                // @ts-ignore
                filter(src: java.awt.image.BufferedImage, dst: java.awt.image.BufferedImage): java.awt.image.BufferedImage
                /**
                 * Rescales the pixel data in the source Raster.
                 * If the destination Raster is null, a new Raster will be created.
                 * The source and destination must have the same number of bands.
                 * Otherwise, an IllegalArgumentException is thrown.
                 * Note that the number of scaling factors/offsets in this object must
                 * meet the restrictions stated in the class comments above.
                 * Otherwise, an IllegalArgumentException is thrown.
                 * @param src the <code>Raster</code> to be filtered
                 * @param dst the destination for the filtering operation
                 *             or <code>null</code>
                 * @return the filtered <code>WritableRaster</code>.
                 * @throws IllegalArgumentException if <code>src</code> and
                 *          <code>dst</code> do not have the same number of bands,
                 *          or if the number of scaling factors and offsets in this
                 *          <code>RescaleOp</code> do not meet the requirements
                 *          stated in the class comments.
                 */
                // @ts-ignore
                filter(src: java.awt.image.Raster, dst: java.awt.image.WritableRaster): java.awt.image.WritableRaster
                /**
                 * Returns the bounding box of the rescaled destination image.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 */
                // @ts-ignore
                getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
                /**
                 * Returns the bounding box of the rescaled destination Raster.  Since
                 * this is not a geometric operation, the bounding box does not
                 * change.
                 * @param src the rescaled destination <code>Raster</code>
                 * @return the bounds of the specified <code>Raster</code>.
                 */
                // @ts-ignore
                getBounds2D(src: java.awt.image.Raster): java.awt.geom.Rectangle2D
                /**
                 * Creates a zeroed destination image with the correct size and number of
                 * bands.
                 * @param src       Source image for the filter operation.
                 * @param destCM    ColorModel of the destination.  If null, the
                 *                   ColorModel of the source will be used.
                 * @return the zeroed-destination image.
                 */
                // @ts-ignore
                createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage
                /**
                 * Creates a zeroed-destination <code>Raster</code> with the correct
                 * size and number of bands, given this source.
                 * @param src       the source <code>Raster</code>
                 * @return the zeroed-destination <code>Raster</code>.
                 */
                // @ts-ignore
                createCompatibleDestRaster(src: java.awt.image.Raster): java.awt.image.WritableRaster
                /**
                 * Returns the location of the destination point given a
                 * point in the source.  If dstPt is non-null, it will
                 * be used to hold the return value.  Since this is not a geometric
                 * operation, the srcPt will equal the dstPt.
                 * @param srcPt a point in the source image
                 * @param dstPt the destination point or <code>null</code>
                 * @return the location of the destination point.
                 */
                // @ts-ignore
                getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D
                /**
                 * Returns the rendering hints for this op.
                 * @return the rendering hints of this <code>RescaleOp</code>.
                 */
                // @ts-ignore
                getRenderingHints(): java.awt.RenderingHints
            }
        }
    }
}
