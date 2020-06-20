declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class JobImpressionsSupported is a printing attribute class, a set of
                 * integers, that gives the supported values for a {@link JobImpressions
                 * JobImpressions} attribute. It is restricted to a single contiguous range of
                 * integers; multiple non-overlapping ranges are not allowed. This gives the
                 * lower and upper bounds of the total sizes of print jobs in number of
                 * impressions that the printer will accept.
                 * <P>
                 * <B>IPP Compatibility:</B> The JobImpressionsSupported attribute's canonical
                 * array form gives the lower and upper bound for the range of values to be
                 * included in an IPP "job-impressions-supported" attribute. See class {@link
                 * javax.print.attribute.SetOfIntegerSyntax SetOfIntegerSyntax} for an
                 * explanation of canonical array form. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class JobImpressionsSupported extends javax.print.attribute.SetOfIntegerSyntax implements javax.print.attribute.SupportedValuesAttribute {
                    /**
                     * Construct a new job impressions supported attribute containing a single
                     * range of integers. That is, only those values of JobImpressions in the
                     * one range are supported.
                     * @param lowerBound  Lower bound of the range.
                     * @param upperBound  Upper bound of the range.
                     * @exception IllegalArgumentException
                     *      (Unchecked exception) Thrown if a null range is specified or if a
                     *      non-null range is specified with <CODE>lowerBound</CODE> less than
                     *      0.
                     */
                    // @ts-ignore
                    constructor(lowerBound: number /*int*/, upperBound: number /*int*/)
                    /**
                     * Returns whether this job impressions supported attribute is equivalent
                     * to the passed in object. To be equivalent, all of the following
                     * conditions must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class JobImpressionsSupported.
                     * <LI>
                     * This job impressions supported attribute's members and
                     * <CODE>object</CODE>'s members are the same.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this job
                     *           impressions supported attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class JobImpressionsSupported, the category is class
                     * JobImpressionsSupported itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class JobImpressionsSupported, the category name is
                     * <CODE>"job-impressions-supported"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
