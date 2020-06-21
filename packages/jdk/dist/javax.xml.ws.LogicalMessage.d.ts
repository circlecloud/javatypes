declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * The <code>LogicalMessage</code> interface represents a
             * protocol agnostic XML message and contains methods that
             * provide access to the payload of the message.
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            interface LogicalMessage {
                /**
                 * Gets the message payload as an XML source, may be called
                 * multiple times on the same LogicalMessage instance, always
                 * returns a new <code>Source</code> that may be used to retrieve the entire
                 * message payload.
                 * <p>If the returned <code>Source</code> is an instance of
                 * <code>DOMSource</code>, then
                 * modifications to the encapsulated DOM tree change the message
                 * payload in-place, there is no need to susequently call
                 * <code>setPayload</code>. Other types of <code>Source</code> provide only
                 * read access to the message payload.
                 * @return The contained message payload; returns <code>null</code> if no
                 *           payload is present in this message.
                 */
                // @ts-ignore
                getPayload(): javax.xml.transform.Source
                /**
                 * Sets the message payload
                 * @param payload message payload
                 * @throws WebServiceException If any error during the setting
                 *           of the payload in this message
                 * @throws java.lang.UnsupportedOperationException If this
                 *           operation is not supported
                 */
                // @ts-ignore
                setPayload(payload: javax.xml.transform.Source): void
                /**
                 * Gets the message payload as a JAXB object. Note that there is no
                 * connection between the returned object and the message payload,
                 * changes to the payload require calling <code>setPayload</code>.
                 * @param context The JAXBContext that should be used to unmarshall
                 *           the message payload
                 * @return The contained message payload; returns <code>null</code> if no
                 *           payload is present in this message
                 * @throws WebServiceException If an error occurs when using a supplied
                 *      JAXBContext to unmarshall the payload. The cause of
                 *      the WebServiceException is the original JAXBException.
                 */
                // @ts-ignore
                getPayload(context: javax.xml.bind.JAXBContext): any
                /**
                 * Sets the message payload
                 * @param payload message payload
                 * @param context The JAXBContext that should be used to marshall
                 *           the payload
                 * @throws java.lang.UnsupportedOperationException If this
                 *           operation is not supported
                 * @throws WebServiceException If an error occurs when using the supplied
                 *      JAXBContext to marshall the payload. The cause of
                 *      the WebServiceException is the original JAXBException.
                 */
                // @ts-ignore
                setPayload(payload: java.lang.Object | any, context: javax.xml.bind.JAXBContext): void
            }
        }
    }
}
