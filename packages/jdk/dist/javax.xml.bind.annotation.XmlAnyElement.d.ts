declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Maps a JavaBean property to XML infoset representation and/or JAXB element.
                 * <p>
                 * This annotation serves as a "catch-all" property while unmarshalling
                 * xml content into a instance of a JAXB annotated class. It typically
                 * annotates a multi-valued JavaBean property, but it can occur on
                 * single value JavaBean property. During unmarshalling, each xml element
                 * that does not match a static &#64;XmlElement or &#64;XmlElementRef
                 * annotation for the other JavaBean properties on the class, is added to this
                 * "catch-all" property.
                 * <p>
                 * <h2>Usages:</h2>
                 * <pre>
                 * &#64;XmlAnyElement
                 * public {@link Element}[] others;
                 * // Collection of {@link Element} or JAXB elements.
                 * &#64;XmlAnyElement(lax="true")
                 * public {@link Object}[] others;
                 * &#64;XmlAnyElement
                 * private List&lt;{@link Element}> nodes;
                 * &#64;XmlAnyElement
                 * private {@link Element} node;
                 * </pre>
                 * <h2>Restriction usage constraints</h2>
                 * <p>
                 * This annotation is mutually exclusive with
                 * {@link XmlElement}, {@link XmlAttribute}, {@link XmlValue},
                 * {@link XmlElements}, {@link XmlID}, and {@link XmlIDREF}.
                 * <p>
                 * There can be only one {@link XmlAnyElement} annotated JavaBean property
                 * in a class and its super classes.
                 * <h2>Relationship to other annotations</h2>
                 * <p>
                 * This annotation can be used with {@link XmlJavaTypeAdapter}, so that users
                 * can map their own data structure to DOM, which in turn can be composed
                 * into XML.
                 * <p>
                 * This annotation can be used with {@link XmlMixed} like this:
                 * <pre>
                 * // List of java.lang.String or DOM nodes.
                 * &#64;XmlAnyElement &#64;XmlMixed
                 * List&lt;Object> others;
                 * </pre>
                 * <h2>Schema To Java example</h2>
                 * The following schema would produce the following Java class:
                 * <pre>
                 * &lt;xs:complexType name="foo">
                 * &lt;xs:sequence>
                 * &lt;xs:element name="a" type="xs:int" />
                 * &lt;xs:element name="b" type="xs:int" />
                 * &lt;xs:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded" />
                 * &lt;/xs:sequence>
                 * &lt;/xs:complexType>
                 * </pre>
                 * <pre>
                 * class Foo {
                 * int a;
                 * int b;
                 * &#64;{@link XmlAnyElement}
                 * List&lt;Element> any;
                 * }
                 * </pre>
                 * It can unmarshal instances like
                 * <pre>
                 * &lt;foo xmlns:e="extra">
                 * &lt;a>1</a>
                 * &lt;e:other />  // this will be bound to DOM, because unmarshalling is orderless
                 * &lt;b>3</b>
                 * &lt;e:other />
                 * &lt;c>5</c>     // this will be bound to DOM, because the annotation doesn't remember namespaces.
                 * &lt;/foo>
                 * </pre>
                 * The following schema would produce the following Java class:
                 * <pre>
                 * &lt;xs:complexType name="bar">
                 * &lt;xs:complexContent>
                 * &lt;xs:extension base="foo">
                 * &lt;xs:sequence>
                 * &lt;xs:element name="c" type="xs:int" />
                 * &lt;xs:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded" />
                 * &lt;/xs:sequence>
                 * &lt;/xs:extension>
                 * &lt;/xs:complexType>
                 * </pre>
                 * <pre>
                 * class Bar extends Foo {
                 * int c;
                 * // Foo.getAny() also represents wildcard content for type definition bar.
                 * }
                 * </pre>
                 * It can unmarshal instances like
                 * <pre>
                 * &lt;bar xmlns:e="extra">
                 * &lt;a>1</a>
                 * &lt;e:other />  // this will be bound to DOM, because unmarshalling is orderless
                 * &lt;b>3</b>
                 * &lt;e:other />
                 * &lt;c>5</c>     // this now goes to Bar.c
                 * &lt;e:other />  // this will go to Foo.any
                 * &lt;/bar>
                 * </pre>
                 * <h2>Using {@link XmlAnyElement} with {@link XmlElementRef}</h2>
                 * <p>
                 * The {@link XmlAnyElement} annotation can be used with {@link XmlElementRef}s to
                 * designate additional elements that can participate in the content tree.
                 * <p>
                 * The following schema would produce the following Java class:
                 * <pre>
                 * &lt;xs:complexType name="foo">
                 * &lt;xs:choice maxOccurs="unbounded" minOccurs="0">
                 * &lt;xs:element name="a" type="xs:int" />
                 * &lt;xs:element name="b" type="xs:int" />
                 * &lt;xs:any namespace="##other" processContents="lax" />
                 * &lt;/xs:choice>
                 * &lt;/xs:complexType>
                 * </pre>
                 * <pre>
                 * class Foo {
                 * &#64;{@link XmlAnyElement}(lax="true")
                 * &#64;{@link XmlElementRefs}({
                 * &#64;{@link XmlElementRef}(name="a", type="JAXBElement.class")
                 * &#64;{@link XmlElementRef}(name="b", type="JAXBElement.class")
                 * })
                 * {@link List}&lt;{@link Object}> others;
                 * }
                 * &#64;XmlRegistry
                 * class ObjectFactory {
                 * ...
                 * &#64;XmlElementDecl(name = "a", namespace = "", scope = Foo.class)
                 * {@link JAXBElement}&lt;Integer> createFooA( Integer i ) { ... }
                 * &#64;XmlElementDecl(name = "b", namespace = "", scope = Foo.class)
                 * {@link JAXBElement}&lt;Integer> createFooB( Integer i ) { ... }
                 * </pre>
                 * It can unmarshal instances like
                 * <pre>
                 * &lt;foo xmlns:e="extra">
                 * &lt;a>1</a>     // this will unmarshal to a {@link JAXBElement} instance whose value is 1.
                 * &lt;e:other />  // this will unmarshal to a DOM {@link Element}.
                 * &lt;b>3</b>     // this will unmarshal to a {@link JAXBElement} instance whose value is 1.
                 * &lt;/foo>
                 * </pre>
                 * <h2>W3C XML Schema "lax" wildcard emulation</h2>
                 * The lax element of the annotation enables the emulation of the "lax" wildcard semantics.
                 * For example, when the Java source code is annotated like this:
                 * <pre>
                 * &#64;{@link XmlRootElement}
                 * class Foo {
                 * &#64;XmlAnyElement(lax=true)
                 * public {@link Object}[] others;
                 * }
                 * </pre>
                 * then the following document will unmarshal like this:
                 * <pre>
                 * &lt;foo>
                 * &lt;unknown />
                 * &lt;foo />
                 * &lt;/foo>
                 * Foo foo = unmarshal();
                 * // 1 for 'unknown', another for 'foo'
                 * assert foo.others.length==2;
                 * // 'unknown' unmarshals to a DOM element
                 * assert foo.others[0] instanceof Element;
                 * // because of lax=true, the 'foo' element eagerly
                 * // unmarshals to a Foo object.
                 * assert foo.others[1] instanceof Foo;
                 * </pre>
                 * @author Kohsuke Kawaguchi
                 * @since JAXB2.0
                 */
                // @ts-ignore
                class XmlAnyElement implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
