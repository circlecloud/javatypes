declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class OutputDeviceAssigned is a printing attribute class, a text attribute,
                 * that identifies the output device to which the service has assigned this
                 * job. If an output device implements an embedded Print Service instance, the
                 * printer need not set this attribute. If a print server implements a
                 * Print Service instance, the value may be empty (zero- length string) or not
                 * returned until the service assigns an output device to the job. This
                 * attribute is particularly useful when a single service supports multiple
                 * devices (so called "fan-out").
                 * <P>
                 * <B>IPP Compatibility:</B> The string value gives the IPP name value. The
                 * locale gives the IPP natural language. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class OutputDeviceAssigned extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintJobAttribute {
                    /**
                     * Constructs a new output device assigned attribute with the given device
                     * name and locale.
                     * @param deviceName  Device name.
                     * @param locale      Natural language of the text string. null
                     *  is interpreted to mean the default locale as returned
                     *  by <code>Locale.getDefault()</code>
                     * @exception NullPointerException
                     *    (unchecked exception) Thrown if <CODE>deviceName</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(deviceName: java.lang.String | string, locale: java.util.Locale)
                    /**
                     * Returns whether this output device assigned attribute is equivalent to
                     * the passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class OutputDeviceAssigned.
                     * <LI>
                     * This output device assigned attribute's underlying string and
                     * <CODE>object</CODE>'s underlying string are equal.
                     * <LI>
                     * This output device assigned attribute's locale and
                     * <CODE>object</CODE>'s locale are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this output
                     *           device assigned attribute, false otherwise.
                     */
                    // @ts-ignore
                    public equals(object: java.lang.Object | any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class OutputDeviceAssigned, the
                     * category is class OutputDeviceAssigned itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class OutputDeviceAssigned, the
                     * category name is <CODE>"output-device-assigned"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
