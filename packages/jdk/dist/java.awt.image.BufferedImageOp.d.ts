declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This interface describes single-input/single-output
             * operations performed on <CODE>BufferedImage</CODE> objects.
             * It is implemented by <CODE>AffineTransformOp</CODE>,
             * <CODE>ConvolveOp</CODE>, <CODE>ColorConvertOp</CODE>, <CODE>RescaleOp</CODE>,
             * and <CODE>LookupOp</CODE>.  These objects can be passed into
             * a <CODE>BufferedImageFilter</CODE> to operate on a
             * <CODE>BufferedImage</CODE> in the
             * ImageProducer-ImageFilter-ImageConsumer paradigm.
             * <p>
             * Classes that implement this
             * interface must specify whether or not they allow in-place filtering--
             * filter operations where the source object is equal to the destination
             * object.
             * <p>
             * This interface cannot be used to describe more sophisticated operations
             * such as those that take multiple sources. Note that this restriction also
             * means that the values of the destination pixels prior to the operation are
             * not used as input to the filter operation.
             * @see BufferedImage
             * @see BufferedImageFilter
             * @see AffineTransformOp
             * @see BandCombineOp
             * @see ColorConvertOp
             * @see ConvolveOp
             * @see LookupOp
             * @see RescaleOp
             */
            // @ts-ignore
            interface BufferedImageOp {
                /**
                 * Performs a single-input/single-output operation on a
                 * <CODE>BufferedImage</CODE>.
                 * If the color models for the two images do not match, a color
                 * conversion into the destination color model is performed.
                 * If the destination image is null,
                 * a <CODE>BufferedImage</CODE> with an appropriate <CODE>ColorModel</CODE>
                 * is created.
                 * <p>
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source
                 * and/or destination image is incompatible with the types of images       $
                 * allowed by the class implementing this filter.
                 * @param src The <CODE>BufferedImage</CODE> to be filtered
                 * @param dest The <CODE>BufferedImage</CODE> in which to store the results$
                 * @return The filtered <CODE>BufferedImage</CODE>.
                 * @throws IllegalArgumentException If the source and/or destination
                 *  image is not compatible with the types of images allowed by the class
                 *  implementing this filter.
                 */
                // @ts-ignore
                filter(src: java.awt.image.BufferedImage, dest: java.awt.image.BufferedImage): java.awt.image.BufferedImage
                /**
                 * Returns the bounding box of the filtered destination image.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source
                 * image is incompatible with the types of images allowed
                 * by the class implementing this filter.
                 * @param src The <CODE>BufferedImage</CODE> to be filtered
                 * @return The <CODE>Rectangle2D</CODE> representing the destination
                 *  image's bounding box.
                 */
                // @ts-ignore
                getBounds2D(src: java.awt.image.BufferedImage): java.awt.geom.Rectangle2D
                /**
                 * Creates a zeroed destination image with the correct size and number of
                 * bands.
                 * An <CODE>IllegalArgumentException</CODE> may be thrown if the source
                 * image is incompatible with the types of images allowed
                 * by the class implementing this filter.
                 * @param src The <CODE>BufferedImage</CODE> to be filtered
                 * @param destCM <CODE>ColorModel</CODE> of the destination.  If null,
                 *  the <CODE>ColorModel</CODE> of the source is used.
                 * @return The zeroed destination image.
                 */
                // @ts-ignore
                createCompatibleDestImage(src: java.awt.image.BufferedImage, destCM: java.awt.image.ColorModel): java.awt.image.BufferedImage
                /**
                 * Returns the location of the corresponding destination point given a
                 * point in the source image.  If <CODE>dstPt</CODE> is specified, it
                 * is used to hold the return value.
                 * @param srcPt the <code>Point2D</code> that represents the point in
                 *  the source image
                 * @param dstPt The <CODE>Point2D</CODE> in which to store the result
                 * @return The <CODE>Point2D</CODE> in the destination image that
                 *  corresponds to the specified point in the source image.
                 */
                // @ts-ignore
                getPoint2D(srcPt: java.awt.geom.Point2D, dstPt: java.awt.geom.Point2D): java.awt.geom.Point2D
                /**
                 * Returns the rendering hints for this operation.
                 * @return The <CODE>RenderingHints</CODE> object for this
                 *  <CODE>BufferedImageOp</CODE>.  Returns
                 *  null if no hints have been set.
                 */
                // @ts-ignore
                getRenderingHints(): java.awt.RenderingHints
            }
        }
    }
}
