declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class Size2DSyntax is an abstract base class providing the common
             * implementation of all attributes denoting a size in two dimensions.
             * <P>
             * A two-dimensional size attribute's value consists of two items, the X
             * dimension and the Y dimension. A two-dimensional size attribute may be
             * constructed by supplying the two values and indicating the units in which the
             * values are measured. Methods are provided to return a two-dimensional size
             * attribute's values, indicating the units in which the values are to be
             * returned. The two most common size units are inches (in) and millimeters
             * (mm), and exported constants {@link #INCH INCH} and {@link #MM
             * MM} are provided for indicating those units.
             * <P>
             * Once constructed, a two-dimensional size attribute's value is immutable.
             * <P>
             * <B>Design</B>
             * <P>
             * A two-dimensional size attribute's X and Y dimension values are stored
             * internally as integers in units of micrometers (&#181;m), where 1 micrometer
             * = 10<SUP>-6</SUP> meter = 1/1000 millimeter = 1/25400 inch. This permits
             * dimensions to be represented exactly to a precision of 1/1000 mm (= 1
             * &#181;m) or 1/100 inch (= 254 &#181;m). If fractional inches are expressed in
             * negative powers of two, this permits dimensions to be represented exactly to
             * a precision of 1/8 inch (= 3175 &#181;m) but not 1/16 inch (because 1/16 inch
             * does not equal an integral number of &#181;m).
             * <P>
             * Storing the dimensions internally in common units of &#181;m lets two size
             * attributes be compared without regard to the units in which they were
             * created; for example, 8.5 in will compare equal to 215.9 mm, as they both are
             * stored as 215900 &#181;m. For example, a lookup service can
             * match resolution attributes based on equality of their serialized
             * representations regardless of the units in which they were created. Using
             * integers for internal storage allows precise equality comparisons to be done,
             * which would not be guaranteed if an internal floating point representation
             * were used. Note that if you're looking for U.S. letter sized media in metric
             * units, you have to search for a media size of 215.9 x 279.4 mm; rounding off
             * to an integral 216 x 279 mm will not match.
             * <P>
             * The exported constant {@link #INCH INCH} is actually the
             * conversion factor by which to multiply a value in inches to get the value in
             * &#181;m. Likewise, the exported constant {@link #MM MM} is the
             * conversion factor by which to multiply a value in mm to get the value in
             * &#181;m. A client can specify a resolution value in units other than inches
             * or mm by supplying its own conversion factor. However, since the internal
             * units of &#181;m was chosen with supporting only the external units of inch
             * and mm in mind, there is no guarantee that the conversion factor for the
             * client's units will be an exact integer. If the conversion factor isn't an
             * exact integer, resolution values in the client's units won't be stored
             * precisely.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            abstract class Size2DSyntax extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                /**
                 * Construct a new two-dimensional size attribute from the given
                 * floating-point values.
                 * @param x  X dimension.
                 * @param y  Y dimension.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #INCH INCH} or
                 *      {@link #MM MM}.
                 * @exception IllegalArgumentException
                 *      (Unchecked exception) Thrown if {#code x < 0} or {@code y < 0} or
                 *      {@code units < 1}.
                 */
                // @ts-ignore
                constructor(x: number /*float*/, y: number /*float*/, units: number /*int*/)
                /**
                 * Construct a new two-dimensional size attribute from the given integer
                 * values.
                 * @param x  X dimension.
                 * @param y  Y dimension.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #INCH INCH} or
                 *      {@link #MM MM}.
                 * @exception IllegalArgumentException
                 *    (Unchecked exception) Thrown if {#code x < 0} or {@code y < 0}
                 *     or {@code units < 1}.
                 */
                // @ts-ignore
                constructor(x: number /*int*/, y: number /*int*/, units: number /*int*/)
                /**
                 * Value to indicate units of inches (in). It is actually the conversion
                 * factor by which to multiply inches to yield &#181;m (25400).
                 */
                // @ts-ignore
                public static readonly INCH: number /*int*/
                /**
                 * Value to indicate units of millimeters (mm). It is actually the
                 * conversion factor by which to multiply mm to yield &#181;m (1000).
                 */
                // @ts-ignore
                public static readonly MM: number /*int*/
                /**
                 * Get this two-dimensional size attribute's dimensions in the given units
                 * as floating-point values.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #INCH INCH} or {@link #MM MM}.
                 * @return A two-element array with the X dimension at index 0 and the Y
                 *           dimension at index 1.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public getSize(units: number /*int*/): number /*float*/[]
                /**
                 * Returns this two-dimensional size attribute's X dimension in the given
                 * units as a floating-point value.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #INCH INCH} or {@link #MM MM}.
                 * @return X dimension.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public getX(units: number /*int*/): number /*float*/
                /**
                 * Returns this two-dimensional size attribute's Y dimension in the given
                 * units as a floating-point value.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #INCH INCH} or {@link #MM MM}.
                 * @return Y dimension.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public getY(units: number /*int*/): number /*float*/
                /**
                 * Returns a string version of this two-dimensional size attribute in the
                 * given units. The string takes the form <CODE>"<I>X</I>x<I>Y</I>
                 * <I>U</I>"</CODE>, where <I>X</I> is the X dimension, <I>Y</I> is the Y
                 * dimension, and <I>U</I> is the units name. The values are displayed in
                 * floating point.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #INCH INCH} or {@link #MM MM}.
                 * @param unitsName
                 *      Units name string, e.g. {#code in} or {@code mm}. If
                 *      null, no units name is appended to the result.
                 * @return String version of this two-dimensional size attribute.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public toString(units: number /*int*/, unitsName: java.lang.String | string): string
                /**
                 * Returns whether this two-dimensional size attribute is equivalent to the
                 * passed in object. To be equivalent, all of the following conditions must
                 * be true:
                 * <OL TYPE=1>
                 * <LI>
                 * <CODE>object</CODE> is not null.
                 * <LI>
                 * <CODE>object</CODE> is an instance of class Size2DSyntax.
                 * <LI>
                 * This attribute's X dimension is equal to <CODE>object</CODE>'s X
                 * dimension.
                 * <LI>
                 * This attribute's Y dimension is equal to <CODE>object</CODE>'s Y
                 * dimension.
                 * </OL>
                 * @param object  Object to compare to.
                 * @return True if <CODE>object</CODE> is equivalent to this
                 *           two-dimensional size attribute, false otherwise.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                /**
                 * Returns a hash code value for this two-dimensional size attribute.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string version of this two-dimensional size attribute. The
                 * string takes the form <CODE>"<I>X</I>x<I>Y</I> um"</CODE>, where
                 * <I>X</I> is the X dimension and <I>Y</I> is the Y dimension.
                 * The values are reported in the internal units of micrometers.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Returns this two-dimensional size attribute's X dimension in units of
                 * micrometers (&#181;m). (For use in a subclass.)
                 * @return X dimension (&#181;m).
                 */
                // @ts-ignore
                getXMicrometers(): number /*int*/
                /**
                 * Returns this two-dimensional size attribute's Y dimension in units of
                 * micrometers (&#181;m). (For use in a subclass.)
                 * @return Y dimension (&#181;m).
                 */
                // @ts-ignore
                getYMicrometers(): number /*int*/
            }
        }
    }
}
