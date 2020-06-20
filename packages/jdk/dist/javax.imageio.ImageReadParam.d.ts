declare namespace javax {
    namespace imageio {
        /**
         * A class describing how a stream is to be decoded.  Instances of
         * this class or its subclasses are used to supply prescriptive
         * "how-to" information to instances of <code>ImageReader</code>.
         * <p> An image encoded as part of a file or stream may be thought of
         * extending out in multiple dimensions: the spatial dimensions of
         * width and height, a number of bands, and a number of progressive
         * decoding passes.  This class allows a contiguous (hyper)rectangular
         * subarea of the image in all of these dimensions to be selected for
         * decoding.  Additionally, the spatial dimensions may be subsampled
         * discontinuously.  Finally, color and format conversions may be
         * specified by controlling the <code>ColorModel</code> and
         * <code>SampleModel</code> of the destination image, either by
         * providing a <code>BufferedImage</code> or by using an
         * <code>ImageTypeSpecifier</code>.
         * <p> An <code>ImageReadParam</code> object is used to specify how an
         * image, or a set of images, will be converted on input from
         * a stream in the context of the Java Image I/O framework.  A plug-in for a
         * specific image format will return instances of
         * <code>ImageReadParam</code> from the
         * <code>getDefaultReadParam</code> method of its
         * <code>ImageReader</code> implementation.
         * <p> The state maintained by an instance of
         * <code>ImageReadParam</code> is independent of any particular image
         * being decoded.  When actual decoding takes place, the values set in
         * the read param are combined with the actual properties of the image
         * being decoded from the stream and the destination
         * <code>BufferedImage</code> that will receive the decoded pixel
         * data.  For example, the source region set using
         * <code>setSourceRegion</code> will first be intersected with the
         * actual valid source area.  The result will be translated by the
         * value returned by <code>getDestinationOffset</code>, and the
         * resulting rectangle intersected with the actual valid destination
         * area to yield the destination area that will be written.
         * <p> The parameters specified by an <code>ImageReadParam</code> are
         * applied to an image as follows.  First, if a rendering size has
         * been set by <code>setSourceRenderSize</code>, the entire decoded
         * image is rendered at the size given by
         * <code>getSourceRenderSize</code>.  Otherwise, the image has its
         * natural size given by <code>ImageReader.getWidth</code> and
         * <code>ImageReader.getHeight</code>.
         * <p> Next, the image is clipped against the source region
         * specified by <code>getSourceXOffset</code>, <code>getSourceYOffset</code>,
         * <code>getSourceWidth</code>, and <code>getSourceHeight</code>.
         * <p> The resulting region is then subsampled according to the
         * factors given in {@link IIOParam#setSourceSubsampling
         * IIOParam.setSourceSubsampling}.  The first pixel,
         * the number of pixels per row, and the number of rows all depend
         * on the subsampling settings.
         * Call the minimum X and Y coordinates of the resulting rectangle
         * (<code>minX</code>, <code>minY</code>), its width <code>w</code>
         * and its height <code>h</code>.
         * <p> This rectangle is offset by
         * (<code>getDestinationOffset().x</code>,
         * <code>getDestinationOffset().y</code>) and clipped against the
         * destination bounds.  If no destination image has been set, the
         * destination is defined to have a width of
         * <code>getDestinationOffset().x</code> + <code>w</code>, and a
         * height of <code>getDestinationOffset().y</code> + <code>h</code> so
         * that all pixels of the source region may be written to the
         * destination.
         * <p> Pixels that land, after subsampling, within the destination
         * image, and that are written in one of the progressive passes
         * specified by <code>getSourceMinProgressivePass</code> and
         * <code>getSourceNumProgressivePasses</code> are passed along to the
         * next step.
         * <p> Finally, the source samples of each pixel are mapped into
         * destination bands according to the algorithm described in the
         * comment for <code>setDestinationBands</code>.
         * <p> Plug-in writers may extend the functionality of
         * <code>ImageReadParam</code> by providing a subclass that implements
         * additional, plug-in specific interfaces.  It is up to the plug-in
         * to document what interfaces are available and how they are to be
         * used.  Readers will silently ignore any extended features of an
         * <code>ImageReadParam</code> subclass of which they are not aware.
         * Also, they may ignore any optional features that they normally
         * disable when creating their own <code>ImageReadParam</code>
         * instances via <code>getDefaultReadParam</code>.
         * <p> Note that unless a query method exists for a capability, it must
         * be supported by all <code>ImageReader</code> implementations
         * (<i>e.g.</i> source render size is optional, but subsampling must be
         * supported).
         * @see ImageReader
         * @see ImageWriter
         * @see ImageWriteParam
         */
        // @ts-ignore
        class ImageReadParam extends javax.imageio.IIOParam {
            /**
             * Constructs an <code>ImageReadParam</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * The desired rendering width and height of the source, if
             * <code>canSetSourceRenderSize</code> is <code>true</code>, or
             * <code>null</code>.
             * <p> <code>ImageReader</code>s that do not support setting of
             * the source render size may ignore this value.
             */
            // @ts-ignore
            sourceRenderSize: java.awt.Dimension
            /**
             * The current destination <code>BufferedImage</code>, or
             * <code>null</code> if none has been set.  By default, the value
             * is <code>null</code>.
             */
            // @ts-ignore
            destination: java.awt.image.BufferedImage
            /**
             * The set of destination bands to be used, as an array of
             * <code>int</code>s.  By default, the value is <code>null</code>,
             * indicating all destination bands should be written in order.
             */
            // @ts-ignore
            destinationBands: number /*int*/[]
            /**
             * The minimum index of a progressive pass to read from the
             * source.  By default, the value is set to 0, which indicates
             * that passes starting with the first available pass should be
             * decoded.
             * <p> Subclasses should ensure that this value is
             * non-negative.
             */
            // @ts-ignore
            minProgressivePass: number /*int*/
            /**
             * The maximum number of progressive passes to read from the
             * source.  By default, the value is set to
             * <code>Integer.MAX_VALUE</code>, which indicates that passes up
             * to and including the last available pass should be decoded.
             * <p> Subclasses should ensure that this value is positive.
             * Additionally, if the value is not
             * <code>Integer.MAX_VALUE</code>, then <code>minProgressivePass +
             * numProgressivePasses - 1</code> should not exceed
             * <code>Integer.MAX_VALUE</code>.
             */
            // @ts-ignore
            numProgressivePasses: number /*int*/
            // @ts-ignore
            setDestinationType(destinationType: javax.imageio.ImageTypeSpecifier): void
            /**
             * Supplies a <code>BufferedImage</code> to be used as the
             * destination for decoded pixel data.  The currently set image
             * will be written to by the <code>read</code>,
             * <code>readAll</code>, and <code>readRaster</code> methods, and
             * a reference to it will be returned by those methods.
             * <p> Pixel data from the aforementioned methods will be written
             * starting at the offset specified by
             * <code>getDestinationOffset</code>.
             * <p> If <code>destination</code> is <code>null</code>, a
             * newly-created <code>BufferedImage</code> will be returned by
             * those methods.
             * <p> At the time of reading, the image is checked to verify that
             * its <code>ColorModel</code> and <code>SampleModel</code>
             * correspond to one of the <code>ImageTypeSpecifier</code>s
             * returned from the <code>ImageReader</code>'s
             * <code>getImageTypes</code> method.  If it does not, the reader
             * will throw an <code>IIOException</code>.
             * @param destination the BufferedImage to be written to, or
             *  <code>null</code>.
             * @see #getDestination
             */
            // @ts-ignore
            setDestination(destination: java.awt.image.BufferedImage): void
            /**
             * Returns the <code>BufferedImage</code> currently set by the
             * <code>setDestination</code> method, or <code>null</code>
             * if none is set.
             * @return the BufferedImage to be written to.
             * @see #setDestination
             */
            // @ts-ignore
            getDestination(): java.awt.image.BufferedImage
            /**
             * Sets the indices of the destination bands where data
             * will be placed.  Duplicate indices are not allowed.
             * <p> A <code>null</code> value indicates that all destination
             * bands will be used.
             * <p> Choosing a destination band subset will not affect the
             * number of bands in the output image of a read if no destination
             * image is specified; the created destination image will still
             * have the same number of bands as if this method had never been
             * called.  If a different number of bands in the destination
             * image is desired, an image must be supplied using the
             * <code>ImageReadParam.setDestination</code> method.
             * <p> At the time of reading or writing, an
             * <code>IllegalArgumentException</code> will be thrown by the
             * reader or writer if a value larger than the largest destination
             * band index has been specified, or if the number of source bands
             * and destination bands to be used differ.  The
             * <code>ImageReader.checkReadParamBandSettings</code> method may
             * be used to automate this test.
             * @param destinationBands an array of integer band indices to be
             *  used.
             * @exception IllegalArgumentException if <code>destinationBands</code>
             *  contains a negative or duplicate value.
             * @see #getDestinationBands
             * @see #getSourceBands
             * @see ImageReader#checkReadParamBandSettings
             */
            // @ts-ignore
            setDestinationBands(destinationBands: number /*int*/[]): void
            /**
             * Returns the set of band indices where data will be placed.
             * If no value has been set, <code>null</code> is returned to
             * indicate that all destination bands will be used.
             * @return the indices of the destination bands to be used,
             *  or <code>null</code>.
             * @see #setDestinationBands
             */
            // @ts-ignore
            getDestinationBands(): int[]
            /**
             * Returns <code>true</code> if this reader allows the source
             * image to be rendered at an arbitrary size as part of the
             * decoding process, by means of the
             * <code>setSourceRenderSize</code> method.  If this method
             * returns <code>false</code>, calls to
             * <code>setSourceRenderSize</code> will throw an
             * <code>UnsupportedOperationException</code>.
             * @return <code>true</code> if setting source rendering size is
             *  supported.
             * @see #setSourceRenderSize
             */
            // @ts-ignore
            canSetSourceRenderSize(): boolean
            /**
             * If the image is able to be rendered at an arbitrary size, sets
             * the source width and height to the supplied values.  Note that
             * the values returned from the <code>getWidth</code> and
             * <code>getHeight</code> methods on <code>ImageReader</code> are
             * not affected by this method; they will continue to return the
             * default size for the image.  Similarly, if the image is also
             * tiled the tile width and height are given in terms of the default
             * size.
             * <p> Typically, the width and height should be chosen such that
             * the ratio of width to height closely approximates the aspect
             * ratio of the image, as returned from
             * <code>ImageReader.getAspectRatio</code>.
             * <p> If this plug-in does not allow the rendering size to be
             * set, an <code>UnsupportedOperationException</code> will be
             * thrown.
             * <p> To remove the render size setting, pass in a value of
             * <code>null</code> for <code>size</code>.
             * @param size a <code>Dimension</code> indicating the desired
             *  width and height.
             * @exception IllegalArgumentException if either the width or the
             *  height is negative or 0.
             * @exception UnsupportedOperationException if image resizing
             *  is not supported by this plug-in.
             * @see #getSourceRenderSize
             * @see ImageReader#getWidth
             * @see ImageReader#getHeight
             * @see ImageReader#getAspectRatio
             */
            // @ts-ignore
            setSourceRenderSize(size: java.awt.Dimension): void
            /**
             * Returns the width and height of the source image as it
             * will be rendered during decoding, if they have been set via the
             * <code>setSourceRenderSize</code> method.  A
             * <code>null</code>value indicates that no setting has been made.
             * @return the rendered width and height of the source image
             *  as a <code>Dimension</code>.
             * @see #setSourceRenderSize
             */
            // @ts-ignore
            getSourceRenderSize(): java.awt.Dimension
            /**
             * Sets the range of progressive passes that will be decoded.
             * Passes outside of this range will be ignored.
             * <p> A progressive pass is a re-encoding of the entire image,
             * generally at progressively higher effective resolutions, but
             * requiring greater transmission bandwidth.  The most common use
             * of progressive encoding is found in the JPEG format, where
             * successive passes include more detailed representations of the
             * high-frequency image content.
             * <p> The actual number of passes to be decoded is determined
             * during decoding, based on the number of actual passes available
             * in the stream.  Thus if <code>minPass + numPasses - 1</code> is
             * larger than the index of the last available passes, decoding
             * will end with that pass.
             * <p> A value of <code>numPasses</code> of
             * <code>Integer.MAX_VALUE</code> indicates that all passes from
             * <code>minPass</code> forward should be read.  Otherwise, the
             * index of the last pass (<i>i.e.</i>, <code>minPass + numPasses
             * - 1</code>) must not exceed <code>Integer.MAX_VALUE</code>.
             * <p> There is no <code>unsetSourceProgressivePasses</code>
             * method; the same effect may be obtained by calling
             * <code>setSourceProgressivePasses(0, Integer.MAX_VALUE)</code>.
             * @param minPass the index of the first pass to be decoded.
             * @param numPasses the maximum number of passes to be decoded.
             * @exception IllegalArgumentException if <code>minPass</code> is
             *  negative, <code>numPasses</code> is negative or 0, or
             *  <code>numPasses</code> is smaller than
             *  <code>Integer.MAX_VALUE</code> but <code>minPass +
             *  numPasses - 1</code> is greater than
             *  <code>INTEGER.MAX_VALUE</code>.
             * @see #getSourceMinProgressivePass
             * @see #getSourceMaxProgressivePass
             */
            // @ts-ignore
            setSourceProgressivePasses(minPass: number /*int*/, numPasses: number /*int*/): void
            /**
             * Returns the index of the first progressive pass that will be
             * decoded. If no value has been set, 0 will be returned (which is
             * the correct value).
             * @return the index of the first pass that will be decoded.
             * @see #setSourceProgressivePasses
             * @see #getSourceNumProgressivePasses
             */
            // @ts-ignore
            getSourceMinProgressivePass(): int
            /**
             * If <code>getSourceNumProgressivePasses</code> is equal to
             * <code>Integer.MAX_VALUE</code>, returns
             * <code>Integer.MAX_VALUE</code>.  Otherwise, returns
             * <code>getSourceMinProgressivePass() +
             * getSourceNumProgressivePasses() - 1</code>.
             * @return the index of the last pass to be read, or
             *  <code>Integer.MAX_VALUE</code>.
             */
            // @ts-ignore
            getSourceMaxProgressivePass(): int
            /**
             * Returns the number of the progressive passes that will be
             * decoded. If no value has been set,
             * <code>Integer.MAX_VALUE</code> will be returned (which is the
             * correct value).
             * @return the number of the passes that will be decoded.
             * @see #setSourceProgressivePasses
             * @see #getSourceMinProgressivePass
             */
            // @ts-ignore
            getSourceNumProgressivePasses(): int
        }
    }
}
