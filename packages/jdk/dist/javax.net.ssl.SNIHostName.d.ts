declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * Instances of this class represent a server name of type
             * {@link StandardConstants#SNI_HOST_NAME host_name} in a Server Name
             * Indication (SNI) extension.
             * <P>
             * As described in section 3, "Server Name Indication", of
             * <A HREF="http://www.ietf.org/rfc/rfc6066.txt">TLS Extensions (RFC 6066)</A>,
             * "HostName" contains the fully qualified DNS hostname of the server, as
             * understood by the client.  The encoded server name value of a hostname is
             * represented as a byte string using ASCII encoding without a trailing dot.
             * This allows the support of Internationalized Domain Names (IDN) through
             * the use of A-labels (the ASCII-Compatible Encoding (ACE) form of a valid
             * string of Internationalized Domain Names for Applications (IDNA)) defined
             * in <A HREF="http://www.ietf.org/rfc/rfc5890.txt">RFC 5890</A>.
             * <P>
             * Note that {@code SNIHostName} objects are immutable.
             * @see SNIServerName
             * @see StandardConstants#SNI_HOST_NAME
             * @since 1.8
             */
            // @ts-ignore
            class SNIHostName extends javax.net.ssl.SNIServerName {
                /**
                 * Creates an {@code SNIHostName} using the specified hostname.
                 * <P>
                 * Note that per <A HREF="http://www.ietf.org/rfc/rfc6066.txt">RFC 6066</A>,
                 * the encoded server name value of a hostname is
                 * {@link StandardCharsets#US_ASCII}-compliant.  In this method,
                 * {@code hostname} can be a user-friendly Internationalized Domain Name
                 * (IDN).  {@link IDN#toASCII(String, int)} is used to enforce the
                 * restrictions on ASCII characters in hostnames (see
                 * <A HREF="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</A>,
                 * <A HREF="http://www.ietf.org/rfc/rfc1122.txt">RFC 1122</A>,
                 * <A HREF="http://www.ietf.org/rfc/rfc1123.txt">RFC 1123</A>) and
                 * translate the {@code hostname} into ASCII Compatible Encoding (ACE), as:
                 * <pre>
                 * IDN.toASCII(hostname, IDN.USE_STD3_ASCII_RULES);
                 * </pre>
                 * <P>
                 * The {@code hostname} argument is illegal if it:
                 * <ul>
                 * <li> {@code hostname} is empty,</li>
                 * <li> {@code hostname} ends with a trailing dot,</li>
                 * <li> {@code hostname} is not a valid Internationalized
                 * Domain Name (IDN) compliant with the RFC 3490 specification.</li>
                 * </ul>
                 * @param hostname
                 *          the hostname of this server name
                 * @throws NullPointerException if {#code hostname} is {@code null}
                 * @throws IllegalArgumentException if {#code hostname} is illegal
                 */
                // @ts-ignore
                constructor(hostname: string)
                /**
                 * Creates an {@code SNIHostName} using the specified encoded value.
                 * <P>
                 * This method is normally used to parse the encoded name value in a
                 * requested SNI extension.
                 * <P>
                 * Per <A HREF="http://www.ietf.org/rfc/rfc6066.txt">RFC 6066</A>,
                 * the encoded name value of a hostname is
                 * {@link StandardCharsets#US_ASCII}-compliant.  However, in the previous
                 * version of the SNI extension (
                 * <A HREF="http://www.ietf.org/rfc/rfc4366.txt">RFC 4366</A>),
                 * the encoded hostname is represented as a byte string using UTF-8
                 * encoding.  For the purpose of version tolerance, this method allows
                 * that the charset of {@code encoded} argument can be
                 * {@link StandardCharsets#UTF_8}, as well as
                 * {@link StandardCharsets#US_ASCII}.  {@link IDN#toASCII(String)} is used
                 * to translate the {@code encoded} argument into ASCII Compatible
                 * Encoding (ACE) hostname.
                 * <P>
                 * It is strongly recommended that this constructor is only used to parse
                 * the encoded name value in a requested SNI extension.  Otherwise, to
                 * comply with <A HREF="http://www.ietf.org/rfc/rfc6066.txt">RFC 6066</A>,
                 * please always use {@link StandardCharsets#US_ASCII}-compliant charset
                 * and enforce the restrictions on ASCII characters in hostnames (see
                 * <A HREF="http://www.ietf.org/rfc/rfc3490.txt">RFC 3490</A>,
                 * <A HREF="http://www.ietf.org/rfc/rfc1122.txt">RFC 1122</A>,
                 * <A HREF="http://www.ietf.org/rfc/rfc1123.txt">RFC 1123</A>)
                 * for {@code encoded} argument, or use
                 * {@link SNIHostName#SNIHostName(String)} instead.
                 * <P>
                 * The {@code encoded} argument is illegal if it:
                 * <ul>
                 * <li> {@code encoded} is empty,</li>
                 * <li> {@code encoded} ends with a trailing dot,</li>
                 * <li> {@code encoded} is not encoded in
                 * {@link StandardCharsets#US_ASCII} or
                 * {@link StandardCharsets#UTF_8}-compliant charset,</li>
                 * <li> {@code encoded} is not a valid Internationalized
                 * Domain Name (IDN) compliant with the RFC 3490 specification.</li>
                 * </ul>
                 * <P>
                 * Note that the {@code encoded} byte array is cloned
                 * to protect against subsequent modification.
                 * @param encoded
                 *          the encoded hostname of this server name
                 * @throws NullPointerException if {#code encoded} is {@code null}
                 * @throws IllegalArgumentException if {#code encoded} is illegal
                 */
                // @ts-ignore
                constructor(encoded: number /*byte*/[])
                /**
                 * Returns the {@link StandardCharsets#US_ASCII}-compliant hostname of
                 * this {@code SNIHostName} object.
                 * <P>
                 * Note that, per
                 * <A HREF="http://www.ietf.org/rfc/rfc6066.txt">RFC 6066</A>, the
                 * returned hostname may be an internationalized domain name that
                 * contains A-labels. See
                 * <A HREF="http://www.ietf.org/rfc/rfc5890.txt">RFC 5890</A>
                 * for more information about the detailed A-label specification.
                 * @return the {#link StandardCharsets#US_ASCII}-compliant hostname
                 *          of this {@code SNIHostName} object
                 */
                // @ts-ignore
                getAsciiName(): java.lang.String
                /**
                 * Compares this server name to the specified object.
                 * <P>
                 * Per <A HREF="http://www.ietf.org/rfc/rfc6066.txt">RFC 6066</A>, DNS
                 * hostnames are case-insensitive.  Two server hostnames are equal if,
                 * and only if, they have the same name type, and the hostnames are
                 * equal in a case-independent comparison.
                 * @param other
                 *          the other server name object to compare with.
                 * @return true if, and only if, the {#code other} is considered
                 *          equal to this instance
                 */
                // @ts-ignore
                equals(other: any): boolean
                /**
                 * Returns a hash code value for this {@code SNIHostName}.
                 * <P>
                 * The hash code value is generated using the case-insensitive hostname
                 * of this {@code SNIHostName}.
                 * @return a hash code value for this {#code SNIHostName}.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string representation of the object, including the DNS
                 * hostname in this {@code SNIHostName} object.
                 * <P>
                 * The exact details of the representation are unspecified and subject
                 * to change, but the following may be regarded as typical:
                 * <pre>
                 * "type=host_name (0), value={@literal <hostname>}"
                 * </pre>
                 * The "{@literal <hostname>}" is an ASCII representation of the hostname,
                 * which may contains A-labels.  For example, a returned value of an pseudo
                 * hostname may look like:
                 * <pre>
                 * "type=host_name (0), value=www.example.com"
                 * </pre>
                 * or
                 * <pre>
                 * "type=host_name (0), value=xn--fsqu00a.xn--0zwm56d"
                 * </pre>
                 * <P>
                 * Please NOTE that the exact details of the representation are unspecified
                 * and subject to change.
                 * @return a string representation of the object.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Creates an {@link SNIMatcher} object for {@code SNIHostName}s.
                 * <P>
                 * This method can be used by a server to verify the acceptable
                 * {@code SNIHostName}s.  For example,
                 * <pre>
                 * SNIMatcher matcher =
                 * SNIHostName.createSNIMatcher("www\\.example\\.com");
                 * </pre>
                 * will accept the hostname "www.example.com".
                 * <pre>
                 * SNIMatcher matcher =
                 * SNIHostName.createSNIMatcher("www\\.example\\.(com|org)");
                 * </pre>
                 * will accept hostnames "www.example.com" and "www.example.org".
                 * @param regex
                 *          the <a href="{#docRoot}/java/util/regex/Pattern.html#sum">
                 *          regular expression pattern</a>
                 *          representing the hostname(s) to match
                 * @return a {#code SNIMatcher} object for {@code SNIHostName}s
                 * @throws NullPointerException if {#code regex} is
                 *          {@code null}
                 * @throws java.util.regex.PatternSyntaxException if the regular expression's
                 *          syntax is invalid
                 */
                // @ts-ignore
                createSNIMatcher(regex: string): javax.net.ssl.SNIMatcher
            }
        }
    }
}
