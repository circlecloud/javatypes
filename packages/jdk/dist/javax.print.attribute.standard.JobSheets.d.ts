declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class JobSheets is a printing attribute class, an enumeration, that
                 * determines which job start and end sheets, if any, must be printed with a
                 * job. Class JobSheets declares keywords for standard job sheets values.
                 * Implementation- or site-defined names for a job sheets attribute may also be
                 * created by defining a subclass of class JobSheets.
                 * <P>
                 * The effect of a JobSheets attribute on multidoc print jobs (jobs with
                 * multiple documents) may be affected by the {@link MultipleDocumentHandling
                 * MultipleDocumentHandling} job attribute, depending on the meaning of the
                 * particular JobSheets value.
                 * <P>
                 * <B>IPP Compatibility:</B>  The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The
                 * enumeration's integer value is the IPP enum value.  The
                 * <code>toString()</code> method returns the IPP string representation of
                 * the attribute value. For a subclass, the attribute value must be
                 * localized to give the IPP name and natural language values.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class JobSheets extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new job sheets enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * No job sheets are printed.
                     */
                    // @ts-ignore
                    readonly NONE: javax.print.attribute.standard.JobSheets
                    /**
                     * One or more site specific standard job sheets are printed. e.g. a
                     * single start sheet is printed, or both start and end sheets are
                     * printed.
                     */
                    // @ts-ignore
                    readonly STANDARD: javax.print.attribute.standard.JobSheets
                    /**
                     * Returns the string table for class JobSheets.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class JobSheets.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class JobSheets and any vendor-defined subclasses, the category is
                     * class JobSheets itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class JobSheets and any vendor-defined subclasses, the category
                     * name is <CODE>"job-sheets"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
