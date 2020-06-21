declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterLocation is a printing attribute class, a text attribute, that
                 * identifies the location of the device. This could include things like:
                 * <CODE>"in Room 123A, second floor of building XYZ"</CODE>.
                 * <P>
                 * <B>IPP Compatibility:</B> The string value gives the IPP name value. The
                 * locale gives the IPP natural language. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterLocation extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Constructs a new printer location attribute with the given location and
                     * locale.
                     * @param location  Printer location.
                     * @param locale    Natural language of the text string. null
                     *  is interpreted to mean the default locale as returned
                     *  by <code>Locale.getDefault()</code>
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>location</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(location: java.lang.String | string, locale: java.util.Locale)
                    /**
                     * Returns whether this printer location attribute is equivalent to the
                     * passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class PrinterLocation.
                     * <LI>
                     * This printer location attribute's underlying string and
                     * <CODE>object</CODE>'s underlying string are equal.
                     * <LI>
                     * This printer location attribute's locale and <CODE>object</CODE>'s
                     * locale are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this printer
                     *           location attribute, false otherwise.
                     */
                    // @ts-ignore
                    public equals(object: java.lang.Object | any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterLocation, the
                     * category is class PrinterLocation itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterLocation, the
                     * category name is <CODE>"printer-location"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
