declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Maps an enum constant in {@link Enum} type to XML representation.
                 * <p> <b>Usage</b> </p>
                 * <p> The <tt>@XmlEnumValue</tt> annotation can be used with the
                 * following program elements:
                 * <ul>
                 * <li>enum constant</li>
                 * </ul>
                 * <p>See "Package Specification" in javax.xml.bind.package javadoc for
                 * additional common information.</p>
                 * <p>This annotation, together with {@link XmlEnum} provides a
                 * mapping of enum type to XML representation.
                 * <p>An enum type is mapped to a schema simple type with enumeration
                 * facets. The schema type is derived from the Java type specified in
                 * <tt>@XmlEnum.value()</tt>. Each enum constant <tt>@XmlEnumValue</tt>
                 * must have a valid lexical representation for the type
                 * <tt>@XmlEnum.value()</tt>
                 * <p> In the absence of this annotation, {@link Enum#name()} is used
                 * as the XML representation.
                 * <p> <b>Example 1: </b>Map enum constant name -> enumeration facet</p>
                 * <pre>
                 * //Example: Code fragment
                 * &#64;XmlEnum(String.class)
                 * public enum Card { CLUBS, DIAMONDS, HEARTS, SPADES }
                 * &lt;!-- Example: XML Schema fragment -->
                 * &lt;xs:simpleType name="Card">
                 * &lt;xs:restriction base="xs:string"/>
                 * &lt;xs:enumeration value="CLUBS"/>
                 * &lt;xs:enumeration value="DIAMONDS"/>
                 * &lt;xs:enumeration value="HEARTS"/>
                 * &lt;xs:enumeration value="SPADES"/>
                 * &lt;/xs:simpleType>
                 * </pre>
                 * <p><b>Example 2: </b>Map enum constant name(value) -> enumeration facet </p>
                 * <pre>
                 * //Example: code fragment
                 * &#64;XmlType
                 * &#64;XmlEnum(Integer.class)
                 * public enum Coin {
                 * &#64;XmlEnumValue("1") PENNY(1),
                 * &#64;XmlEnumValue("5") NICKEL(5),
                 * &#64;XmlEnumValue("10") DIME(10),
                 * &#64;XmlEnumValue("25") QUARTER(25) }
                 * &lt;!-- Example: XML Schema fragment -->
                 * &lt;xs:simpleType name="Coin">
                 * &lt;xs:restriction base="xs:int">
                 * &lt;xs:enumeration value="1"/>
                 * &lt;xs:enumeration value="5"/>
                 * &lt;xs:enumeration value="10"/>
                 * &lt;xs:enumeration value="25"/>
                 * &lt;/xs:restriction>
                 * &lt;/xs:simpleType>
                 * </pre>
                 * <p><b>Example 3: </b>Map enum constant name -> enumeration facet </p>
                 * <pre>
                 * //Code fragment
                 * &#64;XmlType
                 * &#64;XmlEnum(Integer.class)
                 * public enum Code {
                 * &#64;XmlEnumValue("1") ONE,
                 * &#64;XmlEnumValue("2") TWO;
                 * }
                 * &lt;!-- Example: XML Schema fragment -->
                 * &lt;xs:simpleType name="Code">
                 * &lt;xs:restriction base="xs:int">
                 * &lt;xs:enumeration value="1"/>
                 * &lt;xs:enumeration value="2"/>
                 * &lt;/xs:restriction>
                 * &lt;/xs:simpleType>
                 * </pre>
                 * @since JAXB 2.0
                 */
                // @ts-ignore
                abstract class XmlEnumValue implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
