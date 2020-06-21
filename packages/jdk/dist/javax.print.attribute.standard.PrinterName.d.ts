declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterName is a printing attribute class, a text attribute, that
                 * specifies the name of a printer. It is a name that is more end-user friendly
                 * than a URI. An administrator determines a printer's name and sets this
                 * attribute to that name. This name may be the last part of the printer's URI
                 * or it may be unrelated. In non-US-English locales, a name may contain
                 * characters that are not allowed in a URI.
                 * <P>
                 * <B>IPP Compatibility:</B> The string value gives the IPP name value. The
                 * locale gives the IPP natural language. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterName extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Constructs a new printer name attribute with the given name and locale.
                     * @param printerName  Printer name.
                     * @param locale       Natural language of the text string. null
                     *  is interpreted to mean the default locale as returned
                     *  by <code>Locale.getDefault()</code>
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>printerName</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(printerName: java.lang.String | string, locale: java.util.Locale)
                    /**
                     * Returns whether this printer name attribute is equivalent to the passed
                     * in object. To be equivalent, all of the following conditions must be
                     * true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class PrinterName.
                     * <LI>
                     * This printer name attribute's underlying string and
                     * <CODE>object</CODE>'s underlying string are equal.
                     * <LI>
                     * This printer name attribute's locale and <CODE>object</CODE>'s locale
                     * are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this printer
                     *           name attribute, false otherwise.
                     */
                    // @ts-ignore
                    public equals(object: java.lang.Object | any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterName, the category is
                     * class PrinterName itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterName, the category
                     * name is <CODE>"printer-name"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
