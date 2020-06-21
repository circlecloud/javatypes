declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Standard constants definitions
             * @since 1.8
             */
            // @ts-ignore
            class StandardConstants extends java.lang.Object {
                /**
                 * The "host_name" type representing of a DNS hostname
                 * (see {@link SNIHostName}) in a Server Name Indication (SNI) extension.
                 * <P>
                 * The SNI extension is a feature that extends the SSL/TLS protocols to
                 * indicate what server name the client is attempting to connect to during
                 * handshaking.  See section 3, "Server Name Indication", of <A
                 * HREF="http://www.ietf.org/rfc/rfc6066.txt">TLS Extensions (RFC 6066)</A>.
                 * <P>
                 * The value of this constant is {@value}.
                 * @see SNIServerName
                 * @see SNIHostName
                 */
                // @ts-ignore
                public static readonly SNI_HOST_NAME: number /*int*/
            }
        }
    }
}
