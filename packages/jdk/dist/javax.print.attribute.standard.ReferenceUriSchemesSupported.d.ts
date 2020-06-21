declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class ReferenceUriSchemesSupported is a printing attribute class
                 * an enumeration, that indicates a "URI scheme," such as "http:" or "ftp:",
                 * that a printer can use to retrieve print data stored at a URI location.
                 * If a printer supports doc flavors with a print data representation class of
                 * <CODE>"java.net.URL"</CODE>, the printer uses instances of class
                 * ReferenceUriSchemesSupported to advertise the URI schemes it can accept.
                 * The acceptable URI schemes are included as service attributes in the
                 * lookup service; this lets clients search the
                 * for printers that can get print data using a certain URI scheme. The
                 * acceptable URI schemes can also be queried using the capability methods in
                 * interface <code>PrintService</code>. However,
                 * ReferenceUriSchemesSupported attributes are used solely for determining
                 * acceptable URI schemes, they are never included in a doc's,
                 * print request's, print job's, or print service's attribute set.
                 * <P>
                 * The Internet Assigned Numbers Authority maintains the
                 * <A HREF="http://www.iana.org/assignments/uri-schemes.html">official
                 * list of URI schemes</A>.
                 * <p>
                 * Class ReferenceUriSchemesSupported defines enumeration values for widely
                 * used URI schemes. A printer that supports additional URI schemes
                 * can define them in a subclass of class ReferenceUriSchemesSupported.
                 * <P>
                 * <B>IPP Compatibility:</B>  The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class ReferenceUriSchemesSupported extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
                    /**
                     * Construct a new reference URI scheme enumeration value with the given
                     * integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * File Transfer Protocol (FTP).
                     */
                    // @ts-ignore
                    public static readonly FTP: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * HyperText Transfer Protocol (HTTP).
                     */
                    // @ts-ignore
                    public static readonly HTTP: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * Secure HyperText Transfer Protocol (HTTPS).
                     */
                    // @ts-ignore
                    public static readonly HTTPS: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * Gopher Protocol.
                     */
                    // @ts-ignore
                    public static readonly GOPHER: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * USENET news.
                     */
                    // @ts-ignore
                    public static readonly NEWS: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * USENET news using Network News Transfer Protocol (NNTP).
                     */
                    // @ts-ignore
                    public static readonly NNTP: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * Wide Area Information Server (WAIS) protocol.
                     */
                    // @ts-ignore
                    public static readonly WAIS: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * Host-specific file names.
                     */
                    // @ts-ignore
                    public static readonly FILE: javax.print.attribute.standard.ReferenceUriSchemesSupported
                    /**
                     * Returns the string table for class ReferenceUriSchemesSupported.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class
                     * ReferenceUriSchemesSupported.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class ReferenceUriSchemesSupported and any vendor-defined
                     * subclasses, the category is class ReferenceUriSchemesSupported itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class ReferenceUriSchemesSupported and any vendor-defined
                     * subclasses, the category name is
                     * <CODE>"reference-uri-schemes-supported"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
