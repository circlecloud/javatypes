declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                /**
                 * This class encapsulates a Kerberos principal.
                 * @author Mayank Upadhyay
                 * @since 1.4
                 */
                // @ts-ignore
                class KerberosPrincipal extends java.lang.Object implements java.security.Principal, java.io.Serializable {
                    /**
                     * Constructs a KerberosPrincipal from the provided string input. The
                     * name type for this  principal defaults to
                     * {@link #KRB_NT_PRINCIPAL KRB_NT_PRINCIPAL}
                     * This string is assumed to contain a name in the format
                     * that is specified in Section 2.1.1. (Kerberos Principal Name Form) of
                     * <a href=http://www.ietf.org/rfc/rfc1964.txt> RFC 1964 </a>
                     * (for example, <i>duke@FOO.COM</i>, where <i>duke</i>
                     * represents a principal, and <i>FOO.COM</i> represents a realm).
                     * <p>If the input name does not contain a realm, the default realm
                     * is used. The default realm can be specified either in a Kerberos
                     * configuration file or via the java.security.krb5.realm
                     * system property. For more information,
                     * <a href="../../../../../technotes/guides/security/jgss/tutorials/index.html">
                     * Kerberos Requirements </a>
                     * @param name the principal name
                     * @throws IllegalArgumentException if name is improperly
                     *  formatted, if name is null, or if name does not contain
                     *  the realm to use and the default realm is not specified
                     *  in either a Kerberos configuration file or via the
                     *  java.security.krb5.realm system property.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Constructs a KerberosPrincipal from the provided string and
                     * name type input.  The string is assumed to contain a name in the
                     * format that is specified in Section 2.1 (Mandatory Name Forms) of
                     * <a href=http://www.ietf.org/rfc/rfc1964.txt>RFC 1964</a>.
                     * Valid name types are specified in Section 6.2 (Principal Names) of
                     * <a href=http://www.ietf.org/rfc/rfc4120.txt>RFC 4120</a>.
                     * The input name must be consistent with the provided name type.
                     * (for example, <i>duke@FOO.COM</i>, is a valid input string for the
                     * name type, KRB_NT_PRINCIPAL where <i>duke</i>
                     * represents a principal, and <i>FOO.COM</i> represents a realm).
                     * <p> If the input name does not contain a realm, the default realm
                     * is used. The default realm can be specified either in a Kerberos
                     * configuration file or via the java.security.krb5.realm
                     * system property. For more information, see
                     * <a href="../../../../../technotes/guides/security/jgss/tutorials/index.html">
                     * Kerberos Requirements</a>.
                     * @param name the principal name
                     * @param nameType the name type of the principal
                     * @throws IllegalArgumentException if name is improperly
                     *  formatted, if name is null, if the nameType is not supported,
                     *  or if name does not contain the realm to use and the default
                     *  realm is not specified in either a Kerberos configuration
                     *  file or via the java.security.krb5.realm system property.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, nameType: number /*int*/)
                    /**
                     * unknown name type.
                     */
                    // @ts-ignore
                    public static readonly KRB_NT_UNKNOWN: number /*int*/
                    /**
                     * user principal name type.
                     */
                    // @ts-ignore
                    public static readonly KRB_NT_PRINCIPAL: number /*int*/
                    /**
                     * service and other unique instance (krbtgt) name type.
                     */
                    // @ts-ignore
                    public static readonly KRB_NT_SRV_INST: number /*int*/
                    /**
                     * service with host name as instance (telnet, rcommands) name type.
                     */
                    // @ts-ignore
                    public static readonly KRB_NT_SRV_HST: number /*int*/
                    /**
                     * service with host as remaining components name type.
                     */
                    // @ts-ignore
                    public static readonly KRB_NT_SRV_XHST: number /*int*/
                    /**
                     * unique ID name type.
                     */
                    // @ts-ignore
                    public static readonly KRB_NT_UID: number /*int*/
                    /**
                     * Returns the realm component of this Kerberos principal.
                     * @return the realm component of this Kerberos principal.
                     */
                    // @ts-ignore
                    public getRealm(): string
                    /**
                     * Returns a hashcode for this principal. The hash code is defined to
                     * be the result of the following  calculation:
                     * <pre>{@code
                     * hashCode = getName().hashCode();
                     * }</pre>
                     * @return a hashCode() for the {#code KerberosPrincipal}
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Compares the specified Object with this Principal for equality.
                     * Returns true if the given object is also a
                     * {@code KerberosPrincipal} and the two
                     * {@code KerberosPrincipal} instances are equivalent.
                     * More formally two {@code KerberosPrincipal} instances are equal
                     * if the values returned by {@code getName()} are equal.
                     * @param other the Object to compare to
                     * @return true if the Object passed in represents the same principal
                     *  as this one, false otherwise.
                     */
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    /**
                     * The returned string corresponds to the single-string
                     * representation of a Kerberos Principal name as specified in
                     * Section 2.1 of <a href=http://www.ietf.org/rfc/rfc1964.txt>RFC 1964</a>.
                     * @return the principal name.
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Returns the name type of the KerberosPrincipal. Valid name types
                     * are specified in Section 6.2 of
                     * <a href=http://www.ietf.org/rfc/rfc4120.txt> RFC4120</a>.
                     * @return the name type.
                     */
                    // @ts-ignore
                    public getNameType(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
