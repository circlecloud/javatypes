declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class represents pixel data packed such that the N samples which make
             * up a single pixel are stored in a single data array element, and each data
             * data array element holds samples for only one pixel.
             * This class supports
             * {@link DataBuffer#TYPE_BYTE TYPE_BYTE},
             * {@link DataBuffer#TYPE_USHORT TYPE_USHORT},
             * {@link DataBuffer#TYPE_INT TYPE_INT} data types.
             * All data array elements reside
             * in the first bank of a DataBuffer.  Accessor methods are provided so
             * that the image data can be manipulated directly. Scanline stride is the
             * number of data array elements between a given sample and the corresponding
             * sample in the same column of the next scanline. Bit masks are the masks
             * required to extract the samples representing the bands of the pixel.
             * Bit offsets are the offsets in bits into the data array
             * element of the samples representing the bands of the pixel.
             * <p>
             * The following code illustrates extracting the bits of the sample
             * representing band <code>b</code> for pixel <code>x,y</code>
             * from DataBuffer <code>data</code>:
             * <pre>{@code
             * int sample = data.getElem(y * scanlineStride + x);
             * sample = (sample & bitMasks[b]) >>> bitOffsets[b];
             * }</pre>
             */
            // @ts-ignore
            class SinglePixelPackedSampleModel extends java.awt.image.SampleModel {
                /**
                 * Constructs a SinglePixelPackedSampleModel with bitMasks.length bands.
                 * Each sample is stored in a data array element in the position of
                 * its corresponding bit mask.  Each bit mask must be contiguous and
                 * masks must not overlap. Bit masks exceeding data type capacity are
                 * truncated.
                 * @param dataType  The data type for storing samples.
                 * @param w         The width (in pixels) of the region of the
                 *                   image data described.
                 * @param h         The height (in pixels) of the region of the
                 *                   image data described.
                 * @param bitMasks  The bit masks for all bands.
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          either <code>DataBuffer.TYPE_BYTE</code>,
                 *          <code>DataBuffer.TYPE_USHORT</code>, or
                 *          <code>DataBuffer.TYPE_INT</code>
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, bitMasks: number /*int*/[])
                /**
                 * Constructs a SinglePixelPackedSampleModel with bitMasks.length bands
                 * and a scanline stride equal to scanlineStride data array elements.
                 * Each sample is stored in a data array element in the position of
                 * its corresponding bit mask.  Each bit mask must be contiguous and
                 * masks must not overlap. Bit masks exceeding data type capacity are
                 * truncated.
                 * @param dataType  The data type for storing samples.
                 * @param w         The width (in pixels) of the region of
                 *                   image data described.
                 * @param h         The height (in pixels) of the region of
                 *                   image data described.
                 * @param scanlineStride The line stride of the image data.
                 * @param bitMasks The bit masks for all bands.
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 * @throws IllegalArgumentException if any mask in
                 *          <code>bitMask</code> is not contiguous
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          either <code>DataBuffer.TYPE_BYTE</code>,
                 *          <code>DataBuffer.TYPE_USHORT</code>, or
                 *          <code>DataBuffer.TYPE_INT</code>
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, scanlineStride: number /*int*/, bitMasks: number /*int*/[])
                /**
                 * Returns the number of data elements needed to transfer one pixel
                 * via the getDataElements and setDataElements methods.
                 * For a SinglePixelPackedSampleModel, this is one.
                 */
                // @ts-ignore
                public getNumDataElements(): number /*int*/
                /**
                 * Creates a new SinglePixelPackedSampleModel with the specified
                 * width and height.  The new SinglePixelPackedSampleModel will have the
                 * same storage data type and bit masks as this
                 * SinglePixelPackedSampleModel.
                 * @param w the width of the resulting <code>SampleModel</code>
                 * @param h the height of the resulting <code>SampleModel</code>
                 * @return a <code>SinglePixelPackedSampleModel</code> with the
                 *          specified width and height.
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number /*int*/, h: number /*int*/): java.awt.image.SampleModel
                /**
                 * Creates a DataBuffer that corresponds to this
                 * SinglePixelPackedSampleModel.  The DataBuffer's data type and size
                 * will be consistent with this SinglePixelPackedSampleModel.  The
                 * DataBuffer will have a single bank.
                 */
                // @ts-ignore
                public createDataBuffer(): java.awt.image.DataBuffer
                /**
                 * Returns the number of bits per sample for all bands.
                 */
                // @ts-ignore
                public getSampleSize(): number /*int*/[]
                /**
                 * Returns the number of bits per sample for the specified band.
                 */
                // @ts-ignore
                public getSampleSize(band: number /*int*/): number /*int*/
                /**
                 * Returns the offset (in data array elements) of pixel (x,y).
                 * The data element containing pixel <code>x,y</code>
                 * can be retrieved from a DataBuffer <code>data</code> with a
                 * SinglePixelPackedSampleModel <code>sppsm</code> as:
                 * <pre>
                 * data.getElem(sppsm.getOffset(x, y));
                 * </pre>
                 * @param x the X coordinate of the specified pixel
                 * @param y the Y coordinate of the specified pixel
                 * @return the offset of the specified pixel.
                 */
                // @ts-ignore
                public getOffset(x: number /*int*/, y: number /*int*/): number /*int*/
                /**
                 * Returns the bit offsets into the data array element representing
                 * a pixel for all bands.
                 * @return the bit offsets representing a pixel for all bands.
                 */
                // @ts-ignore
                public getBitOffsets(): number /*int*/[]
                /**
                 * Returns the bit masks for all bands.
                 * @return the bit masks for all bands.
                 */
                // @ts-ignore
                public getBitMasks(): number /*int*/[]
                /**
                 * Returns the scanline stride of this SinglePixelPackedSampleModel.
                 * @return the scanline stride of this
                 *           <code>SinglePixelPackedSampleModel</code>.
                 */
                // @ts-ignore
                public getScanlineStride(): number /*int*/
                /**
                 * This creates a new SinglePixelPackedSampleModel with a subset of the
                 * bands of this SinglePixelPackedSampleModel.  The new
                 * SinglePixelPackedSampleModel can be used with any DataBuffer that the
                 * existing SinglePixelPackedSampleModel can be used with.  The new
                 * SinglePixelPackedSampleModel/DataBuffer combination will represent
                 * an image with a subset of the bands of the original
                 * SinglePixelPackedSampleModel/DataBuffer combination.
                 * @exception RasterFormatException if the length of the bands argument is
                 *                                   greater than the number of bands in
                 *                                   the sample model.
                 */
                // @ts-ignore
                public createSubsetSampleModel(bands: number /*int*/[]): java.awt.image.SampleModel
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For a SinglePixelPackedSampleModel, the array will
                 * have one element, and the type will be the same as the storage
                 * data type.  Generally, obj
                 * should be passed in as null, so that the Object will be created
                 * automatically and will be of the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm1</code>, to
                 * DataBuffer <code>db2</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * SinglePixelPackedSampleModel sppsm1, sppsm2;
                 * DataBufferInt db1, db2;
                 * sppsm2.setDataElements(x, y, sppsm1.getDataElements(x, y, null,
                 * db1), db2);
                 * </pre>
                 * Using getDataElements/setDataElements to transfer between two
                 * DataBuffer/SampleModel pairs is legitimate if the SampleModels have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the TransferTypes are the same.
                 * <p>
                 * If obj is non-null, it should be a primitive array of type TransferType.
                 * Otherwise, a ClassCastException is thrown.  An
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if obj is non-null and is not large enough to hold
                 * the pixel data.
                 * @param x         The X coordinate of the pixel location.
                 * @param y         The Y coordinate of the pixel location.
                 * @param obj       If non-null, a primitive array in which to return
                 *                   the pixel data.
                 * @param data      The DataBuffer containing the image data.
                 * @return the data for the specified pixel.
                 * @see #setDataElements(int, int, Object, DataBuffer)
                 */
                // @ts-ignore
                public getDataElements(x: number /*int*/, y: number /*int*/, obj: java.lang.Object | any, data: java.awt.image.DataBuffer): any
                /**
                 * Returns all samples in for the specified pixel in an int array.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location.
                 * @param y         The Y coordinate of the pixel location.
                 * @param iArray    If non-null, returns the samples in this array
                 * @param data      The DataBuffer containing the image data.
                 * @return all samples for the specified pixel.
                 * @see #setPixel(int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                public getPixel(x: number /*int*/, y: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): number /*int*/[]
                /**
                 * Returns all samples for the specified rectangle of pixels in
                 * an int array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location.
                 * @param y         The Y coordinate of the upper left pixel location.
                 * @param w         The width of the pixel rectangle.
                 * @param h         The height of the pixel rectangle.
                 * @param iArray    If non-null, returns the samples in this array.
                 * @param data      The DataBuffer containing the image data.
                 * @return all samples for the specified region of pixels.
                 * @see #setPixels(int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                public getPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): number /*int*/[]
                /**
                 * Returns as int the sample in a specified band for the pixel
                 * located at (x,y).
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location.
                 * @param y         The Y coordinate of the pixel location.
                 * @param b         The band to return.
                 * @param data      The DataBuffer containing the image data.
                 * @return the sample in a specified band for the specified
                 *          pixel.
                 * @see #setSample(int, int, int, int, DataBuffer)
                 */
                // @ts-ignore
                public getSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): number /*int*/
                /**
                 * Returns the samples for a specified band for the specified rectangle
                 * of pixels in an int array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location.
                 * @param y         The Y coordinate of the upper left pixel location.
                 * @param w         The width of the pixel rectangle.
                 * @param h         The height of the pixel rectangle.
                 * @param b         The band to return.
                 * @param iArray    If non-null, returns the samples in this array.
                 * @param data      The DataBuffer containing the image data.
                 * @return the samples for the specified band for the specified
                 *          region of pixels.
                 * @see #setSamples(int, int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                public getSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): number /*int*/[]
                /**
                 * Sets the data for a single pixel in the specified DataBuffer from a
                 * primitive array of type TransferType.  For a
                 * SinglePixelPackedSampleModel, only the first element of the array
                 * will hold valid data, and the type of the array must be the same as
                 * the storage data type of the SinglePixelPackedSampleModel.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm1</code>,
                 * to DataBuffer <code>db2</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * SinglePixelPackedSampleModel sppsm1, sppsm2;
                 * DataBufferInt db1, db2;
                 * sppsm2.setDataElements(x, y, sppsm1.getDataElements(x, y, null,
                 * db1), db2);
                 * </pre>
                 * Using getDataElements/setDataElements to transfer between two
                 * DataBuffer/SampleModel pairs is legitimate if the SampleModels have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the TransferTypes are the same.
                 * <p>
                 * obj must be a primitive array of type TransferType.  Otherwise,
                 * a ClassCastException is thrown.  An
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if obj is not large enough to hold the pixel data.
                 * @param x         The X coordinate of the pixel location.
                 * @param y         The Y coordinate of the pixel location.
                 * @param obj       A primitive array containing pixel data.
                 * @param data      The DataBuffer containing the image data.
                 * @see #getDataElements(int, int, Object, DataBuffer)
                 */
                // @ts-ignore
                public setDataElements(x: number /*int*/, y: number /*int*/, obj: java.lang.Object | any, data: java.awt.image.DataBuffer): void
                /**
                 * Sets a pixel in the DataBuffer using an int array of samples for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location.
                 * @param y         The Y coordinate of the pixel location.
                 * @param iArray    The input samples in an int array.
                 * @param data      The DataBuffer containing the image data.
                 * @see #getPixel(int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                public setPixel(x: number /*int*/, y: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location.
                 * @param y         The Y coordinate of the upper left pixel location.
                 * @param w         The width of the pixel rectangle.
                 * @param h         The height of the pixel rectangle.
                 * @param iArray    The input samples in an int array.
                 * @param data      The DataBuffer containing the image data.
                 * @see #getPixels(int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                public setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using an int for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location.
                 * @param y         The Y coordinate of the pixel location.
                 * @param b         The band to set.
                 * @param s         The input sample as an int.
                 * @param data      The DataBuffer containing the image data.
                 * @see #getSample(int, int, int, DataBuffer)
                 */
                // @ts-ignore
                public setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*int*/, data: java.awt.image.DataBuffer): void
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location.
                 * @param y         The Y coordinate of the upper left pixel location.
                 * @param w         The width of the pixel rectangle.
                 * @param h         The height of the pixel rectangle.
                 * @param b         The band to set.
                 * @param iArray    The input samples in an int array.
                 * @param data      The DataBuffer containing the image data.
                 * @see #getSamples(int, int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                public setSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                // @ts-ignore
                public equals(o: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
