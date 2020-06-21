declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class DateTimeAtProcessing is a printing attribute class, a date-time
                 * attribute, that indicates the date and time at which the Print Job first
                 * began processing.
                 * <P>
                 * To construct a DateTimeAtProcessing attribute from separate values of the
                 * year, month, day, hour, minute, and so on, use a {@link java.util.Calendar
                 * Calendar} object to construct a {@link java.util.Date Date} object, then use
                 * the {@link java.util.Date Date} object to construct the DateTimeAtProcessing
                 * attribute. To convert a DateTimeAtProcessing attribute to separate values of
                 * the year, month, day, hour, minute, and so on, create a {@link
                 * java.util.Calendar Calendar} object and set it to the {@link java.util.Date
                 * Date} from the DateTimeAtProcessing attribute.
                 * <P>
                 * <B>IPP Compatibility:</B> The information needed to construct an IPP
                 * "date-time-at-processing" attribute can be obtained as described above. The
                 * category name returned by <CODE>getName()</CODE> gives the IPP attribute
                 * name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class DateTimeAtProcessing extends javax.print.attribute.DateTimeSyntax implements javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new date-time at processing attribute with the given {@link
                     * java.util.Date Date} value.
                     * @param dateTime  {#link java.util.Date Date} value.
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>dateTime</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(dateTime: java.util.Date)
                    /**
                     * Returns whether this date-time at processing attribute is equivalent to
                     * the passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class DateTimeAtProcessing.
                     * <LI>
                     * This date-time at processing attribute's {@link java.util.Date Date}
                     * value and <CODE>object</CODE>'s {@link java.util.Date Date} value
                     * are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this date-time
                     *           at processing attribute, false otherwise.
                     */
                    // @ts-ignore
                    public equals(object: java.lang.Object | any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class DateTimeAtProcessing, the category is class
                     * DateTimeAtProcessing itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    public getCategory(): java.lang.Class<any>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class DateTimeAtProcessing, the category name is
                     * <CODE>"date-time-at-processing"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
