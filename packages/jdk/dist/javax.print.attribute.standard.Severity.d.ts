declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class Severity is a printing attribute class, an enumeration, that denotes
                 * the severity of a {@link PrinterStateReason PrinterStateReason} attribute.
                 * <P>
                 * Instances of Severity do not appear in a Print Service's attribute set
                 * directly. Rather, a {@link PrinterStateReasons PrinterStateReasons}
                 * attribute appears in the Print Service's attribute set.
                 * The {@link PrinterStateReasons
                 * PrinterStateReasons} attribute contains zero, one, or more than one {@link
                 * PrinterStateReason PrinterStateReason} objects which pertain to the Print
                 * Service's status, and each {@link PrinterStateReason PrinterStateReason}
                 * object is associated with a Severity level of REPORT (least severe),
                 * WARNING, or ERROR (most severe).
                 * The printer adds a {@link PrinterStateReason
                 * PrinterStateReason} object to the Print Service's
                 * {@link PrinterStateReasons PrinterStateReasons} attribute when the
                 * corresponding condition becomes true
                 * of the printer, and the printer removes the {@link PrinterStateReason
                 * PrinterStateReason} object again when the corresponding condition becomes
                 * false, regardless of whether the Print Service's overall
                 * {@link PrinterState PrinterState} also changed.
                 * <P>
                 * <B>IPP Compatibility:</B>
                 * <code>Severity.toString()</code> returns either "error", "warning", or
                 * "report".  The string values returned by
                 * each individual {@link PrinterStateReason} and
                 * associated {@link Severity} object's <CODE>toString()</CODE>
                 * methods, concatenated together with a hyphen (<CODE>"-"</CODE>) in
                 * between, gives the IPP keyword value for a {@link PrinterStateReasons}.
                 * The category name returned by <CODE>getName()</CODE> gives the IPP
                 * attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class Severity extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
                    /**
                     * Construct a new severity enumeration value with the given integer
                     * value.
                     * @param value  Integer value.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * Indicates that the {@link PrinterStateReason PrinterStateReason} is a
                     * "report" (least severe). An implementation may choose to omit some or
                     * all reports.
                     * Some reports specify finer granularity about the printer state;
                     * others serve as a precursor to a warning. A report must contain nothing
                     * that could affect the printed output.
                     */
                    // @ts-ignore
                    public static readonly REPORT: javax.print.attribute.standard.Severity
                    /**
                     * Indicates that the {@link PrinterStateReason PrinterStateReason} is a
                     * "warning." An implementation may choose to omit some or all warnings.
                     * Warnings serve as a precursor to an error. A warning must contain
                     * nothing  that prevents a job from completing, though in some cases the
                     * output may be of lower quality.
                     */
                    // @ts-ignore
                    public static readonly WARNING: javax.print.attribute.standard.Severity
                    /**
                     * Indicates that the {@link PrinterStateReason PrinterStateReason} is an
                     * "error" (most severe). An implementation must include all errors.
                     * If this attribute contains one or more errors, the printer's
                     * {@link PrinterState PrinterState} must be STOPPED.
                     */
                    // @ts-ignore
                    public static readonly ERROR: javax.print.attribute.standard.Severity
                    /**
                     * Returns the string table for class Severity.
                     */
                    // @ts-ignore
                    getStringTable(): string[]
                    /**
                     * Returns the enumeration value table for class Severity.
                     */
                    // @ts-ignore
                    getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class Severity, the category is class Severity itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class Severit, the category name is <CODE>"severity"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
