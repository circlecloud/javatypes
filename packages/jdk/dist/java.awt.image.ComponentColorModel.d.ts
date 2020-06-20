declare namespace java {
    namespace awt {
        namespace image {
            /**
             * A <CODE>ColorModel</CODE> class that works with pixel values that
             * represent color and alpha information as separate samples and that
             * store each sample in a separate data element.  This class can be
             * used with an arbitrary <CODE>ColorSpace</CODE>.  The number of
             * color samples in the pixel values must be same as the number of
             * color components in the <CODE>ColorSpace</CODE>. There may be a
             * single alpha sample.
             * <p>
             * For those methods that use
             * a primitive array pixel representation of type <CODE>transferType</CODE>,
             * the array length is the same as the number of color and alpha samples.
             * Color samples are stored first in the array followed by the alpha
             * sample, if present.  The order of the color samples is specified
             * by the <CODE>ColorSpace</CODE>.  Typically, this order reflects the
             * name of the color space type. For example, for <CODE>TYPE_RGB</CODE>,
             * index 0 corresponds to red, index 1 to green, and index 2 to blue.
             * <p>
             * The translation from pixel sample values to color/alpha components for
             * display or processing purposes is based on a one-to-one correspondence of
             * samples to components.
             * Depending on the transfer type used to create an instance of
             * <code>ComponentColorModel</code>, the pixel sample values
             * represented by that instance may be signed or unsigned and may
             * be of integral type or float or double (see below for details).
             * The translation from sample values to normalized color/alpha components
             * must follow certain rules.  For float and double samples, the translation
             * is an identity, i.e. normalized component values are equal to the
             * corresponding sample values.  For integral samples, the translation
             * should be only a simple scale and offset, where the scale and offset
             * constants may be different for each component.  The result of
             * applying the scale and offset constants is a set of color/alpha
             * component values, which are guaranteed to fall within a certain
             * range.  Typically, the range for a color component will be the range
             * defined by the <code>getMinValue</code> and <code>getMaxValue</code>
             * methods of the <code>ColorSpace</code> class.  The range for an
             * alpha component should be 0.0 to 1.0.
             * <p>
             * Instances of <code>ComponentColorModel</code> created with transfer types
             * <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
             * and <CODE>DataBuffer.TYPE_INT</CODE> have pixel sample values which
             * are treated as unsigned integral values.
             * The number of bits in a color or alpha sample of a pixel value might not
             * be the same as the number of bits for the corresponding color or alpha
             * sample passed to the
             * <code>ComponentColorModel(ColorSpace, int[], boolean, boolean, int, int)</code>
             * constructor.  In
             * that case, this class assumes that the least significant n bits of a sample
             * value hold the component value, where n is the number of significant bits
             * for the component passed to the constructor.  It also assumes that
             * any higher-order bits in a sample value are zero.  Thus, sample values
             * range from 0 to 2<sup>n</sup> - 1.  This class maps these sample values
             * to normalized color component values such that 0 maps to the value
             * obtained from the <code>ColorSpace's</code> <code>getMinValue</code>
             * method for each component and 2<sup>n</sup> - 1 maps to the value
             * obtained from <code>getMaxValue</code>.  To create a
             * <code>ComponentColorModel</code> with a different color sample mapping
             * requires subclassing this class and overriding the
             * <code>getNormalizedComponents(Object, float[], int)</code> method.
             * The mapping for an alpha sample always maps 0 to 0.0 and
             * 2<sup>n</sup> - 1 to 1.0.
             * <p>
             * For instances with unsigned sample values,
             * the unnormalized color/alpha component representation is only
             * supported if two conditions hold.  First, sample value value 0 must
             * map to normalized component value 0.0 and sample value 2<sup>n</sup> - 1
             * to 1.0.  Second the min/max range of all color components of the
             * <code>ColorSpace</code> must be 0.0 to 1.0.  In this case, the
             * component representation is the n least
             * significant bits of the corresponding sample.  Thus each component is
             * an unsigned integral value between 0 and 2<sup>n</sup> - 1, where
             * n is the number of significant bits for a particular component.
             * If these conditions are not met, any method taking an unnormalized
             * component argument will throw an <code>IllegalArgumentException</code>.
             * <p>
             * Instances of <code>ComponentColorModel</code> created with transfer types
             * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>, and
             * <CODE>DataBuffer.TYPE_DOUBLE</CODE> have pixel sample values which
             * are treated as signed short, float, or double values.
             * Such instances do not support the unnormalized color/alpha component
             * representation, so any methods taking such a representation as an argument
             * will throw an <code>IllegalArgumentException</code> when called on one
             * of these instances.  The normalized component values of instances
             * of this class have a range which depends on the transfer
             * type as follows: for float samples, the full range of the float data
             * type; for double samples, the full range of the float data type
             * (resulting from casting double to float); for short samples,
             * from approximately -maxVal to +maxVal, where maxVal is the per
             * component maximum value for the <code>ColorSpace</code>
             * (-32767 maps to -maxVal, 0 maps to 0.0, and 32767 maps
             * to +maxVal).  A subclass may override the scaling for short sample
             * values to normalized component values by overriding the
             * <code>getNormalizedComponents(Object, float[], int)</code> method.
             * For float and double samples, the normalized component values are
             * taken to be equal to the corresponding sample values, and subclasses
             * should not attempt to add any non-identity scaling for these transfer
             * types.
             * <p>
             * Instances of <code>ComponentColorModel</code> created with transfer types
             * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>, and
             * <CODE>DataBuffer.TYPE_DOUBLE</CODE>
             * use all the bits of all sample values.  Thus all color/alpha components
             * have 16 bits when using <CODE>DataBuffer.TYPE_SHORT</CODE>, 32 bits when
             * using <CODE>DataBuffer.TYPE_FLOAT</CODE>, and 64 bits when using
             * <CODE>DataBuffer.TYPE_DOUBLE</CODE>.  When the
             * <code>ComponentColorModel(ColorSpace, int[], boolean, boolean, int, int)</code>
             * form of constructor is used with one of these transfer types, the
             * bits array argument is ignored.
             * <p>
             * It is possible to have color/alpha sample values
             * which cannot be reasonably interpreted as component values for rendering.
             * This can happen when <code>ComponentColorModel</code> is subclassed to
             * override the mapping of unsigned sample values to normalized color
             * component values or when signed sample values outside a certain range
             * are used.  (As an example, specifying an alpha component as a signed
             * short value outside the range 0 to 32767, normalized range 0.0 to 1.0, can
             * lead to unexpected results.) It is the
             * responsibility of applications to appropriately scale pixel data before
             * rendering such that color components fall within the normalized range
             * of the <code>ColorSpace</code> (obtained using the <code>getMinValue</code>
             * and <code>getMaxValue</code> methods of the <code>ColorSpace</code> class)
             * and the alpha component is between 0.0 and 1.0.  If color or alpha
             * component values fall outside these ranges, rendering results are
             * indeterminate.
             * <p>
             * Methods that use a single int pixel representation throw
             * an <CODE>IllegalArgumentException</CODE>, unless the number of components
             * for the <CODE>ComponentColorModel</CODE> is one and the component
             * value is unsigned -- in other words,  a single color component using
             * a transfer type of <CODE>DataBuffer.TYPE_BYTE</CODE>,
             * <CODE>DataBuffer.TYPE_USHORT</CODE>, or <CODE>DataBuffer.TYPE_INT</CODE>
             * and no alpha.
             * <p>
             * A <CODE>ComponentColorModel</CODE> can be used in conjunction with a
             * <CODE>ComponentSampleModel</CODE>, a <CODE>BandedSampleModel</CODE>,
             * or a <CODE>PixelInterleavedSampleModel</CODE> to construct a
             * <CODE>BufferedImage</CODE>.
             * @see ColorModel
             * @see ColorSpace
             * @see ComponentSampleModel
             * @see BandedSampleModel
             * @see PixelInterleavedSampleModel
             * @see BufferedImage
             */
            // @ts-ignore
            class ComponentColorModel extends java.awt.image.ColorModel {
                /**
                 * Constructs a <CODE>ComponentColorModel</CODE> from the specified
                 * parameters. Color components will be in the specified
                 * <CODE>ColorSpace</CODE>.  The supported transfer types are
                 * <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 * <CODE>DataBuffer.TYPE_INT</CODE>,
                 * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>,
                 * and <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 * If not null, the <CODE>bits</CODE> array specifies the
                 * number of significant bits per color and alpha component and its
                 * length should be at least the number of components in the
                 * <CODE>ColorSpace</CODE> if there is no alpha
                 * information in the pixel values, or one more than this number if
                 * there is alpha information.  When the <CODE>transferType</CODE> is
                 * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>,
                 * or <CODE>DataBuffer.TYPE_DOUBLE</CODE> the <CODE>bits</CODE> array
                 * argument is ignored.  <CODE>hasAlpha</CODE> indicates whether alpha
                 * information is present.  If <CODE>hasAlpha</CODE> is true, then
                 * the boolean <CODE>isAlphaPremultiplied</CODE>
                 * specifies how to interpret color and alpha samples in pixel values.
                 * If the boolean is true, color samples are assumed to have been
                 * multiplied by the alpha sample. The <CODE>transparency</CODE>
                 * specifies what alpha values can be represented by this color model.
                 * The acceptable <code>transparency</code> values are
                 * <CODE>OPAQUE</CODE>, <CODE>BITMASK</CODE> or <CODE>TRANSLUCENT</CODE>.
                 * The <CODE>transferType</CODE> is the type of primitive array used
                 * to represent pixel values.
                 * @param colorSpace       The <CODE>ColorSpace</CODE> associated
                 *                          with this color model.
                 * @param bits             The number of significant bits per component.
                 *                          May be null, in which case all bits of all
                 *                          component samples will be significant.
                 *                          Ignored if transferType is one of
                 *                          <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *                          <CODE>DataBuffer.TYPE_FLOAT</CODE>, or
                 *                          <CODE>DataBuffer.TYPE_DOUBLE</CODE>,
                 *                          in which case all bits of all component
                 *                          samples will be significant.
                 * @param hasAlpha         If true, this color model supports alpha.
                 * @param isAlphaPremultiplied If true, alpha is premultiplied.
                 * @param transparency     Specifies what alpha values can be represented
                 *                          by this color model.
                 * @param transferType     Specifies the type of primitive array used to
                 *                          represent pixel values.
                 * @throws IllegalArgumentException If the <CODE>bits</CODE> array
                 *          argument is not null, its length is less than the number of
                 *          color and alpha components, and transferType is one of
                 *          <CODE>DataBuffer.TYPE_BYTE</CODE>,
                 *          <CODE>DataBuffer.TYPE_USHORT</CODE>, or
                 *          <CODE>DataBuffer.TYPE_INT</CODE>.
                 * @throws IllegalArgumentException If transferType is not one of
                 *          <CODE>DataBuffer.TYPE_BYTE</CODE>,
                 *          <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *          <CODE>DataBuffer.TYPE_INT</CODE>,
                 *          <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *          <CODE>DataBuffer.TYPE_FLOAT</CODE>, or
                 *          <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 * @see ColorSpace
                 * @see java.awt.Transparency
                 */
                // @ts-ignore
                constructor(colorSpace: java.awt.color.ColorSpace, bits: number /*int*/[], hasAlpha: boolean, isAlphaPremultiplied: boolean, transparency: number /*int*/, transferType: number /*int*/)
                /**
                 * Constructs a <CODE>ComponentColorModel</CODE> from the specified
                 * parameters. Color components will be in the specified
                 * <CODE>ColorSpace</CODE>.  The supported transfer types are
                 * <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 * <CODE>DataBuffer.TYPE_INT</CODE>,
                 * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>,
                 * and <CODE>DataBuffer.TYPE_DOUBLE</CODE>.  The number of significant
                 * bits per color and alpha component will be 8, 16, 32, 16, 32,  or 64,
                 * respectively.  The number of color components will be the
                 * number of components in the <CODE>ColorSpace</CODE>.  There will be
                 * an alpha component if <CODE>hasAlpha</CODE> is <CODE>true</CODE>.
                 * If <CODE>hasAlpha</CODE> is true, then
                 * the boolean <CODE>isAlphaPremultiplied</CODE>
                 * specifies how to interpret color and alpha samples in pixel values.
                 * If the boolean is true, color samples are assumed to have been
                 * multiplied by the alpha sample. The <CODE>transparency</CODE>
                 * specifies what alpha values can be represented by this color model.
                 * The acceptable <code>transparency</code> values are
                 * <CODE>OPAQUE</CODE>, <CODE>BITMASK</CODE> or <CODE>TRANSLUCENT</CODE>.
                 * The <CODE>transferType</CODE> is the type of primitive array used
                 * to represent pixel values.
                 * @param colorSpace       The <CODE>ColorSpace</CODE> associated
                 *                          with this color model.
                 * @param hasAlpha         If true, this color model supports alpha.
                 * @param isAlphaPremultiplied If true, alpha is premultiplied.
                 * @param transparency     Specifies what alpha values can be represented
                 *                          by this color model.
                 * @param transferType     Specifies the type of primitive array used to
                 *                          represent pixel values.
                 * @throws IllegalArgumentException If transferType is not one of
                 *          <CODE>DataBuffer.TYPE_BYTE</CODE>,
                 *          <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *          <CODE>DataBuffer.TYPE_INT</CODE>,
                 *          <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *          <CODE>DataBuffer.TYPE_FLOAT</CODE>, or
                 *          <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 * @see ColorSpace
                 * @see java.awt.Transparency
                 * @since 1.4
                 */
                // @ts-ignore
                constructor(colorSpace: java.awt.color.ColorSpace, hasAlpha: boolean, isAlphaPremultiplied: boolean, transparency: number /*int*/, transferType: number /*int*/)
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * The returned value will be a non pre-multiplied value.
                 * If the alpha is premultiplied, this method divides
                 * it out before returning the value (if the alpha value is 0,
                 * the red value will be 0).
                 * @param pixel The pixel from which you want to get the red color component.
                 * @return The red color component for the specified pixel, as an int.
                 * @throws IllegalArgumentException If there is more than
                 *  one component in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If the component value for this
                 *  <CODE>ColorModel</CODE> is signed
                 */
                // @ts-ignore
                getRed(pixel: number /*int*/): int
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * The returned value will be a non
                 * pre-multiplied value. If the alpha is premultiplied, this method
                 * divides it out before returning the value (if the alpha value is 0,
                 * the green value will be 0).
                 * @param pixel The pixel from which you want to get the green color component.
                 * @return The green color component for the specified pixel, as an int.
                 * @throws IllegalArgumentException If there is more than
                 *  one component in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If the component value for this
                 *  <CODE>ColorModel</CODE> is signed
                 */
                // @ts-ignore
                getGreen(pixel: number /*int*/): int
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * The returned value will be a non
                 * pre-multiplied value. If the alpha is premultiplied, this method
                 * divides it out before returning the value (if the alpha value is 0,
                 * the blue value will be 0).
                 * @param pixel The pixel from which you want to get the blue color component.
                 * @return The blue color component for the specified pixel, as an int.
                 * @throws IllegalArgumentException If there is more than
                 *  one component in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If the component value for this
                 *  <CODE>ColorModel</CODE> is signed
                 */
                // @ts-ignore
                getBlue(pixel: number /*int*/): int
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.   The pixel value is specified as an int.
                 * @param pixel The pixel from which you want to get the alpha component.
                 * @return The alpha component for the specified pixel, as an int.
                 * @throws IllegalArgumentException If there is more than
                 *  one component in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If the component value for this
                 *  <CODE>ColorModel</CODE> is signed
                 */
                // @ts-ignore
                getAlpha(pixel: number /*int*/): int
                /**
                 * Returns the color/alpha components of the pixel in the default
                 * RGB color model format.  A color conversion is done if necessary.
                 * The returned value will be in a non pre-multiplied format. If
                 * the alpha is premultiplied, this method divides it out of the
                 * color components (if the alpha value is 0, the color values will be 0).
                 * @param pixel The pixel from which you want to get the color/alpha components.
                 * @return The color/alpha components for the specified pixel, as an int.
                 * @throws IllegalArgumentException If there is more than
                 *  one component in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If the component value for this
                 *  <CODE>ColorModel</CODE> is signed
                 */
                // @ts-ignore
                getRGB(pixel: number /*int*/): int
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The <CODE>pixel</CODE> value is specified by an array
                 * of data elements of type <CODE>transferType</CODE> passed in as an object
                 * reference. The returned value will be a non pre-multiplied value. If the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value (if the alpha value is 0, the red value will be 0). Since
                 * <code>ComponentColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't override
                 * it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param inData The pixel from which you want to get the red color component,
                 *  specified by an array of data elements of type <CODE>transferType</CODE>.
                 * @return The red color component for the specified pixel, as an int.
                 * @throws ClassCastException If <CODE>inData</CODE> is not a primitive array
                 *  of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException if <CODE>inData</CODE> is not
                 *  large enough to hold a pixel value for this
                 *  <CODE>ColorModel</CODE>.
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 */
                // @ts-ignore
                getRed(inData: any): int
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <CODE>ColorSpace</CODE>, sRGB.
                 * A color conversion is done if necessary.  The <CODE>pixel</CODE> value
                 * is specified by an array of data elements of type <CODE>transferType</CODE>
                 * passed in as an object reference. The returned value is a non pre-multiplied
                 * value. If the alpha is premultiplied, this method divides it out before
                 * returning the value (if the alpha value is 0, the green value will be 0).
                 * Since <code>ComponentColorModel</code> can be subclassed,
                 * subclasses inherit the implementation of this method and if they
                 * don't override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 * @param inData The pixel from which you want to get the green color component,
                 *  specified by an array of data elements of type <CODE>transferType</CODE>.
                 * @return The green color component for the specified pixel, as an int.
                 * @throws ClassCastException If <CODE>inData</CODE> is not a primitive array
                 *  of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException if <CODE>inData</CODE> is not
                 *  large enough to hold a pixel value for this
                 *  <CODE>ColorModel</CODE>.
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 */
                // @ts-ignore
                getGreen(inData: any): int
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <CODE>ColorSpace</CODE>, sRGB.
                 * A color conversion is done if necessary.  The <CODE>pixel</CODE> value is
                 * specified by an array of data elements of type <CODE>transferType</CODE>
                 * passed in as an object reference. The returned value is a non pre-multiplied
                 * value. If the alpha is premultiplied, this method divides it out before
                 * returning the value (if the alpha value is 0, the blue value will be 0).
                 * Since <code>ComponentColorModel</code> can be subclassed,
                 * subclasses inherit the implementation of this method and if they
                 * don't override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 * @param inData The pixel from which you want to get the blue color component,
                 *  specified by an array of data elements of type <CODE>transferType</CODE>.
                 * @return The blue color component for the specified pixel, as an int.
                 * @throws ClassCastException If <CODE>inData</CODE> is not a primitive array
                 *  of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException if <CODE>inData</CODE> is not
                 *  large enough to hold a pixel value for this
                 *  <CODE>ColorModel</CODE>.
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 */
                // @ts-ignore
                getBlue(inData: any): int
                /**
                 * Returns the alpha component for the specified pixel, scaled from
                 * 0 to 255.  The pixel value is specified by an array of data
                 * elements of type <CODE>transferType</CODE> passed in as an
                 * object reference.  Since <code>ComponentColorModel</code> can be
                 * subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param inData The pixel from which you want to get the alpha component,
                 *  specified by an array of data elements of type <CODE>transferType</CODE>.
                 * @return The alpha component for the specified pixel, as an int.
                 * @throws ClassCastException If <CODE>inData</CODE> is not a primitive array
                 *  of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException if <CODE>inData</CODE> is not
                 *  large enough to hold a pixel value for this
                 *  <CODE>ColorModel</CODE>.
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 */
                // @ts-ignore
                getAlpha(inData: any): int
                /**
                 * Returns the color/alpha components for the specified pixel in the
                 * default RGB color model format.  A color conversion is done if
                 * necessary.  The pixel value is specified by an
                 * array of data elements of type <CODE>transferType</CODE> passed
                 * in as an object reference.
                 * The returned value is in a non pre-multiplied format. If
                 * the alpha is premultiplied, this method divides it out of the
                 * color components (if the alpha value is 0, the color values will be 0).
                 * Since <code>ComponentColorModel</code> can be subclassed,
                 * subclasses inherit the implementation of this method and if they
                 * don't override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 * @param inData The pixel from which you want to get the color/alpha components,
                 *  specified by an array of data elements of type <CODE>transferType</CODE>.
                 * @return The color/alpha components for the specified pixel, as an int.
                 * @throws ClassCastException If <CODE>inData</CODE> is not a primitive array
                 *  of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException if <CODE>inData</CODE> is not
                 *  large enough to hold a pixel value for this
                 *  <CODE>ColorModel</CODE>.
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 * @see ColorModel#getRGBdefault
                 */
                // @ts-ignore
                getRGB(inData: any): int
                /**
                 * Returns a data element array representation of a pixel in this
                 * <CODE>ColorModel</CODE>, given an integer pixel representation
                 * in the default RGB color model.
                 * This array can then be passed to the <CODE>setDataElements</CODE>
                 * method of a <CODE>WritableRaster</CODE> object.  If the
                 * <CODE>pixel</CODE>
                 * parameter is null, a new array is allocated.  Since
                 * <code>ComponentColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then
                 * they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param rgb the integer representation of the pixel in the RGB
                 *             color model
                 * @param pixel the specified pixel
                 * @return The data element array representation of a pixel
                 *  in this <CODE>ColorModel</CODE>.
                 * @throws ClassCastException If <CODE>pixel</CODE> is not null and
                 *  is not a primitive array of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException If <CODE>pixel</CODE> is
                 *  not large enough to hold a pixel value for this
                 *  <CODE>ColorModel</CODE>.
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 * @see WritableRaster#setDataElements
                 * @see SampleModel#setDataElements
                 */
                // @ts-ignore
                getDataElements(rgb: number /*int*/, pixel: any): java.lang.Object
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <CODE>ColorModel</CODE>.
                 * An IllegalArgumentException is thrown if the component value for this
                 * <CODE>ColorModel</CODE> is not conveniently representable in the
                 * unnormalized form.  Color/alpha components are stored
                 * in the <CODE>components</CODE> array starting at <CODE>offset</CODE>
                 * (even if the array is allocated by this method).
                 * @param pixel The pixel value specified as an integer.
                 * @param components An integer array in which to store the unnormalized
                 *  color/alpha components. If the <CODE>components</CODE> array is null,
                 *  a new array is allocated.
                 * @param offset An offset into the <CODE>components</CODE> array.
                 * @return The components array.
                 * @throws IllegalArgumentException If there is more than one
                 *  component in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If this
                 *  <CODE>ColorModel</CODE> does not support the unnormalized form
                 * @throws ArrayIndexOutOfBoundsException If the <CODE>components</CODE>
                 *  array is not null and is not large enough to hold all the color and
                 *  alpha components (starting at offset).
                 */
                // @ts-ignore
                getComponents(pixel: number /*int*/, components: number /*int*/[], offset: number /*int*/): int[]
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <CODE>ColorModel</CODE>.  The pixel value is specified by an
                 * array of data elements of type <CODE>transferType</CODE> passed in as
                 * an object reference.
                 * An IllegalArgumentException is thrown if the component values for this
                 * <CODE>ColorModel</CODE> are not conveniently representable in the
                 * unnormalized form.
                 * Color/alpha components are stored in the <CODE>components</CODE> array
                 * starting at  <CODE>offset</CODE> (even if the array is allocated by
                 * this method).  Since <code>ComponentColorModel</code> can be
                 * subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * this method might throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @param pixel A pixel value specified by an array of data elements of
                 *  type <CODE>transferType</CODE>.
                 * @param components An integer array in which to store the unnormalized
                 *  color/alpha components. If the <CODE>components</CODE> array is null,
                 *  a new array is allocated.
                 * @param offset An offset into the <CODE>components</CODE> array.
                 * @return The <CODE>components</CODE> array.
                 * @throws IllegalArgumentException If this
                 *  <CODE>ComponentColorModel</CODE> does not support the unnormalized form
                 * @throws UnsupportedOperationException in some cases iff the
                 *  transfer type of this <CODE>ComponentColorModel</CODE>
                 *  is not one of the following transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  or <CODE>DataBuffer.TYPE_INT</CODE>.
                 * @throws ClassCastException If <CODE>pixel</CODE> is not a primitive
                 *  array of type <CODE>transferType</CODE>.
                 * @throws IllegalArgumentException If the <CODE>components</CODE> array is
                 *  not null and is not large enough to hold all the color and alpha
                 *  components (starting at offset), or if <CODE>pixel</CODE> is not large
                 *  enough to hold a pixel value for this ColorModel.
                 */
                // @ts-ignore
                getComponents(pixel: any, components: number /*int*/[], offset: number /*int*/): int[]
                /**
                 * Returns an array of all of the color/alpha components in unnormalized
                 * form, given a normalized component array.  Unnormalized components
                 * are unsigned integral values between 0 and 2<sup>n</sup> - 1, where
                 * n is the number of bits for a particular component.  Normalized
                 * components are float values between a per component minimum and
                 * maximum specified by the <code>ColorSpace</code> object for this
                 * <code>ColorModel</code>.  An <code>IllegalArgumentException</code>
                 * will be thrown if color component values for this
                 * <code>ColorModel</code> are not conveniently representable in the
                 * unnormalized form.  If the
                 * <code>components</code> array is <code>null</code>, a new array
                 * will be allocated.  The <code>components</code> array will
                 * be returned.  Color/alpha components are stored in the
                 * <code>components</code> array starting at <code>offset</code> (even
                 * if the array is allocated by this method). An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * <code>components</code> array is not <code>null</code> and is not
                 * large enough to hold all the color and alpha
                 * components (starting at <code>offset</code>).  An
                 * <code>IllegalArgumentException</code> is thrown if the
                 * <code>normComponents</code> array is not large enough to hold
                 * all the color and alpha components starting at
                 * <code>normOffset</code>.
                 * @param normComponents an array containing normalized components
                 * @param normOffset the offset into the <code>normComponents</code>
                 *  array at which to start retrieving normalized components
                 * @param components an array that receives the components from
                 *  <code>normComponents</code>
                 * @param offset the index into <code>components</code> at which to
                 *  begin storing normalized components from
                 *  <code>normComponents</code>
                 * @return an array containing unnormalized color and alpha
                 *  components.
                 * @throws IllegalArgumentException If this
                 *  <CODE>ComponentColorModel</CODE> does not support the unnormalized form
                 * @throws IllegalArgumentException if the length of
                 *           <code>normComponents</code> minus <code>normOffset</code>
                 *           is less than <code>numComponents</code>
                 */
                // @ts-ignore
                getUnnormalizedComponents(normComponents: number /*float*/[], normOffset: number /*int*/, components: number /*int*/[], offset: number /*int*/): int[]
                /**
                 * Returns an array of all of the color/alpha components in normalized
                 * form, given an unnormalized component array.  Unnormalized components
                 * are unsigned integral values between 0 and 2<sup>n</sup> - 1, where
                 * n is the number of bits for a particular component.  Normalized
                 * components are float values between a per component minimum and
                 * maximum specified by the <code>ColorSpace</code> object for this
                 * <code>ColorModel</code>.  An <code>IllegalArgumentException</code>
                 * will be thrown if color component values for this
                 * <code>ColorModel</code> are not conveniently representable in the
                 * unnormalized form.  If the
                 * <code>normComponents</code> array is <code>null</code>, a new array
                 * will be allocated.  The <code>normComponents</code> array
                 * will be returned.  Color/alpha components are stored in the
                 * <code>normComponents</code> array starting at
                 * <code>normOffset</code> (even if the array is allocated by this
                 * method).  An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>normComponents</code> array is not <code>null</code>
                 * and is not large enough to hold all the color and alpha components
                 * (starting at <code>normOffset</code>).  An
                 * <code>IllegalArgumentException</code> is thrown if the
                 * <code>components</code> array is not large enough to hold all the
                 * color and alpha components starting at <code>offset</code>.
                 * @param components an array containing unnormalized components
                 * @param offset the offset into the <code>components</code> array at
                 *  which to start retrieving unnormalized components
                 * @param normComponents an array that receives the normalized components
                 * @param normOffset the index into <code>normComponents</code> at
                 *  which to begin storing normalized components
                 * @return an array containing normalized color and alpha
                 *  components.
                 * @throws IllegalArgumentException If this
                 *  <CODE>ComponentColorModel</CODE> does not support the unnormalized form
                 */
                // @ts-ignore
                getNormalizedComponents(components: number /*int*/[], offset: number /*int*/, normComponents: number /*float*/[], normOffset: number /*int*/): float[]
                /**
                 * Returns a pixel value represented as an int in this <CODE>ColorModel</CODE>,
                 * given an array of unnormalized color/alpha components.
                 * @param components An array of unnormalized color/alpha components.
                 * @param offset An offset into the <CODE>components</CODE> array.
                 * @return A pixel value represented as an int.
                 * @throws IllegalArgumentException If there is more than one component
                 *  in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If this
                 *  <CODE>ComponentColorModel</CODE> does not support the unnormalized form
                 */
                // @ts-ignore
                getDataElement(components: number /*int*/[], offset: number /*int*/): int
                /**
                 * Returns a data element array representation of a pixel in this
                 * <CODE>ColorModel</CODE>, given an array of unnormalized color/alpha
                 * components. This array can then be passed to the <CODE>setDataElements</CODE>
                 * method of a <CODE>WritableRaster</CODE> object.
                 * @param components An array of unnormalized color/alpha components.
                 * @param offset The integer offset into the <CODE>components</CODE> array.
                 * @param obj The object in which to store the data element array
                 *  representation of the pixel. If <CODE>obj</CODE> variable is null,
                 *  a new array is allocated.  If <CODE>obj</CODE> is not null, it must
                 *  be a primitive array of type <CODE>transferType</CODE>. An
                 *  <CODE>ArrayIndexOutOfBoundsException</CODE> is thrown if
                 *  <CODE>obj</CODE> is not large enough to hold a pixel value
                 *  for this <CODE>ColorModel</CODE>.  Since
                 *  <code>ComponentColorModel</code> can be subclassed, subclasses
                 *  inherit the implementation of this method and if they don't
                 *  override it then they throw an exception if they use an
                 *  unsupported <code>transferType</code>.
                 * @return The data element array representation of a pixel
                 *  in this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If the components array
                 *  is not large enough to hold all the color and alpha components
                 *  (starting at offset).
                 * @throws ClassCastException If <CODE>obj</CODE> is not null and is not a
                 *  primitive  array of type <CODE>transferType</CODE>.
                 * @throws ArrayIndexOutOfBoundsException If <CODE>obj</CODE> is not large
                 *  enough to hold a pixel value for this <CODE>ColorModel</CODE>.
                 * @throws IllegalArgumentException If this
                 *  <CODE>ComponentColorModel</CODE> does not support the unnormalized form
                 * @throws UnsupportedOperationException If the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the following transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  or <CODE>DataBuffer.TYPE_INT</CODE>.
                 * @see WritableRaster#setDataElements
                 * @see SampleModel#setDataElements
                 */
                // @ts-ignore
                getDataElements(components: number /*int*/[], offset: number /*int*/, obj: any): java.lang.Object
                /**
                 * Returns a pixel value represented as an <code>int</code> in this
                 * <code>ColorModel</code>, given an array of normalized color/alpha
                 * components.  This method will throw an
                 * <code>IllegalArgumentException</code> if pixel values for this
                 * <code>ColorModel</code> are not conveniently representable as a
                 * single <code>int</code>.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if  the
                 * <code>normComponents</code> array is not large enough to hold all the
                 * color and alpha components (starting at <code>normOffset</code>).
                 * @param normComponents an array of normalized color and alpha
                 *  components
                 * @param normOffset the index into <code>normComponents</code> at which to
                 *  begin retrieving the color and alpha components
                 * @return an <code>int</code> pixel value in this
                 *  <code>ColorModel</code> corresponding to the specified components.
                 * @throws IllegalArgumentException if
                 *   pixel values for this <code>ColorModel</code> are not
                 *   conveniently representable as a single <code>int</code>
                 * @throws ArrayIndexOutOfBoundsException if
                 *   the <code>normComponents</code> array is not large enough to
                 *   hold all of the color and alpha components starting at
                 *   <code>normOffset</code>
                 * @since 1.4
                 */
                // @ts-ignore
                getDataElement(normComponents: number /*float*/[], normOffset: number /*int*/): int
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an array of normalized color/alpha
                 * components.  This array can then be passed to the
                 * <code>setDataElements</code> method of a <code>WritableRaster</code>
                 * object.  An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>normComponents</code> array is not large enough to hold
                 * all the color and alpha components (starting at
                 * <code>normOffset</code>).  If the <code>obj</code> variable is
                 * <code>null</code>, a new array will be allocated.  If
                 * <code>obj</code> is not <code>null</code>, it must be a primitive
                 * array of type transferType; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>obj</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * @param normComponents an array of normalized color and alpha
                 *  components
                 * @param normOffset the index into <code>normComponents</code> at which to
                 *  begin retrieving color and alpha components
                 * @param obj a primitive data array to hold the returned pixel
                 * @return an <code>Object</code> which is a primitive data array
                 *  representation of a pixel
                 * @throws ClassCastException if <code>obj</code>
                 *   is not a primitive array of type <code>transferType</code>
                 * @throws ArrayIndexOutOfBoundsException if
                 *   <code>obj</code> is not large enough to hold a pixel value
                 *   for this <code>ColorModel</code> or the <code>normComponents</code>
                 *   array is not large enough to hold all of the color and alpha
                 *   components starting at <code>normOffset</code>
                 * @see WritableRaster#setDataElements
                 * @see SampleModel#setDataElements
                 * @since 1.4
                 */
                // @ts-ignore
                getDataElements(normComponents: number /*float*/[], normOffset: number /*int*/, obj: any): java.lang.Object
                /**
                 * Returns an array of all of the color/alpha components in normalized
                 * form, given a pixel in this <code>ColorModel</code>.  The pixel
                 * value is specified by an array of data elements of type transferType
                 * passed in as an object reference.  If pixel is not a primitive array
                 * of type transferType, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>pixel</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * Normalized components are float values between a per component minimum
                 * and maximum specified by the <code>ColorSpace</code> object for this
                 * <code>ColorModel</code>.  If the
                 * <code>normComponents</code> array is <code>null</code>, a new array
                 * will be allocated.  The <code>normComponents</code> array
                 * will be returned.  Color/alpha components are stored in the
                 * <code>normComponents</code> array starting at
                 * <code>normOffset</code> (even if the array is allocated by this
                 * method).  An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>normComponents</code> array is not <code>null</code>
                 * and is not large enough to hold all the color and alpha components
                 * (starting at <code>normOffset</code>).
                 * <p>
                 * This method must be overridden by a subclass if that subclass
                 * is designed to translate pixel sample values to color component values
                 * in a non-default way.  The default translations implemented by this
                 * class is described in the class comments.  Any subclass implementing
                 * a non-default translation must follow the constraints on allowable
                 * translations defined there.
                 * @param pixel the specified pixel
                 * @param normComponents an array to receive the normalized components
                 * @param normOffset the offset into the <code>normComponents</code>
                 *  array at which to start storing normalized components
                 * @return an array containing normalized color and alpha
                 *  components.
                 * @throws ClassCastException if <code>pixel</code> is not a primitive
                 *           array of type transferType
                 * @throws ArrayIndexOutOfBoundsException if
                 *           <code>normComponents</code> is not large enough to hold all
                 *           color and alpha components starting at <code>normOffset</code>
                 * @throws ArrayIndexOutOfBoundsException if
                 *           <code>pixel</code> is not large enough to hold a pixel
                 *           value for this <code>ColorModel</code>.
                 * @since 1.4
                 */
                // @ts-ignore
                getNormalizedComponents(pixel: any, normComponents: number /*float*/[], normOffset: number /*int*/): float[]
                /**
                 * Forces the raster data to match the state specified in the
                 * <CODE>isAlphaPremultiplied</CODE> variable, assuming the data
                 * is currently correctly described by this <CODE>ColorModel</CODE>.
                 * It may multiply or divide the color raster data by alpha, or
                 * do nothing if the data is in the correct state.  If the data needs
                 * to be coerced, this method also returns an instance of
                 * this <CODE>ColorModel</CODE> with
                 * the <CODE>isAlphaPremultiplied</CODE> flag set appropriately.
                 * Since <code>ColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * @throws NullPointerException if <code>raster</code> is
                 *  <code>null</code> and data coercion is required.
                 * @throws UnsupportedOperationException if the transfer type of
                 *  this <CODE>ComponentColorModel</CODE>
                 *  is not one of the supported transfer types:
                 *  <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_INT</CODE>, <CODE>DataBuffer.TYPE_SHORT</CODE>,
                 *  <CODE>DataBuffer.TYPE_FLOAT</CODE>, or <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 */
                // @ts-ignore
                coerceData(raster: java.awt.image.WritableRaster, isAlphaPremultiplied: boolean): java.awt.image.ColorModel
                /**
                 * Returns true if <CODE>raster</CODE> is compatible with this
                 * <CODE>ColorModel</CODE>; false if it is not.
                 * @param raster The <CODE>Raster</CODE> object to test for compatibility.
                 * @return <CODE>true</CODE> if <CODE>raster</CODE> is compatible with this
                 *  <CODE>ColorModel</CODE>, <CODE>false</CODE> if it is not.
                 */
                // @ts-ignore
                isCompatibleRaster(raster: java.awt.image.Raster): boolean
                /**
                 * Creates a <CODE>WritableRaster</CODE> with the specified width and height,
                 * that  has a data layout (<CODE>SampleModel</CODE>) compatible with
                 * this <CODE>ColorModel</CODE>.
                 * @param w The width of the <CODE>WritableRaster</CODE> you want to create.
                 * @param h The height of the <CODE>WritableRaster</CODE> you want to create.
                 * @return A <CODE>WritableRaster</CODE> that is compatible with
                 *  this <CODE>ColorModel</CODE>.
                 * @see WritableRaster
                 * @see SampleModel
                 */
                // @ts-ignore
                createCompatibleWritableRaster(w: number /*int*/, h: number /*int*/): java.awt.image.WritableRaster
                /**
                 * Creates a <CODE>SampleModel</CODE> with the specified width and height,
                 * that  has a data layout compatible with this <CODE>ColorModel</CODE>.
                 * @param w The width of the <CODE>SampleModel</CODE> you want to create.
                 * @param h The height of the <CODE>SampleModel</CODE> you want to create.
                 * @return A <CODE>SampleModel</CODE> that is compatible with this
                 *  <CODE>ColorModel</CODE>.
                 * @see SampleModel
                 */
                // @ts-ignore
                createCompatibleSampleModel(w: number /*int*/, h: number /*int*/): java.awt.image.SampleModel
                /**
                 * Checks whether or not the specified <CODE>SampleModel</CODE>
                 * is compatible with this <CODE>ColorModel</CODE>.
                 * @param sm The <CODE>SampleModel</CODE> to test for compatibility.
                 * @return <CODE>true</CODE> if the <CODE>SampleModel</CODE> is
                 *  compatible with this <CODE>ColorModel</CODE>, <CODE>false</CODE>
                 *  if it is not.
                 * @see SampleModel
                 */
                // @ts-ignore
                isCompatibleSampleModel(sm: java.awt.image.SampleModel): boolean
                /**
                 * Returns a <CODE>Raster</CODE> representing the alpha channel of an image,
                 * extracted from the input <CODE>Raster</CODE>.
                 * This method assumes that <CODE>Raster</CODE> objects associated with
                 * this <CODE>ColorModel</CODE> store the alpha band, if present, as
                 * the last band of image data. Returns null if there is no separate spatial
                 * alpha channel associated with this <CODE>ColorModel</CODE>.
                 * This method creates a new <CODE>Raster</CODE>, but will share the data
                 * array.
                 * @param raster The <CODE>WritableRaster</CODE> from which to extract the
                 *  alpha  channel.
                 * @return A <CODE>WritableRaster</CODE> containing the image's alpha channel.
                 */
                // @ts-ignore
                getAlphaRaster(raster: java.awt.image.WritableRaster): java.awt.image.WritableRaster
                /**
                 * Compares this color model with another for equality.
                 * @param obj The object to compare with this color model.
                 * @return <CODE>true</CODE> if the color model objects are equal,
                 *  <CODE>false</CODE> if they are not.
                 */
                // @ts-ignore
                equals(obj: any): boolean
            }
        }
    }
}
