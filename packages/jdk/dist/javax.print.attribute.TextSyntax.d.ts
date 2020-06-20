declare namespace javax {
    namespace print {
        namespace attribute {
            /**
             * Class TextSyntax is an abstract base class providing the common
             * implementation of all attributes whose value is a string. The text attribute
             * includes a locale to indicate the natural language. Thus, a text attribute
             * always represents a localized string. Once constructed, a text attribute's
             * value is immutable.
             * <P>
             * @author David Mendenhall
             * @author Alan Kaminsky
             */
            // @ts-ignore
            class TextSyntax extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                /**
                 * Constructs a TextAttribute with the specified string and locale.
                 * @param value   Text string.
                 * @param locale  Natural language of the text string. null
                 *  is interpreted to mean the default locale for as returned
                 *  by <code>Locale.getDefault()</code>
                 * @exception NullPointerException
                 *      (unchecked exception) Thrown if <CODE>value</CODE> is null.
                 */
                // @ts-ignore
                constructor(value: string, locale: java.util.Locale)
                /**
                 * Returns this text attribute's text string.
                 * @return the text string.
                 */
                // @ts-ignore
                getValue(): java.lang.String
                /**
                 * Returns this text attribute's text string's natural language (locale).
                 * @return the locale
                 */
                // @ts-ignore
                getLocale(): java.util.Locale
                /**
                 * Returns a hashcode for this text attribute.
                 * @return A hashcode value for this object.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns whether this text attribute is equivalent to the passed in
                 * object. To be equivalent, all of the following conditions must be true:
                 * <OL TYPE=1>
                 * <LI>
                 * <CODE>object</CODE> is not null.
                 * <LI>
                 * <CODE>object</CODE> is an instance of class TextSyntax.
                 * <LI>
                 * This text attribute's underlying string and <CODE>object</CODE>'s
                 * underlying string are equal.
                 * <LI>
                 * This text attribute's locale and <CODE>object</CODE>'s locale are
                 * equal.
                 * </OL>
                 * @param object  Object to compare to.
                 * @return True if <CODE>object</CODE> is equivalent to this text
                 *           attribute, false otherwise.
                 */
                // @ts-ignore
                equals(object: any): boolean
                /**
                 * Returns a String identifying this text attribute. The String is
                 * the attribute's underlying text string.
                 * @return A String identifying this object.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
