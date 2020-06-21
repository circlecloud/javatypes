declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Associates the MIME type that controls the XML representation of the property.
                 * <p>
                 * This annotation is used in conjunction with datatypes such as
                 * {@link java.awt.Image} or {@link Source} that are bound to base64-encoded binary in XML.
                 * <p>
                 * If a property that has this annotation has a sibling property bound to
                 * the xmime:contentType attribute, and if in the instance the property has a value,
                 * the value of the attribute takes precedence and that will control the marshalling.
                 * @author Kohsuke Kawaguchi
                 * @since JAXB2.0
                 */
                // @ts-ignore
                abstract class XmlMimeType implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
