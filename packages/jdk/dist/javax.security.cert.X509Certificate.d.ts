declare namespace javax {
    namespace security {
        namespace cert {
            /**
             * Abstract class for X.509 v1 certificates. This provides a standard
             * way to access all the version 1 attributes of an X.509 certificate.
             * Attributes that are specific to X.509 v2 or v3 are not available
             * through this interface. Future API evolution will provide full access to
             * complete X.509 v3 attributes.
             * <p>
             * The basic X.509 format was defined by
             * ISO/IEC and ANSI X9 and is described below in ASN.1:
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
             * }
             * </pre>
             * <p>
             * Here is sample code to instantiate an X.509 certificate:
             * <pre>
             * InputStream inStream = new FileInputStream("fileName-of-cert");
             * X509Certificate cert = X509Certificate.getInstance(inStream);
             * inStream.close();
             * </pre>
             * OR
             * <pre>
             * byte[] certData = &lt;certificate read from a file, say&gt;
             * X509Certificate cert = X509Certificate.getInstance(certData);
             * </pre>
             * <p>
             * In either case, the code that instantiates an X.509 certificate
             * consults the value of the {@code cert.provider.x509v1} security property
             * to locate the actual implementation or instantiates a default implementation.
             * <p>
             * The {@code cert.provider.x509v1} property is set to a default
             * implementation for X.509 such as:
             * <pre>
             * cert.provider.x509v1=com.sun.security.cert.internal.x509.X509V1CertImpl
             * </pre>
             * <p>
             * The value of this {@code cert.provider.x509v1} property has to be
             * changed to instantiate another implementation. If this security
             * property is not set, a default implementation will be used.
             * Currently, due to possible security restrictions on access to
             * Security properties, this value is looked up and cached at class
             * initialization time and will fallback on a default implementation if
             * the Security property is not accessible.
             * <p><em>Note: The classes in the package {@code javax.security.cert}
             * exist for compatibility with earlier versions of the
             * Java Secure Sockets Extension (JSSE). New applications should instead
             * use the standard Java SE certificate classes located in
             * {@code java.security.cert}.</em></p>
             * @author Hemma Prafullchandra
             * @since 1.4
             * @see Certificate
             * @see java.security.cert.X509Extension
             * @see java.security.Security security properties
             */
            // @ts-ignore
            class X509Certificate extends javax.security.cert.Certificate {
                // @ts-ignore
                constructor()
                /**
                 * Instantiates an X509Certificate object, and initializes it with
                 * the data read from the input stream {@code inStream}.
                 * The implementation (X509Certificate is an abstract class) is
                 * provided by the class specified as the value of the
                 * {@code cert.provider.x509v1} security property.
                 * <p>Note: Only one DER-encoded
                 * certificate is expected to be in the input stream.
                 * Also, all X509Certificate
                 * subclasses must provide a constructor of the form:
                 * <pre>{@code
                 * public <subClass>(InputStream inStream) ...
                 * }</pre>
                 * @param inStream an input stream with the data to be read to
                 *         initialize the certificate.
                 * @return an X509Certificate object initialized with the data
                 *          from the input stream.
                 * @exception CertificateException if a class initialization
                 *             or certificate parsing error occurs.
                 */
                // @ts-ignore
                getInstance(inStream: java.io.InputStream): javax.security.cert.X509Certificate
                /**
                 * Instantiates an X509Certificate object, and initializes it with
                 * the specified byte array.
                 * The implementation (X509Certificate is an abstract class) is
                 * provided by the class specified as the value of the
                 * {@code cert.provider.x509v1} security property.
                 * <p>Note: All X509Certificate
                 * subclasses must provide a constructor of the form:
                 * <pre>{@code
                 * public <subClass>(InputStream inStream) ...
                 * }</pre>
                 * @param certData a byte array containing the DER-encoded
                 *         certificate.
                 * @return an X509Certificate object initialized with the data
                 *          from {#code certData}.
                 * @exception CertificateException if a class initialization
                 *             or certificate parsing error occurs.
                 */
                // @ts-ignore
                getInstance(certData: number /*byte*/[]): javax.security.cert.X509Certificate
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
                 *             yet valid.
                 */
                // @ts-ignore
                abstract checkValidity(): void
                /**
                 * Checks that the specified date is within the certificate's
                 * validity period. In other words, this determines whether the
                 * certificate would be valid at the specified date/time.
                 * @param date the Date to check against to see if this certificate
                 *         is valid at that date/time.
                 * @exception CertificateExpiredException if the certificate has expired
                 *             with respect to the {#code date} supplied.
                 * @exception CertificateNotYetValidException if the certificate is not
                 *             yet valid with respect to the {#code date} supplied.
                 * @see #checkValidity()
                 */
                // @ts-ignore
                abstract checkValidity(date: java.util.Date): void
                /**
                 * Gets the {@code version} (version number) value from the
                 * certificate. The ASN.1 definition for this is:
                 * <pre>
                 * version         [0]  EXPLICIT Version DEFAULT v1
                 * Version  ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
                 * </pre>
                 * @return the version number from the ASN.1 encoding, i.e. 0, 1 or 2.
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
                 * attributes, such as country name, and corresponding values, such as US.
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
                 * Gets the {@code subject} (subject distinguished name) value
                 * from the certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * subject    Name
                 * </pre>
                 * <p>See {@link #getIssuerDN() getIssuerDN} for {@code Name}
                 * and other relevant definitions.
                 * @return a Principal whose name is the subject name.
                 * @see #getIssuerDN()
                 */
                // @ts-ignore
                abstract getSubjectDN(): java.security.Principal
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
                 * @see #checkValidity()
                 */
                // @ts-ignore
                abstract getNotBefore(): java.util.Date
                /**
                 * Gets the {@code notAfter} date from the validity period of
                 * the certificate. See {@link #getNotBefore() getNotBefore}
                 * for relevant ASN.1 definitions.
                 * @return the end date of the validity period.
                 * @see #checkValidity()
                 */
                // @ts-ignore
                abstract getNotAfter(): java.util.Date
                /**
                 * Gets the signature algorithm name for the certificate
                 * signature algorithm. An example is the string "SHA-1/DSA".
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
                 * An OID is represented by a set of positive whole numbers separated
                 * by periods.
                 * For example, the string "1.2.840.10040.4.3" identifies the SHA-1
                 * with DSA signature algorithm, as per the PKIX part I.
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
                 * <p>See {@link #getSigAlgName() getSigAlgName} for
                 * relevant ASN.1 definitions.
                 * @return the DER-encoded signature algorithm parameters, or
                 *          null if no parameters are present.
                 */
                // @ts-ignore
                abstract getSigAlgParams(): byte[]
            }
        }
    }
}