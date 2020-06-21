declare namespace javax {
    namespace xml {
        namespace soap {
            /**
             * A factory for creating <code>SOAPConnection</code> objects. Implementation of this class
             * is optional. If <code>SOAPConnectionFactory.newInstance()</code> throws an
             * UnsupportedOperationException then the implementation does not support the
             * SAAJ communication infrastructure. Otherwise {@link SOAPConnection} objects
             * can be created by calling <code>createConnection()</code> on the newly
             * created <code>SOAPConnectionFactory</code> object.
             */
            // @ts-ignore
            abstract class SOAPConnectionFactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Creates an instance of the default
                 * <code>SOAPConnectionFactory</code> object.
                 * @return a new instance of a default
                 *          <code>SOAPConnectionFactory</code> object
                 * @exception SOAPException if there was an error creating the
                 *             <code>SOAPConnectionFactory</code>
                 * @exception UnsupportedOperationException if newInstance is not
                 *  supported.
                 */
                // @ts-ignore
                public static newInstance(): javax.xml.soap.SOAPConnectionFactory
                /**
                 * Create a new <code>SOAPConnection</code>.
                 * @return the new <code>SOAPConnection</code> object.
                 * @exception SOAPException if there was an exception creating the
                 *  <code>SOAPConnection</code> object.
                 */
                // @ts-ignore
                public abstract createConnection(): javax.xml.soap.SOAPConnection
            }
        }
    }
}
