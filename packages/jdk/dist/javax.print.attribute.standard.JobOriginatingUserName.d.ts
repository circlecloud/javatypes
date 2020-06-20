declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class JobOriginatingUserName is a printing attribute class, a text
                 * attribute, that contains the name of the end user that submitted the
                 * print job. If possible, the printer sets this attribute to the most
                 * authenticated printable user name that it can obtain from the
                 * authentication service that authenticated the submitted Print Request.
                 * If such is not available, the printer uses the value of the
                 * {@link RequestingUserName RequestingUserName}
                 * attribute supplied by the client in the Print Request's attribute set.
                 * If no authentication service is available, and the client did not supply
                 * a {@link RequestingUserName RequestingUserName} attribute,
                 * the printer sets the JobOriginatingUserName attribute to an empty
                 * (zero-length) string.
                 * <P>
                 * <B>IPP Compatibility:</B> The string value gives the IPP name value. The
                 * locale gives the IPP natural language. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class JobOriginatingUserName extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintJobAttribute {
                    /**
                     * Constructs a new job originating user name attribute with the given
                     * user name and locale.
                     * @param userName  User name.
                     * @param locale    Natural language of the text string. null
                     *  is interpreted to mean the default locale as returned
                     *  by <code>Locale.getDefault()</code>
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>userName</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(userName: string, locale: java.util.Locale)
                    /**
                     * Returns whether this job originating user name attribute is equivalent to
                     * the passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class JobOriginatingUserName.
                     * <LI>
                     * This job originating user name attribute's underlying string and
                     * <CODE>object</CODE>'s underlying string are equal.
                     * <LI>
                     * This job originating user name attribute's locale and
                     * <CODE>object</CODE>'s locale are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this job
                     *           originating user name attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class JobOriginatingUserName, the
                     * category is class JobOriginatingUserName itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class JobOriginatingUserName, the
                     * category name is <CODE>"job-originating-user-name"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
