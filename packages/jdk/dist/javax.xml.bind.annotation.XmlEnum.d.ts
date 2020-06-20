declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * <p>
                 * Maps an enum type {@link Enum} to XML representation.
                 * <p>This annotation, together with {@link XmlEnumValue} provides a
                 * mapping of enum type to XML representation.
                 * <p> <b>Usage</b> </p>
                 * <p>
                 * The <tt>@XmlEnum</tt> annotation can be used with the
                 * following program elements:
                 * <ul>
                 * <li>enum type</li>
                 * </ul>
                 * <p> The usage is subject to the following constraints:
                 * <ul>
                 * <li> This annotation can be used the following other annotations:
                 * {@link XmlType},
                 * {@link XmlRootElement} </li>
                 * </ul>
                 * <p>See "Package Specification" in javax.xml.bind.package javadoc for
                 * additional common information </p>
                 * <p>An enum type is mapped to a schema simple type with enumeration
                 * facets. The schema type is derived from the Java type to which
                 * <tt>@XmlEnum.value()</tt>. Each enum constant <tt>@XmlEnumValue</tt>
                 * must have a valid lexical representation for the type
                 * <tt>@XmlEnum.value()</tt> .
                 * <p><b>Examples:</b> See examples in {@link XmlEnumValue}
                 * @since JAXB2.0
                 */
                // @ts-ignore
                class XmlEnum implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
