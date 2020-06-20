declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class MediaPrintableArea is a printing attribute used to distinguish
                 * the printable and non-printable areas of media.
                 * <p>
                 * The printable area is specified to be a rectangle, within the overall
                 * dimensions of a media.
                 * <p>
                 * Most printers cannot print on the entire surface of the media, due
                 * to printer hardware limitations. This class can be used to query
                 * the acceptable values for a supposed print job, and to request an area
                 * within the constraints of the printable area to be used in a print job.
                 * <p>
                 * To query for the printable area, a client must supply a suitable context.
                 * Without specifying at the very least the size of the media being used
                 * no meaningful value for printable area can be obtained.
                 * <p>
                 * The attribute is not described in terms of the distance from the edge
                 * of the paper, in part to emphasise that this attribute is not independent
                 * of a particular media, but must be described within the context of a
                 * choice of other attributes. Additionally it is usually more convenient
                 * for a client to use the printable area.
                 * <p>
                 * The hardware's minimum margins is not just a property of the printer,
                 * but may be a function of the media size, orientation, media type, and
                 * any specified finishings.
                 * <code>PrintService</code> provides the method to query the supported
                 * values of an attribute in a suitable context :
                 * See  {@link javax.print.PrintService#getSupportedAttributeValues(Class,DocFlavor, AttributeSet) PrintService.getSupportedAttributeValues()}
                 * <p>
                 * The rectangular printable area is defined thus:
                 * The (x,y) origin is positioned at the top-left of the paper in portrait
                 * mode regardless of the orientation specified in the requesting context.
                 * For example a printable area for A4 paper in portrait or landscape
                 * orientation will have height {@literal >} width.
                 * <p>
                 * A printable area attribute's values are stored
                 * internally as integers in units of micrometers (&#181;m), where 1 micrometer
                 * = 10<SUP>-6</SUP> meter = 1/1000 millimeter = 1/25400 inch. This permits
                 * dimensions to be represented exactly to a precision of 1/1000 mm (= 1
                 * &#181;m) or 1/100 inch (= 254 &#181;m). If fractional inches are expressed in
                 * negative powers of two, this permits dimensions to be represented exactly to
                 * a precision of 1/8 inch (= 3175 &#181;m) but not 1/16 inch (because 1/16 inch
                 * does not equal an integral number of &#181;m).
                 * <p>
                 * <B>IPP Compatibility:</B> MediaPrintableArea is not an IPP attribute.
                 */
                // @ts-ignore
                class MediaPrintableArea extends java.lang.Object implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Constructs a MediaPrintableArea object from floating point values.
                     * @param x      printable x
                     * @param y      printable y
                     * @param w      printable width
                     * @param h      printable height
                     * @param units  in which the values are expressed.
                     * @exception IllegalArgumentException
                     *      Thrown if {#code x < 0} or {@code y < 0}
                     *      or {@code w <= 0} or {@code h <= 0} or
                     *      {@code units < 1}.
                     */
                    // @ts-ignore
                    constructor(x: number /*float*/, y: number /*float*/, w: number /*float*/, h: number /*float*/, units: number /*int*/)
                    /**
                     * Constructs a MediaPrintableArea object from integer values.
                     * @param x      printable x
                     * @param y      printable y
                     * @param w      printable width
                     * @param h      printable height
                     * @param units  in which the values are expressed.
                     * @exception IllegalArgumentException
                     *      Thrown if {#code x < 0} or {@code y < 0}
                     *      or {@code w <= 0} or {@code h <= 0} or
                     *      {@code units < 1}.
                     */
                    // @ts-ignore
                    constructor(x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, units: number /*int*/)
                    /**
                     * Value to indicate units of inches (in). It is actually the conversion
                     * factor by which to multiply inches to yield &#181;m (25400).
                     */
                    // @ts-ignore
                    readonly INCH: number /*int*/
                    /**
                     * Value to indicate units of millimeters (mm). It is actually the
                     * conversion factor by which to multiply mm to yield &#181;m (1000).
                     */
                    // @ts-ignore
                    readonly MM: number /*int*/
                    /**
                     * Get the printable area as an array of 4 values in the order
                     * x, y, w, h. The values returned are in the given units.
                     * @param units
                     *      Unit conversion factor, e.g. {#link #INCH INCH} or
                     *      {@link #MM MM}.
                     * @return printable area as array of x, y, w, h in the specified units.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code units < 1}.
                     */
                    // @ts-ignore
                    getPrintableArea(units: number /*int*/): float[]
                    /**
                     * Get the x location of the origin of the printable area in the
                     * specified units.
                     * @param units
                     *      Unit conversion factor, e.g. {#link #INCH INCH} or
                     *      {@link #MM MM}.
                     * @return x location of the origin of the printable area in the
                     *  specified units.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code units < 1}.
                     */
                    // @ts-ignore
                    getX(units: number /*int*/): float
                    /**
                     * Get the y location of the origin of the printable area in the
                     * specified units.
                     * @param units
                     *      Unit conversion factor, e.g. {#link #INCH INCH} or
                     *      {@link #MM MM}.
                     * @return y location of the origin of the printable area in the
                     *  specified units.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code units < 1}.
                     */
                    // @ts-ignore
                    getY(units: number /*int*/): float
                    /**
                     * Get the width of the printable area in the specified units.
                     * @param units
                     *      Unit conversion factor, e.g. {#link #INCH INCH} or
                     *      {@link #MM MM}.
                     * @return width of the printable area in the specified units.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code units < 1}.
                     */
                    // @ts-ignore
                    getWidth(units: number /*int*/): float
                    /**
                     * Get the height of the printable area in the specified units.
                     * @param units
                     *      Unit conversion factor, e.g. {#link #INCH INCH} or
                     *      {@link #MM MM}.
                     * @return height of the printable area in the specified units.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code units < 1}.
                     */
                    // @ts-ignore
                    getHeight(units: number /*int*/): float
                    /**
                     * Returns whether this media margins attribute is equivalent to the passed
                     * in object.
                     * To be equivalent, all of the following conditions must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class MediaPrintableArea.
                     * <LI>
                     * The origin and dimensions are the same.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this media margins
                     *           attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class MediaPrintableArea, the category is
                     * class MediaPrintableArea itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class MediaPrintableArea,
                     * the category name is <CODE>"media-printable-area"</CODE>.
                     * <p>This is not an IPP V1.1 attribute.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Returns a string version of this rectangular size attribute in the
                     * given units.
                     * @param units
                     *      Unit conversion factor, e.g. {#link #INCH INCH} or
                     *      {@link #MM MM}.
                     * @param unitsName
                     *      Units name string, e.g. <CODE>"in"</CODE> or <CODE>"mm"</CODE>. If
                     *      null, no units name is appended to the result.
                     * @return String version of this two-dimensional size attribute.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if {#code units < 1}.
                     */
                    // @ts-ignore
                    toString(units: number /*int*/, unitsName: string): java.lang.String
                    /**
                     * Returns a string version of this rectangular size attribute in mm.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * Returns a hash code value for this attribute.
                     */
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
