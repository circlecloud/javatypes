declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class represents image data which is stored in a band interleaved
             * fashion and for
             * which each sample of a pixel occupies one data element of the DataBuffer.
             * It subclasses ComponentSampleModel but provides a more efficient
             * implementation for accessing band interleaved image data than is provided
             * by ComponentSampleModel.  This class should typically be used when working
             * with images which store sample data for each band in a different bank of the
             * DataBuffer. Accessor methods are provided so that image data can be
             * manipulated directly. Pixel stride is the number of
             * data array elements between two samples for the same band on the same
             * scanline. The pixel stride for a BandedSampleModel is one.
             * Scanline stride is the number of data array elements between
             * a given sample and the corresponding sample in the same column of the next
             * scanline.  Band offsets denote the number
             * of data array elements from the first data array element of the bank
             * of the DataBuffer holding each band to the first sample of the band.
             * The bands are numbered from 0 to N-1.
             * Bank indices denote the correspondence between a bank of the data buffer
             * and a band of image data.  This class supports
             * {@link DataBuffer#TYPE_BYTE TYPE_BYTE},
             * {@link DataBuffer#TYPE_USHORT TYPE_USHORT},
             * {@link DataBuffer#TYPE_SHORT TYPE_SHORT},
             * {@link DataBuffer#TYPE_INT TYPE_INT},
             * {@link DataBuffer#TYPE_FLOAT TYPE_FLOAT}, and
             * {@link DataBuffer#TYPE_DOUBLE TYPE_DOUBLE} datatypes
             */
            // @ts-ignore
            class BandedSampleModel extends java.awt.image.ComponentSampleModel {
                /**
                 * Constructs a BandedSampleModel with the specified parameters.
                 * The pixel stride will be one data element.  The scanline stride
                 * will be the same as the width.  Each band will be stored in
                 * a separate bank and all band offsets will be zero.
                 * @param dataType  The data type for storing samples.
                 * @param w         The width (in pixels) of the region of
                 *                   image data described.
                 * @param h         The height (in pixels) of the region of image
                 *                   data described.
                 * @param numBands  The number of bands for the image data.
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, numBands: number /*int*/)
                /**
                 * Constructs a BandedSampleModel with the specified parameters.
                 * The number of bands will be inferred from the lengths of the
                 * bandOffsets bankIndices arrays, which must be equal.  The pixel
                 * stride will be one data element.
                 * @param dataType  The data type for storing samples.
                 * @param w         The width (in pixels) of the region of
                 *                   image data described.
                 * @param h         The height (in pixels) of the region of
                 *                   image data described.
                 * @param scanlineStride The line stride of the of the image data.
                 * @param bankIndices The bank index for each band.
                 * @param bandOffsets The band offset for each band.
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, scanlineStride: number /*int*/, bankIndices: number /*int*/[], bandOffsets: number /*int*/[])
                /**
                 * Creates a new BandedSampleModel with the specified
                 * width and height.  The new BandedSampleModel will have the same
                 * number of bands, storage data type, and bank indices
                 * as this BandedSampleModel.  The band offsets will be compressed
                 * such that the offset between bands will be w*pixelStride and
                 * the minimum of all of the band offsets is zero.
                 * @param w the width of the resulting <code>BandedSampleModel</code>
                 * @param h the height of the resulting <code>BandedSampleModel</code>
                 * @return a new <code>BandedSampleModel</code> with the specified
                 *          width and height.
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> equals either
                 *          <code>Integer.MAX_VALUE</code> or
                 *          <code>Integer.MIN_VALUE</code>
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                createCompatibleSampleModel(w: number /*int*/, h: number /*int*/): java.awt.image.SampleModel
                /**
                 * Creates a new BandedSampleModel with a subset of the bands of this
                 * BandedSampleModel.  The new BandedSampleModel can be
                 * used with any DataBuffer that the existing BandedSampleModel
                 * can be used with.  The new BandedSampleModel/DataBuffer
                 * combination will represent an image with a subset of the bands
                 * of the original BandedSampleModel/DataBuffer combination.
                 * @throws RasterFormatException if the number of bands is greater than
                 *                                the number of banks in this sample model.
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                createSubsetSampleModel(bands: number /*int*/[]): java.awt.image.SampleModel
                /**
                 * Creates a DataBuffer that corresponds to this BandedSampleModel,
                 * The DataBuffer's data type, number of banks, and size
                 * will be consistent with this BandedSampleModel.
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported types.
                 */
                // @ts-ignore
                createDataBuffer(): java.awt.image.DataBuffer
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For a BandedSampleModel, this will be the same
                 * as the data type, and samples will be returned one per array
                 * element.  Generally, obj
                 * should be passed in as null, so that the Object will be created
                 * automatically and will be of the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * BandedSampleModel <code>bsm1</code>, to DataBuffer <code>db2</code>,
                 * whose storage layout is described by
                 * BandedSampleModel <code>bsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * BandedSampleModel bsm1, bsm2;
                 * DataBufferInt db1, db2;
                 * bsm2.setDataElements(x, y, bsm1.getDataElements(x, y, null, db1),
                 * db2);
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
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param obj       If non-null, a primitive array in which to return
                 *                   the pixel data.
                 * @param data      The DataBuffer containing the image data.
                 * @return the data for the specified pixel.
                 * @see #setDataElements(int, int, Object, DataBuffer)
                 */
                // @ts-ignore
                getDataElements(x: number /*int*/, y: number /*int*/, obj: any, data: java.awt.image.DataBuffer): java.lang.Object
                /**
                 * Returns all samples for the specified pixel in an int array.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param iArray    If non-null, returns the samples in this array
                 * @param data      The DataBuffer containing the image data
                 * @return the samples for the specified pixel.
                 * @see #setPixel(int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                getPixel(x: number /*int*/, y: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): int[]
                /**
                 * Returns all samples for the specified rectangle of pixels in
                 * an int array, one sample per data array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         The width of the pixel rectangle
                 * @param h         The height of the pixel rectangle
                 * @param iArray    If non-null, returns the samples in this array
                 * @param data      The DataBuffer containing the image data
                 * @return the samples for the pixels within the specified region.
                 * @see #setPixels(int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                getPixels(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): int[]
                /**
                 * Returns as int the sample in a specified band for the pixel
                 * located at (x,y).
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to return
                 * @param data      The DataBuffer containing the image data
                 * @return the sample in the specified band for the specified pixel.
                 * @see #setSample(int, int, int, int, DataBuffer)
                 */
                // @ts-ignore
                getSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): int
                /**
                 * Returns the sample in a specified band
                 * for the pixel located at (x,y) as a float.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to return
                 * @param data      The DataBuffer containing the image data
                 * @return a float value that represents the sample in the specified
                 *  band for the specified pixel.
                 */
                // @ts-ignore
                getSampleFloat(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): float
                /**
                 * Returns the sample in a specified band
                 * for a pixel located at (x,y) as a double.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to return
                 * @param data      The DataBuffer containing the image data
                 * @return a double value that represents the sample in the specified
                 *  band for the specified pixel.
                 */
                // @ts-ignore
                getSampleDouble(x: number /*int*/, y: number /*int*/, b: number /*int*/, data: java.awt.image.DataBuffer): double
                /**
                 * Returns the samples in a specified band for the specified rectangle
                 * of pixels in an int array, one sample per data array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         The width of the pixel rectangle
                 * @param h         The height of the pixel rectangle
                 * @param b         The band to return
                 * @param iArray    If non-null, returns the samples in this array
                 * @param data      The DataBuffer containing the image data
                 * @return the samples in the specified band for the pixels within
                 *  the specified region.
                 * @see #setSamples(int, int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                getSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): int[]
                /**
                 * Sets the data for a single pixel in the specified DataBuffer from a
                 * primitive array of type TransferType.  For a BandedSampleModel,
                 * this will be the same as the data type, and samples are transferred
                 * one per array element.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * BandedSampleModel <code>bsm1</code>, to DataBuffer <code>db2</code>,
                 * whose storage layout is described by
                 * BandedSampleModel <code>bsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * BandedSampleModel bsm1, bsm2;
                 * DataBufferInt db1, db2;
                 * bsm2.setDataElements(x, y, bsm1.getDataElements(x, y, null, db1),
                 * db2);
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
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param obj       If non-null, returns the primitive array in this
                 *                   object
                 * @param data      The DataBuffer containing the image data
                 * @see #getDataElements(int, int, Object, DataBuffer)
                 */
                // @ts-ignore
                setDataElements(x: number /*int*/, y: number /*int*/, obj: any, data: java.awt.image.DataBuffer): void
                /**
                 * Sets a pixel in the DataBuffer using an int array of samples for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
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
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
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
                 * in the DataBuffer using an int for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the pixel location
                 * @param y         The Y coordinate of the pixel location
                 * @param b         The band to set
                 * @param s         The input sample as an int
                 * @param data      The DataBuffer containing the image data
                 * @see #getSample(int, int, int, DataBuffer)
                 */
                // @ts-ignore
                setSample(x: number /*int*/, y: number /*int*/, b: number /*int*/, s: number /*int*/, data: java.awt.image.DataBuffer): void
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a float for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
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
                 * in the DataBuffer using a double for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
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
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * @param x         The X coordinate of the upper left pixel location
                 * @param y         The Y coordinate of the upper left pixel location
                 * @param w         The width of the pixel rectangle
                 * @param h         The height of the pixel rectangle
                 * @param b         The band to set
                 * @param iArray    The input sample array
                 * @param data      The DataBuffer containing the image data
                 * @see #getSamples(int, int, int, int, int, int[], DataBuffer)
                 */
                // @ts-ignore
                setSamples(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, b: number /*int*/, iArray: number /*int*/[], data: java.awt.image.DataBuffer): void
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
