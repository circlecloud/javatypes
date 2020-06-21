declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A generic interface for a mutable collection of unique attributes.
             * Implementations will probably want to provide a constructor of the
             * form:<tt>
             * public XXXAttributeSet(ConstAttributeSet source);</tt>
             */
            // @ts-ignore
            interface MutableAttributeSet extends javax.swing.text.AttributeSet {
                /**
                 * Creates a new attribute set similar to this one except that it contains
                 * an attribute with the given name and value.  The object must be
                 * immutable, or not mutated by any client.
                 * @param name the name
                 * @param value the value
                 */
                // @ts-ignore
                addAttribute(name: java.lang.Object | any, value: java.lang.Object | any): void
                /**
                 * Creates a new attribute set similar to this one except that it contains
                 * the given attributes and values.
                 * @param attributes the set of attributes
                 */
                // @ts-ignore
                addAttributes(attributes: javax.swing.text.AttributeSet): void
                /**
                 * Removes an attribute with the given <code>name</code>.
                 * @param name the attribute name
                 */
                // @ts-ignore
                removeAttribute(name: java.lang.Object | any): void
                /**
                 * Removes an attribute set with the given <code>names</code>.
                 * @param names the set of names
                 */
                // @ts-ignore
                removeAttributes(names: java.util.Enumeration<any>): void
                /**
                 * Removes a set of attributes with the given <code>name</code>.
                 * @param attributes the set of attributes
                 */
                // @ts-ignore
                removeAttributes(attributes: javax.swing.text.AttributeSet): void
                /**
                 * Sets the resolving parent.  This is the set
                 * of attributes to resolve through if an attribute
                 * isn't defined locally.
                 * @param parent the parent
                 */
                // @ts-ignore
                setResolveParent(parent: javax.swing.text.AttributeSet): void
            }
        }
    }
}
