declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * Acts as a holder for the results of a JAXP transformation or a JAXB
             * marshalling, in the form of a SAAJ tree. These results should be accessed
             * by using the {@link #getResult()} method. The {@link DOMResult#getNode()}
             * method should be avoided in almost all cases.
             * @author XWS-Security Development Team
             * @since SAAJ 1.3
             */
            // @ts-ignore
            class SAAJResult extends javax.xml.transform.dom.DOMResult {
                /**
                 * Creates a <code>SAAJResult</code> that will present results in the form
                 * of a SAAJ tree that supports the default (SOAP 1.1) protocol.
                 * <p>
                 * This kind of <code>SAAJResult</code> is meant for use in situations where the
                 * results will be used as a parameter to a method that takes a parameter
                 * whose type, such as <code>SOAPElement</code>, is drawn from the SAAJ
                 * API. When used in a transformation, the results are populated into the
                 * <code>SOAPPart</code> of a <code>SOAPMessage</code> that is created internally.
                 * The <code>SOAPPart</code> returned by {@link DOMResult#getNode()}
                 * is not guaranteed to be well-formed.
                 * @throws SOAPException if there is a problem creating a <code>SOAPMessage</code>
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a <code>SAAJResult</code> that will present results in the form
                 * of a SAAJ tree that supports the specified protocol. The
                 * <code>DYNAMIC_SOAP_PROTOCOL</code> is ambiguous in this context and will
                 * cause this constructor to throw an <code>UnsupportedOperationException</code>.
                 * <p>
                 * This kind of <code>SAAJResult</code> is meant for use in situations where the
                 * results will be used as a parameter to a method that takes a parameter
                 * whose type, such as <code>SOAPElement</code>, is drawn from the SAAJ
                 * API. When used in a transformation the results are populated into the
                 * <code>SOAPPart</code> of a <code>SOAPMessage</code> that is created
                 * internally. The <code>SOAPPart</code> returned by {@link DOMResult#getNode()}
                 * is not guaranteed to be well-formed.
                 * @param protocol - the name of the SOAP protocol that the resulting SAAJ
                 *                       tree should support
                 * @throws SOAPException if a <code>SOAPMessage</code> supporting the
                 *              specified protocol cannot be created
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                constructor(protocol: string)
                /**
                 * Creates a <code>SAAJResult</code> that will write the results into the
                 * <code>SOAPPart</code> of the supplied <code>SOAPMessage</code>.
                 * In the normal case these results will be written using DOM APIs and,
                 * as a result, the finished <code>SOAPPart</code> will not be guaranteed
                 * to be well-formed unless the data used to create it is also well formed.
                 * When used in a transformation the validity of the <code>SOAPMessage</code>
                 * after the transformation can be guaranteed only by means outside SAAJ
                 * specification.
                 * @param message - the message whose <code>SOAPPart</code> will be
                 *                   populated as a result of some transformation or
                 *                   marshalling operation
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                constructor(message: javax.xml.soap.SOAPMessage)
                /**
                 * Creates a <code>SAAJResult</code> that will write the results as a
                 * child node of the <code>SOAPElement</code> specified. In the normal
                 * case these results will be written using DOM APIs and as a result may
                 * invalidate the structure of the SAAJ tree. This kind of
                 * <code>SAAJResult</code> should only be used when the validity of the
                 * incoming data can be guaranteed by means outside of the SAAJ
                 * specification.
                 * @param rootNode - the root to which the results will be appended
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                constructor(rootNode: javax.xml.soap.SOAPElement)
                /**
                 * @return the resulting Tree that was created under the specified root Node.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                getResult(): javax.xml.soap.Node
            }
        }
    }
}
