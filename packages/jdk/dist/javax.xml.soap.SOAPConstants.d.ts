declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * The definition of constants pertaining to the SOAP protocol.
             */
            // @ts-ignore
            interface SOAPConstants {
                /**
                 * Used to create <code>MessageFactory</code> instances that create
                 * <code>SOAPMessages</code> whose concrete type is based on the
                 * <code>Content-Type</code> MIME header passed to the
                 * <code>createMessage</code> method. If no <code>Content-Type</code>
                 * header is passed then the <code>createMessage</code> may throw an
                 * <code>IllegalArgumentException</code> or, in the case of the no
                 * argument version of <code>createMessage</code>, an
                 * <code>UnsupportedOperationException</code>.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * Used to create <code>MessageFactory</code> instances that create
                 * <code>SOAPMessages</code> whose behavior supports the SOAP 1.1  specification.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * Used to create <code>MessageFactory</code> instances that create
                 * <code>SOAPMessages</code> whose behavior supports the SOAP 1.2
                 * specification
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The default protocol: SOAP 1.1 for backwards compatibility.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The namespace identifier for the SOAP 1.1 envelope.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The namespace identifier for the SOAP 1.2 envelope.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The namespace identifier for the SOAP 1.1 envelope, All SOAPElements in this
                 * namespace are defined by the SOAP 1.1 specification.
                 */
                // @ts-ignore
                
                /**
                 * The namespace identifier for the SOAP 1.1 encoding.
                 * An attribute named <code>encodingStyle</code> in the
                 * <code>URI_NS_SOAP_ENVELOPE</code> namespace and set to the value
                 * <code>URI_NS_SOAP_ENCODING</code> can be added to an element to indicate
                 * that it is encoded using the rules in section 5 of the SOAP 1.1
                 * specification.
                 */
                // @ts-ignore
                
                /**
                 * The namespace identifier for the SOAP 1.2 encoding.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The media type  of the <code>Content-Type</code> MIME header in SOAP 1.1.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The media type  of the <code>Content-Type</code> MIME header in SOAP 1.2.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The URI identifying the next application processing a SOAP request as the intended
                 * actor for a SOAP 1.1 header entry (see section 4.2.2 of the SOAP 1.1 specification).
                 * <p>
                 * This value can be passed to
                 * {@link SOAPHeader#examineMustUnderstandHeaderElements(String)},
                 * {@link SOAPHeader#examineHeaderElements(String)} and
                 * {@link SOAPHeader#extractHeaderElements(String)}
                 */
                // @ts-ignore
                
                /**
                 * The URI identifying the next application processing a SOAP request as the intended
                 * role for a SOAP 1.2 header entry (see section 2.2 of part 1 of the SOAP 1.2
                 * specification).
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The URI specifying the role None in SOAP 1.2.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The URI identifying the ultimate receiver of the SOAP 1.2 message.
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * The default namespace prefix for http://www.w3.org/2003/05/soap-envelope
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * SOAP 1.2 VersionMismatch Fault
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * SOAP 1.2 MustUnderstand Fault
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * SOAP 1.2 DataEncodingUnknown Fault
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * SOAP 1.2 Sender Fault
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
                /**
                 * SOAP 1.2 Receiver Fault
                 * @since SAAJ 1.3
                 */
                // @ts-ignore
                
            }
        }
    }
}
