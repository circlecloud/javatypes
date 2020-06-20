declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class AttributeSetUtilities provides static methods for manipulating
             * AttributeSets.
             * <ul>
             * <li>Methods for creating unmodifiable and synchronized views of attribute
             * sets.
             * <li>operations useful for building
             * implementations of interface {@link AttributeSet AttributeSet}
             * </ul>
             * <P>
             * An <B>unmodifiable view</B> <I>U</I> of an AttributeSet <I>S</I> provides a
             * client with "read-only" access to <I>S</I>. Query operations on <I>U</I>
             * "read through" to <I>S</I>; thus, changes in <I>S</I> are reflected in
             * <I>U</I>. However, any attempt to modify <I>U</I>,
             * results in an UnmodifiableSetException.
             * The unmodifiable view object <I>U</I> will be serializable if the
             * attribute set object <I>S</I> is serializable.
             * <P>
             * A <B>synchronized view</B> <I>V</I> of an attribute set <I>S</I> provides a
             * client with synchronized (multiple thread safe) access to <I>S</I>. Each
             * operation of <I>V</I> is synchronized using <I>V</I> itself as the lock
             * object and then merely invokes the corresponding operation of <I>S</I>. In
             * order to guarantee mutually exclusive access, it is critical that all
             * access to <I>S</I> is accomplished through <I>V</I>. The synchronized view
             * object <I>V</I> will be serializable if the attribute set object <I>S</I>
             * is serializable.
             * <P>
             * As mentioned in the package description of javax.print, a null reference
             * parameter to methods is
             * incorrect unless explicitly documented on the method as having a meaningful
             * interpretation.  Usage to the contrary is incorrect coding and may result in
             * a run time exception either immediately
             * or at some later time. IllegalArgumentException and NullPointerException
             * are examples of typical and acceptable run time exceptions for such cases.
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class AttributeSetUtilities extends java.lang.Object {
                /**
                 * Creates an unmodifiable view of the given attribute set.
                 * @param attributeSet  Underlying attribute set.
                 * @return Unmodifiable view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null. Null is never a
                 */
                // @ts-ignore
                unmodifiableView(attributeSet: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
                /**
                 * Creates an unmodifiable view of the given doc attribute set.
                 * @param attributeSet  Underlying doc attribute set.
                 * @return Unmodifiable view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                unmodifiableView(attributeSet: javax.print.attribute.DocAttributeSet): javax.print.attribute.DocAttributeSet
                /**
                 * Creates an unmodifiable view of the given print request attribute set.
                 * @param attributeSet  Underlying print request attribute set.
                 * @return Unmodifiable view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                unmodifiableView(attributeSet: javax.print.attribute.PrintRequestAttributeSet): javax.print.attribute.PrintRequestAttributeSet
                /**
                 * Creates an unmodifiable view of the given print job attribute set.
                 * @param attributeSet  Underlying print job attribute set.
                 * @return Unmodifiable view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                unmodifiableView(attributeSet: javax.print.attribute.PrintJobAttributeSet): javax.print.attribute.PrintJobAttributeSet
                /**
                 * Creates an unmodifiable view of the given print service attribute set.
                 * @param attributeSet  Underlying print service attribute set.
                 * @return Unmodifiable view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                unmodifiableView(attributeSet: javax.print.attribute.PrintServiceAttributeSet): javax.print.attribute.PrintServiceAttributeSet
                /**
                 * Creates a synchronized view of the given attribute set.
                 * @param attributeSet  Underlying attribute set.
                 * @return Synchronized view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                synchronizedView(attributeSet: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
                /**
                 * Creates a synchronized view of the given doc attribute set.
                 * @param attributeSet  Underlying doc attribute set.
                 * @return Synchronized view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                synchronizedView(attributeSet: javax.print.attribute.DocAttributeSet): javax.print.attribute.DocAttributeSet
                /**
                 * Creates a synchronized view of the given print request attribute set.
                 * @param attributeSet  Underlying print request attribute set.
                 * @return Synchronized view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                synchronizedView(attributeSet: javax.print.attribute.PrintRequestAttributeSet): javax.print.attribute.PrintRequestAttributeSet
                /**
                 * Creates a synchronized view of the given print job attribute set.
                 * @param attributeSet  Underlying print job attribute set.
                 * @return Synchronized view of <CODE>attributeSet</CODE>.
                 * @exception NullPointerException
                 *      Thrown if <CODE>attributeSet</CODE> is null.
                 */
                // @ts-ignore
                synchronizedView(attributeSet: javax.print.attribute.PrintJobAttributeSet): javax.print.attribute.PrintJobAttributeSet
                /**
                 * Creates a synchronized view of the given print service attribute set.
                 * @param attributeSet  Underlying print service attribute set.
                 * @return Synchronized view of <CODE>attributeSet</CODE>.
                 */
                // @ts-ignore
                synchronizedView(attributeSet: javax.print.attribute.PrintServiceAttributeSet): javax.print.attribute.PrintServiceAttributeSet
                /**
                 * Verify that the given object is a {@link java.lang.Class Class} that
                 * implements the given interface, which is assumed to be interface {@link
                 * Attribute Attribute} or a subinterface thereof.
                 * @param object     Object to test.
                 * @param interfaceName  Interface the object must implement.
                 * @return If <CODE>object</CODE> is a {#link java.lang.Class Class}
                 *           that implements <CODE>interfaceName</CODE>,
                 *           <CODE>object</CODE> is returned downcast to type {@link
                 *           java.lang.Class Class}; otherwise an exception is thrown.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>object</CODE> is null.
                 * @exception ClassCastException
                 *      (unchecked exception) Thrown if <CODE>object</CODE> is not a
                 *      {#link java.lang.Class Class} that implements
                 *      <CODE>interfaceName</CODE>.
                 */
                // @ts-ignore
                verifyAttributeCategory(object: any, interfaceName: java.lang.Class<any>): java.lang.Class<?>
                /**
                 * Verify that the given object is an instance of the given interface, which
                 * is assumed to be interface {@link Attribute Attribute} or a subinterface
                 * thereof.
                 * @param object     Object to test.
                 * @param interfaceName  Interface of which the object must be an instance.
                 * @return If <CODE>object</CODE> is an instance of
                 *           <CODE>interfaceName</CODE>, <CODE>object</CODE> is returned
                 *           downcast to type {#link Attribute Attribute}; otherwise an
                 *           exception is thrown.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>object</CODE> is null.
                 * @exception ClassCastException
                 *      (unchecked exception) Thrown if <CODE>object</CODE> is not an
                 *      instance of <CODE>interfaceName</CODE>.
                 */
                // @ts-ignore
                verifyAttributeValue(object: any, interfaceName: java.lang.Class<any>): javax.print.attribute.Attribute
                /**
                 * Verify that the given attribute category object is equal to the
                 * category of the given attribute value object. If so, this method
                 * returns doing nothing. If not, this method throws an exception.
                 * @param category   Attribute category to test.
                 * @param attribute  Attribute value to test.
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if the <CODE>category</CODE> is
                 *      null or if the <CODE>attribute</CODE> is null.
                 * @exception IllegalArgumentException
                 *      (unchecked exception) Thrown if the <CODE>category</CODE> is not
                 *      equal to the category of the <CODE>attribute</CODE>.
                 */
                // @ts-ignore
                verifyCategoryForValue(category: java.lang.Class<any>, attribute: javax.print.attribute.Attribute): void
            }
        }
    }
}
