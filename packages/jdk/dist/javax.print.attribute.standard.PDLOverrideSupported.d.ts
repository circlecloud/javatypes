declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PDLOverrideSupported is a printing attribute class, an enumeration,
                 * that expresses the printer's ability to attempt to override processing
                 * instructions embedded in documents' print data with processing instructions
                 * specified as attributes outside the print data.
                 * <P>
                 * <B>IPP Compatibility:</B> The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PDLOverrideSupported extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Construct a new PDL override supported enumeration value with the given
                     * integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The printer makes no attempt to make the external job attribute values
                     * take precedence over embedded instructions in the documents' print
                     * data.
                     */
                    // @ts-ignore
                    readonly NOT_ATTEMPTED: javax.print.attribute.standard.PDLOverrideSupported
                    /**
                     * The printer attempts to make the external job attribute values take
                     * precedence over embedded instructions in the documents' print data,
                     * however there is no guarantee.
                     */
                    // @ts-ignore
                    readonly ATTEMPTED: javax.print.attribute.standard.PDLOverrideSupported
                    /**
                     * Returns the string table for class PDLOverrideSupported.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class PDLOverrideSupported.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PDLOverrideSupported and any vendor-defined subclasses, the
                     * category is class PDLOverrideSupported itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PDLOverrideSupported and any vendor-defined subclasses, the
                     * category name is <CODE>"pdl-override-supported"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
