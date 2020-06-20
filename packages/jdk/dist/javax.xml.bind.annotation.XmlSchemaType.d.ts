declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Maps a Java type to a simple schema built-in type.
                 * <p> <b>Usage</b> </p>
                 * <p>
                 * <tt>@XmlSchemaType</tt> annotation can be used with the following program
                 * elements:
                 * <ul>
                 * <li> a JavaBean property </li>
                 * <li> field </li>
                 * <li> package</li>
                 * </ul>
                 * <p> <tt>@XmlSchemaType</tt> annotation defined for Java type
                 * applies to all references to the Java type from a property/field.
                 * A <tt>@XmlSchemaType</tt> annotation specified on the
                 * property/field overrides the <tt>@XmlSchemaType</tt> annotation
                 * specified at the package level.
                 * <p> This annotation can be used with the following annotations:
                 * {@link XmlElement},  {@link XmlAttribute}.
                 * <p>
                 * <b>Example 1: </b> Customize mapping of XMLGregorianCalendar on the
                 * field.
                 * <pre>
                 * //Example: Code fragment
                 * public class USPrice {
                 * &#64;XmlElement
                 * &#64;XmlSchemaType(name="date")
                 * public XMLGregorianCalendar date;
                 * }
                 * &lt;!-- Example: Local XML Schema element -->
                 * &lt;xs:complexType name="USPrice"/>
                 * &lt;xs:sequence>
                 * &lt;xs:element name="date" type="xs:date"/>
                 * &lt;/sequence>
                 * &lt;/xs:complexType>
                 * </pre>
                 * <p> <b> Example 2: </b> Customize mapping of XMLGregorianCalendar at package
                 * level </p>
                 * <pre>
                 * package foo;
                 * &#64;javax.xml.bind.annotation.XmlSchemaType(
                 * name="date", type=javax.xml.datatype.XMLGregorianCalendar.class)
                 * }
                 * </pre>
                 * @since JAXB2.0
                 */
                // @ts-ignore
                class XmlSchemaType implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
