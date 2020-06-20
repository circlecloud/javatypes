declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Marks a field/property that its XML form is a uri reference to mime content.
                 * The mime content is optimally stored out-of-line as an attachment.
                 * A field/property must always map to the {@link DataHandler} class.
                 * <h2>Usage</h2>
                 * <pre>
                 * &#64;{@link XmlRootElement}
                 * class Foo {
                 * &#64;{@link XmlAttachmentRef}
                 * &#64;{@link XmlAttribute}
                 * {@link DataHandler} data;
                 * &#64;{@link XmlAttachmentRef}
                 * &#64;{@link XmlElement}
                 * {@link DataHandler} body;
                 * }
                 * </pre>
                 * The above code maps to the following XML:
                 * <pre>
                 * &lt;xs:element name="foo" xmlns:ref="http://ws-i.org/profiles/basic/1.1/xsd">
                 * &lt;xs:complexType>
                 * &lt;xs:sequence>
                 * &lt;xs:element name="body" type="ref:swaRef" minOccurs="0" />
                 * &lt;/xs:sequence>
                 * &lt;xs:attribute name="data" type="ref:swaRef" use="optional" />
                 * &lt;/xs:complexType>
                 * &lt;/xs:element>
                 * </pre>
                 * <p>
                 * The above binding supports WS-I AP 1.0 <a href="http://www.ws-i.org/Profiles/AttachmentsProfile-1.0-2004-08-24.html#Referencing_Attachments_from_the_SOAP_Envelope">WS-I Attachments Profile Version 1.0.</a>
                 * @author Kohsuke Kawaguchi
                 * @since JAXB2.0
                 */
                // @ts-ignore
                class XmlAttachmentRef implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
