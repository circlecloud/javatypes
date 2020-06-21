declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class Compression is a printing attribute class, an enumeration, that
                 * specifies how print data is compressed. Compression is an attribute of the
                 * print data (the doc), not of the Print Job. If a Compression attribute is not
                 * specified for a doc, the printer assumes the doc's print data is uncompressed
                 * (i.e., the default Compression value is always {@link #NONE
                 * NONE}).
                 * <P>
                 * <B>IPP Compatibility:</B> The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class Compression extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute {
                    /**
                     * Construct a new compression enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * No compression is used.
                     */
                    // @ts-ignore
                    public static readonly NONE: javax.print.attribute.standard.Compression
                    /**
                     * ZIP public domain inflate/deflate compression technology.
                     */
                    // @ts-ignore
                    public static readonly DEFLATE: javax.print.attribute.standard.Compression
                    /**
                     * GNU zip compression technology described in
                     * <A HREF="http://www.ietf.org/rfc/rfc1952.txt">RFC 1952</A>.
                     */
                    // @ts-ignore
                    public static readonly GZIP: javax.print.attribute.standard.Compression
                    /**
                     * UNIX compression technology.
                     */
                    // @ts-ignore
                    public static readonly COMPRESS: javax.print.attribute.standard.Compression
                    /**
                     * Returns the string table for class Compression.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class Compression.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class Compression and any vendor-defined subclasses, the category is
                     * class Compression itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class Compression and any vendor-defined subclasses, the category
                     * name is <CODE>"compression"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
