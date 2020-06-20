declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class represents image data which is stored in a pixel interleaved
             * fashion and for
             * which each sample of a pixel occupies one data element of the DataBuffer.
             * It subclasses ComponentSampleModel but provides a more efficient
             * implementation for accessing pixel interleaved image data than is provided
             * by ComponentSampleModel.  This class
             * stores sample data for all bands in a single bank of the
             * DataBuffer. Accessor methods are provided so that image data can be
             * manipulated directly. Pixel stride is the number of
             * data array elements between two samples for the same band on the same
             * scanline. Scanline stride is the number of data array elements between
             * a given sample and the corresponding sample in the same column of the next
             * scanline.  Band offsets denote the number
             * of data array elements from the first data array element of the bank
             * of the DataBuffer holding each band to the first sample of the band.
             * The bands are numbered from 0 to N-1.
             * Bank indices denote the correspondence between a bank of the data buffer
             * and a band of image data.
             * This class supports
             * {@link DataBuffer#TYPE_BYTE TYPE_BYTE},
             * {@link DataBuffer#TYPE_USHORT TYPE_USHORT},
             * {@link DataBuffer#TYPE_SHORT TYPE_SHORT},
             * {@link DataBuffer#TYPE_INT TYPE_INT},
             * {@link DataBuffer#TYPE_FLOAT TYPE_FLOAT} and
             * {@link DataBuffer#TYPE_DOUBLE TYPE_DOUBLE} datatypes.
             */
            // @ts-ignore
            class PixelInterleavedSampleModel extends java.awt.image.ComponentSampleModel {
                /**
                 * Constructs a PixelInterleavedSampleModel with the specified parameters.
                 * The number of bands will be given by the length of the bandOffsets
                 * array.
                 * @param dataType  The data type for storing samples.
                 * @param w         The width (in pixels) of the region of
                 *                   image data described.
                 * @param h         The height (in pixels) of the region of
                 *                   image data described.
                 * @param pixelStride The pixel stride of the image data.
                 * @param scanlineStride The line stride of the image data.
                 * @param bandOffsets The offsets of all bands.
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 * @throws IllegalArgumentException if any offset between bands is
                 *          greater than the scanline stride
                 * @throws IllegalArgumentException if the product of
                 *          <code>pixelStride</code> and <code>w</code> is greater
                 *          than <code>scanlineStride</code>
                 * @throws IllegalArgumentException if <code>pixelStride</code> is
                 *          less than any offset between bands
                 * @throws IllegalArgumentException if <code>dataType</code> is not
                 *          one of the supported data types
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, w: number /*int*/, h: number /*int*/, pixelStride: number /*int*/, scanlineStride: number /*int*/, bandOffsets: number /*int*/[])
                /**
                 * Creates a new PixelInterleavedSampleModel with the specified
                 * width and height.  The new PixelInterleavedSampleModel will have the
                 * same number of bands, storage data type, and pixel stride
                 * as this PixelInterleavedSampleModel.  The band offsets may be
                 * compressed such that the minimum of all of the band offsets is zero.
                 * @param w the width of the resulting <code>SampleModel</code>
                 * @param h the height of the resulting <code>SampleModel</code>
                 * @return a new <code>SampleModel</code> with the specified width
                 *          and height.
                 * @throws IllegalArgumentException if <code>w</code> or
                 *          <code>h</code> is not greater than 0
                 */
                // @ts-ignore
                createCompatibleSampleModel(w: number /*int*/, h: number /*int*/): java.awt.image.SampleModel
                /**
                 * Creates a new PixelInterleavedSampleModel with a subset of the
                 * bands of this PixelInterleavedSampleModel.  The new
                 * PixelInterleavedSampleModel can be used with any DataBuffer that the
                 * existing PixelInterleavedSampleModel can be used with.  The new
                 * PixelInterleavedSampleModel/DataBuffer combination will represent
                 * an image with a subset of the bands of the original
                 * PixelInterleavedSampleModel/DataBuffer combination.
                 */
                // @ts-ignore
                createSubsetSampleModel(bands: number /*int*/[]): java.awt.image.SampleModel
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
