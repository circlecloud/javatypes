declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterIsAcceptingJobs is a printing attribute class, an enumeration,
                 * that indicates whether the printer is currently able to accept jobs. This
                 * value is independent of the {@link PrinterState PrinterState} and {@link
                 * PrinterStateReasons PrinterStateReasons} attributes because its value does
                 * not affect the current job; rather it affects future jobs. If the value is
                 * NOT_ACCEPTING_JOBS, the printer will reject jobs even when the {@link
                 * PrinterState PrinterState} is IDLE. If value is ACCEPTING_JOBS, the Printer
                 * will accept jobs even when the {@link PrinterState PrinterState} is STOPPED.
                 * <P>
                 * <B>IPP Compatibility:</B> The IPP boolean value is "true" for ACCEPTING_JOBS
                 * and "false" for NOT_ACCEPTING_JOBS. The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterIsAcceptingJobs extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Construct a new printer is accepting jobs enumeration value with the
                     * given integer value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The printer is currently rejecting any jobs sent to it.
                     */
                    // @ts-ignore
                    readonly NOT_ACCEPTING_JOBS: javax.print.attribute.standard.PrinterIsAcceptingJobs
                    /**
                     * The printer is currently accepting jobs.
                     */
                    // @ts-ignore
                    readonly ACCEPTING_JOBS: javax.print.attribute.standard.PrinterIsAcceptingJobs
                    /**
                     * Returns the string table for class PrinterIsAcceptingJobs.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class PrinterIsAcceptingJobs.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterIsAcceptingJobs, the
                     * category is class PrinterIsAcceptingJobs itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterIsAcceptingJobs, the
                     * category name is <CODE>"printer-is-accepting-jobs"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
