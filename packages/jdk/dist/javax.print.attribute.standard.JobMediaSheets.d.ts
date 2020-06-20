declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class JobMediaSheets is an integer valued printing attribute class that
                 * specifies the total number of media sheets to be produced for this job.
                 * <P>
                 * The JobMediaSheets attribute describes the size of the job. This attribute is
                 * not intended to be a counter; it is intended to be useful routing and
                 * scheduling information if known. The printer may try to compute the
                 * JobMediaSheets attribute's value if it is not supplied in the Print Request.
                 * Even if the client does supply a value for the JobMediaSheets attribute in
                 * the Print Request, the printer may choose to change the value if the printer
                 * is able to compute a value which is more accurate than the client supplied
                 * value. The printer may be able to determine the correct value for the
                 * JobMediaSheets attribute either right at job submission time or at any later
                 * point in time.
                 * <P>
                 * Unlike the {@link JobKOctets JobKOctets} and {@link JobImpressions
                 * JobImpressions} attributes, the JobMediaSheets value must include the
                 * multiplicative factors contributed by the number of copies specified by the
                 * {@link Copies Copies} attribute and a "number of copies" instruction embedded
                 * in the document data, if any. This difference allows the system administrator
                 * to control the lower and upper bounds of both (1) the size of the document(s)
                 * with {@link JobKOctetsSupported JobKOctetsSupported} and {@link
                 * JobImpressionsSupported JobImpressionsSupported} and (2) the size of the job
                 * with {@link JobMediaSheetsSupported JobMediaSheetsSupported}.
                 * <P>
                 * <B>IPP Compatibility:</B> The integer value gives the IPP integer value. The
                 * category name returned by <CODE>getName()</CODE> gives the IPP attribute
                 * name.
                 * <P>
                 * @see JobMediaSheetsSupported
                 * @see JobMediaSheetsCompleted
                 * @see JobKOctets
                 * @see JobImpressions
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class JobMediaSheets extends javax.print.attribute.IntegerSyntax implements javax.print.attribute.PrintRequestAttribute, javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new job media sheets attribute with the given integer
                     * value.
                     * @param value  Integer value.
                     * @exception IllegalArgumentException
                     *    (Unchecked exception) Thrown if <CODE>value</CODE> is less than 0.
                     */
                    // @ts-ignore
                    constructor(value: number /*int*/)
                    /**
                     * Returns whether this job media sheets attribute is equivalent to the
                     * passed in object. To be equivalent, all of the following conditions must
                     * be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class JobMediaSheets.
                     * <LI>
                     * This job media sheets attribute's value and <CODE>object</CODE>'s
                     * value are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this job media
                     *           sheets attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class JobMediaSheets and any vendor-defined subclasses, the category
                     * is class JobMediaSheets itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class JobMediaSheets and any vendor-defined subclasses, the
                     * category name is <CODE>"job-media-sheets"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
