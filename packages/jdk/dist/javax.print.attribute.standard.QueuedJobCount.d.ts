declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class QueuedJobCount is an integer valued printing attribute that indicates
                 * the number of jobs in the printer whose {@link JobState JobState} is either
                 * PENDING, PENDING_HELD, PROCESSING, or PROCESSING_STOPPED.
                 * <P>
                 * <B>IPP Compatibility:</B> The integer value gives the IPP integer value.
                 * The category name returned by <CODE>getName()</CODE> gives the IPP
                 * attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class QueuedJobCount extends javax.print.attribute.IntegerSyntax implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Construct a new queued job count attribute with the given integer
                     * value.
                     * @param value  Integer value.
                     * @exception IllegalArgumentException
                     *    (Unchecked exception) Thrown if <CODE>value</CODE> is less than 0.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * Returns whether this queued job count attribute is equivalent to the
                     * passed in object. To be equivalent, all of the following conditions
                     * mus  be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class QueuedJobCount.
                     * <LI>
                     * This queued job count attribute's value and <CODE>object</CODE>'s
                     * value are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this queued job
                     *           count attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class QueuedJobCount, the category is class QueuedJobCount itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class QueuedJobCount, the
                     * category name is <CODE>"queued-job-count"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
