declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class represents image data which is stored such that each sample
             * of a pixel occupies one data element of the DataBuffer.  It stores the
             * N samples which make up a pixel in N separate data array elements.
             * Different bands may be in different banks of the DataBuffer.
             * Accessor methods are provided so that image data can be manipulated
             * directly. This class can support different kinds of interleaving, e.g.
             * band interleaving, scanline interleaving, and pixel interleaving.
             * Pixel stride is the number of data array elements between two samples
             * for the same band on the same scanline. Scanline stride is the number
             * of data array elements between a given sample and the corresponding sample
             * in the same column of the next scanline.  Band offsets denote the number
             * of data array elements from the first data array element of the bank
             * of the DataBuffer holding each band to the first sample of the band.
             * The bands are numbered from 0 to N-1.  This class can represent image
             * data for which each sample is an unsigned integral number which can be
             * stored in 8, 16, or 32 bits (using <code>DataBuffer.TYPE_BYTE</code>,
             * <code>DataBuffer.TYPE_USHORT</code>, or <code>DataBuffer.TYPE_INT</code>,
             * respectively), data for which each sample is a signed integral number
             * which can be stored in 16 bits (using <code>DataBuffer.TYPE_SHORT</code>),
             * or data for which each sample is a signed float or double quantity
             * (using <code>DataBuffer.TYPE_FLOAT</code> or
             * <code>DataBuffer.TYPE_DOUBLE</code>, respectively).
             * All samples of a given ComponentSampleModel
             * are stored with the same precision.  All strides and offsets must be
             * non-negative.  This class supports
             * {@link DataBuffer#TYPE_BYTE TYPE_BYTE},
             * {@link DataBuffer#TYPE_USHORT TYPE_USHORT},
             * {@link DataBuffer#TYPE_SHORT TYPE_SHORT},
             * {@link DataBuffer#TYPE_INT TYPE_INT},
             * {@link DataBuffer#TYPE_FLOAT TYPE_FLOAT},
             * {@link DataBuffer#TYPE_DOUBLE TYPE_DOUBLE},
             * @see java.awt.image.PixelInterleavedSampleModel
             * @see java.awt.image.BandedSampleModel
             */
            // @ts-ignore
            class ComponentSampleModel extends java.awt.image.SampleModel {
                /**
                 * Constructs a ComponentSampleModel with the specified parameters.
                 * The number of bands will be given by the length of the bandOffsets array.
                 * All bands will be stored in the first bank of the DataBuffer.
                 * @param dataType  the data type for storing samples
                 * @param w         the width (in pixels) of the region of
                 *      image data described
                 * @param h         the height (in pixels) of the region of
                 *      image data described
                 * @param pixelStride the pixel stride of the region of image
                 *      data described
                 * @param scanlineStride the line stride of the region of image
                 *      data described
                 * @param bandOffsets the offsets of all bands
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 * @throws IllegalArgumentException if <code>pixelStride</code>
                 *          is less than 0
                 * @throws IllegalArgumentException if <code>scanlineStride</code>
                 *          is less than 0
                 * @throws IllegalArgumentException if <code>numBands</code>
                 *          is less than 1
                 * @throws IllegalArgumentException if the product of <code>w</code>
                 *          and <code>h</code> is greater than
                 *          <code>Integer.MAX_VALUE</code>
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, pixelStride: number /*int*/, scanlineStride: number /*int*/, bandOffsets: number /*int*/[])
                /**
                 * Constructs a ComponentSampleModel with the specified parameters.
                 * The number of bands will be given by the length of the bandOffsets array.
                 * Different bands may be stored in different banks of the DataBuffer.
                 * @param dataType  the data type for storing samples
                 * @param w         the width (in pixels) of the region of
                 *      image data described
                 * @param h         the height (in pixels) of the region of
                 *      image data described
                 * @param pixelStride the pixel stride of the region of image
                 *      data described
                 * @param scanlineStride The line stride of the region of image
                 *      data described
                 * @param bankIndices the bank indices of all bands
                 * @param bandOffsets the band offsets of all bands
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 * @throws IllegalArgumentException if <code>pixelStride</code>
                 *          is less than 0
                 * @throws IllegalArgumentException if <code>scanlineStride</code>
                 *          is less than 0
                 * @throws IllegalArgumentException if the length of
                 *          <code>bankIndices</code> does not equal the length of
                 *          <code>bankOffsets</code>
                 * @throws IllegalArgumentException if any of the bank indices
                 *          of <code>bandIndices</code> is less than 0
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, pixelStride: number /*int*/, scanlineStride: number /*int*/, bankIndices: number /*int*/[], bandOffsets: number /*int*/[])
                /**
                 * Offsets for all bands in data array elements.
                 */
                // @ts-ignore
                bandOffsets: number /*int*/[]
                /**
                 * Index for each bank storing a band of image data.
                 */
                // @ts-ignore
                bankIndices: number /*int*/[]
                /**
                 * The number of bands in this
                 * <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                numBands: number /*int*/
                /**
                 * The number of banks in this
                 * <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                numBanks: number /*int*/
                /**
                 * Line stride (in data array elements) of the region of image
                 * data described by this ComponentSampleModel.
                 */
                // @ts-ignore
                scanlineStride: number /*int*/
                /**
                 * Pixel stride (in data array elements) of the region of image
                 * data described by this ComponentSampleModel.
                 */
                // @ts-ignore
                pixelStride: number /*int*/
                /**
                 * Creates a new <code>ComponentSampleModel</code> with the specified
                 * width and height.  The new <code>SampleModel</code> will have the same
                 * number of bands, storage data type, interleaving scheme, and
                 * pixel stride as this <code>SampleModel</code>.
                 * @param w the width of the resulting <code>SampleModel</code>
                 * @param h the height of the resulting <code>SampleModel</code>
                 * @return a new <code>ComponentSampleModel</code> with the specified size
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 */
                // @ts-ignore
                createCompatibleSampleModel(w: number /*int*/, h: number /*int*/): java.awt.image.SampleModel
                /**
                 * Creates a new ComponentSampleModel with a subset of the bands
                 * of this ComponentSampleModel.  The new ComponentSampleModel can be
                 * used with any DataBuffer that the existing ComponentSampleModel
                 * can be used with.  The new ComponentSampleModel/DataBuffer
                 * combination will represent an image with a subset of the bands
                 * of the original ComponentSampleModel/DataBuffer combination.
                 * @param bands a subset of bands from this
                 *               <code>ComponentSampleModel</code>
                 * @return a <code>ComponentSampleModel</code> created with a subset
                 *           of bands from this <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                createSubsetSampleModel(bands: number /*int*/[]): java.awt.image.SampleModel
                /**
                 * Creates a <code>DataBuffer</code> that corresponds to this
                 * <code>ComponentSampleModel</code>.
                 * The <code>DataBuffer</code> object's data type, number of banks,
                 * and size are be consistent with this <code>ComponentSampleModel</code>.
                 * @return a <code>DataBuffer</code> whose data type, number of banks
                 *          and size are consistent with this
                 *          <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                createDataBuffer(): java.awt.image.DataBuffer
                /**
                 * Gets the offset for the first band of pixel (x,y).
                 * A sample of the first band can be retrieved from a
                 * <code>DataBuffer</code>
                 * <code>data</code> with a <code>ComponentSampleModel</code>
                 * <code>csm</code> as
                 * <pre>
                 * data.getElem(csm.getOffset(x, y));
                 * </pre>
                 * @param x the X location of the pixel
                 * @param y the Y location of the pixel
                 * @return the offset for the first band of the specified pixel.
                 */
                // @ts-ignore
                getOffset(x: number /*int*/, y: number /*int*/): int
                /**
                 * Gets the offset for band b of pixel (x,y).
                 * A sample of band <code>b</code> can be retrieved from a
                 * <code>DataBuffer</code> <code>data</code>
                 * with a <code>ComponentSampleModel</code> <code>csm</code> as
                 * <pre>
                 * data.getElem(csm.getOffset(x, y, b));
                 * </pre>
                 * @param x the X location of the specified pixel
                 * @param y the Y location of the specified pixel
                 * @param b the specified band
                 * @return the offset for the specified band of the specified pixel.
                 */
                // @ts-ignore
                getOffset(x: number /*int*/, y: number /*int*/, b: number /*int*/): int
                /**
                 * Returns the number of bits per sample for all bands.
                 * @return an array containing the number of bits per sample
                 *           for all bands, where each element in the array
                 *           represents a band.
                 */
                // @ts-ignore
                getSampleSize(): int[]
                /**
                 * Returns the number of bits per sample for the specified band.
                 * @param band the specified band
                 * @return the number of bits per sample for the specified band.
                 */
                // @ts-ignore
                getSampleSize(band: number /*int*/): int
                /**
                 * Returns the bank indices for all bands.
                 * @return the bank indices for all bands.
                 */
                // @ts-ignore
                getBankIndices(): int[]
                /**
                 * Returns the band offset for all bands.
                 * @return the band offsets for all bands.
                 */
                // @ts-ignore
                getBandOffsets(): int[]
                /**
                 * Returns the scanline stride of this ComponentSampleModel.
                 * @return the scanline stride of this <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                getScanlineStride(): int
                /**
                 * Returns the pixel stride of this ComponentSampleModel.
                 * @return the pixel stride of this <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                getPixelStride(): int
                /**
                 * Returns the number of data elements needed to transfer a pixel
                 * with the
                 * {@link #getDataElements(int, int, Object, DataBuffer) } and
                 * {@link #setDataElements(int, int, Object, DataBuffer) }
                 * methods.
                 * For a <code>ComponentSampleModel</code>, this is identical to the
                 * number of bands.
                 * @return the number of data elements needed to transfer a pixel with
                 *          the <code>getDataElements</code> and
                 *          <code>setDataElements</code> methods.
                 * @see java.awt.image.SampleModel#getNumDataElements
                 * @see #getNumBands
                 */
                // @ts-ignore
                getNumDataElements(): int
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * <code>TransferType</code>.  For a <code>ComponentSampleModel</code>,
                 * this is the same as the data type, and samples are returned
                 * one per array element.  Generally, <code>obj</code> should
                 * be passed in as <code>null</code>, so that the <code>Object</code>
                 * is created automatically and is the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * <code>DataBuffer</code> <code>db1</code>, whose storage layout is
                 * described by <code>ComponentSampleModel</code> <code>csm1</code>,
                 * to <code>DataBuffer</code> <code>db2</code>, whose storage layout
                 * is described by <code>ComponentSampleModel</code> <code>csm2</code>.
                 * The transfer is usually more efficient than using
                 * <code>getPixel</code> and <code>setPixel</code>.
                 * <pre>
                 * ComponentSampleModel csm1, csm2;
                 * DataBufferInt db1, db2;
                 * csm2.setDataElements(x, y,
                 * csm1.getDataElements(x, y, null, db1), db2);
                 * </pre>
                 * Using <code>getDataElements</code> and <code>setDataElements</code>
                 * to transfer between two <code>DataBuffer/SampleModel</code>
                 * pairs is legitimate if the <code>SampleModel</code> objects have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the <code>TransferType</code>s are the same.
                 * <p>
                 * If <code>obj</code> is not <code>null</code>, it should be a
                 * primitive array of type <code>TransferType</code>.
                 * Otherwise, a <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds, or if <code>obj</code> is not
                 * <code>null</code> and is not large enough to hold
                 * the pixel data.
                 * @param x         the X coordinate of the pixel location
                 * @param y         the Y coordinate of the pixel location
                 * @param obj       if non-<code>null</code>, a primitive array
                 *                   in which to return the pixel data
                 * @param data      the <code>DataBuffer</code> containing the image data
                 * @return the data of the specified pixel
                 * @see #setDataElements(int, int, Object, DataBuffer)
                 * @throws NullPointerException if data is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are
                 *  not in bounds, or if obj is too small to hold the output.
                 */
                // @ts-ignore
                getDataElements(x: number /*int*/, y: number /*int*/, obj: any, data: java.awt.image.DataBuffer): java.lang.Object
                /**
                 * Returns all samples for the specified pixel in an int array,
                 * one sample per array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 * @param x         the X coordinate of the pixel location
                 * @param y         the Y coordinate of the pixel location
                 * @param iArray    If non-null, returns the samples in this array
                 * @param data      The DataBuffer containing the image data
                 * @return the samples of the specified pixel.
                 * @see #setPixel(int, int, int[], DataBuffer)
                 * @throws NullPointerException if data is null.
                 * @throws ArrayIndexOutOfBoundsException if the coordinates are
                 *  not in bounds, or if iArray is too small to hold the output.
                 */
                // @ts-ignore
                getPixel(x: number /*int*/, y: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): int[]
                /**
                 * Returns all samples for the specified rectangle of pixels in
                 * an int array, one sample per array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         The width of the pixel rectangle
                 * @param h         The height of the pixel rectangle
                 * @param iArray    If non-null, returns the samples in this array
                 * @param data      The DataBuffer containing the image data
                 * @return the samples of the pixels within the specified region.
                 * @see #setPixels(int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                getPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): int[]
                /**
                 * Returns as int the sample in a specified band for the pixel
                 * located at (x,y).
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 * @param x         the X coordinate of the pixel location
                 * @param y         the Y coordinate of the pixel location
                 * @param b         the band to return
                 * @param data      the <code>DataBuffer</code> containing the image data
                 * @return the sample in a specified band for the specified pixel
                 * @see #setSample(int, int, int, int, DataBuffer)
                 */
                // @ts-ignore
                getSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): int
                /**
                 * Returns the sample in a specified band
                 * for the pixel located at (x,y) as a float.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be
                 * thrown if the coordinates are not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to return
                 * @param data      The DataBuffer containing the image data
                 * @return a float value representing the sample in the specified
                 *  band for the specified pixel.
                 */
                // @ts-ignore
                getSampleFloat(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): float
                /**
                 * Returns the sample in a specified band
                 * for a pixel located at (x,y) as a double.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be
                 * thrown if the coordinates are not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to return
                 * @param data      The DataBuffer containing the image data
                 * @return a double value representing the sample in the specified
                 *  band for the specified pixel.
                 */
                // @ts-ignore
                getSampleDouble(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): double
                /**
                 * Returns the samples in a specified band for the specified rectangle
                 * of pixels in an int array, one sample per data array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         the width of the pixel rectangle
                 * @param h         the height of the pixel rectangle
                 * @param b         the band to return
                 * @param iArray    if non-<code>null</code>, returns the samples
                 *                   in this array
                 * @param data      the <code>DataBuffer</code> containing the image data
                 * @return the samples in the specified band of the specified pixel
                 * @see #setSamples(int, int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                getSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): int[]
                /**
                 * Sets the data for a single pixel in the specified
                 * <code>DataBuffer</code> from a primitive array of type
                 * <code>TransferType</code>.  For a <code>ComponentSampleModel</code>,
                 * this is the same as the data type, and samples are transferred
                 * one per array element.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * <code>DataBuffer</code> <code>db1</code>, whose storage layout is
                 * described by <code>ComponentSampleModel</code> <code>csm1</code>,
                 * to <code>DataBuffer</code> <code>db2</code>, whose storage layout
                 * is described by <code>ComponentSampleModel</code> <code>csm2</code>.
                 * The transfer is usually more efficient than using
                 * <code>getPixel</code> and <code>setPixel</code>.
                 * <pre>
                 * ComponentSampleModel csm1, csm2;
                 * DataBufferInt db1, db2;
                 * csm2.setDataElements(x, y, csm1.getDataElements(x, y, null, db1),
                 * db2);
                 * </pre>
                 * Using <code>getDataElements</code> and <code>setDataElements</code>
                 * to transfer between two <code>DataBuffer/SampleModel</code> pairs
                 * is legitimate if the <code>SampleModel</code> objects have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the <code>TransferType</code>s are the same.
                 * <p>
                 * A <code>ClassCastException</code> is thrown if <code>obj</code> is not
                 * a primitive array of type <code>TransferType</code>.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds, or if <code>obj</code> is not large
                 * enough to hold the pixel data.
                 * @param x         the X coordinate of the pixel location
                 * @param y         the Y coordinate of the pixel location
                 * @param obj       a primitive array containing pixel data
                 * @param data      the DataBuffer containing the image data
                 * @see #getDataElements(int, int, Object, DataBuffer)
                 */
                // @ts-ignore
                setDataElements(x: number /*int*/, y: number /*int*/, obj: any, data: java.awt.image.DataBuffer): void
                /**
                 * Sets a pixel in the <code>DataBuffer</code> using an int array of
                 * samples for input.  An <code>ArrayIndexOutOfBoundsException</code>
                 * might be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param iArray    The input samples in an int array
                 * @param data      The DataBuffer containing the image data
                 * @see #getPixel(int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                setPixel(x: number /*int*/, y: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         The width of the pixel rectangle
                 * @param h         The height of the pixel rectangle
                 * @param iArray    The input samples in an int array
                 * @param data      The DataBuffer containing the image data
                 * @see #getPixels(int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                setPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the <code>DataBuffer</code> using an int for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         the band to set
                 * @param s         the input sample as an int
                 * @param data      the DataBuffer containing the image data
                 * @see #getSample(int, int, int, DataBuffer)
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*int*/, data: java.awt.image.DataBuffer): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the <code>DataBuffer</code> using a float for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to set
                 * @param s         The input sample as a float
                 * @param data      The DataBuffer containing the image data
                 * @see #getSample(int, int, int, DataBuffer)
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*float*/, data: java.awt.image.DataBuffer): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the <code>DataBuffer</code> using a double for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to set
                 * @param s         The input sample as a double
                 * @param data      The DataBuffer containing the image data
                 * @see #getSample(int, int, int, DataBuffer)
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*double*/, data: java.awt.image.DataBuffer): void
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per data array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         The width of the pixel rectangle
                 * @param h         The height of the pixel rectangle
                 * @param b         The band to set
                 * @param iArray    The input samples in an int array
                 * @param data      The DataBuffer containing the image data
                 * @see #getSamples(int, int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                setSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                // @ts-ignore
                equals(o: any): boolean
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
