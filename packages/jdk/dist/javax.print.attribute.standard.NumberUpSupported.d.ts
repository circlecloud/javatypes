declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class NumberUpSupported is a printing attribute class, a set of integers,
                 * that gives the supported values for a {@link NumberUp NumberUp} attribute.
                 * <P>
                 * <B>IPP Compatibility:</B> The NumberUpSupported attribute's canonical array
                 * form gives the lower and upper bound for each range of number-up to be
                 * included in an IPP "number-up-supported" attribute. See class {@link
                 * javax.print.attribute.SetOfIntegerSyntax SetOfIntegerSyntax} for an
                 * explanation of canonical array form. The category name returned by
                 * <CODE>getName()</CODE> gives the IPP attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class NumberUpSupported extends javax.print.attribute.SetOfIntegerSyntax implements javax.print.attribute.SupportedValuesAttribute {
                    /**
                     * Construct a new number up supported attribute with the given members.
                     * The supported values for NumberUp are specified in "array form;" see
                     * class
                     * {@link javax.print.attribute.SetOfIntegerSyntax SetOfIntegerSyntax}
                     * for an explanation of array form.
                     * @param members  Set members in array form.
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>members</CODE> is null or
                     *      any element of <CODE>members</CODE> is null.
                     * @exception IllegalArgumentException
                     *      (unchecked exception) Thrown if any element of
                     *    <CODE>members</CODE> is not a length-one or length-two array. Also
                     *     thrown if <CODE>members</CODE> is a zero-length array or if any
                     *     member of the set is less than 1.
                     */
                    // @ts-ignore
                    constructor(members: number /*int*/[][])
                    /**
                     * Construct a new number up supported attribute containing a single
                     * integer. That is, only the one value of NumberUp is supported.
                     * @param member  Set member.
                     * @exception IllegalArgumentException
                     *      (Unchecked exception) Thrown if <CODE>member</CODE> is less than
                     *      1.
                     */
                    // @ts-ignore
                    constructor(member: number /*int*/)
                    /**
                     * Construct a new number up supported attribute containing a single range
                     * of integers. That is, only those values of NumberUp in the one range are
                     * supported.
                     * @param lowerBound  Lower bound of the range.
                     * @param upperBound  Upper bound of the range.
                     * @exception IllegalArgumentException
                     *      (Unchecked exception) Thrown if a null range is specified or if a
                     *      non-null range is specified with <CODE>lowerBound</CODE> less than
                     *      1.
                     */
                    // @ts-ignore
                    constructor(lowerBound: number /*int*/, upperBound: number /*int*/)
                    /**
                     * Returns whether this number up supported attribute is equivalent to the
                     * passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class NumberUpSupported.
                     * <LI>
                     * This number up supported attribute's members and <CODE>object</CODE>'s
                     * members are the same.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this number up
                     *           supported attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class NumberUpSupported, the
                     * category is class NumberUpSupported itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class NumberUpSupported, the
                     * category name is <CODE>"number-up-supported"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
