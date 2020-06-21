declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                /**
                 * <p>
                 * JAXB 1.0 only default validation event handler. This is the default
                 * handler for all objects created from a JAXBContext that is managing
                 * schema-derived code generated by a JAXB 1.0 binding compiler.
                 * <p>
                 * This handler causes the unmarshal and validate operations to fail on the first
                 * error or fatal error.
                 * <p>
                 * This handler is not the default handler for JAXB mapped classes following
                 * JAXB 2.0 or later versions. Default validation event handling has changed
                 * and is specified in  {@link javax.xml.bind.Unmarshaller} and
                 * {@link javax.xml.bind.Marshaller}.
                 * @author <ul><li>Ryan Shoemaker, Sun Microsystems, Inc.</li></ul>
                 * @see javax.xml.bind.Unmarshaller
                 * @see javax.xml.bind.Validator
                 * @see javax.xml.bind.ValidationEventHandler
                 * @since JAXB1.0
                 */
                // @ts-ignore
                class DefaultValidationEventHandler extends java.lang.Object implements javax.xml.bind.ValidationEventHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public handleEvent(event: javax.xml.bind.ValidationEvent): boolean
                }
            }
        }
    }
}
