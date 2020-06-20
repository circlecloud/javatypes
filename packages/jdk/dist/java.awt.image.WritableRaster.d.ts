declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class extends Raster to provide pixel writing capabilities.
             * Refer to the class comment for Raster for descriptions of how
             * a Raster stores pixels.
             * <p> The constructors of this class are protected.  To instantiate
             * a WritableRaster, use one of the createWritableRaster factory methods
             * in the Raster class.
             */
            // @ts-ignore
            class WritableRaster extends java.awt.image.Raster {
                /**
                 * Constructs a WritableRaster with the given SampleModel.  The
                 * WritableRaster's upper left corner is origin and it is the
                 * same size as the  SampleModel.  A DataBuffer large enough to
                 * describe the WritableRaster is automatically created.
                 * @param sampleModel     The SampleModel that specifies the layout.
                 * @param origin          The Point that specifies the origin.
                 * @throws RasterFormatException if computing either
                 *           <code>origin.x + sampleModel.getWidth()</code> or
                 *           <code>origin.y + sampleModel.getHeight()</code> results
                 *           in integer overflow
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, origin: java.awt.Point)
                /**
                 * Constructs a WritableRaster with the given SampleModel and DataBuffer.
                 * The WritableRaster's upper left corner is origin and it is the same
                 * size as the SampleModel.  The DataBuffer is not initialized and must
                 * be compatible with SampleModel.
                 * @param sampleModel     The SampleModel that specifies the layout.
                 * @param dataBuffer      The DataBuffer that contains the image data.
                 * @param origin          The Point that specifies the origin.
                 * @throws RasterFormatException if computing either
                 *           <code>origin.x + sampleModel.getWidth()</code> or
                 *           <code>origin.y + sampleModel.getHeight()</code> results
                 *           in integer overflow
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, dataBuffer: java.awt.image.DataBuffer, origin: java.awt.Point)
                /**
                 * Constructs a WritableRaster with the given SampleModel, DataBuffer,
                 * and parent.  aRegion specifies the bounding rectangle of the new
                 * Raster.  When translated into the base Raster's coordinate
                 * system, aRegion must be contained by the base Raster.
                 * (The base Raster is the Raster's ancestor which has no parent.)
                 * sampleModelTranslate specifies the sampleModelTranslateX and
                 * sampleModelTranslateY values of the new Raster.
                 * Note that this constructor should generally be called by other
                 * constructors or create methods, it should not be used directly.
                 * @param sampleModel     The SampleModel that specifies the layout.
                 * @param dataBuffer      The DataBuffer that contains the image data.
                 * @param aRegion         The Rectangle that specifies the image area.
                 * @param sampleModelTranslate  The Point that specifies the translation
                 *                         from SampleModel to Raster coordinates.
                 * @param parent          The parent (if any) of this raster.
                 * @throws RasterFormatException if <code>aRegion</code> has width
                 *          or height less than or equal to zero, or computing either
                 *          <code>aRegion.x + aRegion.width</code> or
                 *          <code>aRegion.y + aRegion.height</code> results in integer
                 *          overflow
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, dataBuffer: java.awt.image.DataBuffer, aRegion: java.awt.Rectangle, sampleModelTranslate: java.awt.Point, parent: java.awt.image.WritableRaster)
                /**
                 * Returns the parent WritableRaster (if any) of this WritableRaster,
                 * or else null.
                 * @return the parent of this <code>WritableRaster</code>, or
                 *           <code>null</code>.
                 */
                // @ts-ignore
                getWritableParent(): java.awt.image.WritableRaster
                /**
                 * Create a WritableRaster with the same size, SampleModel and DataBuffer
                 * as this one, but with a different location.  The new WritableRaster
                 * will possess a reference to the current WritableRaster, accessible
                 * through its getParent() and getWritableParent() methods.
                 * @param childMinX X coord of the upper left corner of the new Raster.
                 * @param childMinY Y coord of the upper left corner of the new Raster.
                 * @return a <code>WritableRaster</code> the same as this one except
                 *          for the specified location.
                 * @throws RasterFormatException if  computing either
                 *          <code>childMinX + this.getWidth()</code> or
                 *          <code>childMinY + this.getHeight()</code> results in integer
                 *          overflow
                 */
                // @ts-ignore
                createWritableTranslatedChild(childMinX: number /*int*/, childMinY: number /*int*/): java.awt.image.WritableRaster
                /**
                 * Returns a new WritableRaster which shares all or part of this
                 * WritableRaster's DataBuffer.  The new WritableRaster will
                 * possess a reference to the current WritableRaster, accessible
                 * through its getParent() and getWritableParent() methods.
                 * <p> The parentX, parentY, width and height parameters form a
                 * Rectangle in this WritableRaster's coordinate space, indicating
                 * the area of pixels to be shared.  An error will be thrown if
                 * this Rectangle is not contained with the bounds of the current
                 * WritableRaster.
                 * <p> The new WritableRaster may additionally be translated to a
                 * different coordinate system for the plane than that used by the current
                 * WritableRaster.  The childMinX and childMinY parameters give
                 * the new (x, y) coordinate of the upper-left pixel of the
                 * returned WritableRaster; the coordinate (childMinX, childMinY)
                 * in the new WritableRaster will map to the same pixel as the
                 * coordinate (parentX, parentY) in the current WritableRaster.
                 * <p> The new WritableRaster may be defined to contain only a
                 * subset of the bands of the current WritableRaster, possibly
                 * reordered, by means of the bandList parameter.  If bandList is
                 * null, it is taken to include all of the bands of the current
                 * WritableRaster in their current order.
                 * <p> To create a new WritableRaster that contains a subregion of
                 * the current WritableRaster, but shares its coordinate system
                 * and bands, this method should be called with childMinX equal to
                 * parentX, childMinY equal to parentY, and bandList equal to
                 * null.
                 * @param parentX    X coordinate of the upper left corner in this
                 *                    WritableRaster's coordinates.
                 * @param parentY    Y coordinate of the upper left corner in this
                 *                    WritableRaster's coordinates.
                 * @param w          Width of the region starting at (parentX, parentY).
                 * @param h          Height of the region starting at (parentX, parentY).
                 * @param childMinX  X coordinate of the upper left corner of
                 *                    the returned WritableRaster.
                 * @param childMinY  Y coordinate of the upper left corner of
                 *                    the returned WritableRaster.
                 * @param bandList   Array of band indices, or null to use all bands.
                 * @return a <code>WritableRaster</code> sharing all or part of the
                 *          <code>DataBuffer</code> of this <code>WritableRaster</code>.
                 * @exception RasterFormatException if the subregion is outside of the
                 *                                raster bounds.
                 * @throws RasterFormatException if <code>w</code> or
                 *          <code>h</code>
                 *          is less than or equal to zero, or computing any of
                 *          <code>parentX + w</code>, <code>parentY + h</code>,
                 *          <code>childMinX + w</code>, or
                 *          <code>childMinY + h</code> results in integer
                 *          overflow
                 */
                // @ts-ignore
                createWritableChild(parentX: number /*int*/, parentY: number /*int*/, w: number /*int*/, h: number /*int*/, childMinX: number /*int*/, childMinY: number /*int*/, bandList: number /*int*/[]): java.awt.image.WritableRaster
                /**
                 * Sets the data for a single pixel from a
                 * primitive array of type TransferType.  For image data supported by
                 * the Java 2D(tm) API, this will be one of DataBuffer.TYPE_BYTE,
                 * DataBuffer.TYPE_USHORT, DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT,
                 * DataBuffer.TYPE_FLOAT, or DataBuffer.TYPE_DOUBLE.  Data in the array
                 * may be in a packed format, thus increasing efficiency for data
                 * transfers.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if inData is not large enough to hold the pixel data.
                 * However, explicit bounds checking is not guaranteed.
                 * A ClassCastException will be thrown if the input object is not null
                 * and references anything other than an array of TransferType.
                 * @see java.awt.image.SampleModel#setDataElements(int, int, Object, DataBuffer)
                 * @param x        The X coordinate of the pixel location.
                 * @param y        The Y coordinate of the pixel location.
                 * @param inData   An object reference to an array of type defined by
                 *                  getTransferType() and length getNumDataElements()
                 *                  containing the pixel data to place at x,y.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if inData is too small to hold the input.
                 */
                // @ts-ignore
                setDataElements(x: number /*int*/, y: number /*int*/, inData: any): void
                /**
                 * Sets the data for a rectangle of pixels from an input Raster.
                 * The input Raster must be compatible with this WritableRaster
                 * in that they must have the same number of bands, corresponding bands
                 * must have the same number of bits per sample, the TransferTypes
                 * and NumDataElements must be the same, and the packing used by
                 * the getDataElements/setDataElements must be identical.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the pixel location.
                 * @param y        The Y coordinate of the pixel location.
                 * @param inRaster Raster containing data to place at x,y.
                 * @throws NullPointerException if inRaster is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds.
                 */
                // @ts-ignore
                setDataElements(x: number /*int*/, y: number /*int*/, inRaster: java.awt.image.Raster): void
                /**
                 * Sets the data for a rectangle of pixels from a
                 * primitive array of type TransferType.  For image data supported by
                 * the Java 2D API, this will be one of DataBuffer.TYPE_BYTE,
                 * DataBuffer.TYPE_USHORT, DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT,
                 * DataBuffer.TYPE_FLOAT, or DataBuffer.TYPE_DOUBLE.  Data in the array
                 * may be in a packed format, thus increasing efficiency for data
                 * transfers.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if inData is not large enough to hold the pixel data.
                 * However, explicit bounds checking is not guaranteed.
                 * A ClassCastException will be thrown if the input object is not null
                 * and references anything other than an array of TransferType.
                 * @see java.awt.image.SampleModel#setDataElements(int, int, int, int, Object, DataBuffer)
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param inData   An object reference to an array of type defined by
                 *                  getTransferType() and length w*h*getNumDataElements()
                 *                  containing the pixel data to place between x,y and
                 *                  x+w-1, y+h-1.
                 * @throws NullPointerException if inData is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if inData is too small to hold the input.
                 */
                // @ts-ignore
                setDataElements(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, inData: any): void
                /**
                 * Copies pixels from Raster srcRaster to this WritableRaster.  Each pixel
                 * in srcRaster is copied to the same x,y address in this raster, unless
                 * the address falls outside the bounds of this raster.  srcRaster
                 * must have the same number of bands as this WritableRaster.  The
                 * copy is a simple copy of source samples to the corresponding destination
                 * samples.
                 * <p>
                 * If all samples of both source and destination Rasters are of
                 * integral type and less than or equal to 32 bits in size, then calling
                 * this method is equivalent to executing the following code for all
                 * <code>x,y</code> addresses valid in both Rasters.
                 * <pre>{@code
                 * Raster srcRaster;
                 * WritableRaster dstRaster;
                 * for (int b = 0; b < srcRaster.getNumBands(); b++) {
                 * dstRaster.setSample(x, y, b, srcRaster.getSample(x, y, b));
                 * }
                 * }</pre>
                 * Thus, when copying an integral type source to an integral type
                 * destination, if the source sample size is greater than the destination
                 * sample size for a particular band, the high order bits of the source
                 * sample are truncated.  If the source sample size is less than the
                 * destination size for a particular band, the high order bits of the
                 * destination are zero-extended or sign-extended depending on whether
                 * srcRaster's SampleModel treats the sample as a signed or unsigned
                 * quantity.
                 * <p>
                 * When copying a float or double source to an integral type destination,
                 * each source sample is cast to the destination type.  When copying an
                 * integral type source to a float or double destination, the source
                 * is first converted to a 32-bit int (if necessary), using the above
                 * rules for integral types, and then the int is cast to float or
                 * double.
                 * <p>
                 * @param srcRaster  The  Raster from which to copy pixels.
                 * @throws NullPointerException if srcRaster is null.
                 */
                // @ts-ignore
                setRect(srcRaster: java.awt.image.Raster): void
                /**
                 * Copies pixels from Raster srcRaster to this WritableRaster.
                 * For each (x, y) address in srcRaster, the corresponding pixel
                 * is copied to address (x+dx, y+dy) in this WritableRaster,
                 * unless (x+dx, y+dy) falls outside the bounds of this raster.
                 * srcRaster must have the same number of bands as this WritableRaster.
                 * The copy is a simple copy of source samples to the corresponding
                 * destination samples.  For details, see
                 * {@link WritableRaster#setRect(Raster)}.
                 * @param dx        The X translation factor from src space to dst space
                 *                   of the copy.
                 * @param dy        The Y translation factor from src space to dst space
                 *                   of the copy.
                 * @param srcRaster The Raster from which to copy pixels.
                 * @throws NullPointerException if srcRaster is null.
                 */
                // @ts-ignore
                setRect(dx: number /*int*/, dy: number /*int*/, srcRaster: java.awt.image.Raster): void
                /**
                 * Sets a pixel in the DataBuffer using an int array of samples for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x      The X coordinate of the pixel location.
                 * @param y      The Y coordinate of the pixel location.
                 * @param iArray The input samples in a int array.
                 * @throws NullPointerException if iArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if iArray is too small to hold the input.
                 */
                // @ts-ignore
                setPixel(x: number /*int*/, y: number /*int*/, iArray: number /*int*/[]): void
                /**
                 * Sets a pixel in the DataBuffer using a float array of samples for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x      The X coordinate of the pixel location.
                 * @param y      The Y coordinate of the pixel location.
                 * @param fArray The input samples in a float array.
                 * @throws NullPointerException if fArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if fArray is too small to hold the input.
                 */
                // @ts-ignore
                setPixel(x: number /*int*/, y: number /*int*/, fArray: number /*float*/[]): void
                /**
                 * Sets a pixel in the DataBuffer using a double array of samples for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x      The X coordinate of the pixel location.
                 * @param y      The Y coordinate of the pixel location.
                 * @param dArray The input samples in a double array.
                 * @throws NullPointerException if dArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if dArray is too small to hold the input.
                 */
                // @ts-ignore
                setPixel(x: number /*int*/, y: number /*int*/, dArray: number /*double*/[]): void
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param iArray   The input int pixel array.
                 * @throws NullPointerException if iArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if iArray is too small to hold the input.
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, iArray: number /*int*/[]): void
                /**
                 * Sets all samples for a rectangle of pixels from a float array containing
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param fArray   The input float pixel array.
                 * @throws NullPointerException if fArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if fArray is too small to hold the input.
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, fArray: number /*float*/[]): void
                /**
                 * Sets all samples for a rectangle of pixels from a double array containing
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param dArray   The input double pixel array.
                 * @throws NullPointerException if dArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are not
                 *  in bounds, or if dArray is too small to hold the input.
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, dArray: number /*double*/[]): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using an int for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the pixel location.
                 * @param y        The Y coordinate of the pixel location.
                 * @param b        The band to set.
                 * @param s        The input sample.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates or
                 *  the band index are not in bounds.
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*int*/): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a float for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the pixel location.
                 * @param y        The Y coordinate of the pixel location.
                 * @param b        The band to set.
                 * @param s        The input sample as a float.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates or
                 *  the band index are not in bounds.
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*float*/): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a double for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the pixel location.
                 * @param y        The Y coordinate of the pixel location.
                 * @param b        The band to set.
                 * @param s        The input sample as a double.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates or
                 *  the band index are not in bounds.
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*double*/): void
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param b        The band to set.
                 * @param iArray   The input int sample array.
                 * @throws NullPointerException if iArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates or
                 *  the band index are not in bounds, or if iArray is too small to
                 *  hold the input.
                 */
                // @ts-ignore
                setSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[]): void
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from a float array containing one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param b        The band to set.
                 * @param fArray   The input float sample array.
                 * @throws NullPointerException if fArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates or
                 *  the band index are not in bounds, or if fArray is too small to
                 *  hold the input.
                 */
                // @ts-ignore
                setSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, fArray: number /*float*/[]): void
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from a double array containing one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 * @param x        The X coordinate of the upper left pixel location.
                 * @param y        The Y coordinate of the upper left pixel location.
                 * @param w        Width of the pixel rectangle.
                 * @param h        Height of the pixel rectangle.
                 * @param b        The band to set.
                 * @param dArray   The input double sample array.
                 * @throws NullPointerException if dArray is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates or
                 *  the band index are not in bounds, or if dArray is too small to
                 *  hold the input.
                 */
                // @ts-ignore
                setSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, dArray: number /*double*/[]): void
            }
        }
    }
}
