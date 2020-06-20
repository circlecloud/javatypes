declare namespace java {
    namespace awt {
        namespace image {
            /**
             * The <code>DirectColorModel</code> class is a <code>ColorModel</code>
             * class that works with pixel values that represent RGB
             * color and alpha information as separate samples and that pack all
             * samples for a single pixel into a single int, short, or byte quantity.
             * This class can be used only with ColorSpaces of type ColorSpace.TYPE_RGB.
             * In addition, for each component of the ColorSpace, the minimum
             * normalized component value obtained via the <code>getMinValue()</code>
             * method of ColorSpace must be 0.0, and the maximum value obtained via
             * the <code>getMaxValue()</code> method must be 1.0 (these min/max
             * values are typical for RGB spaces).
             * There must be three color samples in the pixel values and there can
             * be a single alpha sample.  For those methods that use a primitive array
             * pixel representation of type <code>transferType</code>, the array
             * length is always one.  The transfer
             * types supported are DataBuffer.TYPE_BYTE,
             * DataBuffer.TYPE_USHORT, and DataBuffer.TYPE_INT.
             * Color and alpha samples are stored in the single
             * element of the array in bits indicated by bit masks.  Each bit mask
             * must be contiguous and masks must not overlap.  The same masks apply to
             * the single int pixel representation used by other methods.  The
             * correspondence of masks and color/alpha samples is as follows:
             * <ul>
             * <li> Masks are identified by indices running from 0 through 2
             * if no alpha is present, or 3 if an alpha is present.
             * <li> The first three indices refer to color samples;
             * index 0 corresponds to red, index 1 to green, and index 2 to blue.
             * <li> Index 3 corresponds to the alpha sample, if present.
             * </ul>
             * <p>
             * The translation from pixel values to color/alpha components for
             * display or processing purposes is a one-to-one correspondence of
             * samples to components.  A <code>DirectColorModel</code> is
             * typically used with image data which uses masks to define packed
             * samples.  For example, a <code>DirectColorModel</code> can be used in
             * conjunction with a <code>SinglePixelPackedSampleModel</code> to
             * construct a {@link BufferedImage}.  Normally the masks used by the
             * {@link SampleModel} and the <code>ColorModel</code> would be the
             * same.  However, if they are different, the color interpretation
             * of pixel data will be done according to the masks of the
             * <code>ColorModel</code>.
             * <p>
             * A single int pixel representation is valid for all objects of this
             * class, since it is always possible to represent pixel values used with
             * this class in a single int.  Therefore, methods which use this
             * representation will not throw an <code>IllegalArgumentException</code>
             * due to an invalid pixel value.
             * <p>
             * This color model is similar to an X11 TrueColor visual.
             * The default RGB ColorModel specified by the
             * {@link ColorModel#getRGBdefault() getRGBdefault} method is a
             * <code>DirectColorModel</code> with the following parameters:
             * <pre>
             * Number of bits:        32
             * Red mask:              0x00ff0000
             * Green mask:            0x0000ff00
             * Blue mask:             0x000000ff
             * Alpha mask:            0xff000000
             * Color space:           sRGB
             * isAlphaPremultiplied:  False
             * Transparency:          Transparency.TRANSLUCENT
             * transferType:          DataBuffer.TYPE_INT
             * </pre>
             * <p>
             * Many of the methods in this class are final. This is because the
             * underlying native graphics code makes assumptions about the layout
             * and operation of this class and those assumptions are reflected in
             * the implementations of the methods here that are marked final.  You
             * can subclass this class for other reasons, but you cannot override
             * or modify the behavior of those methods.
             * @see ColorModel
             * @see ColorSpace
             * @see SinglePixelPackedSampleModel
             * @see BufferedImage
             * @see ColorModel#getRGBdefault
             */
            // @ts-ignore
            class DirectColorModel extends java.awt.image.PackedColorModel {
                /**
                 * Constructs a <code>DirectColorModel</code> from the specified masks
                 * that indicate which bits in an <code>int</code> pixel representation
                 * contain the red, green and blue color samples.  As pixel values do not
                 * contain alpha information, all pixels are treated as opaque, which
                 * means that alpha&nbsp;=&nbsp;1.0.  All of the bits
                 * in each mask must be contiguous and fit in the specified number
                 * of least significant bits of an <code>int</code> pixel representation.
                 * The <code>ColorSpace</code> is the default sRGB space. The
                 * transparency value is Transparency.OPAQUE.  The transfer type
                 * is the smallest of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * or DataBuffer.TYPE_INT that can hold a single pixel.
                 * @param bits the number of bits in the pixel values; for example,
                 *          the sum of the number of bits in the masks.
                 * @param rmask specifies a mask indicating which bits in an
                 *          integer pixel contain the red component
                 * @param gmask specifies a mask indicating which bits in an
                 *          integer pixel contain the green component
                 * @param bmask specifies a mask indicating which bits in an
                 *          integer pixel contain the blue component
                 */
                // @ts-ignore
                constructor(bits: number /*int*/, rmask: number /*int*/, gmask: number /*int*/, bmask: number /*int*/)
                /**
                 * Constructs a <code>DirectColorModel</code> from the specified masks
                 * that indicate which bits in an <code>int</code> pixel representation
                 * contain the red, green and blue color samples and the alpha sample,
                 * if present.  If <code>amask</code> is 0, pixel values do not contain
                 * alpha information and all pixels are treated as opaque, which means
                 * that alpha&nbsp;=&nbsp;1.0.  All of the bits in each mask must
                 * be contiguous and fit in the specified number of least significant bits
                 * of an <code>int</code> pixel representation.  Alpha, if present, is not
                 * premultiplied.  The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value is Transparency.OPAQUE if no alpha is
                 * present, or Transparency.TRANSLUCENT otherwise.  The transfer type
                 * is the smallest of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * or DataBuffer.TYPE_INT that can hold a single pixel.
                 * @param bits the number of bits in the pixel values; for example,
                 *          the sum of the number of bits in the masks.
                 * @param rmask specifies a mask indicating which bits in an
                 *          integer pixel contain the red component
                 * @param gmask specifies a mask indicating which bits in an
                 *          integer pixel contain the green component
                 * @param bmask specifies a mask indicating which bits in an
                 *          integer pixel contain the blue component
                 * @param amask specifies a mask indicating which bits in an
                 *          integer pixel contain the alpha component
                 */
                // @ts-ignore
                constructor(bits: number /*int*/, rmask: number /*int*/, gmask: number /*int*/, bmask: number /*int*/, amask: number /*int*/)
                /**
                 * Constructs a <code>DirectColorModel</code> from the specified
                 * parameters.  Color components are in the specified
                 * <code>ColorSpace</code>, which must be of type ColorSpace.TYPE_RGB
                 * and have minimum normalized component values which are all 0.0
                 * and maximum values which are all 1.0.
                 * The masks specify which bits in an <code>int</code> pixel
                 * representation contain the red, green and blue color samples and
                 * the alpha sample, if present.  If <code>amask</code> is 0, pixel
                 * values do not contain alpha information and all pixels are treated
                 * as opaque, which means that alpha&nbsp;=&nbsp;1.0.  All of the
                 * bits in each mask must be contiguous and fit in the specified number
                 * of least significant bits of an <code>int</code> pixel
                 * representation.  If there is alpha, the <code>boolean</code>
                 * <code>isAlphaPremultiplied</code> specifies how to interpret
                 * color and alpha samples in pixel values.  If the <code>boolean</code>
                 * is <code>true</code>, color samples are assumed to have been
                 * multiplied by the alpha sample.  The transparency value is
                 * Transparency.OPAQUE, if no alpha is present, or
                 * Transparency.TRANSLUCENT otherwise.  The transfer type
                 * is the type of primitive array used to represent pixel values and
                 * must be one of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT, or
                 * DataBuffer.TYPE_INT.
                 * @param space the specified <code>ColorSpace</code>
                 * @param bits the number of bits in the pixel values; for example,
                 *          the sum of the number of bits in the masks.
                 * @param rmask specifies a mask indicating which bits in an
                 *          integer pixel contain the red component
                 * @param gmask specifies a mask indicating which bits in an
                 *          integer pixel contain the green component
                 * @param bmask specifies a mask indicating which bits in an
                 *          integer pixel contain the blue component
                 * @param amask specifies a mask indicating which bits in an
                 *          integer pixel contain the alpha component
                 * @param isAlphaPremultiplied <code>true</code> if color samples are
                 *         premultiplied by the alpha sample; <code>false</code> otherwise
                 * @param transferType the type of array used to represent pixel values
                 * @throws IllegalArgumentException if <code>space</code> is not a
                 *          TYPE_RGB space or if the min/max normalized component
                 *          values are not 0.0/1.0.
                 */
                // @ts-ignore
                constructor(space: java.awt.color.ColorSpace, bits: number /*int*/, rmask: number /*int*/, gmask: number /*int*/, bmask: number /*int*/, amask: number /*int*/, isAlphaPremultiplied: boolean, transferType: number /*int*/)
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the red color component.
                 * @return the mask, which indicates which bits of the <code>int</code>
                 *          pixel representation contain the red color sample.
                 */
                // @ts-ignore
                getRedMask(): int
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the green color component.
                 * @return the mask, which indicates which bits of the <code>int</code>
                 *          pixel representation contain the green color sample.
                 */
                // @ts-ignore
                getGreenMask(): int
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the blue color component.
                 * @return the mask, which indicates which bits of the <code>int</code>
                 *          pixel representation contain the blue color sample.
                 */
                // @ts-ignore
                getBlueMask(): int
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the alpha component.
                 * @return the mask, which indicates which bits of the <code>int</code>
                 *          pixel representation contain the alpha sample.
                 */
                // @ts-ignore
                getAlphaMask(): int
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * as an <code>int</code>.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the red value
                 * is 0.
                 * @param pixel the specified pixel
                 * @return the red color component for the specified pixel, from
                 *          0 to 255 in the sRGB <code>ColorSpace</code>.
                 */
                // @ts-ignore
                getRed(pixel: number /*int*/): int
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * as an <code>int</code>.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the green value
                 * is 0.
                 * @param pixel the specified pixel
                 * @return the green color component for the specified pixel, from
                 *          0 to 255 in the sRGB <code>ColorSpace</code>.
                 */
                // @ts-ignore
                getGreen(pixel: number /*int*/): int
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * as an <code>int</code>.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the blue value
                 * is 0.
                 * @param pixel the specified pixel
                 * @return the blue color component for the specified pixel, from
                 *          0 to 255 in the sRGB <code>ColorSpace</code>.
                 */
                // @ts-ignore
                getBlue(pixel: number /*int*/): int
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified as an <code>int</code>.
                 * @param pixel the specified pixel
                 * @return the value of the alpha component of <code>pixel</code>
                 *          from 0 to 255.
                 */
                // @ts-ignore
                getAlpha(pixel: number /*int*/): int
                /**
                 * Returns the color/alpha components of the pixel in the default
                 * RGB color model format.  A color conversion is done if necessary.
                 * The pixel value is specified as an <code>int</code>.
                 * The returned value is in a non pre-multiplied format.  Thus, if
                 * the alpha is premultiplied, this method divides it out of the
                 * color components.  If the alpha value is 0, for example, the color
                 * values are each 0.
                 * @param pixel the specified pixel
                 * @return the RGB value of the color/alpha components of the specified
                 *          pixel.
                 * @see ColorModel#getRGBdefault
                 */
                // @ts-ignore
                getRGB(pixel: number /*int*/): int
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * by an array of data elements of type <code>transferType</code> passed
                 * in as an object reference.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the red value
                 * is 0.
                 * If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is
                 * thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a
                 * pixel value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * An <code>UnsupportedOperationException</code> is thrown if this
                 * <code>transferType</code> is not supported by this
                 * <code>ColorModel</code>.
                 * @param inData the array containing the pixel value
                 * @return the value of the red component of the specified pixel.
                 * @throws ArrayIndexOutOfBoundsException if <code>inData</code> is not
                 *          large enough to hold a pixel value for this color model
                 * @throws ClassCastException if <code>inData</code> is not a
                 *          primitive array of type <code>transferType</code>
                 * @throws UnsupportedOperationException if this <code>transferType</code>
                 *          is not supported by this color model
                 */
                // @ts-ignore
                getRed(inData: any): int
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * by an array of data elements of type <code>transferType</code> passed
                 * in as an object reference.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the green value
                 * is 0.  If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * An <code>UnsupportedOperationException</code> is
                 * thrown if this <code>transferType</code> is not supported by this
                 * <code>ColorModel</code>.
                 * @param inData the array containing the pixel value
                 * @return the value of the green component of the specified pixel.
                 * @throws ArrayIndexOutOfBoundsException if <code>inData</code> is not
                 *          large enough to hold a pixel value for this color model
                 * @throws ClassCastException if <code>inData</code> is not a
                 *          primitive array of type <code>transferType</code>
                 * @throws UnsupportedOperationException if this <code>transferType</code>
                 *          is not supported by this color model
                 */
                // @ts-ignore
                getGreen(inData: any): int
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * by an array of data elements of type <code>transferType</code> passed
                 * in as an object reference.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the blue value
                 * is 0.  If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * An <code>UnsupportedOperationException</code> is
                 * thrown if this <code>transferType</code> is not supported by this
                 * <code>ColorModel</code>.
                 * @param inData the array containing the pixel value
                 * @return the value of the blue component of the specified pixel.
                 * @throws ArrayIndexOutOfBoundsException if <code>inData</code> is not
                 *          large enough to hold a pixel value for this color model
                 * @throws ClassCastException if <code>inData</code> is not a
                 *          primitive array of type <code>transferType</code>
                 * @throws UnsupportedOperationException if this <code>transferType</code>
                 *          is not supported by this color model
                 */
                // @ts-ignore
                getBlue(inData: any): int
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified by an array of data
                 * elements of type <code>transferType</code> passed in as an object
                 * reference.
                 * If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is
                 * thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * If this <code>transferType</code> is not supported, an
                 * <code>UnsupportedOperationException</code> is thrown.
                 * @param inData the specified pixel
                 * @return the alpha component of the specified pixel, scaled from
                 *          0 to 255.
                 * @exception ClassCastException if <code>inData</code>
                 *   is not a primitive array of type <code>transferType</code>
                 * @exception ArrayIndexOutOfBoundsException if
                 *   <code>inData</code> is not large enough to hold a pixel value
                 *   for this <code>ColorModel</code>
                 * @exception UnsupportedOperationException if this
                 *   <code>tranferType</code> is not supported by this
                 *   <code>ColorModel</code>
                 */
                // @ts-ignore
                getAlpha(inData: any): int
                /**
                 * Returns the color/alpha components for the specified pixel in the
                 * default RGB color model format.  A color conversion is done if
                 * necessary.  The pixel value is specified by an array of data
                 * elements of type <code>transferType</code> passed in as an object
                 * reference.  If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is
                 * thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.
                 * The returned value is in a non pre-multiplied format.  Thus, if
                 * the alpha is premultiplied, this method divides it out of the
                 * color components.  If the alpha value is 0, for example, the color
                 * values is 0.  Since <code>DirectColorModel</code> can be
                 * subclassed, subclasses inherit the implementation of this method
                 * and if they don't override it then
                 * they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param inData the specified pixel
                 * @return the color and alpha components of the specified pixel.
                 * @exception UnsupportedOperationException if this
                 *             <code>transferType</code> is not supported by this
                 *             <code>ColorModel</code>
                 * @see ColorModel#getRGBdefault
                 */
                // @ts-ignore
                getRGB(inData: any): int
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an integer pixel representation in the
                 * default RGB color model.
                 * This array can then be passed to the <code>setDataElements</code>
                 * method of a <code>WritableRaster</code> object.  If the pixel variable
                 * is <code>null</code>, a new array is allocated.  If <code>pixel</code>
                 * is not <code>null</code>, it must be a primitive array of type
                 * <code>transferType</code>; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>pixel</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  The pixel array is returned.
                 * Since <code>DirectColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param rgb the integer pixel representation in the default RGB
                 *             color model
                 * @param pixel the specified pixel
                 * @return an array representation of the specified pixel in this
                 *          <code>ColorModel</code>
                 * @exception ClassCastException if <code>pixel</code>
                 *   is not a primitive array of type <code>transferType</code>
                 * @exception ArrayIndexOutOfBoundsException if
                 *   <code>pixel</code> is not large enough to hold a pixel value
                 *   for this <code>ColorModel</code>
                 * @exception UnsupportedOperationException if this
                 *   <code>transferType</code> is not supported by this
                 *   <code>ColorModel</code>
                 * @see WritableRaster#setDataElements
                 * @see SampleModel#setDataElements
                 */
                // @ts-ignore
                getDataElements(rgb: number /*int*/, pixel: any): java.lang.Object
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <code>ColorModel</code>.  The pixel value is specified as an
                 * <code>int</code>.  If the <code>components</code> array is
                 * <code>null</code>, a new array is allocated.  The
                 * <code>components</code> array is returned.  Color/alpha components are
                 * stored in the <code>components</code> array starting at
                 * <code>offset</code>, even if the array is allocated by this method.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * <code>components</code> array is not <code>null</code> and is not large
                 * enough to hold all the color and alpha components, starting at
                 * <code>offset</code>.
                 * @param pixel the specified pixel
                 * @param components the array to receive the color and alpha
                 *  components of the specified pixel
                 * @param offset the offset into the <code>components</code> array at
                 *  which to start storing the color and alpha components
                 * @return an array containing the color and alpha components of the
                 *  specified pixel starting at the specified offset.
                 */
                // @ts-ignore
                getComponents(pixel: number /*int*/, components: number /*int*/[], offset: number /*int*/): int[]
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <code>ColorModel</code>.  The pixel value is specified by an
                 * array of data elements of type <code>transferType</code> passed in as
                 * an object reference.  If <code>pixel</code> is not a primitive array
                 * of type <code>transferType</code>, a <code>ClassCastException</code>
                 * is thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>pixel</code> is not large enough to hold a
                 * pixel value for this <code>ColorModel</code>.  If the
                 * <code>components</code> array is <code>null</code>, a new
                 * array is allocated.  The <code>components</code> array is returned.
                 * Color/alpha components are stored in the <code>components</code> array
                 * starting at <code>offset</code>, even if the array is allocated by
                 * this method.  An <code>ArrayIndexOutOfBoundsException</code>
                 * is thrown if the <code>components</code> array is not
                 * <code>null</code> and is not large enough to hold all the color and
                 * alpha components, starting at <code>offset</code>.
                 * Since <code>DirectColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param pixel the specified pixel
                 * @param components the array to receive the color and alpha
                 *         components of the specified pixel
                 * @param offset the offset into the <code>components</code> array at
                 *         which to start storing the color and alpha components
                 * @return an array containing the color and alpha components of the
                 *  specified pixel starting at the specified offset.
                 * @exception ClassCastException if <code>pixel</code>
                 *   is not a primitive array of type <code>transferType</code>
                 * @exception ArrayIndexOutOfBoundsException if
                 *   <code>pixel</code> is not large enough to hold a pixel value
                 *   for this <code>ColorModel</code>, or if <code>components</code>
                 *   is not <code>null</code> and is not large enough to hold all the
                 *   color and alpha components, starting at <code>offset</code>
                 * @exception UnsupportedOperationException if this
                 *             <code>transferType</code> is not supported by this
                 *             color model
                 */
                // @ts-ignore
                getComponents(pixel: any, components: number /*int*/[], offset: number /*int*/): int[]
                /**
                 * Creates a <code>WritableRaster</code> with the specified width and
                 * height that has a data layout (<code>SampleModel</code>) compatible
                 * with this <code>ColorModel</code>.
                 * @param w the width to apply to the new <code>WritableRaster</code>
                 * @param h the height to apply to the new <code>WritableRaster</code>
                 * @return a <code>WritableRaster</code> object with the specified
                 *  width and height.
                 * @throws IllegalArgumentException if <code>w</code> or <code>h</code>
                 *          is less than or equal to zero
                 * @see WritableRaster
                 * @see SampleModel
                 */
                // @ts-ignore
                createCompatibleWritableRaster(w: number /*int*/, h: number /*int*/): java.awt.image.WritableRaster
                /**
                 * Returns a pixel value represented as an <code>int</code> in this
                 * <code>ColorModel</code>, given an array of unnormalized color/alpha
                 * components.   An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if the <code>components</code> array is
                 * not large enough to hold all the color and alpha components, starting
                 * at <code>offset</code>.
                 * @param components an array of unnormalized color and alpha
                 *  components
                 * @param offset the index into <code>components</code> at which to
                 *  begin retrieving the color and alpha components
                 * @return an <code>int</code> pixel value in this
                 *  <code>ColorModel</code> corresponding to the specified components.
                 * @exception ArrayIndexOutOfBoundsException if
                 *   the <code>components</code> array is not large enough to
                 *   hold all of the color and alpha components starting at
                 *   <code>offset</code>
                 */
                // @ts-ignore
                getDataElement(components: number /*int*/[], offset: number /*int*/): int
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an array of unnormalized color/alpha
                 * components.
                 * This array can then be passed to the <code>setDataElements</code>
                 * method of a <code>WritableRaster</code> object.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * <code>components</code> array
                 * is not large enough to hold all the color and alpha components,
                 * starting at offset.  If the <code>obj</code> variable is
                 * <code>null</code>, a new array is allocated.  If <code>obj</code> is
                 * not <code>null</code>, it must be a primitive array
                 * of type <code>transferType</code>; otherwise, a
                 * <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>obj</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * Since <code>DirectColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param components an array of unnormalized color and alpha
                 *  components
                 * @param offset the index into <code>components</code> at which to
                 *  begin retrieving color and alpha components
                 * @param obj the <code>Object</code> representing an array of color
                 *  and alpha components
                 * @return an <code>Object</code> representing an array of color and
                 *  alpha components.
                 * @exception ClassCastException if <code>obj</code>
                 *   is not a primitive array of type <code>transferType</code>
                 * @exception ArrayIndexOutOfBoundsException if
                 *   <code>obj</code> is not large enough to hold a pixel value
                 *   for this <code>ColorModel</code> or the <code>components</code>
                 *   array is not large enough to hold all of the color and alpha
                 *   components starting at <code>offset</code>
                 * @exception UnsupportedOperationException if this
                 *             <code>transferType</code> is not supported by this
                 *             color model
                 * @see WritableRaster#setDataElements
                 * @see SampleModel#setDataElements
                 */
                // @ts-ignore
                getDataElements(components: number /*int*/[], offset: number /*int*/, obj: any): java.lang.Object
                /**
                 * Forces the raster data to match the state specified in the
                 * <code>isAlphaPremultiplied</code> variable, assuming the data is
                 * currently correctly described by this <code>ColorModel</code>.  It
                 * may multiply or divide the color raster data by alpha, or do
                 * nothing if the data is in the correct state.  If the data needs to
                 * be coerced, this method will also return an instance of this
                 * <code>ColorModel</code> with the <code>isAlphaPremultiplied</code>
                 * flag set appropriately.  This method will throw a
                 * <code>UnsupportedOperationException</code> if this transferType is
                 * not supported by this <code>ColorModel</code>.  Since
                 * <code>ColorModel</code> can be subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * they throw an exception if they use an unsupported transferType.
                 * @param raster the <code>WritableRaster</code> data
                 * @param isAlphaPremultiplied <code>true</code> if the alpha is
                 *  premultiplied; <code>false</code> otherwise
                 * @return a <code>ColorModel</code> object that represents the
                 *  coerced data.
                 * @exception UnsupportedOperationException if this
                 *             <code>transferType</code> is not supported by this
                 *             color model
                 */
                // @ts-ignore
                coerceData(raster: java.awt.image.WritableRaster, isAlphaPremultiplied: boolean): java.awt.image.ColorModel
                /**
                 * Returns <code>true</code> if <code>raster</code> is compatible
                 * with this <code>ColorModel</code> and <code>false</code> if it is
                 * not.
                 * @param raster the {#link Raster} object to test for compatibility
                 * @return <code>true</code> if <code>raster</code> is compatible
                 *  with this <code>ColorModel</code>; <code>false</code> otherwise.
                 */
                // @ts-ignore
                isCompatibleRaster(raster: java.awt.image.Raster): boolean
                /**
                 * Returns a <code>String</code> that represents this
                 * <code>DirectColorModel</code>.
                 * @return a <code>String</code> representing this
                 *  <code>DirectColorModel</code>.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
