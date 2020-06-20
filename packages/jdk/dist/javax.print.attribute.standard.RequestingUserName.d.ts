declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class RequestingUserName is a printing attribute class, a text attribute,
                 * that specifies the name of the end user that submitted the print job. A
                 * requesting user name is an arbitrary string defined by the client. The
                 * printer does not put the client-specified RequestingUserName attribute into
                 * the Print Job's attribute set; rather, the printer puts in a {@link
                 * JobOriginatingUserName JobOriginatingUserName} attribute.
                 * This means that services which support specifying a username with this
                 * attribute should also report a JobOriginatingUserName in the job's
                 * attribute set. Note that many print services may have a way to independently
                 * authenticate the user name, and so may state support for a
                 * requesting user name, but in practice will then report the user name
                 * authenticated by the service rather than that specified via this
                 * attribute.
                 * <P>
                 * <B>IPP Compatibility:</B> The string value gives the IPP name value. The
                 * locale gives the IPP natural language. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class RequestingUserName extends javax.print.attribute.TextSyntax implements javax.print.attribute.PrintRequestAttribute {
                    /**
                     * Constructs a new requesting user name attribute with the given user
                     * name and locale.
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
                     * Returns whether this requesting user name attribute is equivalent to
                     * the passed in object. To be equivalent, all of the following
                     * conditions must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class RequestingUserName.
                     * <LI>
                     * This requesting user name attribute's underlying string and
                     * <CODE>object</CODE>'s underlying string are equal.
                     * <LI>
                     * This requesting user name attribute's locale and
                     * <CODE>object</CODE>'s locale are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this requesting
                     *           user name attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class RequestingUserName, the
                     * category is class RequestingUserName itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class RequestingUserName, the
                     * category name is <CODE>"requesting-user-name"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
