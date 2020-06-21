declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrintQuality is a printing attribute class, an enumeration,
                 * that specifies the print quality that the printer uses for the job.
                 * <P>
                 * <B>IPP Compatibility:</B> The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author David Mendenhall
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrintQuality extends javax.print.attribute.EnumSyntax implements javax.print.attribute.DocAttribute, javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new print quality enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * Lowest quality available on the printer.
                     */
                    // @ts-ignore
                    public static readonly DRAFT: javax.print.attribute.standard.PrintQuality
                    /**
                     * Normal or intermediate quality on the printer.
                     */
                    // @ts-ignore
                    public static readonly NORMAL: javax.print.attribute.standard.PrintQuality
                    /**
                     * Highest quality available on the printer.
                     */
                    // @ts-ignore
                    public static readonly HIGH: javax.print.attribute.standard.PrintQuality
                    /**
                     * Returns the string table for class PrintQuality.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class PrintQuality.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Returns the lowest integer value used by class PrintQuality.
                     */
                    // @ts-ignore
                    getOffset(): number /*int*/
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrintQuality and any vendor-defined subclasses, the category is
                     * class PrintQuality itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrintQuality and any vendor-defined subclasses, the category
                     * name is <CODE>"print-quality"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
