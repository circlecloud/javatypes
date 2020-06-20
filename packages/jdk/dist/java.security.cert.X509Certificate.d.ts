declare namespace java {
    namespace security {
        namespace cert {
            /**
             * <p>
             * Abstract class for X.509 certificates. This provides a standard
             * way to access all the attributes of an X.509 certificate.
             * <p>
             * In June of 1996, the basic X.509 v3 format was completed by
             * ISO/IEC and ANSI X9, which is described below in ASN.1:
             * <pre>
             * Certificate  ::=  SEQUENCE  {
             * tbsCertificate       TBSCertificate,
             * signatureAlgorithm   AlgorithmIdentifier,
             * signature            BIT STRING  }
             * </pre>
             * <p>
             * These certificates are widely used to support authentication and
             * other functionality in Internet security systems. Common applications
             * include Privacy Enhanced Mail (PEM), Transport Layer Security (SSL),
             * code signing for trusted software distribution, and Secure Electronic
             * Transactions (SET).
             * <p>
             * These certificates are managed and vouched for by <em>Certificate
             * Authorities</em> (CAs). CAs are services which create certificates by
             * placing data in the X.509 standard format and then digitally signing
             * that data. CAs act as trusted third parties, making introductions
             * between principals who have no direct knowledge of each other.
             * CA certificates are either signed by themselves, or by some other
             * CA such as a "root" CA.
             * <p>
             * More information can be found in
             * <a href="http://www.ietf.org/rfc/rfc3280.txt">RFC 3280: Internet X.509
             * Public Key Infrastructure Certificate and CRL Profile</a>.
             * <p>
             * The ASN.1 definition of {@code tbsCertificate} is:
             * <pre>
             * TBSCertificate  ::=  SEQUENCE  {
             * version         [0]  EXPLICIT Version DEFAULT v1,
             * serialNumber         CertificateSerialNumber,
             * signature            AlgorithmIdentifier,
             * issuer               Name,
             * validity             Validity,
             * subject              Name,
             * subjectPublicKeyInfo SubjectPublicKeyInfo,
             * issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL,
             * -- If present, version must be v2 or v3
             * subjectUniqueID [2]  IMPLICIT UniqueIdentifier OPTIONAL,
             * -- If present, version must be v2 or v3
             * extensions      [3]  EXPLICIT Extensions OPTIONAL
             * -- If present, version must be v3
             * }
             * </pre>
             * <p>
             * Certificates are instantiated using a certificate factory. The following is
             * an example of how to instantiate an X.509 certificate:
             * <pre>
             * try (InputStream inStream = new FileInputStream("fileName-of-cert")) {
             * CertificateFactory cf = CertificateFactory.getInstance("X.509");
             * X509Certificate cert = (X509Certificate)cf.generateCertificate(inStream);
             * }
             * </pre>
             * @author Hemma Prafullchandra
             * @see Certificate
             * @see CertificateFactory
             * @see X509Extension
             */
            // @ts-ignore
            class X509Certificate extends java.security.cert.Certificate implements java.security.cert.X509Extension {
                /**
                 * Constructor for X.509 certificates.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Checks that the certificate is currently valid. It is if
                 * the current date and time are within the validity period given in the
                 * certificate.
                 * <p>
                 * The validity period consists of two date/time values:
                 * the first and last dates (and times) on which the certificate
                 * is valid. It is defined in
                 * ASN.1 as:
                 * <pre>
                 * validity             Validity
                 * Validity ::= SEQUENCE {
                 * notBefore      CertificateValidityDate,
                 * notAfter       CertificateValidityDate }
                 * CertificateValidityDate ::= CHOICE {
                 * utcTime        UTCTime,
                 * generalTime    GeneralizedTime }
                 * </pre>
                 * @exception CertificateExpiredException if the certificate has expired.
                 * @exception CertificateNotYetValidException if the certificate is not
                 *  yet valid.
                 */
                // @ts-ignore
                abstract checkValidity(): void
                /**
                 * Checks that the given date is within the certificate's
                 * validity period. In other words, this determines whether the
                 * certificate would be valid at the given date/time.
                 * @param date the Date to check against to see if this certificate
                 *         is valid at that date/time.
                 * @exception CertificateExpiredException if the certificate has expired
                 *  with respect to the {#code date} supplied.
                 * @exception CertificateNotYetValidException if the certificate is not
                 *  yet valid with respect to the {#code date} supplied.
                 * @see #checkValidity()
                 */
                // @ts-ignore
                abstract checkValidity(date: java.util.Date): void
                /**
                 * Gets the {@code version} (version number) value from the
                 * certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * version  [0] EXPLICIT Version DEFAULT v1
                 * Version ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
                 * </pre>
                 * @return the version number, i.e. 1, 2 or 3.
                 */
                // @ts-ignore
                abstract getVersion(): int
                /**
                 * Gets the {@code serialNumber} value from the certificate.
                 * The serial number is an integer assigned by the certification
                 * authority to each certificate. It must be unique for each
                 * certificate issued by a given CA (i.e., the issuer name and
                 * serial number identify a unique certificate).
                 * The ASN.1 definition for this is:
                 * <pre>
                 * serialNumber     CertificateSerialNumber
                 * CertificateSerialNumber  ::=  INTEGER
                 * </pre>
                 * @return the serial number.
                 */
                // @ts-ignore
                abstract getSerialNumber(): java.math.BigInteger
                /**
                 * <strong>Denigrated</strong>, replaced by {@linkplain
                 * #getIssuerX500Principal()}. This method returns the {@code issuer}
                 * as an implementation specific Principal object, which should not be
                 * relied upon by portable code.
                 * <p>
                 * Gets the {@code issuer} (issuer distinguished name) value from
                 * the certificate. The issuer name identifies the entity that signed (and
                 * issued) the certificate.
                 * <p>The issuer name field contains an
                 * X.500 distinguished name (DN).
                 * The ASN.1 definition for this is:
                 * <pre>
                 * issuer    Name
                 * Name ::= CHOICE { RDNSequence }
                 * RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
                 * RelativeDistinguishedName ::=
                 * SET OF AttributeValueAssertion
                 * AttributeValueAssertion ::= SEQUENCE {
                 * AttributeType,
                 * AttributeValue }
                 * AttributeType ::= OBJECT IDENTIFIER
                 * AttributeValue ::= ANY
                 * </pre>
                 * The {@code Name} describes a hierarchical name composed of
                 * attributes,
                 * such as country name, and corresponding values, such as US.
                 * The type of the {@code AttributeValue} component is determined by
                 * the {@code AttributeType}; in general it will be a
                 * {@code directoryString}. A {@code directoryString} is usually
                 * one of {@code PrintableString},
                 * {@code TeletexString} or {@code UniversalString}.
                 * @return a Principal whose name is the issuer distinguished name.
                 */
                // @ts-ignore
                abstract getIssuerDN(): java.security.Principal
                /**
                 * Returns the issuer (issuer distinguished name) value from the
                 * certificate as an {@code X500Principal}.
                 * <p>
                 * It is recommended that subclasses override this method.
                 * @return an {#code X500Principal} representing the issuer
                 *           distinguished name
                 * @since 1.4
                 */
                // @ts-ignore
                getIssuerX500Principal(): javax.security.auth.x500.X500Principal
                /**
                 * <strong>Denigrated</strong>, replaced by {@linkplain
                 * #getSubjectX500Principal()}. This method returns the {@code subject}
                 * as an implementation specific Principal object, which should not be
                 * relied upon by portable code.
                 * <p>
                 * Gets the {@code subject} (subject distinguished name) value
                 * from the certificate.  If the {@code subject} value is empty,
                 * then the {@code getName()} method of the returned
                 * {@code Principal} object returns an empty string ("").
                 * <p> The ASN.1 definition for this is:
                 * <pre>
                 * subject    Name
                 * </pre>
                 * <p>See {@link #getIssuerDN() getIssuerDN} for {@code Name}
                 * and other relevant definitions.
                 * @return a Principal whose name is the subject name.
                 */
                // @ts-ignore
                abstract getSubjectDN(): java.security.Principal
                /**
                 * Returns the subject (subject distinguished name) value from the
                 * certificate as an {@code X500Principal}.  If the subject value
                 * is empty, then the {@code getName()} method of the returned
                 * {@code X500Principal} object returns an empty string ("").
                 * <p>
                 * It is recommended that subclasses override this method.
                 * @return an {#code X500Principal} representing the subject
                 *           distinguished name
                 * @since 1.4
                 */
                // @ts-ignore
                getSubjectX500Principal(): javax.security.auth.x500.X500Principal
                /**
                 * Gets the {@code notBefore} date from the validity period of
                 * the certificate.
                 * The relevant ASN.1 definitions are:
                 * <pre>
                 * validity             Validity
                 * Validity ::= SEQUENCE {
                 * notBefore      CertificateValidityDate,
                 * notAfter       CertificateValidityDate }
                 * CertificateValidityDate ::= CHOICE {
                 * utcTime        UTCTime,
                 * generalTime    GeneralizedTime }
                 * </pre>
                 * @return the start date of the validity period.
                 * @see #checkValidity
                 */
                // @ts-ignore
                abstract getNotBefore(): java.util.Date
                /**
                 * Gets the {@code notAfter} date from the validity period of
                 * the certificate. See {@link #getNotBefore() getNotBefore}
                 * for relevant ASN.1 definitions.
                 * @return the end date of the validity period.
                 * @see #checkValidity
                 */
                // @ts-ignore
                abstract getNotAfter(): java.util.Date
                /**
                 * Gets the DER-encoded certificate information, the
                 * {@code tbsCertificate} from this certificate.
                 * This can be used to verify the signature independently.
                 * @return the DER-encoded certificate information.
                 * @exception CertificateEncodingException if an encoding error occurs.
                 */
                // @ts-ignore
                abstract getTBSCertificate(): byte[]
                /**
                 * Gets the {@code signature} value (the raw signature bits) from
                 * the certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * signature     BIT STRING
                 * </pre>
                 * @return the signature.
                 */
                // @ts-ignore
                abstract getSignature(): byte[]
                /**
                 * Gets the signature algorithm name for the certificate
                 * signature algorithm. An example is the string "SHA256withRSA".
                 * The ASN.1 definition for this is:
                 * <pre>
                 * signatureAlgorithm   AlgorithmIdentifier
                 * AlgorithmIdentifier  ::=  SEQUENCE  {
                 * algorithm               OBJECT IDENTIFIER,
                 * parameters              ANY DEFINED BY algorithm OPTIONAL  }
                 * -- contains a value of the type
                 * -- registered for use with the
                 * -- algorithm object identifier value
                 * </pre>
                 * <p>The algorithm name is determined from the {@code algorithm}
                 * OID string.
                 * @return the signature algorithm name.
                 */
                // @ts-ignore
                abstract getSigAlgName(): java.lang.String
                /**
                 * Gets the signature algorithm OID string from the certificate.
                 * An OID is represented by a set of nonnegative whole numbers separated
                 * by periods.
                 * For example, the string "1.2.840.10040.4.3" identifies the SHA-1
                 * with DSA signature algorithm defined in
                 * <a href="http://www.ietf.org/rfc/rfc3279.txt">RFC 3279: Algorithms and
                 * Identifiers for the Internet X.509 Public Key Infrastructure Certificate
                 * and CRL Profile</a>.
                 * <p>See {@link #getSigAlgName() getSigAlgName} for
                 * relevant ASN.1 definitions.
                 * @return the signature algorithm OID string.
                 */
                // @ts-ignore
                abstract getSigAlgOID(): java.lang.String
                /**
                 * Gets the DER-encoded signature algorithm parameters from this
                 * certificate's signature algorithm. In most cases, the signature
                 * algorithm parameters are null; the parameters are usually
                 * supplied with the certificate's public key.
                 * If access to individual parameter values is needed then use
                 * {@link java.security.AlgorithmParameters AlgorithmParameters}
                 * and instantiate with the name returned by
                 * {@link #getSigAlgName() getSigAlgName}.
                 * <p>See {@link #getSigAlgName() getSigAlgName} for
                 * relevant ASN.1 definitions.
                 * @return the DER-encoded signature algorithm parameters, or
                 *          null if no parameters are present.
                 */
                // @ts-ignore
                abstract getSigAlgParams(): byte[]
                /**
                 * Gets the {@code issuerUniqueID} value from the certificate.
                 * The issuer unique identifier is present in the certificate
                 * to handle the possibility of reuse of issuer names over time.
                 * RFC 3280 recommends that names not be reused and that
                 * conforming certificates not make use of unique identifiers.
                 * Applications conforming to that profile should be capable of
                 * parsing unique identifiers and making comparisons.
                 * <p>The ASN.1 definition for this is:
                 * <pre>
                 * issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL
                 * UniqueIdentifier  ::=  BIT STRING
                 * </pre>
                 * @return the issuer unique identifier or null if it is not
                 *  present in the certificate.
                 */
                // @ts-ignore
                abstract getIssuerUniqueID(): boolean[]
                /**
                 * Gets the {@code subjectUniqueID} value from the certificate.
                 * <p>The ASN.1 definition for this is:
                 * <pre>
                 * subjectUniqueID  [2]  IMPLICIT UniqueIdentifier OPTIONAL
                 * UniqueIdentifier  ::=  BIT STRING
                 * </pre>
                 * @return the subject unique identifier or null if it is not
                 *  present in the certificate.
                 */
                // @ts-ignore
                abstract getSubjectUniqueID(): boolean[]
                /**
                 * Gets a boolean array representing bits of
                 * the {@code KeyUsage} extension, (OID = 2.5.29.15).
                 * The key usage extension defines the purpose (e.g., encipherment,
                 * signature, certificate signing) of the key contained in the
                 * certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * KeyUsage ::= BIT STRING {
                 * digitalSignature        (0),
                 * nonRepudiation          (1),
                 * keyEncipherment         (2),
                 * dataEncipherment        (3),
                 * keyAgreement            (4),
                 * keyCertSign             (5),
                 * cRLSign                 (6),
                 * encipherOnly            (7),
                 * decipherOnly            (8) }
                 * </pre>
                 * RFC 3280 recommends that when used, this be marked
                 * as a critical extension.
                 * @return the KeyUsage extension of this certificate, represented as
                 *  an array of booleans. The order of KeyUsage values in the array is
                 *  the same as in the above ASN.1 definition. The array will contain a
                 *  value for each KeyUsage defined above. If the KeyUsage list encoded
                 *  in the certificate is longer than the above list, it will not be
                 *  truncated. Returns null if this certificate does not
                 *  contain a KeyUsage extension.
                 */
                // @ts-ignore
                abstract getKeyUsage(): boolean[]
                /**
                 * Gets an unmodifiable list of Strings representing the OBJECT
                 * IDENTIFIERs of the {@code ExtKeyUsageSyntax} field of the
                 * extended key usage extension, (OID = 2.5.29.37).  It indicates
                 * one or more purposes for which the certified public key may be
                 * used, in addition to or in place of the basic purposes
                 * indicated in the key usage extension field.  The ASN.1
                 * definition for this is:
                 * <pre>
                 * ExtKeyUsageSyntax ::= SEQUENCE SIZE (1..MAX) OF KeyPurposeId
                 * KeyPurposeId ::= OBJECT IDENTIFIER
                 * </pre>
                 * Key purposes may be defined by any organization with a
                 * need. Object identifiers used to identify key purposes shall be
                 * assigned in accordance with IANA or ITU-T Rec. X.660 |
                 * ISO/IEC/ITU 9834-1.
                 * <p>
                 * This method was added to version 1.4 of the Java 2 Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation. Subclasses
                 * should override this method with a correct implementation.
                 * @return the ExtendedKeyUsage extension of this certificate,
                 *          as an unmodifiable list of object identifiers represented
                 *          as Strings. Returns null if this certificate does not
                 *          contain an ExtendedKeyUsage extension.
                 * @throws CertificateParsingException if the extension cannot be decoded
                 * @since 1.4
                 */
                // @ts-ignore
                getExtendedKeyUsage(): java.util.List<java.lang.String>
                /**
                 * Gets the certificate constraints path length from the
                 * critical {@code BasicConstraints} extension, (OID = 2.5.29.19).
                 * <p>
                 * The basic constraints extension identifies whether the subject
                 * of the certificate is a Certificate Authority (CA) and
                 * how deep a certification path may exist through that CA. The
                 * {@code pathLenConstraint} field (see below) is meaningful
                 * only if {@code cA} is set to TRUE. In this case, it gives the
                 * maximum number of CA certificates that may follow this certificate in a
                 * certification path. A value of zero indicates that only an end-entity
                 * certificate may follow in the path.
                 * <p>
                 * The ASN.1 definition for this is:
                 * <pre>
                 * BasicConstraints ::= SEQUENCE {
                 * cA                  BOOLEAN DEFAULT FALSE,
                 * pathLenConstraint   INTEGER (0..MAX) OPTIONAL }
                 * </pre>
                 * @return the value of {#code pathLenConstraint} if the
                 *  BasicConstraints extension is present in the certificate and the
                 *  subject of the certificate is a CA, otherwise -1.
                 *  If the subject of the certificate is a CA and
                 *  {@code pathLenConstraint} does not appear,
                 *  {@code Integer.MAX_VALUE} is returned to indicate that there is no
                 *  limit to the allowed length of the certification path.
                 */
                // @ts-ignore
                abstract getBasicConstraints(): int
                /**
                 * Gets an immutable collection of subject alternative names from the
                 * {@code SubjectAltName} extension, (OID = 2.5.29.17).
                 * <p>
                 * The ASN.1 definition of the {@code SubjectAltName} extension is:
                 * <pre>
                 * SubjectAltName ::= GeneralNames
                 * GeneralNames :: = SEQUENCE SIZE (1..MAX) OF GeneralName
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
                 * </pre>
                 * <p>
                 * If this certificate does not contain a {@code SubjectAltName}
                 * extension, {@code null} is returned. Otherwise, a
                 * {@code Collection} is returned with an entry representing each
                 * {@code GeneralName} included in the extension. Each entry is a
                 * {@code List} whose first entry is an {@code Integer}
                 * (the name type, 0-8) and whose second entry is a {@code String}
                 * or a byte array (the name, in string or ASN.1 DER encoded form,
                 * respectively).
                 * <p>
                 * <a href="http://www.ietf.org/rfc/rfc822.txt">RFC 822</a>, DNS, and URI
                 * names are returned as {@code String}s,
                 * using the well-established string formats for those types (subject to
                 * the restrictions included in RFC 3280). IPv4 address names are
                 * returned using dotted quad notation. IPv6 address names are returned
                 * in the form "a1:a2:...:a8", where a1-a8 are hexadecimal values
                 * representing the eight 16-bit pieces of the address. OID names are
                 * returned as {@code String}s represented as a series of nonnegative
                 * integers separated by periods. And directory names (distinguished names)
                 * are returned in <a href="http://www.ietf.org/rfc/rfc2253.txt">
                 * RFC 2253</a> string format. No standard string format is
                 * defined for otherNames, X.400 names, EDI party names, or any
                 * other type of names. They are returned as byte arrays
                 * containing the ASN.1 DER encoded form of the name.
                 * <p>
                 * Note that the {@code Collection} returned may contain more
                 * than one name of the same type. Also, note that the returned
                 * {@code Collection} is immutable and any entries containing byte
                 * arrays are cloned to protect against subsequent modifications.
                 * <p>
                 * This method was added to version 1.4 of the Java 2 Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation. Subclasses
                 * should override this method with a correct implementation.
                 * @return an immutable {#code Collection} of subject alternative
                 *  names (or {@code null})
                 * @throws CertificateParsingException if the extension cannot be decoded
                 * @since 1.4
                 */
                // @ts-ignore
                getSubjectAlternativeNames(): java.util.Collection<java.util.List<?>>
                /**
                 * Gets an immutable collection of issuer alternative names from the
                 * {@code IssuerAltName} extension, (OID = 2.5.29.18).
                 * <p>
                 * The ASN.1 definition of the {@code IssuerAltName} extension is:
                 * <pre>
                 * IssuerAltName ::= GeneralNames
                 * </pre>
                 * The ASN.1 definition of {@code GeneralNames} is defined
                 * in {@link #getSubjectAlternativeNames getSubjectAlternativeNames}.
                 * <p>
                 * If this certificate does not contain an {@code IssuerAltName}
                 * extension, {@code null} is returned. Otherwise, a
                 * {@code Collection} is returned with an entry representing each
                 * {@code GeneralName} included in the extension. Each entry is a
                 * {@code List} whose first entry is an {@code Integer}
                 * (the name type, 0-8) and whose second entry is a {@code String}
                 * or a byte array (the name, in string or ASN.1 DER encoded form,
                 * respectively). For more details about the formats used for each
                 * name type, see the {@code getSubjectAlternativeNames} method.
                 * <p>
                 * Note that the {@code Collection} returned may contain more
                 * than one name of the same type. Also, note that the returned
                 * {@code Collection} is immutable and any entries containing byte
                 * arrays are cloned to protect against subsequent modifications.
                 * <p>
                 * This method was added to version 1.4 of the Java 2 Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation. Subclasses
                 * should override this method with a correct implementation.
                 * @return an immutable {#code Collection} of issuer alternative
                 *  names (or {@code null})
                 * @throws CertificateParsingException if the extension cannot be decoded
                 * @since 1.4
                 */
                // @ts-ignore
                getIssuerAlternativeNames(): java.util.Collection<java.util.List<?>>
                /**
                 * Verifies that this certificate was signed using the
                 * private key that corresponds to the specified public key.
                 * This method uses the signature verification engine
                 * supplied by the specified provider. Note that the specified
                 * Provider object does not have to be registered in the provider list.
                 * This method was added to version 1.8 of the Java Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation.
                 * @param key the PublicKey used to carry out the verification.
                 * @param sigProvider the signature provider.
                 * @exception NoSuchAlgorithmException on unsupported signature
                 *  algorithms.
                 * @exception InvalidKeyException on incorrect key.
                 * @exception SignatureException on signature errors.
                 * @exception CertificateException on encoding errors.
                 * @exception UnsupportedOperationException if the method is not supported
                 * @since 1.8
                 */
                // @ts-ignore
                verify(key: java.security.PublicKey, sigProvider: java.security.Provider): void
            }
        }
    }
}
