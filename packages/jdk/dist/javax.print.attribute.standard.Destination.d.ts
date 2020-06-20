declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class Destination is a printing attribute class, a URI, that is used to
                 * indicate an alternate destination for the spooled printer formatted
                 * data. Many PrintServices will not support the notion of a destination
                 * other than the printer device, and so will not support this attribute.
                 * <p>
                 * A common use for this attribute will be applications which want
                 * to redirect output to a local disk file : eg."file:out.prn".
                 * Note that proper construction of "file:" scheme URI instances should
                 * be performed using the <code>toURI()</code> method of class
                 * {@link java.io.File File}.
                 * See the documentation on that class for more information.
                 * <p>
                 * If a destination URI is specified in a PrintRequest and it is not
                 * accessible for output by the PrintService, a PrintException will be thrown.
                 * The PrintException may implement URIException to provide a more specific
                 * cause.
                 * <P>
                 * <B>IPP Compatibility:</B> Destination is not an IPP attribute.
                 * <P>
                 * @author Phil Race.
                 */
                // @ts-ignore
                class Destination extends javax.print.attribute.URISyntax implements javax.print.attribute.PrintJobAttribute, javax.print.attribute.PrintRequestAttribute {
                    /**
                     * Constructs a new destination attribute with the specified URI.
                     * @param uri  URI.
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>uri</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(uri: java.net.URI)
                    /**
                     * Returns whether this destination attribute is equivalent to the
                     * passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class Destination.
                     * <LI>
                     * This destination attribute's URI and <CODE>object</CODE>'s URI
                     * are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this destination
                     *          attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class Destination, the category is class Destination itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class Destination, the category name is <CODE>"spool-data-destination"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
