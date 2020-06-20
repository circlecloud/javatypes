declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Generates a wrapper element around XML representation.
                 * This is primarily intended to be used to produce a wrapper
                 * XML element around collections. The annotation therefore supports
                 * two forms of serialization shown below.
                 * <pre>
                 * //Example: code fragment
                 * int[] names;
                 * // XML Serialization Form 1 (Unwrapped collection)
                 * &lt;names> ... &lt;/names>
                 * &lt;names> ... &lt;/names>
                 * // XML Serialization Form 2 ( Wrapped collection )
                 * &lt;wrapperElement>
                 * &lt;names> value-of-item &lt;/names>
                 * &lt;names> value-of-item &lt;/names>
                 * ....
                 * &lt;/wrapperElement>
                 * </pre>
                 * <p> The two serialized XML forms allow a null collection to be
                 * represented either by absence or presence of an element with a
                 * nillable attribute.
                 * <p> <b>Usage</b> </p>
                 * <p>
                 * The <tt>@XmlElementWrapper</tt> annotation can be used with the
                 * following program elements:
                 * <ul>
                 * <li> JavaBean property </li>
                 * <li> non static, non transient field </li>
                 * </ul>
                 * <p>The usage is subject to the following constraints:
                 * <ul>
                 * <li> The property must be a collection property </li>
                 * <li> This annotation can be used with the following annotations:
                 * {@link XmlElement},
                 * {@link XmlElements},
                 * {@link XmlElementRef},
                 * {@link XmlElementRefs},
                 * {@link XmlJavaTypeAdapter}.</li>
                 * </ul>
                 * <p>See "Package Specification" in javax.xml.bind.package javadoc for
                 * additional common information.</p>
                 * @author <ul><li>Kohsuke Kawaguchi, Sun Microsystems, Inc.</li><li>Sekhar Vajjhala, Sun Microsystems, Inc.</li></ul>
                 * @see XmlElement
                 * @see XmlElements
                 * @see XmlElementRef
                 * @see XmlElementRefs
                 * @since JAXB2.0
                 */
                // @ts-ignore
                class XmlElementWrapper implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
