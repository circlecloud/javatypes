declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterState is a printing attribute class, an enumeration, that
                 * identifies the current state of a printer. Class PrinterState defines
                 * standard printer state values. A Print Service implementation only needs
                 * to report those printer states which are appropriate for the particular
                 * implementation; it does not have to report every defined printer state. The
                 * {@link PrinterStateReasons PrinterStateReasons} attribute augments the
                 * PrinterState attribute to give more detailed information about the printer
                 * in  given printer state.
                 * <P>
                 * <B>IPP Compatibility:</B> The category name returned by
                 * <CODE>getName()</CODE> is the IPP attribute name.  The enumeration's
                 * integer value is the IPP enum value.  The <code>toString()</code> method
                 * returns the IPP string representation of the attribute value.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterState extends javax.print.attribute.EnumSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Construct a new printer state enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * The printer state is unknown.
                     */
                    // @ts-ignore
                    readonly UNKNOWN: javax.print.attribute.standard.PrinterState
                    /**
                     * Indicates that new jobs can start processing without waiting.
                     */
                    // @ts-ignore
                    readonly IDLE: javax.print.attribute.standard.PrinterState
                    /**
                     * Indicates that jobs are processing;
                     * new jobs will wait before processing.
                     */
                    // @ts-ignore
                    readonly PROCESSING: javax.print.attribute.standard.PrinterState
                    /**
                     * Indicates that no jobs can be processed and intervention is required.
                     */
                    // @ts-ignore
                    readonly STOPPED: javax.print.attribute.standard.PrinterState
                    /**
                     * Returns the string table for class PrinterState.
                     */
                    // @ts-ignore
                    getStringTable(): java.lang.String[]
                    /**
                     * Returns the enumeration value table for class PrinterState.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterState, the category is class PrinterState itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterState, the category name is <CODE>"printer-state"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
