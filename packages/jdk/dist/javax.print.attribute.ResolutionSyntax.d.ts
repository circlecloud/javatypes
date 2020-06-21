declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class ResolutionSyntax is an abstract base class providing the common
             * implementation of all attributes denoting a printer resolution.
             * <P>
             * A resolution attribute's value consists of two items, the cross feed
             * direction resolution and the feed direction resolution. A resolution
             * attribute may be constructed by supplying the two values and indicating the
             * units in which the values are measured. Methods are provided to return a
             * resolution attribute's values, indicating the units in which the values are
             * to be returned. The two most common resolution units are dots per inch (dpi)
             * and dots per centimeter (dpcm), and exported constants {@link #DPI
             * DPI} and {@link #DPCM DPCM} are provided for
             * indicating those units.
             * <P>
             * Once constructed, a resolution attribute's value is immutable.
             * <P>
             * <B>Design</B>
             * <P>
             * A resolution attribute's cross feed direction resolution and feed direction
             * resolution values are stored internally using units of dots per 100 inches
             * (dphi). Storing the values in dphi rather than, say, metric units allows
             * precise integer arithmetic conversions between dpi and dphi and between dpcm
             * and dphi: 1 dpi = 100 dphi, 1 dpcm = 254 dphi. Thus, the values can be stored
             * into and retrieved back from a resolution attribute in either units with no
             * loss of precision. This would not be guaranteed if a floating point
             * representation were used. However, roundoff error will in general occur if a
             * resolution attribute's values are created in one units and retrieved in
             * different units; for example, 600 dpi will be rounded to 236 dpcm, whereas
             * the true value (to five figures) is 236.22 dpcm.
             * <P>
             * Storing the values internally in common units of dphi lets two resolution
             * attributes be compared without regard to the units in which they were
             * created; for example, 300 dpcm will compare equal to 762 dpi, as they both
             * are stored as 76200 dphi. In particular, a lookup service can
             * match resolution attributes based on equality of their serialized
             * representations regardless of the units in which they were created. Again,
             * using integers for internal storage allows precise equality comparisons to be
             * done, which would not be guaranteed if a floating point representation were
             * used.
             * <P>
             * The exported constant {@link #DPI DPI} is actually the
             * conversion factor by which to multiply a value in dpi to get the value in
             * dphi. Likewise, the exported constant {@link #DPCM DPCM} is the
             * conversion factor by which to multiply a value in dpcm to get the value in
             * dphi. A client can specify a resolution value in units other than dpi or dpcm
             * by supplying its own conversion factor. However, since the internal units of
             * dphi was chosen with supporting only the external units of dpi and dpcm in
             * mind, there is no guarantee that the conversion factor for the client's units
             * will be an exact integer. If the conversion factor isn't an exact integer,
             * resolution values in the client's units won't be stored precisely.
             * <P>
             * @author David Mendenhall
             * @author Alan Kaminsky
             */
            // @ts-ignore
            abstract class ResolutionSyntax extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                /**
                 * Construct a new resolution attribute from the given items.
                 * @param crossFeedResolution
                 *      Cross feed direction resolution.
                 * @param feedResolution
                 *      Feed direction resolution.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #DPI DPI} or
                 *  {@link    #DPCM DPCM}.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code crossFeedResolution < 1}
                 *      or {@code feedResolution < 1} or {@code units < 1}.
                 */
                // @ts-ignore
                constructor(crossFeedResolution: number /*int*/, feedResolution: number /*int*/, units: number /*int*/)
                /**
                 * Value to indicate units of dots per inch (dpi). It is actually the
                 * conversion factor by which to multiply dpi to yield dphi (100).
                 */
                // @ts-ignore
                public static readonly DPI: number /*int*/
                /**
                 * Value to indicate units of dots per centimeter (dpcm). It is actually
                 * the conversion factor by which to multiply dpcm to yield dphi (254).
                 */
                // @ts-ignore
                public static readonly DPCM: number /*int*/
                /**
                 * Get this resolution attribute's resolution values in the given units.
                 * The values are rounded to the nearest integer.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #DPI DPI} or
                 *  {@link   #DPCM DPCM}.
                 * @return A two-element array with the cross feed direction resolution
                 *           at index 0 and the feed direction resolution at index 1.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public getResolution(units: number /*int*/): number /*int*/[]
                /**
                 * Returns this resolution attribute's cross feed direction resolution in
                 * the given units. The value is rounded to the nearest integer.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #DPI DPI} or
                 *  {@link  #DPCM DPCM}.
                 * @return Cross feed direction resolution.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public getCrossFeedResolution(units: number /*int*/): number /*int*/
                /**
                 * Returns this resolution attribute's feed direction resolution in the
                 * given units. The value is rounded to the nearest integer.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #DPI DPI} or {@link
                 *      #DPCM DPCM}.
                 * @return Feed direction resolution.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public getFeedResolution(units: number /*int*/): number /*int*/
                /**
                 * Returns a string version of this resolution attribute in the given units.
                 * The string takes the form <CODE>"<I>C</I>x<I>F</I> <I>U</I>"</CODE>,
                 * where <I>C</I> is the cross feed direction resolution, <I>F</I> is the
                 * feed direction resolution, and <I>U</I> is the units name. The values are
                 * rounded to the nearest integer.
                 * @param units
                 *      Unit conversion factor, e.g. {#link #DPI CODE>DPI} or {@link
                 *      #DPCM DPCM}.
                 * @param unitsName
                 *      Units name string, e.g. <CODE>"dpi"</CODE> or <CODE>"dpcm"</CODE>. If
                 *      null, no units name is appended to the result.
                 * @return String version of this resolution attribute.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if {#code units < 1}.
                 */
                // @ts-ignore
                public toString(units: number /*int*/, unitsName: java.lang.String | string): string
                /**
                 * Determine whether this resolution attribute's value is less than or
                 * equal to the given resolution attribute's value. This is true if all
                 * of the following conditions are true:
                 * <UL>
                 * <LI>
                 * This attribute's cross feed direction resolution is less than or equal to
                 * the <CODE>other</CODE> attribute's cross feed direction resolution.
                 * <LI>
                 * This attribute's feed direction resolution is less than or equal to the
                 * <CODE>other</CODE> attribute's feed direction resolution.
                 * </UL>
                 * @param other  Resolution attribute to compare with.
                 * @return True if this resolution attribute is less than or equal to the
                 *           <CODE>other</CODE> resolution attribute, false otherwise.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>other</CODE> is null.
                 */
                // @ts-ignore
                public lessThanOrEquals(other: javax.print.attribute.ResolutionSyntax): boolean
                /**
                 * Returns whether this resolution attribute is equivalent to the passed in
                 * object. To be equivalent, all of the following conditions must be true:
                 * <OL TYPE=1>
                 * <LI>
                 * <CODE>object</CODE> is not null.
                 * <LI>
                 * <CODE>object</CODE> is an instance of class ResolutionSyntax.
                 * <LI>
                 * This attribute's cross feed direction resolution is equal to
                 * <CODE>object</CODE>'s cross feed direction resolution.
                 * <LI>
                 * This attribute's feed direction resolution is equal to
                 * <CODE>object</CODE>'s feed direction resolution.
                 * </OL>
                 * @param object  Object to compare to.
                 * @return True if <CODE>object</CODE> is equivalent to this resolution
                 *           attribute, false otherwise.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                /**
                 * Returns a hash code value for this resolution attribute.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string version of this resolution attribute. The string takes
                 * the form <CODE>"<I>C</I>x<I>F</I> dphi"</CODE>, where <I>C</I> is the
                 * cross feed direction resolution and <I>F</I> is the feed direction
                 * resolution. The values are reported in the internal units of dphi.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Returns this resolution attribute's cross feed direction resolution in
                 * units of dphi. (For use in a subclass.)
                 * @return Cross feed direction resolution.
                 */
                // @ts-ignore
                getCrossFeedResolutionDphi(): number /*int*/
                /**
                 * Returns this resolution attribute's feed direction resolution in units
                 * of dphi. (For use in a subclass.)
                 * @return Feed direction resolution.
                 */
                // @ts-ignore
                getFeedResolutionDphi(): number /*int*/
            }
        }
    }
}
