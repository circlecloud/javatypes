declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterInfo is a printing attribute class, a text attribute, that
                 * provides descriptive information about a printer. This could include things
                 * like: <CODE>"This printer can be used for printing color transparencies for
                 * HR presentations"</CODE>, or <CODE>"Out of courtesy for others, please
                 * print only small (1-5 page) jobs at this printer"</CODE>, or even \
                 * <CODE>"This printer is going away on July 1, 1997, please find a new
                 * printer"</CODE>.
                 * <P>
                 * <B>IPP Compatibility:</B> The string value gives the IPP name value. The
                 * locale gives the IPP natural language. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterInfo extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Constructs a new printer info attribute with the given information
                     * string and locale.
                     * @param info    Printer information string.
                     * @param locale  Natural language of the text string. null
                     *  is interpreted to mean the default locale as returned
                     *  by <code>Locale.getDefault()</code>
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>info</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(info: java.lang.String | string, locale: java.util.Locale)
                    /**
                     * Returns whether this printer info attribute is equivalent to the passed
                     * in object. To be equivalent, all of the following conditions must be
                     * true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class PrinterInfo.
                     * <LI>
                     * This printer info attribute's underlying string and
                     * <CODE>object</CODE>'s underlying string are equal.
                     * <LI>
                     * This printer info attribute's locale and <CODE>object</CODE>'s
                     * locale are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this printer
                     *           info attribute, false otherwise.
                     */
                    // @ts-ignore
                    public equals(object: java.lang.Object | any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterInfo, the category is class PrinterInfo itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterInfo, the category name is <CODE>"printer-info"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
