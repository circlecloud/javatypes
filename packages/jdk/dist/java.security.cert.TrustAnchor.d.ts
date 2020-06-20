declare namespace java {
    namespace security {
        namespace cert {
            /**
             * A trust anchor or most-trusted Certification Authority (CA).
             * <p>
             * This class represents a "most-trusted CA", which is used as a trust anchor
             * for validating X.509 certification paths. A most-trusted CA includes the
             * public key of the CA, the CA's name, and any constraints upon the set of
             * paths which may be validated using this key. These parameters can be
             * specified in the form of a trusted {@code X509Certificate} or as
             * individual parameters.
             * <p>
             * <b>Concurrent Access</b>
             * <p>All {@code TrustAnchor} objects must be immutable and
             * thread-safe. That is, multiple threads may concurrently invoke the
             * methods defined in this class on a single {@code TrustAnchor}
             * object (or more than one) with no ill effects. Requiring
             * {@code TrustAnchor} objects to be immutable and thread-safe
             * allows them to be passed around to various pieces of code without
             * worrying about coordinating access. This stipulation applies to all
             * public fields and methods of this class and any added or overridden
             * by subclasses.
             * @see PKIXParameters#PKIXParameters(Set)
             * @see PKIXBuilderParameters#PKIXBuilderParameters(Set, CertSelector)
             * @since 1.4
             * @author Sean Mullan
             */
            // @ts-ignore
            class TrustAnchor extends java.lang.Object {
                /**
                 * Creates an instance of {@code TrustAnchor} with the specified
                 * {@code X509Certificate} and optional name constraints, which
                 * are intended to be used as additional constraints when validating
                 * an X.509 certification path.
                 * <p>
                 * The name constraints are specified as a byte array. This byte array
                 * should contain the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in
                 * <a href="http://www.ietf.org/rfc/rfc3280">RFC 3280</a>
                 * and X.509. The ASN.1 definition of this structure appears below.
                 * <pre>{@code
                 * NameConstraints ::= SEQUENCE {
                 * permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
                 * excludedSubtrees        [1]     GeneralSubtrees OPTIONAL }
                 * GeneralSubtrees ::= SEQUENCE SIZE (1..MAX) OF GeneralSubtree
                 * GeneralSubtree ::= SEQUENCE {
                 * base                    GeneralName,
                 * minimum         [0]     BaseDistance DEFAULT 0,
                 * maximum         [1]     BaseDistance OPTIONAL }
                 * BaseDistance ::= INTEGER (0..MAX)
                 * GeneralName ::= CHOICE {
                 * otherName                       [0]     OtherName,
                 * rfc822Name                      [1]     IA5String,
                 * dNSName                         [2]     IA5String,
                 * x400Address                     [3]     ORAddress,
                 * directoryName                   [4]     Name,
                 * ediPartyName                    [5]     EDIPartyName,
                 * uniformResourceIdentifier       [6]     IA5String,
                 * iPAddress                       [7]     OCTET STRING,
                 * registeredID                    [8]     OBJECT IDENTIFIER}
                 * }</pre>
                 * <p>
                 * Note that the name constraints byte array supplied is cloned to protect
                 * against subsequent modifications.
                 * @param trustedCert a trusted {#code X509Certificate}
                 * @param nameConstraints a byte array containing the ASN.1 DER encoding of
                 *  a NameConstraints extension to be used for checking name constraints.
                 *  Only the value of the extension is included, not the OID or criticality
                 *  flag. Specify {#code null} to omit the parameter.
                 * @throws IllegalArgumentException if the name constraints cannot be
                 *  decoded
                 * @throws NullPointerException if the specified
                 *  {#code X509Certificate} is {@code null}
                 */
                // @ts-ignore
                constructor(trustedCert: java.security.cert.X509Certificate, nameConstraints: number /*byte*/[])
                /**
                 * Creates an instance of {@code TrustAnchor} where the
                 * most-trusted CA is specified as an X500Principal and public key.
                 * Name constraints are an optional parameter, and are intended to be used
                 * as additional constraints when validating an X.509 certification path.
                 * <p>
                 * The name constraints are specified as a byte array. This byte array
                 * contains the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in RFC 3280
                 * and X.509. The ASN.1 notation for this structure is supplied in the
                 * documentation for
                 * {@link #TrustAnchor(X509Certificate, byte[])
                 * TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints) }.
                 * <p>
                 * Note that the name constraints byte array supplied here is cloned to
                 * protect against subsequent modifications.
                 * @param caPrincipal the name of the most-trusted CA as X500Principal
                 * @param pubKey the public key of the most-trusted CA
                 * @param nameConstraints a byte array containing the ASN.1 DER encoding of
                 *  a NameConstraints extension to be used for checking name constraints.
                 *  Only the value of the extension is included, not the OID or criticality
                 *  flag. Specify {#code null} to omit the parameter.
                 * @throws NullPointerException if the specified {#code caPrincipal} or
                 *  {@code pubKey} parameter is {@code null}
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(caPrincipal: javax.security.auth.x500.X500Principal, pubKey: java.security.PublicKey, nameConstraints: number /*byte*/[])
                /**
                 * Creates an instance of {@code TrustAnchor} where the
                 * most-trusted CA is specified as a distinguished name and public key.
                 * Name constraints are an optional parameter, and are intended to be used
                 * as additional constraints when validating an X.509 certification path.
                 * <p>
                 * The name constraints are specified as a byte array. This byte array
                 * contains the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in RFC 3280
                 * and X.509. The ASN.1 notation for this structure is supplied in the
                 * documentation for
                 * {@link #TrustAnchor(X509Certificate, byte[])
                 * TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints) }.
                 * <p>
                 * Note that the name constraints byte array supplied here is cloned to
                 * protect against subsequent modifications.
                 * @param caName the X.500 distinguished name of the most-trusted CA in
                 *  <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>
                 *  {#code String} format
                 * @param pubKey the public key of the most-trusted CA
                 * @param nameConstraints a byte array containing the ASN.1 DER encoding of
                 *  a NameConstraints extension to be used for checking name constraints.
                 *  Only the value of the extension is included, not the OID or criticality
                 *  flag. Specify {#code null} to omit the parameter.
                 * @throws IllegalArgumentException if the specified
                 *  {#code caName} parameter is empty {@code (caName.length() == 0)}
                 *  or incorrectly formatted or the name constraints cannot be decoded
                 * @throws NullPointerException if the specified {#code caName} or
                 *  {@code pubKey} parameter is {@code null}
                 */
                // @ts-ignore
                constructor(caName: string, pubKey: java.security.PublicKey, nameConstraints: number /*byte*/[])
                /**
                 * Returns the most-trusted CA certificate.
                 * @return a trusted {#code X509Certificate} or {@code null}
                 *  if the trust anchor was not specified as a trusted certificate
                 */
                // @ts-ignore
                getTrustedCert(): java.security.cert.X509Certificate
                /**
                 * Returns the name of the most-trusted CA as an X500Principal.
                 * @return the X.500 distinguished name of the most-trusted CA, or
                 *  {#code null} if the trust anchor was not specified as a trusted
                 *  public key and name or X500Principal pair
                 * @since 1.5
                 */
                // @ts-ignore
                getCA(): javax.security.auth.x500.X500Principal
                /**
                 * Returns the name of the most-trusted CA in RFC 2253 {@code String}
                 * format.
                 * @return the X.500 distinguished name of the most-trusted CA, or
                 *  {#code null} if the trust anchor was not specified as a trusted
                 *  public key and name or X500Principal pair
                 */
                // @ts-ignore
                getCAName(): java.lang.String
                /**
                 * Returns the public key of the most-trusted CA.
                 * @return the public key of the most-trusted CA, or {#code null}
                 *  if the trust anchor was not specified as a trusted public key and name
                 *  or X500Principal pair
                 */
                // @ts-ignore
                getCAPublicKey(): java.security.PublicKey
                /**
                 * Returns the name constraints parameter. The specified name constraints
                 * are associated with this trust anchor and are intended to be used
                 * as additional constraints when validating an X.509 certification path.
                 * <p>
                 * The name constraints are returned as a byte array. This byte array
                 * contains the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in RFC 3280
                 * and X.509. The ASN.1 notation for this structure is supplied in the
                 * documentation for
                 * {@link #TrustAnchor(X509Certificate, byte[])
                 * TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints) }.
                 * <p>
                 * Note that the byte array returned is cloned to protect against
                 * subsequent modifications.
                 * @return a byte array containing the ASN.1 DER encoding of
                 *          a NameConstraints extension used for checking name constraints,
                 *          or {#code null} if not set.
                 */
                // @ts-ignore
                getNameConstraints(): byte[]
                /**
                 * Returns a formatted string describing the {@code TrustAnchor}.
                 * @return a formatted string describing the {#code TrustAnchor}
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
