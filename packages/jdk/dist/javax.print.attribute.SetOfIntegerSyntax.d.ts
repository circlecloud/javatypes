declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class SetOfIntegerSyntax is an abstract base class providing the common
             * implementation of all attributes whose value is a set of nonnegative
             * integers. This includes attributes whose value is a single range of integers
             * and attributes whose value is a set of ranges of integers.
             * <P>
             * You can construct an instance of SetOfIntegerSyntax by giving it in "string
             * form." The string consists of zero or more comma-separated integer groups.
             * Each integer group consists of either one integer, two integers separated by
             * a hyphen (<CODE>-</CODE>), or two integers separated by a colon
             * (<CODE>:</CODE>). Each integer consists of one or more decimal digits
             * (<CODE>0</CODE> through <CODE>9</CODE>). Whitespace characters cannot
             * appear within an integer but are otherwise ignored. For example:
             * <CODE>""</CODE>, <CODE>"1"</CODE>, <CODE>"5-10"</CODE>, <CODE>"1:2,
             * 4"</CODE>.
             * <P>
             * You can also construct an instance of SetOfIntegerSyntax by giving it in
             * "array form." Array form consists of an array of zero or more integer groups
             * where each integer group is a length-1 or length-2 array of
             * <CODE>int</CODE>s; for example, <CODE>int[0][]</CODE>,
             * <CODE>int[][]{{1}}</CODE>, <CODE>int[][]{{5,10}}</CODE>,
             * <CODE>int[][]{{1,2},{4}}</CODE>.
             * <P>
             * In both string form and array form, each successive integer group gives a
             * range of integers to be included in the set. The first integer in each group
             * gives the lower bound of the range; the second integer in each group gives
             * the upper bound of the range; if there is only one integer in the group, the
             * upper bound is the same as the lower bound. If the upper bound is less than
             * the lower bound, it denotes a null range (no values). If the upper bound is
             * equal to the lower bound, it denotes a range consisting of a single value. If
             * the upper bound is greater than the lower bound, it denotes a range
             * consisting of more than one value. The ranges may appear in any order and are
             * allowed to overlap. The union of all the ranges gives the set's contents.
             * Once a SetOfIntegerSyntax instance is constructed, its value is immutable.
             * <P>
             * The SetOfIntegerSyntax object's value is actually stored in "<I>canonical</I>
             * array form." This is the same as array form, except there are no null ranges;
             * the members of the set are represented in as few ranges as possible (i.e.,
             * overlapping ranges are coalesced); the ranges appear in ascending order; and
             * each range is always represented as a length-two array of <CODE>int</CODE>s
             * in the form {lower bound, upper bound}. An empty set is represented as a
             * zero-length array.
             * <P>
             * Class SetOfIntegerSyntax has operations to return the set's members in
             * canonical array form, to test whether a given integer is a member of the
             * set, and to iterate through the members of the set.
             * <P>
             * @author David Mendenhall
             * @author Alan Kaminsky
             */
            // @ts-ignore
            abstract class SetOfIntegerSyntax extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                /**
                 * Construct a new set-of-integer attribute with the given members in
                 * string form.
                 * @param members  Set members in string form. If null, an empty set is
                 *                      constructed.
                 * @exception IllegalArgumentException
                 *      (Unchecked exception) Thrown if <CODE>members</CODE> does not
                 *     obey  the proper syntax.
                 */
                // @ts-ignore
                constructor(members: java.lang.String | string)
                /**
                 * Construct a new set-of-integer attribute with the given members in
                 * array form.
                 * @param members  Set members in array form. If null, an empty set is
                 *                      constructed.
                 * @exception NullPointerException
                 *      (Unchecked exception) Thrown if any element of
                 *      <CODE>members</CODE> is null.
                 * @exception IllegalArgumentException
                 *      (Unchecked exception) Thrown if any element of
                 *      <CODE>members</CODE> is not a length-one or length-two array or if
                 *      any non-null range in <CODE>members</CODE> has a lower bound less
                 *      than zero.
                 */
                // @ts-ignore
                constructor(members: number /*int*/[][])
                /**
                 * Construct a new set-of-integer attribute containing a single integer.
                 * @param member  Set member.
                 * @exception IllegalArgumentException
                 *      (Unchecked exception) Thrown if <CODE>member</CODE> is less than
                 *      zero.
                 */
                // @ts-ignore
                constructor(member: number /*int*/)
                /**
                 * Construct a new set-of-integer attribute containing a single range of
                 * integers. If the lower bound is greater than the upper bound (a null
                 * range), an empty set is constructed.
                 * @param lowerBound  Lower bound of the range.
                 * @param upperBound  Upper bound of the range.
                 * @exception IllegalArgumentException
                 *      (Unchecked exception) Thrown if the range is non-null and
                 *      <CODE>lowerBound</CODE> is less than zero.
                 */
                // @ts-ignore
                constructor(lowerBound: number /*int*/, upperBound: number /*int*/)
                /**
                 * Obtain this set-of-integer attribute's members in canonical array form.
                 * The returned array is "safe;" the client may alter it without affecting
                 * this set-of-integer attribute.
                 * @return This set-of-integer attribute's members in canonical array form.
                 */
                // @ts-ignore
                public getMembers(): number /*int*/[][]
                /**
                 * Determine if this set-of-integer attribute contains the given value.
                 * @param x  Integer value.
                 * @return True if this set-of-integer attribute contains the value
                 *           <CODE>x</CODE>, false otherwise.
                 */
                // @ts-ignore
                public contains(x: number /*int*/): boolean
                /**
                 * Determine if this set-of-integer attribute contains the given integer
                 * attribute's value.
                 * @param attribute  Integer attribute.
                 * @return True if this set-of-integer attribute contains
                 *           <CODE>theAttribute</CODE>'s value, false otherwise.
                 */
                // @ts-ignore
                public contains(attribute: javax.print.attribute.IntegerSyntax): boolean
                /**
                 * Determine the smallest integer in this set-of-integer attribute that is
                 * greater than the given value. If there are no integers in this
                 * set-of-integer attribute greater than the given value, <CODE>-1</CODE> is
                 * returned. (Since a set-of-integer attribute can only contain nonnegative
                 * values, <CODE>-1</CODE> will never appear in the set.) You can use the
                 * <CODE>next()</CODE> method to iterate through the integer values in a
                 * set-of-integer attribute in ascending order, like this:
                 * <PRE>
                 * SetOfIntegerSyntax attribute = . . .;
                 * int i = -1;
                 * while ((i = attribute.next (i)) != -1)
                 * {
                 * foo (i);
                 * }
                 * </PRE>
                 * @param x  Integer value.
                 * @return The smallest integer in this set-of-integer attribute that is
                 *           greater than <CODE>x</CODE>, or <CODE>-1</CODE> if no integer in
                 *           this set-of-integer attribute is greater than <CODE>x</CODE>.
                 */
                // @ts-ignore
                public next(x: number /*int*/): number /*int*/
                /**
                 * Returns whether this set-of-integer attribute is equivalent to the passed
                 * in object. To be equivalent, all of the following conditions must be
                 * true:
                 * <OL TYPE=1>
                 * <LI>
                 * <CODE>object</CODE> is not null.
                 * <LI>
                 * <CODE>object</CODE> is an instance of class SetOfIntegerSyntax.
                 * <LI>
                 * This set-of-integer attribute's members and <CODE>object</CODE>'s
                 * members are the same.
                 * </OL>
                 * @param object  Object to compare to.
                 * @return True if <CODE>object</CODE> is equivalent to this
                 *           set-of-integer attribute, false otherwise.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object | any): boolean
                /**
                 * Returns a hash code value for this set-of-integer attribute. The hash
                 * code is the sum of the lower and upper bounds of the ranges in the
                 * canonical array form, or 0 for an empty set.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns a string value corresponding to this set-of-integer attribute.
                 * The string value is a zero-length string if this set is empty. Otherwise,
                 * the string value is a comma-separated list of the ranges in the canonical
                 * array form, where each range is represented as <CODE>"<I>i</I>"</CODE> if
                 * the lower bound equals the upper bound or
                 * <CODE>"<I>i</I>-<I>j</I>"</CODE> otherwise.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
