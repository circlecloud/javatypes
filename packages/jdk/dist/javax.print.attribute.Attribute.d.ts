declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Interface Attribute is the base interface implemented by any and every
             * printing attribute class to indicate that the class represents a
             * printing attribute. All printing attributes are serializable.
             * <P>
             * @author David Mendenhall
             * @author Alan Kaminsky
             */
            // @ts-ignore
            interface Attribute extends java.io.Serializable {
                /**
                 * Get the printing attribute class which is to be used as the "category"
                 * for this printing attribute value when it is added to an attribute set.
                 * @return Printing attribute class (category), an instance of class
                 *           {#link java.lang.Class java.lang.Class}.
                 */
                // @ts-ignore
                getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                /**
                 * Get the name of the category of which this attribute value is an
                 * instance.
                 * <P>
                 * <I>Note:</I> This method is intended to provide a default, nonlocalized
                 * string for the attribute's category. If two attribute objects return the
                 * same category from the <CODE>getCategory()</CODE> method, they should
                 * return the same name from the <CODE>getName()</CODE> method.
                 * @return Attribute category name.
                 */
                // @ts-ignore
                getName(): java.lang.String
            }
        }
    }
}
