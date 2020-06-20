declare namespace javax {
    namespace imageio {
        /**
         * A class that allows the format of an image (in particular, its
         * <code>SampleModel</code> and <code>ColorModel</code>) to be
         * specified in a convenient manner.
         */
        // @ts-ignore
        class ImageTypeSpecifier extends java.lang.Object {
            /**
             * Constructs an <code>ImageTypeSpecifier</code> directly
             * from a <code>ColorModel</code> and a <code>SampleModel</code>.
             * It is the caller's responsibility to supply compatible
             * parameters.
             * @param colorModel a <code>ColorModel</code>.
             * @param sampleModel a <code>SampleModel</code>.
             * @exception IllegalArgumentException if either parameter is
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>sampleModel</code>
             *  is not compatible with <code>colorModel</code>.
             */
            // @ts-ignore
            constructor(colorModel: java.awt.image.ColorModel, sampleModel: java.awt.image.SampleModel)
            /**
             * Constructs an <code>ImageTypeSpecifier</code> from a
             * <code>RenderedImage</code>.  If a <code>BufferedImage</code> is
             * being used, one of the factory methods
             * <code>createFromRenderedImage</code> or
             * <code>createFromBufferedImageType</code> should be used instead in
             * order to get a more accurate result.
             * @param image a <code>RenderedImage</code>.
             * @exception IllegalArgumentException if the argument is
             *  <code>null</code>.
             */
            // @ts-ignore
            constructor(image: java.awt.image.RenderedImage)
            /**
             * The <code>ColorModel</code> to be used as a prototype.
             */
            // @ts-ignore
            colorModel: java.awt.image.ColorModel
            /**
             * A <code>SampleModel</code> to be used as a prototype.
             */
            // @ts-ignore
            sampleModel: java.awt.image.SampleModel
            /**
             * Returns a specifier for a packed image format that will use a
             * <code>DirectColorModel</code> and a packed
             * <code>SampleModel</code> to store each pixel packed into in a
             * single byte, short, or int.
             * @param colorSpace the desired <code>ColorSpace</code>.
             * @param redMask a contiguous mask indicated the position of the
             *  red channel.
             * @param greenMask a contiguous mask indicated the position of the
             *  green channel.
             * @param blueMask a contiguous mask indicated the position of the
             *  blue channel.
             * @param alphaMask a contiguous mask indicated the position of the
             *  alpha channel.
             * @param transferType the desired <code>SampleModel</code> transfer type.
             * @param isAlphaPremultiplied <code>true</code> if the color channels
             *  will be premultipled by the alpha channel.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>colorSpace</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>colorSpace</code>
             *  is not of type <code>TYPE_RGB</code>.
             * @exception IllegalArgumentException if no mask has at least 1
             *  bit set.
             * @exception IllegalArgumentException if
             *  <code>transferType</code> if not one of
             *  <code>DataBuffer.TYPE_BYTE</code>,
             *  <code>DataBuffer.TYPE_USHORT</code>, or
             *  <code>DataBuffer.TYPE_INT</code>.
             */
            // @ts-ignore
            createPacked(colorSpace: java.awt.color.ColorSpace, redMask: number /*int*/, greenMask: number /*int*/, blueMask: number /*int*/, alphaMask: number /*int*/, transferType: number /*int*/, isAlphaPremultiplied: boolean): javax.imageio.ImageTypeSpecifier
            /**
             * Returns a specifier for an interleaved image format that will
             * use a <code>ComponentColorModel</code> and a
             * <code>PixelInterleavedSampleModel</code> to store each pixel
             * component in a separate byte, short, or int.
             * @param colorSpace the desired <code>ColorSpace</code>.
             * @param bandOffsets an array of <code>int</code>s indicating the
             *  offsets for each band.
             * @param dataType the desired data type, as one of the enumerations
             *  from the <code>DataBuffer</code> class.
             * @param hasAlpha <code>true</code> if an alpha channel is desired.
             * @param isAlphaPremultiplied <code>true</code> if the color channels
             *  will be premultipled by the alpha channel.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>colorSpace</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>bandOffsets</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>dataType</code> is
             *  not one of the legal <code>DataBuffer.TYPE_*</code> constants.
             * @exception IllegalArgumentException if
             *  <code>bandOffsets.length</code> does not equal the number of
             *  color space components, plus 1 if <code>hasAlpha</code> is
             *  <code>true</code>.
             */
            // @ts-ignore
            createInterleaved(colorSpace: java.awt.color.ColorSpace, bandOffsets: number /*int*/[], dataType: number /*int*/, hasAlpha: boolean, isAlphaPremultiplied: boolean): javax.imageio.ImageTypeSpecifier
            /**
             * Returns a specifier for a banded image format that will use a
             * <code>ComponentColorModel</code> and a
             * <code>BandedSampleModel</code> to store each channel in a
             * separate array.
             * @param colorSpace the desired <code>ColorSpace</code>.
             * @param bankIndices an array of <code>int</code>s indicating the
             *  bank in which each band will be stored.
             * @param bandOffsets an array of <code>int</code>s indicating the
             *  starting offset of each band within its bank.
             * @param dataType the desired data type, as one of the enumerations
             *  from the <code>DataBuffer</code> class.
             * @param hasAlpha <code>true</code> if an alpha channel is desired.
             * @param isAlphaPremultiplied <code>true</code> if the color channels
             *  will be premultipled by the alpha channel.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>colorSpace</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>bankIndices</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>bandOffsets</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if the lengths of
             *  <code>bankIndices</code> and <code>bandOffsets</code> differ.
             * @exception IllegalArgumentException if
             *  <code>bandOffsets.length</code> does not equal the number of
             *  color space components, plus 1 if <code>hasAlpha</code> is
             *  <code>true</code>.
             * @exception IllegalArgumentException if <code>dataType</code> is
             *  not one of the legal <code>DataBuffer.TYPE_*</code> constants.
             */
            // @ts-ignore
            createBanded(colorSpace: java.awt.color.ColorSpace, bankIndices: number /*int*/[], bandOffsets: number /*int*/[], dataType: number /*int*/, hasAlpha: boolean, isAlphaPremultiplied: boolean): javax.imageio.ImageTypeSpecifier
            /**
             * Returns a specifier for a grayscale image format that will pack
             * pixels of the given bit depth into array elements of
             * the specified data type.
             * @param bits the number of bits per gray value (1, 2, 4, 8, or 16).
             * @param dataType the desired data type, as one of the enumerations
             *  from the <code>DataBuffer</code> class.
             * @param isSigned <code>true</code> if negative values are to
             *  be represented.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>bits</code> is
             *  not one of 1, 2, 4, 8, or 16.
             * @exception IllegalArgumentException if <code>dataType</code> is
             *  not one of <code>DataBuffer.TYPE_BYTE</code>,
             *  <code>DataBuffer.TYPE_SHORT</code>, or
             *  <code>DataBuffer.TYPE_USHORT</code>.
             * @exception IllegalArgumentException if <code>bits</code> is
             *  larger than the bit size of the given <code>dataType</code>.
             */
            // @ts-ignore
            createGrayscale(bits: number /*int*/, dataType: number /*int*/, isSigned: boolean): javax.imageio.ImageTypeSpecifier
            /**
             * Returns a specifier for a grayscale plus alpha image format
             * that will pack pixels of the given bit depth into array
             * elements of the specified data type.
             * @param bits the number of bits per gray value (1, 2, 4, 8, or 16).
             * @param dataType the desired data type, as one of the enumerations
             *  from the <code>DataBuffer</code> class.
             * @param isSigned <code>true</code> if negative values are to
             *  be represented.
             * @param isAlphaPremultiplied <code>true</code> if the luminance channel
             *  will be premultipled by the alpha channel.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>bits</code> is
             *  not one of 1, 2, 4, 8, or 16.
             * @exception IllegalArgumentException if <code>dataType</code> is
             *  not one of <code>DataBuffer.TYPE_BYTE</code>,
             *  <code>DataBuffer.TYPE_SHORT</code>, or
             *  <code>DataBuffer.TYPE_USHORT</code>.
             * @exception IllegalArgumentException if <code>bits</code> is
             *  larger than the bit size of the given <code>dataType</code>.
             */
            // @ts-ignore
            createGrayscale(bits: number /*int*/, dataType: number /*int*/, isSigned: boolean, isAlphaPremultiplied: boolean): javax.imageio.ImageTypeSpecifier
            /**
             * Returns a specifier for an indexed-color image format that will pack
             * index values of the given bit depth into array elements of
             * the specified data type.
             * @param redLUT an array of <code>byte</code>s containing
             *  the red values for each index.
             * @param greenLUT an array of <code>byte</code>s containing * the
             *   green values for each index.
             * @param blueLUT an array of <code>byte</code>s containing the
             *  blue values for each index.
             * @param alphaLUT an array of <code>byte</code>s containing the
             *  alpha values for each index, or <code>null</code> to create a
             *  fully opaque LUT.
             * @param bits the number of bits in each index.
             * @param dataType the desired output type, as one of the enumerations
             *  from the <code>DataBuffer</code> class.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>redLUT</code> is
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>greenLUT</code> is
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>blueLUT</code> is
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>bits</code> is
             *  not one of 1, 2, 4, 8, or 16.
             * @exception IllegalArgumentException if the
             *  non-<code>null</code> LUT parameters do not have lengths of
             *  exactly {#code 1 << bits}.
             * @exception IllegalArgumentException if <code>dataType</code> is
             *  not one of <code>DataBuffer.TYPE_BYTE</code>,
             *  <code>DataBuffer.TYPE_SHORT</code>,
             *  <code>DataBuffer.TYPE_USHORT</code>,
             *  or <code>DataBuffer.TYPE_INT</code>.
             * @exception IllegalArgumentException if <code>bits</code> is
             *  larger than the bit size of the given <code>dataType</code>.
             */
            // @ts-ignore
            createIndexed(redLUT: number /*byte*/[], greenLUT: number /*byte*/[], blueLUT: number /*byte*/[], alphaLUT: number /*byte*/[], bits: number /*int*/, dataType: number /*int*/): javax.imageio.ImageTypeSpecifier
            /**
             * Returns an <code>ImageTypeSpecifier</code> that encodes
             * one of the standard <code>BufferedImage</code> types
             * (other than <code>TYPE_CUSTOM</code>).
             * @param bufferedImageType an int representing one of the standard
             *  <code>BufferedImage</code> types.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if
             *  <code>bufferedImageType</code> is not one of the standard
             *  types, or is equal to <code>TYPE_CUSTOM</code>.
             * @see java.awt.image.BufferedImage
             * @see java.awt.image.BufferedImage#TYPE_INT_RGB
             * @see java.awt.image.BufferedImage#TYPE_INT_ARGB
             * @see java.awt.image.BufferedImage#TYPE_INT_ARGB_PRE
             * @see java.awt.image.BufferedImage#TYPE_INT_BGR
             * @see java.awt.image.BufferedImage#TYPE_3BYTE_BGR
             * @see java.awt.image.BufferedImage#TYPE_4BYTE_ABGR
             * @see java.awt.image.BufferedImage#TYPE_4BYTE_ABGR_PRE
             * @see java.awt.image.BufferedImage#TYPE_USHORT_565_RGB
             * @see java.awt.image.BufferedImage#TYPE_USHORT_555_RGB
             * @see java.awt.image.BufferedImage#TYPE_BYTE_GRAY
             * @see java.awt.image.BufferedImage#TYPE_USHORT_GRAY
             * @see java.awt.image.BufferedImage#TYPE_BYTE_BINARY
             * @see java.awt.image.BufferedImage#TYPE_BYTE_INDEXED
             */
            // @ts-ignore
            createFromBufferedImageType(bufferedImageType: number /*int*/): javax.imageio.ImageTypeSpecifier
            /**
             * Returns an <code>ImageTypeSpecifier</code> that encodes the
             * layout of a <code>RenderedImage</code> (which may be a
             * <code>BufferedImage</code>).
             * @param image a <code>RenderedImage</code>.
             * @return an <code>ImageTypeSpecifier</code> with the desired
             *  characteristics.
             * @exception IllegalArgumentException if <code>image</code> is
             *  <code>null</code>.
             */
            // @ts-ignore
            createFromRenderedImage(image: java.awt.image.RenderedImage): javax.imageio.ImageTypeSpecifier
            /**
             * Returns an int containing one of the enumerated constant values
             * describing image formats from <code>BufferedImage</code>.
             * @return an <code>int</code> representing a
             *  <code>BufferedImage</code> type.
             * @see java.awt.image.BufferedImage
             * @see java.awt.image.BufferedImage#TYPE_CUSTOM
             * @see java.awt.image.BufferedImage#TYPE_INT_RGB
             * @see java.awt.image.BufferedImage#TYPE_INT_ARGB
             * @see java.awt.image.BufferedImage#TYPE_INT_ARGB_PRE
             * @see java.awt.image.BufferedImage#TYPE_INT_BGR
             * @see java.awt.image.BufferedImage#TYPE_3BYTE_BGR
             * @see java.awt.image.BufferedImage#TYPE_4BYTE_ABGR
             * @see java.awt.image.BufferedImage#TYPE_4BYTE_ABGR_PRE
             * @see java.awt.image.BufferedImage#TYPE_USHORT_565_RGB
             * @see java.awt.image.BufferedImage#TYPE_USHORT_555_RGB
             * @see java.awt.image.BufferedImage#TYPE_BYTE_GRAY
             * @see java.awt.image.BufferedImage#TYPE_USHORT_GRAY
             * @see java.awt.image.BufferedImage#TYPE_BYTE_BINARY
             * @see java.awt.image.BufferedImage#TYPE_BYTE_INDEXED
             */
            // @ts-ignore
            getBufferedImageType(): int
            /**
             * Return the number of color components
             * specified by this object.  This is the same value as returned by
             * <code>ColorModel.getNumComponents</code>
             * @return the number of components in the image.
             */
            // @ts-ignore
            getNumComponents(): int
            /**
             * Return the number of bands
             * specified by this object.  This is the same value as returned by
             * <code>SampleModel.getNumBands</code>
             * @return the number of bands in the image.
             */
            // @ts-ignore
            getNumBands(): int
            /**
             * Return the number of bits used to represent samples of the given band.
             * @param band the index of the band to be queried, as an
             *  int.
             * @return an int specifying a number of bits.
             * @exception IllegalArgumentException if <code>band</code> is
             *  negative or greater than the largest band index.
             */
            // @ts-ignore
            getBitsPerBand(band: number /*int*/): int
            /**
             * Returns a <code>SampleModel</code> based on the settings
             * encapsulated within this object.  The width and height of the
             * <code>SampleModel</code> will be set to arbitrary values.
             * @return a <code>SampleModel</code> with arbitrary dimensions.
             */
            // @ts-ignore
            getSampleModel(): java.awt.image.SampleModel
            /**
             * Returns a <code>SampleModel</code> based on the settings
             * encapsulated within this object.  The width and height of the
             * <code>SampleModel</code> will be set to the supplied values.
             * @param width the desired width of the returned <code>SampleModel</code>.
             * @param height the desired height of the returned
             *  <code>SampleModel</code>.
             * @return a <code>SampleModel</code> with the given dimensions.
             * @exception IllegalArgumentException if either <code>width</code> or
             *  <code>height</code> are negative or zero.
             * @exception IllegalArgumentException if the product of
             *  <code>width</code> and <code>height</code> is greater than
             *  <code>Integer.MAX_VALUE</code>
             */
            // @ts-ignore
            getSampleModel(width: number /*int*/, height: number /*int*/): java.awt.image.SampleModel
            /**
             * Returns the <code>ColorModel</code> specified by this object.
             * @return a <code>ColorModel</code>.
             */
            // @ts-ignore
            getColorModel(): java.awt.image.ColorModel
            /**
             * Creates a <code>BufferedImage</code> with a given width and
             * height according to the specification embodied in this object.
             * @param width the desired width of the returned
             *  <code>BufferedImage</code>.
             * @param height the desired height of the returned
             *  <code>BufferedImage</code>.
             * @return a new <code>BufferedImage</code>
             * @exception IllegalArgumentException if either <code>width</code> or
             *  <code>height</code> are negative or zero.
             * @exception IllegalArgumentException if the product of
             *  <code>width</code> and <code>height</code> is greater than
             *  <code>Integer.MAX_VALUE</code>, or if the number of array
             *  elements needed to store the image is greater than
             *  <code>Integer.MAX_VALUE</code>.
             */
            // @ts-ignore
            createBufferedImage(width: number /*int*/, height: number /*int*/): java.awt.image.BufferedImage
            /**
             * Returns <code>true</code> if the given <code>Object</code> is
             * an <code>ImageTypeSpecifier</code> and has a
             * <code>SampleModel</code> and <code>ColorModel</code> that are
             * equal to those of this object.
             * @param o the <code>Object</code> to be compared for equality.
             * @return <code>true</code> if the given object is an equivalent
             *  <code>ImageTypeSpecifier</code>.
             */
            // @ts-ignore
            equals(o: any): boolean
            /**
             * Returns the hash code for this ImageTypeSpecifier.
             * @return a hash code for this ImageTypeSpecifier
             */
            // @ts-ignore
            hashCode(): int
        }
    }
}
