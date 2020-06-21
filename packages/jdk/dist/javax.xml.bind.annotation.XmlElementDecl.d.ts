declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Maps a factory method to a XML element.
                 * <p> <b>Usage</b> </p>
                 * The annotation creates a mapping between an XML schema element
                 * declaration and a <i> element factory method </i> that returns a
                 * JAXBElement instance representing the element
                 * declaration. Typically, the element factory method is generated
                 * (and annotated) from a schema into the ObjectFactory class in a
                 * Java package that represents the binding of the element
                 * declaration's target namespace. Thus, while the annotation syntax
                 * allows &#64;XmlElementDecl to be used on any method, semantically
                 * its use is restricted to annotation of element factory method.
                 * The usage is subject to the following constraints:
                 * <ul>
                 * <li> The class containing the element factory method annotated
                 * with &#64;XmlElementDecl must be marked with {@link
                 * XmlRegistry}. </li>
                 * <li> The element factory method must take one parameter
                 * assignable to {@link Object}.</li>
                 * </ul>
                 * <p><b>Example 1: </b>Annotation on a factory method
                 * <pre>
                 * // Example: code fragment
                 * &#64;XmlRegistry
                 * class ObjectFactory {
                 * &#64;XmlElementDecl(name="foo")
                 * JAXBElement&lt;String> createFoo(String s) { ... }
                 * }
                 * </pre>
                 * <pre>
                 * &lt;!-- XML input -->
                 * &lt;foo>string</foo>
                 * // Example: code fragment corresponding to XML input
                 * JAXBElement<String> o =
                 * (JAXBElement<String>)unmarshaller.unmarshal(aboveDocument);
                 * // print JAXBElement instance to show values
                 * System.out.println(o.getName());   // prints  "{}foo"
                 * System.out.println(o.getValue());  // prints  "string"
                 * System.out.println(o.getValue().getClass()); // prints "java.lang.String"
                 * &lt;!-- Example: XML schema definition -->
                 * &lt;xs:element name="foo" type="xs:string"/>
                 * </pre>
                 * <p><b>Example 2: </b> Element declaration with non local scope
                 * <p>
                 * The following example illustrates the use of scope annotation
                 * parameter in binding of element declaration in schema derived
                 * code.
                 * <p>
                 * The following example may be replaced in a future revision of
                 * this javadoc.
                 * <pre>
                 * &lt;!-- Example: XML schema definition -->
                 * &lt;xs:schema>
                 * &lt;xs:complexType name="pea">
                 * &lt;xs:choice maxOccurs="unbounded">
                 * &lt;xs:element name="foo" type="xs:string"/>
                 * &lt;xs:element name="bar" type="xs:string"/>
                 * &lt;/xs:choice>
                 * &lt;/xs:complexType>
                 * &lt;xs:element name="foo" type="xs:int"/>
                 * &lt;/xs:schema>
                 * </pre>
                 * <pre>
                 * // Example: expected default binding
                 * class Pea {
                 * &#64;XmlElementRefs({
                 * &#64;XmlElementRef(name="foo",type=JAXBElement.class)
                 * &#64;XmlElementRef(name="bar",type=JAXBElement.class)
                 * })
                 * List&lt;JAXBElement&lt;String>> fooOrBar;
                 * }
                 * &#64;XmlRegistry
                 * class ObjectFactory {
                 * &#64;XmlElementDecl(scope=Pea.class,name="foo")
                 * JAXBElement<String> createPeaFoo(String s);
                 * &#64;XmlElementDecl(scope=Pea.class,name="bar")
                 * JAXBElement<String> createPeaBar(String s);
                 * &#64;XmlElementDecl(name="foo")
                 * JAXBElement<Integer> createFoo(Integer i);
                 * }
                 * </pre>
                 * Without scope createFoo and createPeaFoo would become ambiguous
                 * since both of them map to a XML schema element with the same local
                 * name "foo".
                 * @see XmlRegistry
                 * @since JAXB 2.0
                 */
                // @ts-ignore
                abstract class XmlElementDecl implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
