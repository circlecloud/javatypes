declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class HashPrintRequestAttributeSet inherits its implementation from
             * class {@link HashAttributeSet HashAttributeSet} and enforces the
             * semantic restrictions of interface
             * {@link PrintRequestAttributeSet PrintRequestAttributeSet}.
             * <P>
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class HashPrintRequestAttributeSet extends javax.print.attribute.HashAttributeSet implements javax.print.attribute.PrintRequestAttributeSet, java.io.Serializable {
                /**
                 * Construct a new, empty print request attribute set.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new print request attribute set,
                 * initially populated with the given value.
                 * @param attribute  Attribute value to add to the set.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>attribute</CODE> is null.
                 */
                // @ts-ignore
                constructor(attribute: javax.print.attribute.PrintRequestAttribute)
                /**
                 * Construct a new print request attribute set, initially populated with
                 * the values from the given array. The new attribute set is populated
                 * by adding the elements of <CODE>attributes</CODE> array to the set in
                 * sequence, starting at index 0. Thus, later array elements may replace
                 * earlier array elements if the array contains duplicate attribute
                 * values or attribute categories.
                 * @param attributes  Array of attribute values to add to the set.
                 *                      If null, an empty attribute set is constructed.
                 * @exception NullPointerException
                 *      (unchecked exception)
                 *  Thrown if any element of <CODE>attributes</CODE> is null.
                 */
                // @ts-ignore
                constructor(attributes: javax.print.attribute.PrintRequestAttribute[])
                /**
                 * Construct a new attribute set, initially populated with the
                 * values from the  given set where the members of the attribute set
                 * are restricted to the <code>(PrintRequestAttributeSe</code> interface.
                 * @param attributes set of attribute values to initialise the set. If
                 *                     null, an empty attribute set is constructed.
                 * @exception ClassCastException
                 *      (unchecked exception) Thrown if any element of
                 *  <CODE>attributes</CODE> is not an instance of
                 *  <CODE>(PrintRequestAttributeSe</CODE>.
                 */
                // @ts-ignore
                constructor(attributes: javax.print.attribute.PrintRequestAttributeSet)
            }
        }
    }
}
