declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace keyinfo {
                    /**
                     * A factory for creating {@link KeyInfo} objects from scratch or for
                     * unmarshalling a <code>KeyInfo</code> object from a corresponding XML
                     * representation.
                     * <p>Each instance of <code>KeyInfoFactory</code> supports a specific
                     * XML mechanism type. To create a <code>KeyInfoFactory</code>, call one of the
                     * static {@link #getInstance getInstance} methods, passing in the XML
                     * mechanism type desired, for example:
                     * <blockquote><code>
                     * KeyInfoFactory factory = KeyInfoFactory.getInstance("DOM");
                     * </code></blockquote>
                     * <p>The objects that this factory produces will be based
                     * on DOM and abide by the DOM interoperability requirements as defined in the
                     * <a href="../../../../../../technotes/guides/security/xmldsig/overview.html#DOM Mechanism Requirements">
                     * DOM Mechanism Requirements</a> section of the API overview. See the
                     * <a href="../../../../../../technotes/guides/security/xmldsig/overview.html#Service Provider">
                     * Service Providers</a> section of the API overview for a list of standard
                     * mechanism types.
                     * <p><code>KeyInfoFactory</code> implementations are registered and loaded
                     * using the {@link java.security.Provider} mechanism.
                     * For example, a service provider that supports the
                     * DOM mechanism would be specified in the <code>Provider</code> subclass as:
                     * <pre>
                     * put("KeyInfoFactory.DOM", "org.example.DOMKeyInfoFactory");
                     * </pre>
                     * <p>Also, the <code>XMLStructure</code>s that are created by this factory
                     * may contain state specific to the <code>KeyInfo</code> and are not
                     * intended to be reusable.
                     * <p>An implementation MUST minimally support the default mechanism type: DOM.
                     * <p>Note that a caller must use the same <code>KeyInfoFactory</code>
                     * instance to create the <code>XMLStructure</code>s of a particular
                     * <code>KeyInfo</code> object. The behavior is undefined if
                     * <code>XMLStructure</code>s from different providers or different mechanism
                     * types are used together.
                     * <p><b>Concurrent Access</b>
                     * <p>The static methods of this class are guaranteed to be thread-safe.
                     * Multiple threads may concurrently invoke the static methods defined in this
                     * class with no ill effects.
                     * <p>However, this is not true for the non-static methods defined by this
                     * class. Unless otherwise documented by a specific provider, threads that
                     * need to access a single <code>KeyInfoFactory</code> instance concurrently
                     * should synchronize amongst themselves and provide the necessary locking.
                     * Multiple threads each manipulating a different <code>KeyInfoFactory</code>
                     * instance need not synchronize.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     */
                    // @ts-ignore
                    class KeyInfoFactory extends java.lang.Object {
                        /**
                         * Default constructor, for invocation by subclasses.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Returns a <code>KeyInfoFactory</code> that supports the
                         * specified XML processing mechanism and representation type (ex: "DOM").
                         * <p>This method uses the standard JCA provider lookup mechanism to
                         * locate and instantiate a <code>KeyInfoFactory</code> implementation of
                         * the desired mechanism type. It traverses the list of registered security
                         * <code>Provider</code>s, starting with the most preferred
                         * <code>Provider</code>. A new <code>KeyInfoFactory</code> object
                         * from the first <code>Provider</code> that supports the specified
                         * mechanism is returned.
                         * <p> Note that the list of registered providers may be retrieved via
                         * the {@link Security#getProviders() Security.getProviders()} method.
                         * @param mechanismType the type of the XML processing mechanism and
                         *     representation. See the <a
                         *     href="../../../../../../technotes/guides/security/xmldsig/overview.html#Service Provider">
                         *     Service Providers</a> section of the API overview for a list of
                         *     standard mechanism types.
                         * @return a new <code>KeyInfoFactory</code>
                         * @throws NullPointerException if <code>mechanismType</code> is
                         *     <code>null</code>
                         * @throws NoSuchMechanismException if no <code>Provider</code> supports a
                         *     <code>KeyInfoFactory</code> implementation for the specified mechanism
                         * @see Provider
                         */
                        // @ts-ignore
                        getInstance(mechanismType: string): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        /**
                         * Returns a <code>KeyInfoFactory</code> that supports the
                         * requested XML processing mechanism and representation type (ex: "DOM"),
                         * as supplied by the specified provider. Note that the specified
                         * <code>Provider</code> object does not have to be registered in the
                         * provider list.
                         * @param mechanismType the type of the XML processing mechanism and
                         *     representation. See the <a
                         *     href="../../../../../../technotes/guides/security/xmldsig/overview.html#Service Provider">
                         *     Service Providers</a> section of the API overview for a list of
                         *     standard mechanism types.
                         * @param provider the <code>Provider</code> object
                         * @return a new <code>KeyInfoFactory</code>
                         * @throws NullPointerException if <code>mechanismType</code> or
                         *     <code>provider</code> are <code>null</code>
                         * @throws NoSuchMechanismException if a <code>KeyInfoFactory</code>
                         *     implementation for the specified mechanism is not available from the
                         *     specified <code>Provider</code> object
                         * @see Provider
                         */
                        // @ts-ignore
                        getInstance(mechanismType: string, provider: java.security.Provider): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        /**
                         * Returns a <code>KeyInfoFactory</code> that supports the
                         * requested XML processing mechanism and representation type (ex: "DOM"),
                         * as supplied by the specified provider. The specified provider must be
                         * registered in the security provider list.
                         * <p>Note that the list of registered providers may be retrieved via
                         * the {@link Security#getProviders() Security.getProviders()} method.
                         * @param mechanismType the type of the XML processing mechanism and
                         *     representation. See the <a
                         *     href="../../../../../../technotes/guides/security/xmldsig/overview.html#Service Provider">
                         *     Service Providers</a> section of the API overview for a list of
                         *     standard mechanism types.
                         * @param provider the string name of the provider
                         * @return a new <code>KeyInfoFactory</code>
                         * @throws NoSuchProviderException if the specified provider is not
                         *     registered in the security provider list
                         * @throws NullPointerException if <code>mechanismType</code> or
                         *     <code>provider</code> are <code>null</code>
                         * @throws NoSuchMechanismException if a <code>KeyInfoFactory</code>
                         *     implementation for the specified mechanism is not available from the
                         *     specified provider
                         * @see Provider
                         */
                        // @ts-ignore
                        getInstance(mechanismType: string, provider: string): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        /**
                         * Returns a <code>KeyInfoFactory</code> that supports the
                         * default XML processing mechanism and representation type ("DOM").
                         * <p>This method uses the standard JCA provider lookup mechanism to
                         * locate and instantiate a <code>KeyInfoFactory</code> implementation of
                         * the default mechanism type. It traverses the list of registered security
                         * <code>Provider</code>s, starting with the most preferred
                         * <code>Provider</code>.  A new <code>KeyInfoFactory</code> object
                         * from the first <code>Provider</code> that supports the DOM mechanism is
                         * returned.
                         * <p> Note that the list of registered providers may be retrieved via
                         * the {@link Security#getProviders() Security.getProviders()} method.
                         * @return a new <code>KeyInfoFactory</code>
                         * @throws NoSuchMechanismException if no <code>Provider</code> supports a
                         *     <code>KeyInfoFactory</code> implementation for the DOM mechanism
                         * @see Provider
                         */
                        // @ts-ignore
                        getInstance(): javax.xml.crypto.dsig.keyinfo.KeyInfoFactory
                        /**
                         * Returns the type of the XML processing mechanism and representation
                         * supported by this <code>KeyInfoFactory</code> (ex: "DOM")
                         * @return the XML processing mechanism type supported by this
                         *     <code>KeyInfoFactory</code>
                         */
                        // @ts-ignore
                        getMechanismType(): java.lang.String
                        /**
                         * Returns the provider of this <code>KeyInfoFactory</code>.
                         * @return the provider of this <code>KeyInfoFactory</code>
                         */
                        // @ts-ignore
                        getProvider(): java.security.Provider
                        /**
                         * Creates a <code>KeyInfo</code> containing the specified list of
                         * key information types.
                         * @param content a list of one or more {#link XMLStructure}s representing
                         *     key information types. The list is defensively copied to protect
                         *     against subsequent modification.
                         * @return a <code>KeyInfo</code>
                         * @throws NullPointerException if <code>content</code> is <code>null</code>
                         * @throws IllegalArgumentException if <code>content</code> is empty
                         * @throws ClassCastException if <code>content</code> contains any entries
                         *     that are not of type {#link XMLStructure}
                         */
                        // @ts-ignore
                        abstract newKeyInfo(content: Array): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        /**
                         * Creates a <code>KeyInfo</code> containing the specified list of key
                         * information types and optional id. The
                         * <code>id</code> parameter represents the value of an XML
                         * <code>ID</code> attribute and is useful for referencing
                         * the <code>KeyInfo</code> from other XML structures.
                         * @param content a list of one or more {#link XMLStructure}s representing
                         *     key information types. The list is defensively copied to protect
                         *     against subsequent modification.
                         * @param id the value of an XML <code>ID</code> (may be <code>null</code>)
                         * @return a <code>KeyInfo</code>
                         * @throws NullPointerException if <code>content</code> is <code>null</code>
                         * @throws IllegalArgumentException if <code>content</code> is empty
                         * @throws ClassCastException if <code>content</code> contains any entries
                         *     that are not of type {#link XMLStructure}
                         */
                        // @ts-ignore
                        abstract newKeyInfo(content: Array, id: string): javax.xml.crypto.dsig.keyinfo.KeyInfo
                        /**
                         * Creates a <code>KeyName</code> from the specified name.
                         * @param name the name that identifies the key
                         * @return a <code>KeyName</code>
                         * @throws NullPointerException if <code>name</code> is <code>null</code>
                         */
                        // @ts-ignore
                        abstract newKeyName(name: string): javax.xml.crypto.dsig.keyinfo.KeyName
                        /**
                         * Creates a <code>KeyValue</code> from the specified public key.
                         * @param key the public key
                         * @return a <code>KeyValue</code>
                         * @throws KeyException if the <code>key</code>'s algorithm is not
                         *     recognized or supported by this <code>KeyInfoFactory</code>
                         * @throws NullPointerException if <code>key</code> is <code>null</code>
                         */
                        // @ts-ignore
                        abstract newKeyValue(key: java.security.PublicKey): javax.xml.crypto.dsig.keyinfo.KeyValue
                        /**
                         * Creates a <code>PGPData</code> from the specified PGP public key
                         * identifier.
                         * @param keyId a PGP public key identifier as defined in <a href=
                         *     "http://www.ietf.org/rfc/rfc2440.txt">RFC 2440</a>, section 11.2.
                         *     The array is cloned to protect against subsequent modification.
                         * @return a <code>PGPData</code>
                         * @throws NullPointerException if <code>keyId</code> is <code>null</code>
                         * @throws IllegalArgumentException if the key id is not in the correct
                         *     format
                         */
                        // @ts-ignore
                        abstract newPGPData(keyId: number /*byte*/[]): javax.xml.crypto.dsig.keyinfo.PGPData
                        /**
                         * Creates a <code>PGPData</code> from the specified PGP public key
                         * identifier, and optional key material packet and list of external
                         * elements.
                         * @param keyId a PGP public key identifier as defined in <a href=
                         *     "http://www.ietf.org/rfc/rfc2440.txt">RFC 2440</a>, section 11.2.
                         *     The array is cloned to protect against subsequent modification.
                         * @param keyPacket a PGP key material packet as defined in <a href=
                         *     "http://www.ietf.org/rfc/rfc2440.txt">RFC 2440</a>, section 5.5.
                         *     The array is cloned to protect against subsequent modification. May
                         *     be <code>null</code>.
                         * @param other a list of {#link XMLStructure}s representing elements from
                         *     an external namespace. The list is defensively copied to protect
                         *     against subsequent modification. May be <code>null</code> or empty.
                         * @return a <code>PGPData</code>
                         * @throws NullPointerException if <code>keyId</code> is <code>null</code>
                         * @throws IllegalArgumentException if the <code>keyId</code> or
                         *     <code>keyPacket</code> is not in the correct format. For
                         *     <code>keyPacket</code>, the format of the packet header is
                         *     checked and the tag is verified that it is of type key material. The
                         *     contents and format of the packet body are not checked.
                         * @throws ClassCastException if <code>other</code> contains any
                         *     entries that are not of type {#link XMLStructure}
                         */
                        // @ts-ignore
                        abstract newPGPData(keyId: number /*byte*/[], keyPacket: number /*byte*/[], other: Array): javax.xml.crypto.dsig.keyinfo.PGPData
                        /**
                         * Creates a <code>PGPData</code> from the specified PGP key material
                         * packet and optional list of external elements.
                         * @param keyPacket a PGP key material packet as defined in <a href=
                         *     "http://www.ietf.org/rfc/rfc2440.txt">RFC 2440</a>, section 5.5.
                         *     The array is cloned to protect against subsequent modification.
                         * @param other a list of {#link XMLStructure}s representing elements from
                         *     an external namespace. The list is defensively copied to protect
                         *     against subsequent modification. May be <code>null</code> or empty.
                         * @return a <code>PGPData</code>
                         * @throws NullPointerException if <code>keyPacket</code> is
                         *     <code>null</code>
                         * @throws IllegalArgumentException if <code>keyPacket</code> is not in the
                         *     correct format. For <code>keyPacket</code>, the format of the packet
                         *     header is checked and the tag is verified that it is of type key
                         *     material. The contents and format of the packet body are not checked.
                         * @throws ClassCastException if <code>other</code> contains any
                         *     entries that are not of type {#link XMLStructure}
                         */
                        // @ts-ignore
                        abstract newPGPData(keyPacket: number /*byte*/[], other: Array): javax.xml.crypto.dsig.keyinfo.PGPData
                        /**
                         * Creates a <code>RetrievalMethod</code> from the specified URI.
                         * @param uri the URI that identifies the <code>KeyInfo</code> information
                         *     to be retrieved
                         * @return a <code>RetrievalMethod</code>
                         * @throws NullPointerException if <code>uri</code> is <code>null</code>
                         * @throws IllegalArgumentException if <code>uri</code> is not RFC 2396
                         *     compliant
                         */
                        // @ts-ignore
                        abstract newRetrievalMethod(uri: string): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                        /**
                         * Creates a <code>RetrievalMethod</code> from the specified parameters.
                         * @param uri the URI that identifies the <code>KeyInfo</code> information
                         *     to be retrieved
                         * @param type a URI that identifies the type of <code>KeyInfo</code>
                         *     information to be retrieved (may be <code>null</code>)
                         * @param transforms a list of {#link Transform}s. The list is defensively
                         *     copied to protect against subsequent modification. May be
                         *     <code>null</code> or empty.
                         * @return a <code>RetrievalMethod</code>
                         * @throws NullPointerException if <code>uri</code> is <code>null</code>
                         * @throws IllegalArgumentException if <code>uri</code> is not RFC 2396
                         *     compliant
                         * @throws ClassCastException if <code>transforms</code> contains any
                         *     entries that are not of type {#link Transform}
                         */
                        // @ts-ignore
                        abstract newRetrievalMethod(uri: string, type: string, transforms: Array): javax.xml.crypto.dsig.keyinfo.RetrievalMethod
                        /**
                         * Creates a <code>X509Data</code> containing the specified list of
                         * X.509 content.
                         * @param content a list of one or more X.509 content types. Valid types are
                         *     {#link String} (subject names), <code>byte[]</code> (subject key ids),
                         *     {@link java.security.cert.X509Certificate}, {@link X509CRL},
                         *     or {@link XMLStructure} ({@link X509IssuerSerial}
                         *     objects or elements from an external namespace). Subject names are
                         *     distinguished names in RFC 2253 String format. Implementations MUST
                         *     support the attribute type keywords defined in RFC 2253 (CN, L, ST,
                         *     O, OU, C, STREET, DC and UID). Implementations MAY support additional
                         *     keywords. The list is defensively copied to protect against
                         *     subsequent modification.
                         * @return a <code>X509Data</code>
                         * @throws NullPointerException if <code>content</code> is <code>null</code>
                         * @throws IllegalArgumentException if <code>content</code> is empty, or
                         *     if a subject name is not RFC 2253 compliant or one of the attribute
                         *     type keywords is not recognized.
                         * @throws ClassCastException if <code>content</code> contains any entries
                         *     that are not of one of the valid types mentioned above
                         */
                        // @ts-ignore
                        abstract newX509Data(content: Array): javax.xml.crypto.dsig.keyinfo.X509Data
                        /**
                         * Creates an <code>X509IssuerSerial</code> from the specified X.500 issuer
                         * distinguished name and serial number.
                         * @param issuerName the issuer's distinguished name in RFC 2253 String
                         *     format. Implementations MUST support the attribute type keywords
                         *     defined in RFC 2253 (CN, L, ST, O, OU, C, STREET, DC and UID).
                         *     Implementations MAY support additional keywords.
                         * @param serialNumber the serial number
                         * @return an <code>X509IssuerSerial</code>
                         * @throws NullPointerException if <code>issuerName</code> or
                         *     <code>serialNumber</code> are <code>null</code>
                         * @throws IllegalArgumentException if the issuer name is not RFC 2253
                         *     compliant or one of the attribute type keywords is not recognized.
                         */
                        // @ts-ignore
                        abstract newX509IssuerSerial(issuerName: string, serialNumber: java.math.BigInteger): javax.xml.crypto.dsig.keyinfo.X509IssuerSerial
                        /**
                         * Indicates whether a specified feature is supported.
                         * @param feature the feature name (as an absolute URI)
                         * @return <code>true</code> if the specified feature is supported,
                         *     <code>false</code> otherwise
                         * @throws NullPointerException if <code>feature</code> is <code>null</code>
                         */
                        // @ts-ignore
                        abstract isFeatureSupported(feature: string): boolean
                        /**
                         * Returns a reference to the <code>URIDereferencer</code> that is used by
                         * default to dereference URIs in {@link RetrievalMethod} objects.
                         * @return a reference to the default <code>URIDereferencer</code>
                         */
                        // @ts-ignore
                        abstract getURIDereferencer(): javax.xml.crypto.URIDereferencer
                        /**
                         * Unmarshals a new <code>KeyInfo</code> instance from a
                         * mechanism-specific <code>XMLStructure</code> (ex: {@link DOMStructure})
                         * instance.
                         * @param xmlStructure a mechanism-specific XML structure from which to
                         *    unmarshal the keyinfo from
                         * @return the <code>KeyInfo</code>
                         * @throws NullPointerException if <code>xmlStructure</code> is
                         *    <code>null</code>
                         * @throws ClassCastException if the type of <code>xmlStructure</code> is
                         *    inappropriate for this factory
                         * @throws MarshalException if an unrecoverable exception occurs during
                         *    unmarshalling
                         */
                        // @ts-ignore
                        abstract unmarshalKeyInfo(xmlStructure: javax.xml.crypto.XMLStructure): javax.xml.crypto.dsig.keyinfo.KeyInfo
                    }
                }
            }
        }
    }
}