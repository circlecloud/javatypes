declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Abstract class that provides for extension of the X509KeyManager
             * interface.
             * <P>
             * Methods in this class should be overriden to provide actual
             * implementations.
             * @since 1.5
             * @author Brad R. Wetmore
             */
            // @ts-ignore
            abstract class X509ExtendedKeyManager extends java.lang.Object implements javax.net.ssl.X509KeyManager {
                /**
                 * Constructor used by subclasses only.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Choose an alias to authenticate the client side of an
                 * <code>SSLEngine</code> connection given the public key type
                 * and the list of certificate issuer authorities recognized by
                 * the peer (if any).
                 * <P>
                 * The default implementation returns null.
                 * @param keyType the key algorithm type name(s), ordered
                 *           with the most-preferred key type first.
                 * @param issuers the list of acceptable CA issuer subject names
                 *           or null if it does not matter which issuers are used.
                 * @param engine the <code>SSLEngine</code> to be used for this
                 *           connection.  This parameter can be null, which indicates
                 *           that implementations of this interface are free to
                 *           select an alias applicable to any engine.
                 * @return the alias name for the desired key, or null if there
                 *           are no matches.
                 */
                // @ts-ignore
                public chooseEngineClientAlias(keyType: java.lang.String[] | string[], issuers: java.security.Principal[], engine: javax.net.ssl.SSLEngine): string
                /**
                 * Choose an alias to authenticate the server side of an
                 * <code>SSLEngine</code> connection given the public key type
                 * and the list of certificate issuer authorities recognized by
                 * the peer (if any).
                 * <P>
                 * The default implementation returns null.
                 * @param keyType the key algorithm type name.
                 * @param issuers the list of acceptable CA issuer subject names
                 *           or null if it does not matter which issuers are used.
                 * @param engine the <code>SSLEngine</code> to be used for this
                 *           connection.  This parameter can be null, which indicates
                 *           that implementations of this interface are free to
                 *           select an alias applicable to any engine.
                 * @return the alias name for the desired key, or null if there
                 *           are no matches.
                 */
                // @ts-ignore
                public chooseEngineServerAlias(keyType: java.lang.String | string, issuers: java.security.Principal[], engine: javax.net.ssl.SSLEngine): string
            }
        }
    }
}
