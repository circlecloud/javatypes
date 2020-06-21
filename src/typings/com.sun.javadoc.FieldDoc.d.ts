declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a field in a java class.
             * @see MemberDoc
             * @since 1.2
             * @author Robert Field
             */
            // @ts-ignore
            interface FieldDoc extends com.sun.javadoc.MemberDoc {
                /**
                 * Get type of this field.
                 */
                // @ts-ignore
                type(): com.sun.javadoc.Type
                /**
                 * Return true if this field is transient
                 */
                // @ts-ignore
                isTransient(): boolean
                /**
                 * Return true if this field is volatile
                 */
                // @ts-ignore
                isVolatile(): boolean
                /**
                 * Return the serialField tags in this FieldDoc item.
                 * @return an array of <tt>SerialFieldTag</tt> objects containing
                 *          all <code>#serialField</code> tags.
                 */
                // @ts-ignore
                serialFieldTags(): com.sun.javadoc.SerialFieldTag[]
                /**
                 * Get the value of a constant field.
                 * @return the value of a constant field. The value is
                 *  automatically wrapped in an object if it has a primitive type.
                 *  If the field is not constant, returns null.
                 */
                // @ts-ignore
                constantValue(): any
                /**
                 * Get the value of a constant field.
                 * @return the text of a Java language expression whose value
                 *  is the value of the constant. The expression uses no identifiers
                 *  other than primitive literals. If the field is
                 *  not constant, returns null.
                 */
                // @ts-ignore
                constantValueExpression(): string
            }
        }
    }
}
