declare namespace java {
    namespace awt {
        namespace color {
            /**
             * This abstract class is used to serve as a color space tag to identify the
             * specific color space of a Color object or, via a ColorModel object,
             * of an Image, a BufferedImage, or a GraphicsDevice.  It contains
             * methods that transform colors in a specific color space to/from sRGB
             * and to/from a well-defined CIEXYZ color space.
             * <p>
             * For purposes of the methods in this class, colors are represented as
             * arrays of color components represented as floats in a normalized range
             * defined by each ColorSpace.  For many ColorSpaces (e.g. sRGB), this
             * range is 0.0 to 1.0.  However, some ColorSpaces have components whose
             * values have a different range.  Methods are provided to inquire per
             * component minimum and maximum normalized values.
             * <p>
             * Several variables are defined for purposes of referring to color
             * space types (e.g. TYPE_RGB, TYPE_XYZ, etc.) and to refer to specific
             * color spaces (e.g. CS_sRGB and CS_CIEXYZ).
             * sRGB is a proposed standard RGB color space.  For more information,
             * see <A href="http://www.w3.org/pub/WWW/Graphics/Color/sRGB.html">
             * http://www.w3.org/pub/WWW/Graphics/Color/sRGB.html
             * </A>.
             * <p>
             * The purpose of the methods to transform to/from the well-defined
             * CIEXYZ color space is to support conversions between any two color
             * spaces at a reasonably high degree of accuracy.  It is expected that
             * particular implementations of subclasses of ColorSpace (e.g.
             * ICC_ColorSpace) will support high performance conversion based on
             * underlying platform color management systems.
             * <p>
             * The CS_CIEXYZ space used by the toCIEXYZ/fromCIEXYZ methods can be
             * described as follows:
             * <pre>
             * &nbsp;     CIEXYZ
             * &nbsp;     viewing illuminance: 200 lux
             * &nbsp;     viewing white point: CIE D50
             * &nbsp;     media white point: "that of a perfectly reflecting diffuser" -- D50
             * &nbsp;     media black point: 0 lux or 0 Reflectance
             * &nbsp;     flare: 1 percent
             * &nbsp;     surround: 20percent of the media white point
             * &nbsp;     media description: reflection print (i.e., RLAB, Hunt viewing media)
             * &nbsp;     note: For developers creating an ICC profile for this conversion
             * &nbsp;           space, the following is applicable.  Use a simple Von Kries
             * &nbsp;           white point adaptation folded into the 3X3 matrix parameters
             * &nbsp;           and fold the flare and surround effects into the three
             * &nbsp;           one-dimensional lookup tables (assuming one uses the minimal
             * &nbsp;           model for monitors).
             * </pre>
             * @see ICC_ColorSpace
             */
            // @ts-ignore
            abstract class ColorSpace extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs a ColorSpace object given a color space type
                 * and the number of components.
                 * @param type one of the <CODE>ColorSpace</CODE> type constants
                 * @param numcomponents the number of components in the color space
                 */
                // @ts-ignore
                constructor(type: number /*int*/, numcomponents: number /*int*/)
                /**
                 * Any of the family of XYZ color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_XYZ: number /*int*/
                /**
                 * Any of the family of Lab color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_Lab: number /*int*/
                /**
                 * Any of the family of Luv color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_Luv: number /*int*/
                /**
                 * Any of the family of YCbCr color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_YCbCr: number /*int*/
                /**
                 * Any of the family of Yxy color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_Yxy: number /*int*/
                /**
                 * Any of the family of RGB color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_RGB: number /*int*/
                /**
                 * Any of the family of GRAY color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_GRAY: number /*int*/
                /**
                 * Any of the family of HSV color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_HSV: number /*int*/
                /**
                 * Any of the family of HLS color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_HLS: number /*int*/
                /**
                 * Any of the family of CMYK color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_CMYK: number /*int*/
                /**
                 * Any of the family of CMY color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_CMY: number /*int*/
                /**
                 * Generic 2 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_2CLR: number /*int*/
                /**
                 * Generic 3 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_3CLR: number /*int*/
                /**
                 * Generic 4 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_4CLR: number /*int*/
                /**
                 * Generic 5 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_5CLR: number /*int*/
                /**
                 * Generic 6 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_6CLR: number /*int*/
                /**
                 * Generic 7 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_7CLR: number /*int*/
                /**
                 * Generic 8 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_8CLR: number /*int*/
                /**
                 * Generic 9 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_9CLR: number /*int*/
                /**
                 * Generic 10 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_ACLR: number /*int*/
                /**
                 * Generic 11 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_BCLR: number /*int*/
                /**
                 * Generic 12 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_CCLR: number /*int*/
                /**
                 * Generic 13 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_DCLR: number /*int*/
                /**
                 * Generic 14 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_ECLR: number /*int*/
                /**
                 * Generic 15 component color spaces.
                 */
                // @ts-ignore
                public static readonly TYPE_FCLR: number /*int*/
                /**
                 * The sRGB color space defined at
                 * <A href="http://www.w3.org/pub/WWW/Graphics/Color/sRGB.html">
                 * http://www.w3.org/pub/WWW/Graphics/Color/sRGB.html
                 * </A>.
                 */
                // @ts-ignore
                public static readonly CS_sRGB: number /*int*/
                /**
                 * A built-in linear RGB color space.  This space is based on the
                 * same RGB primaries as CS_sRGB, but has a linear tone reproduction curve.
                 */
                // @ts-ignore
                public static readonly CS_LINEAR_RGB: number /*int*/
                /**
                 * The CIEXYZ conversion color space defined above.
                 */
                // @ts-ignore
                public static readonly CS_CIEXYZ: number /*int*/
                /**
                 * The Photo YCC conversion color space.
                 */
                // @ts-ignore
                public static readonly CS_PYCC: number /*int*/
                /**
                 * The built-in linear gray scale color space.
                 */
                // @ts-ignore
                public static readonly CS_GRAY: number /*int*/
                /**
                 * Returns a ColorSpace representing one of the specific
                 * predefined color spaces.
                 * @param colorspace a specific color space identified by one of
                 *         the predefined class constants (e.g. CS_sRGB, CS_LINEAR_RGB,
                 *         CS_CIEXYZ, CS_GRAY, or CS_PYCC)
                 * @return the requested <CODE>ColorSpace</CODE> object
                 */
                // @ts-ignore
                public static getInstance(colorspace: number /*int*/): java.awt.color.ColorSpace
                /**
                 * Returns true if the ColorSpace is CS_sRGB.
                 * @return <CODE>true</CODE> if this is a <CODE>CS_sRGB</CODE> color
                 *          space, <code>false</code> if it is not
                 */
                // @ts-ignore
                public isCS_sRGB(): boolean
                /**
                 * Transforms a color value assumed to be in this ColorSpace
                 * into a value in the default CS_sRGB color space.
                 * <p>
                 * This method transforms color values using algorithms designed
                 * to produce the best perceptual match between input and output
                 * colors.  In order to do colorimetric conversion of color values,
                 * you should use the <code>toCIEXYZ</code>
                 * method of this color space to first convert from the input
                 * color space to the CS_CIEXYZ color space, and then use the
                 * <code>fromCIEXYZ</code> method of the CS_sRGB color space to
                 * convert from CS_CIEXYZ to the output color space.
                 * See {@link #toCIEXYZ(float[]) toCIEXYZ} and
                 * {@link #fromCIEXYZ(float[]) fromCIEXYZ} for further information.
                 * <p>
                 * @param colorvalue a float array with length of at least the number
                 *         of components in this ColorSpace
                 * @return a float array of length 3
                 * @throws ArrayIndexOutOfBoundsException if array length is not
                 *          at least the number of components in this ColorSpace
                 */
                // @ts-ignore
                public abstract toRGB(colorvalue: number /*float*/[]): number /*float*/[]
                /**
                 * Transforms a color value assumed to be in the default CS_sRGB
                 * color space into this ColorSpace.
                 * <p>
                 * This method transforms color values using algorithms designed
                 * to produce the best perceptual match between input and output
                 * colors.  In order to do colorimetric conversion of color values,
                 * you should use the <code>toCIEXYZ</code>
                 * method of the CS_sRGB color space to first convert from the input
                 * color space to the CS_CIEXYZ color space, and then use the
                 * <code>fromCIEXYZ</code> method of this color space to
                 * convert from CS_CIEXYZ to the output color space.
                 * See {@link #toCIEXYZ(float[]) toCIEXYZ} and
                 * {@link #fromCIEXYZ(float[]) fromCIEXYZ} for further information.
                 * <p>
                 * @param rgbvalue a float array with length of at least 3
                 * @return a float array with length equal to the number of
                 *          components in this ColorSpace
                 * @throws ArrayIndexOutOfBoundsException if array length is not
                 *          at least 3
                 */
                // @ts-ignore
                public abstract fromRGB(rgbvalue: number /*float*/[]): number /*float*/[]
                /**
                 * Transforms a color value assumed to be in this ColorSpace
                 * into the CS_CIEXYZ conversion color space.
                 * <p>
                 * This method transforms color values using relative colorimetry,
                 * as defined by the International Color Consortium standard.  This
                 * means that the XYZ values returned by this method are represented
                 * relative to the D50 white point of the CS_CIEXYZ color space.
                 * This representation is useful in a two-step color conversion
                 * process in which colors are transformed from an input color
                 * space to CS_CIEXYZ and then to an output color space.  This
                 * representation is not the same as the XYZ values that would
                 * be measured from the given color value by a colorimeter.
                 * A further transformation is necessary to compute the XYZ values
                 * that would be measured using current CIE recommended practices.
                 * See the {@link ICC_ColorSpace#toCIEXYZ(float[]) toCIEXYZ} method of
                 * <code>ICC_ColorSpace</code> for further information.
                 * <p>
                 * @param colorvalue a float array with length of at least the number
                 *         of components in this ColorSpace
                 * @return a float array of length 3
                 * @throws ArrayIndexOutOfBoundsException if array length is not
                 *          at least the number of components in this ColorSpace.
                 */
                // @ts-ignore
                public abstract toCIEXYZ(colorvalue: number /*float*/[]): number /*float*/[]
                /**
                 * Transforms a color value assumed to be in the CS_CIEXYZ conversion
                 * color space into this ColorSpace.
                 * <p>
                 * This method transforms color values using relative colorimetry,
                 * as defined by the International Color Consortium standard.  This
                 * means that the XYZ argument values taken by this method are represented
                 * relative to the D50 white point of the CS_CIEXYZ color space.
                 * This representation is useful in a two-step color conversion
                 * process in which colors are transformed from an input color
                 * space to CS_CIEXYZ and then to an output color space.  The color
                 * values returned by this method are not those that would produce
                 * the XYZ value passed to the method when measured by a colorimeter.
                 * If you have XYZ values corresponding to measurements made using
                 * current CIE recommended practices, they must be converted to D50
                 * relative values before being passed to this method.
                 * See the {@link ICC_ColorSpace#fromCIEXYZ(float[]) fromCIEXYZ} method of
                 * <code>ICC_ColorSpace</code> for further information.
                 * <p>
                 * @param colorvalue a float array with length of at least 3
                 * @return a float array with length equal to the number of
                 *          components in this ColorSpace
                 * @throws ArrayIndexOutOfBoundsException if array length is not
                 *          at least 3
                 */
                // @ts-ignore
                public abstract fromCIEXYZ(colorvalue: number /*float*/[]): number /*float*/[]
                /**
                 * Returns the color space type of this ColorSpace (for example
                 * TYPE_RGB, TYPE_XYZ, ...).  The type defines the
                 * number of components of the color space and the interpretation,
                 * e.g. TYPE_RGB identifies a color space with three components - red,
                 * green, and blue.  It does not define the particular color
                 * characteristics of the space, e.g. the chromaticities of the
                 * primaries.
                 * @return the type constant that represents the type of this
                 *          <CODE>ColorSpace</CODE>
                 */
                // @ts-ignore
                public getType(): number /*int*/
                /**
                 * Returns the number of components of this ColorSpace.
                 * @return The number of components in this <CODE>ColorSpace</CODE>.
                 */
                // @ts-ignore
                public getNumComponents(): number /*int*/
                /**
                 * Returns the name of the component given the component index.
                 * @param idx the component index
                 * @return the name of the component at the specified index
                 * @throws IllegalArgumentException if <code>idx</code> is
                 *          less than 0 or greater than numComponents - 1
                 */
                // @ts-ignore
                public getName(idx: number /*int*/): string
                /**
                 * Returns the minimum normalized color component value for the
                 * specified component.  The default implementation in this abstract
                 * class returns 0.0 for all components.  Subclasses should override
                 * this method if necessary.
                 * @param component the component index
                 * @return the minimum normalized component value
                 * @throws IllegalArgumentException if component is less than 0 or
                 *          greater than numComponents - 1
                 * @since 1.4
                 */
                // @ts-ignore
                public getMinValue(component: number /*int*/): number /*float*/
                /**
                 * Returns the maximum normalized color component value for the
                 * specified component.  The default implementation in this abstract
                 * class returns 1.0 for all components.  Subclasses should override
                 * this method if necessary.
                 * @param component the component index
                 * @return the maximum normalized component value
                 * @throws IllegalArgumentException if component is less than 0 or
                 *          greater than numComponents - 1
                 * @since 1.4
                 */
                // @ts-ignore
                public getMaxValue(component: number /*int*/): number /*float*/
            }
        }
    }
}
