declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Utility to extract information from X509 certificates.
                 * @since 5.7.0
                 */
                // @ts-ignore
                class TlsUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Log details on peer certificate and certification chain.
                     * <p>
                     * The log level is debug. Common X509 extensions are displayed in a best-effort
                     * fashion, a hexadecimal dump is made for less commonly used extensions.
                     * @param session the {#link SSLSession} to extract the certificates from
                     */
                    // @ts-ignore
                    public static logPeerCertificateInfo(session: javax.net.ssl.SSLSession): void
                    /**
                     * Get a string representation of certificate info.
                     * @param certificate the certificate to analyze
                     * @param prefix the line prefix
                     * @return information about the certificate
                     */
                    // @ts-ignore
                    public static peerCertificateInfo(certificate: java.security.cert.Certificate, prefix: java.lang.String | string): string
                    /**
                     * Human-readable representation of an X509 certificate extension.
                     * <p>
                     * Common extensions are supported in a best-effort fashion, less commonly
                     * used extensions are displayed as an hexadecimal dump.
                     * <p>
                     * Extensions come encoded as a DER Octet String, which itself can contain
                     * other DER-encoded objects, making a comprehensive support in this utility
                     * impossible.
                     * @param oid extension OID
                     * @param derOctetString the extension value as a DER octet string
                     * @param certificate the certificate
                     * @return the OID and the value
                     * @see <a href="http://luca.ntop.org/Teaching/Appunti/asn1.html">A Layman's Guide to a Subset of ASN.1, BER, and DER</a>
                     * @see <a href="https://docs.microsoft.com/en-us/windows/desktop/seccertenroll/about-der-encoding-of-asn-1-types">DER Encoding of ASN.1 Types</a>
                     */
                    // @ts-ignore
                    public static extensionPrettyPrint(oid: java.lang.String | string, derOctetString: number /*byte*/[], certificate: java.security.cert.X509Certificate): string
                    /**
                     * Strips carriage return (CR) and line feed (LF) characters to mitigate CWE-117.
                     * @return sanitised string value
                     */
                    // @ts-ignore
                    public static stripCRLF(value: java.lang.String | string): string
                }
            }
        }
    }
}
