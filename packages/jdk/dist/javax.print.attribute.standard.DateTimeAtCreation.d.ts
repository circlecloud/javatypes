declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class DateTimeAtCreation is a printing attribute class, a date-time
                 * attribute, that indicates the date and time at which the Print Job was
                 * created.
                 * <P>
                 * To construct a DateTimeAtCreation attribute from separate values of the year,
                 * month, day, hour, minute, and so on, use a {@link java.util.Calendar
                 * Calendar} object to construct a {@link java.util.Date Date} object, then use
                 * the {@link java.util.Date Date} object to construct the DateTimeAtCreation
                 * attribute. To convert a DateTimeAtCreation attribute to separate values of
                 * the year, month, day, hour, minute, and so on, create a {@link
                 * java.util.Calendar Calendar} object and set it to the {@link java.util.Date
                 * Date} from the DateTimeAtCreation attribute.
                 * <P>
                 * <B>IPP Compatibility:</B> The information needed to construct an IPP
                 * "date-time-at-creation" attribute can be obtained as described above. The
                 * category name returned by <CODE>getName()</CODE> gives the IPP attribute
                 * name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class DateTimeAtCreation extends javax.print.attribute.DateTimeSyntax implements javax.print.attribute.PrintJobAttribute {
                    /**
                     * Construct a new date-time at creation attribute with the given {@link
                     * java.util.Date Date} value.
                     * @param dateTime  {#link java.util.Date Date} value.
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>dateTime</CODE> is null.
                     */
                    // @ts-ignore
                    constructor(dateTime: java.util.Date)
                    /**
                     * Returns whether this date-time at creation attribute is equivalent to
                     * the passed in object. To be equivalent, all of the following conditions
                     * must be true:
                     * <OL TYPE=1>
                     * <LI>
                     * <CODE>object</CODE> is not null.
                     * <LI>
                     * <CODE>object</CODE> is an instance of class DateTimeAtCreation.
                     * <LI>
                     * This date-time at creation attribute's {@link java.util.Date Date} value
                     * and <CODE>object</CODE>'s {@link java.util.Date Date} value are equal.
                     * </OL>
                     * @param object  Object to compare to.
                     * @return True if <CODE>object</CODE> is equivalent to this date-time
                     *           at creation attribute, false otherwise.
                     */
                    // @ts-ignore
                    equals(object: any): boolean
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class DateTimeAtCreation, the category is class
                     * DateTimeAtCreation itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class DateTimeAtCreation, the category name is
                     * <CODE>"date-time-at-creation"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                }
            }
        }
    }
}
