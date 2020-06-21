declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class DateTimeSyntax is an abstract base class providing the common
             * implementation of all attributes whose value is a date and time.
             * <P>
             * Under the hood, a date-time attribute is stored as a value of class <code>
             * java.util.Date</code>. You can get a date-time attribute's Date value by
             * calling {@link #getValue() getValue()}. A date-time attribute's
             * Date value is established when it is constructed (see {@link
             * #DateTimeSyntax(Date) DateTimeSyntax(Date)}). Once
             * constructed, a date-time attribute's value is immutable.
             * <P>
             * To construct a date-time attribute from separate values of the year, month,
             * day, hour, minute, and so on, use a <code>java.util.Calendar</code>
             * object to construct a <code>java.util.Date</code> object, then use the
             * <code>java.util.Date</code> object to construct the date-time attribute.
             * To convert
             * a date-time attribute to separate values of the year, month, day, hour,
             * minute, and so on, create a <code>java.util.Calendar</code> object and
             * set it to the <code>java.util.Date</code> from the date-time attribute. Class
             * DateTimeSyntax stores its value in the form of a <code>java.util.Date
             * </code>
             * rather than a <code>java.util.Calendar</code> because it typically takes
             * less memory to store and less time to compare a <code>java.util.Date</code>
             * than a <code>java.util.Calendar</code>.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            abstract class DateTimeSyntax extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                /**
                 * Construct a new date-time attribute with the given
                 * <code>java.util.Date </code> value.
                 * @param value   <code>java.util.Date</code> value.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>theValue</CODE> is null.
                 */
                // @ts-ignore
                constructor(value: java.util.Date)
                /**
                 * Returns this date-time attribute's <code>java.util.Date</code>
                 * value.
                 * @return the Date.
                 */
                // @ts-ignore
                public getValue(): java.util.Date
                /**
                 * Returns whether this date-time attribute is equivalent to the passed in
                 * object. To be equivalent, all of the following conditions must be true:
                 * <OL TYPE=1>
                 * <LI>
                 * <CODE>object</CODE> is not null.
                 * <LI>
                 * <CODE>object</CODE> is an instance of class DateTimeSyntax.
                 * <LI>
                 * This date-time attribute's <code>java.util.Date</code> value and
                 * <CODE>object</CODE>'s <code>java.util.Date</code> value are
                 * equal. </OL>
                 * @param object  Object to compare to.
                 * @return True if <CODE>object</CODE> is equivalent to this date-time
                 *           attribute, false otherwise.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                /**
                 * Returns a hash code value for this date-time attribute. The hashcode is
                 * that of this attribute's <code>java.util.Date</code> value.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string value corresponding to this date-time attribute.
                 * The string value is just this attribute's
                 * <code>java.util.Date</code>  value
                 * converted to a string.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
