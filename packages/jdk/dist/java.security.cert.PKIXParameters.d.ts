declare namespace java {
    namespace security {
        namespace cert {
            /**
             * Parameters used as input for the PKIX {@code CertPathValidator}
             * algorithm.
             * <p>
             * A PKIX {@code CertPathValidator} uses these parameters to
             * validate a {@code CertPath} according to the PKIX certification path
             * validation algorithm.
             * <p>To instantiate a {@code PKIXParameters} object, an
             * application must specify one or more <i>most-trusted CAs</i> as defined by
             * the PKIX certification path validation algorithm. The most-trusted CAs
             * can be specified using one of two constructors. An application
             * can call {@link #PKIXParameters(Set) PKIXParameters(Set)},
             * specifying a {@code Set} of {@code TrustAnchor} objects, each
             * of which identify a most-trusted CA. Alternatively, an application can call
             * {@link #PKIXParameters(KeyStore) PKIXParameters(KeyStore)}, specifying a
             * {@code KeyStore} instance containing trusted certificate entries, each
             * of which will be considered as a most-trusted CA.
             * <p>
             * Once a {@code PKIXParameters} object has been created, other parameters
             * can be specified (by calling {@link #setInitialPolicies setInitialPolicies}
             * or {@link #setDate setDate}, for instance) and then the
             * {@code PKIXParameters} is passed along with the {@code CertPath}
             * to be validated to {@link CertPathValidator#validate
             * CertPathValidator.validate}.
             * <p>
             * Any parameter that is not set (or is set to {@code null}) will
             * be set to the default value for that parameter. The default value for the
             * {@code date} parameter is {@code null}, which indicates
             * the current time when the path is validated. The default for the
             * remaining parameters is the least constrained.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @see CertPathValidator
             * @since 1.4
             * @author Sean Mullan
             * @author Yassir Elley
             */
            // @ts-ignore
            class PKIXParameters extends java.lang.Object implements java.security.cert.CertPathParameters {
                /**
                 * Creates an instance of {@code PKIXParameters} with the specified
                 * {@code Set} of most-trusted CAs. Each element of the
                 * set is a {@link TrustAnchor TrustAnchor}.
                 * <p>
                 * Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 * @param trustAnchors a {#code Set} of {@code TrustAnchor}s
                 * @throws InvalidAlgorithmParameterException if the specified
                 *  {#code Set} is empty {@code (trustAnchors.isEmpty() == true)}
                 * @throws NullPointerException if the specified {#code Set} is
                 *  {@code null}
                 * @throws ClassCastException if any of the elements in the {#code Set}
                 *  are not of type {@code java.security.cert.TrustAnchor}
                 */
                // @ts-ignore
                constructor(trustAnchors: Array<java.security.cert.TrustAnchor>)
                /**
                 * Creates an instance of {@code PKIXParameters} that
                 * populates the set of most-trusted CAs from the trusted
                 * certificate entries contained in the specified {@code KeyStore}.
                 * Only keystore entries that contain trusted {@code X509Certificates}
                 * are considered; all other certificate types are ignored.
                 * @param keystore a {#code KeyStore} from which the set of
                 *  most-trusted CAs will be populated
                 * @throws KeyStoreException if the keystore has not been initialized
                 * @throws InvalidAlgorithmParameterException if the keystore does
                 *  not contain at least one trusted certificate entry
                 * @throws NullPointerException if the keystore is {#code null}
                 */
                // @ts-ignore
                constructor(keystore: java.security.KeyStore)
                /**
                 * Returns an immutable {@code Set} of the most-trusted
                 * CAs.
                 * @return an immutable {#code Set} of {@code TrustAnchor}s
                 *  (never {@code null})
                 * @see #setTrustAnchors
                 */
                // @ts-ignore
                getTrustAnchors(): java.util.Set<java.security.cert.TrustAnchor>
                /**
                 * Sets the {@code Set} of most-trusted CAs.
                 * <p>
                 * Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 * @param trustAnchors a {#code Set} of {@code TrustAnchor}s
                 * @throws InvalidAlgorithmParameterException if the specified
                 *  {#code Set} is empty {@code (trustAnchors.isEmpty() == true)}
                 * @throws NullPointerException if the specified {#code Set} is
                 *  {@code null}
                 * @throws ClassCastException if any of the elements in the set
                 *  are not of type {#code java.security.cert.TrustAnchor}
                 * @see #getTrustAnchors
                 */
                // @ts-ignore
                setTrustAnchors(trustAnchors: Array<java.security.cert.TrustAnchor>): void
                /**
                 * Returns an immutable {@code Set} of initial
                 * policy identifiers (OID strings), indicating that any one of these
                 * policies would be acceptable to the certificate user for the purposes of
                 * certification path processing. The default return value is an empty
                 * {@code Set}, which is interpreted as meaning that any policy would
                 * be acceptable.
                 * @return an immutable {#code Set} of initial policy OIDs in
                 *  {@code String} format, or an empty {@code Set} (implying any
                 *  policy is acceptable). Never returns {@code null}.
                 * @see #setInitialPolicies
                 */
                // @ts-ignore
                getInitialPolicies(): java.util.Set<java.lang.String>
                /**
                 * Sets the {@code Set} of initial policy identifiers
                 * (OID strings), indicating that any one of these
                 * policies would be acceptable to the certificate user for the purposes of
                 * certification path processing. By default, any policy is acceptable
                 * (i.e. all policies), so a user that wants to allow any policy as
                 * acceptable does not need to call this method, or can call it
                 * with an empty {@code Set} (or {@code null}).
                 * <p>
                 * Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 * @param initialPolicies a {#code Set} of initial policy
                 *  OIDs in {@code String} format (or {@code null})
                 * @throws ClassCastException if any of the elements in the set are
                 *  not of type {#code String}
                 * @see #getInitialPolicies
                 */
                // @ts-ignore
                setInitialPolicies(initialPolicies: Array<java.lang.String>): void
                /**
                 * Sets the list of {@code CertStore}s to be used in finding
                 * certificates and CRLs. May be {@code null}, in which case
                 * no {@code CertStore}s will be used. The first
                 * {@code CertStore}s in the list may be preferred to those that
                 * appear later.
                 * <p>
                 * Note that the {@code List} is copied to protect against
                 * subsequent modifications.
                 * @param stores a {#code List} of {@code CertStore}s (or
                 *  {@code null})
                 * @throws ClassCastException if any of the elements in the list are
                 *  not of type {#code java.security.cert.CertStore}
                 * @see #getCertStores
                 */
                // @ts-ignore
                setCertStores(stores: Array<java.security.cert.CertStore>): void
                /**
                 * Adds a {@code CertStore} to the end of the list of
                 * {@code CertStore}s used in finding certificates and CRLs.
                 * @param store the {#code CertStore} to add. If {@code null},
                 *  the store is ignored (not added to list).
                 */
                // @ts-ignore
                addCertStore(store: java.security.cert.CertStore): void
                /**
                 * Returns an immutable {@code List} of {@code CertStore}s that
                 * are used to find certificates and CRLs.
                 * @return an immutable {#code List} of {@code CertStore}s
                 *  (may be empty, but never {@code null})
                 * @see #setCertStores
                 */
                // @ts-ignore
                getCertStores(): java.util.List<java.security.cert.CertStore>
                /**
                 * Sets the RevocationEnabled flag. If this flag is true, the default
                 * revocation checking mechanism of the underlying PKIX service provider
                 * will be used. If this flag is false, the default revocation checking
                 * mechanism will be disabled (not used).
                 * <p>
                 * When a {@code PKIXParameters} object is created, this flag is set
                 * to true. This setting reflects the most common strategy for checking
                 * revocation, since each service provider must support revocation
                 * checking to be PKIX compliant. Sophisticated applications should set
                 * this flag to false when it is not practical to use a PKIX service
                 * provider's default revocation checking mechanism or when an alternative
                 * revocation checking mechanism is to be substituted (by also calling the
                 * {@link #addCertPathChecker addCertPathChecker} or {@link
                 * #setCertPathCheckers setCertPathCheckers} methods).
                 * @param val the new value of the RevocationEnabled flag
                 */
                // @ts-ignore
                setRevocationEnabled(val: boolean): void
                /**
                 * Checks the RevocationEnabled flag. If this flag is true, the default
                 * revocation checking mechanism of the underlying PKIX service provider
                 * will be used. If this flag is false, the default revocation checking
                 * mechanism will be disabled (not used). See the {@link
                 * #setRevocationEnabled setRevocationEnabled} method for more details on
                 * setting the value of this flag.
                 * @return the current value of the RevocationEnabled flag
                 */
                // @ts-ignore
                isRevocationEnabled(): boolean
                /**
                 * Sets the ExplicitPolicyRequired flag. If this flag is true, an
                 * acceptable policy needs to be explicitly identified in every certificate.
                 * By default, the ExplicitPolicyRequired flag is false.
                 * @param val {#code true} if explicit policy is to be required,
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                setExplicitPolicyRequired(val: boolean): void
                /**
                 * Checks if explicit policy is required. If this flag is true, an
                 * acceptable policy needs to be explicitly identified in every certificate.
                 * By default, the ExplicitPolicyRequired flag is false.
                 * @return {#code true} if explicit policy is required,
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                isExplicitPolicyRequired(): boolean
                /**
                 * Sets the PolicyMappingInhibited flag. If this flag is true, policy
                 * mapping is inhibited. By default, policy mapping is not inhibited (the
                 * flag is false).
                 * @param val {#code true} if policy mapping is to be inhibited,
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                setPolicyMappingInhibited(val: boolean): void
                /**
                 * Checks if policy mapping is inhibited. If this flag is true, policy
                 * mapping is inhibited. By default, policy mapping is not inhibited (the
                 * flag is false).
                 * @return true if policy mapping is inhibited, false otherwise
                 */
                // @ts-ignore
                isPolicyMappingInhibited(): boolean
                /**
                 * Sets state to determine if the any policy OID should be processed
                 * if it is included in a certificate. By default, the any policy OID
                 * is not inhibited ({@link #isAnyPolicyInhibited isAnyPolicyInhibited()}
                 * returns {@code false}).
                 * @param val {#code true} if the any policy OID is to be
                 *  inhibited, {@code false} otherwise
                 */
                // @ts-ignore
                setAnyPolicyInhibited(val: boolean): void
                /**
                 * Checks whether the any policy OID should be processed if it
                 * is included in a certificate.
                 * @return {#code true} if the any policy OID is inhibited,
                 *  {@code false} otherwise
                 */
                // @ts-ignore
                isAnyPolicyInhibited(): boolean
                /**
                 * Sets the PolicyQualifiersRejected flag. If this flag is true,
                 * certificates that include policy qualifiers in a certificate
                 * policies extension that is marked critical are rejected.
                 * If the flag is false, certificates are not rejected on this basis.
                 * <p> When a {@code PKIXParameters} object is created, this flag is
                 * set to true. This setting reflects the most common (and simplest)
                 * strategy for processing policy qualifiers. Applications that want to use
                 * a more sophisticated policy must set this flag to false.
                 * <p>
                 * Note that the PKIX certification path validation algorithm specifies
                 * that any policy qualifier in a certificate policies extension that is
                 * marked critical must be processed and validated. Otherwise the
                 * certification path must be rejected. If the policyQualifiersRejected flag
                 * is set to false, it is up to the application to validate all policy
                 * qualifiers in this manner in order to be PKIX compliant.
                 * @param qualifiersRejected the new value of the PolicyQualifiersRejected
                 *  flag
                 * @see #getPolicyQualifiersRejected
                 * @see PolicyQualifierInfo
                 */
                // @ts-ignore
                setPolicyQualifiersRejected(qualifiersRejected: boolean): void
                /**
                 * Gets the PolicyQualifiersRejected flag. If this flag is true,
                 * certificates that include policy qualifiers in a certificate policies
                 * extension that is marked critical are rejected.
                 * If the flag is false, certificates are not rejected on this basis.
                 * <p> When a {@code PKIXParameters} object is created, this flag is
                 * set to true. This setting reflects the most common (and simplest)
                 * strategy for processing policy qualifiers. Applications that want to use
                 * a more sophisticated policy must set this flag to false.
                 * @return the current value of the PolicyQualifiersRejected flag
                 * @see #setPolicyQualifiersRejected
                 */
                // @ts-ignore
                getPolicyQualifiersRejected(): boolean
                /**
                 * Returns the time for which the validity of the certification path
                 * should be determined. If {@code null}, the current time is used.
                 * <p>
                 * Note that the {@code Date} returned is copied to protect against
                 * subsequent modifications.
                 * @return the {#code Date}, or {@code null} if not set
                 * @see #setDate
                 */
                // @ts-ignore
                getDate(): java.util.Date
                /**
                 * Sets the time for which the validity of the certification path
                 * should be determined. If {@code null}, the current time is used.
                 * <p>
                 * Note that the {@code Date} supplied here is copied to protect
                 * against subsequent modifications.
                 * @param date the {#code Date}, or {@code null} for the
                 *  current time
                 * @see #getDate
                 */
                // @ts-ignore
                setDate(date: java.util.Date): void
                /**
                 * Sets a {@code List} of additional certification path checkers. If
                 * the specified {@code List} contains an object that is not a
                 * {@code PKIXCertPathChecker}, it is ignored.
                 * <p>
                 * Each {@code PKIXCertPathChecker} specified implements
                 * additional checks on a certificate. Typically, these are checks to
                 * process and verify private extensions contained in certificates.
                 * Each {@code PKIXCertPathChecker} should be instantiated with any
                 * initialization parameters needed to execute the check.
                 * <p>
                 * This method allows sophisticated applications to extend a PKIX
                 * {@code CertPathValidator} or {@code CertPathBuilder}.
                 * Each of the specified {@code PKIXCertPathChecker}s will be called,
                 * in turn, by a PKIX {@code CertPathValidator} or
                 * {@code CertPathBuilder} for each certificate processed or
                 * validated.
                 * <p>
                 * Regardless of whether these additional {@code PKIXCertPathChecker}s
                 * are set, a PKIX {@code CertPathValidator} or
                 * {@code CertPathBuilder} must perform all of the required PKIX
                 * checks on each certificate. The one exception to this rule is if the
                 * RevocationEnabled flag is set to false (see the {@link
                 * #setRevocationEnabled setRevocationEnabled} method).
                 * <p>
                 * Note that the {@code List} supplied here is copied and each
                 * {@code PKIXCertPathChecker} in the list is cloned to protect
                 * against subsequent modifications.
                 * @param checkers a {#code List} of {@code PKIXCertPathChecker}s.
                 *  May be {@code null}, in which case no additional checkers will be
                 *  used.
                 * @throws ClassCastException if any of the elements in the list
                 *  are not of type {#code java.security.cert.PKIXCertPathChecker}
                 * @see #getCertPathCheckers
                 */
                // @ts-ignore
                setCertPathCheckers(checkers: Array<java.security.cert.PKIXCertPathChecker>): void
                /**
                 * Returns the {@code List} of certification path checkers.
                 * The returned {@code List} is immutable, and each
                 * {@code PKIXCertPathChecker} in the {@code List} is cloned
                 * to protect against subsequent modifications.
                 * @return an immutable {#code List} of
                 *  {@code PKIXCertPathChecker}s (may be empty, but not
                 *  {@code null})
                 * @see #setCertPathCheckers
                 */
                // @ts-ignore
                getCertPathCheckers(): java.util.List<java.security.cert.PKIXCertPathChecker>
                /**
                 * Adds a {@code PKIXCertPathChecker} to the list of certification
                 * path checkers. See the {@link #setCertPathCheckers setCertPathCheckers}
                 * method for more details.
                 * <p>
                 * Note that the {@code PKIXCertPathChecker} is cloned to protect
                 * against subsequent modifications.
                 * @param checker a {#code PKIXCertPathChecker} to add to the list of
                 *  checks. If {@code null}, the checker is ignored (not added to list).
                 */
                // @ts-ignore
                addCertPathChecker(checker: java.security.cert.PKIXCertPathChecker): void
                /**
                 * Returns the signature provider's name, or {@code null}
                 * if not set.
                 * @return the signature provider's name (or {#code null})
                 * @see #setSigProvider
                 */
                // @ts-ignore
                getSigProvider(): java.lang.String
                /**
                 * Sets the signature provider's name. The specified provider will be
                 * preferred when creating {@link java.security.Signature Signature}
                 * objects. If {@code null} or not set, the first provider found
                 * supporting the algorithm will be used.
                 * @param sigProvider the signature provider's name (or {#code null})
                 * @see #getSigProvider
                 */
                // @ts-ignore
                setSigProvider(sigProvider: string): void
                /**
                 * Returns the required constraints on the target certificate.
                 * The constraints are returned as an instance of {@code CertSelector}.
                 * If {@code null}, no constraints are defined.
                 * <p>Note that the {@code CertSelector} returned is cloned
                 * to protect against subsequent modifications.
                 * @return a {#code CertSelector} specifying the constraints
                 *  on the target certificate (or {@code null})
                 * @see #setTargetCertConstraints
                 */
                // @ts-ignore
                getTargetCertConstraints(): java.security.cert.CertSelector
                /**
                 * Sets the required constraints on the target certificate.
                 * The constraints are specified as an instance of
                 * {@code CertSelector}. If {@code null}, no constraints are
                 * defined.
                 * <p>Note that the {@code CertSelector} specified is cloned
                 * to protect against subsequent modifications.
                 * @param selector a {#code CertSelector} specifying the constraints
                 *  on the target certificate (or {@code null})
                 * @see #getTargetCertConstraints
                 */
                // @ts-ignore
                setTargetCertConstraints(selector: java.security.cert.CertSelector): void
                /**
                 * Makes a copy of this {@code PKIXParameters} object. Changes
                 * to the copy will not affect the original and vice versa.
                 * @return a copy of this {#code PKIXParameters} object
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Returns a formatted string describing the parameters.
                 * @return a formatted string describing the parameters.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}