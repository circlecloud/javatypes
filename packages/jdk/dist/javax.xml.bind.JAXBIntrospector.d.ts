declare namespace javax {
    namespace xml {
        namespace bind {
            /**
             * Provide access to JAXB xml binding data for a JAXB object.
             * <p>
             * Intially, the intent of this class is to just conceptualize how
             * a JAXB application developer can access xml binding information,
             * independent if binding model is java to schema or schema to java.
             * Since accessing the XML element name related to a JAXB element is
             * a highly requested feature, demonstrate access to this
             * binding information.
             * The factory method to get a <code>JAXBIntrospector</code> instance is
             * {@link JAXBContext#createJAXBIntrospector()}.
             * @see JAXBContext#createJAXBIntrospector()
             * @since JAXB2.0
             */
            // @ts-ignore
            abstract class JAXBIntrospector extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * <p>Return true if <code>object</code> represents a JAXB element.</p>
                 * <p>Parameter <code>object</code> is a JAXB element for following cases:
                 * <ol>
                 * <li>It is an instance of <code>javax.xml.bind.JAXBElement</code>.</li>
                 * <li>The class of <code>object</code> is annotated with
                 * <code>&#64XmlRootElement</code>.
                 * </li>
                 * </ol>
                 * @see #getElementName(Object)
                 */
                // @ts-ignore
                public abstract isElement(object: java.lang.Object | any): boolean
                /**
                 * <p>Get xml element qname for <code>jaxbElement</code>.</p>
                 * @param jaxbElement is an object that {#link #isElement(Object)} returned true.
                 * @return xml element qname associated with jaxbElement;
                 *          null if <code>jaxbElement</code> is not a JAXB Element.
                 */
                // @ts-ignore
                public abstract getElementName(jaxbElement: java.lang.Object | any): javax.xml.namespace.QName
                /**
                 * <p>Get the element value of a JAXB element.</p>
                 * <p>Convenience method to abstract whether working with either
                 * a javax.xml.bind.JAXBElement instance or an instance of
                 * <tt>&#64XmlRootElement</tt> annotated Java class.</p>
                 * @param jaxbElement  object that #isElement(Object) returns true.
                 * @return The element value of the <code>jaxbElement</code>.
                 */
                // @ts-ignore
                public static getValue(jaxbElement: java.lang.Object | any): any
            }
        }
    }
}
