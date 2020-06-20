declare namespace javax {
    namespace naming {
        namespace ldap {
            /**
             * This class represents a relative distinguished name, or RDN, which is a
             * component of a distinguished name as specified by
             * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>.
             * An example of an RDN is "OU=Sales+CN=J.Smith". In this example,
             * the RDN consist of multiple attribute type/value pairs. The
             * RDN is parsed as described in the class description for
             * {@link javax.naming.ldap.LdapName <tt>LdapName</tt>}.
             * <p>
             * The Rdn class represents an RDN as attribute type/value mappings,
             * which can be viewed using
             * {@link javax.naming.directory.Attributes Attributes}.
             * In addition, it contains convenience methods that allow easy retrieval
             * of type and value when the Rdn consist of a single type/value pair,
             * which is how it appears in a typical usage.
             * It also contains helper methods that allow escaping of the unformatted
             * attribute value and unescaping of the value formatted according to the
             * escaping syntax defined in RFC2253. For methods that take or return
             * attribute value as an Object, the value is either a String
             * (in unescaped form) or a byte array.
             * <p>
             * <code>Rdn</code> will properly parse all valid RDNs, but
             * does not attempt to detect all possible violations when parsing
             * invalid RDNs. It is "generous" in accepting invalid RDNs.
             * The "validity" of a name is determined ultimately when it
             * is supplied to an LDAP server, which may accept or
             * reject the name based on factors such as its schema information
             * and interoperability considerations.
             * <p>
             * The following code example shows how to construct an Rdn using the
             * constructor that takes type and value as arguments:
             * <pre>
             * Rdn rdn = new Rdn("cn", "Juicy, Fruit");
             * System.out.println(rdn.toString());
             * </pre>
             * The last line will print <tt>cn=Juicy\, Fruit</tt>. The
             * {@link #unescapeValue(String) <tt>unescapeValue()</tt>} method can be
             * used to unescape the escaped comma resulting in the original
             * value <tt>"Juicy, Fruit"</tt>. The {@link #escapeValue(Object)
             * <tt>escapeValue()</tt>} method adds the escape back preceding the comma.
             * <p>
             * This class can be instantiated by a string representation
             * of the RDN defined in RFC 2253 as shown in the following code example:
             * <pre>
             * Rdn rdn = new Rdn("cn=Juicy\\, Fruit");
             * System.out.println(rdn.toString());
             * </pre>
             * The last line will print <tt>cn=Juicy\, Fruit</tt>.
             * <p>
             * Concurrent multithreaded read-only access of an instance of
             * <tt>Rdn</tt> need not be synchronized.
             * <p>
             * Unless otherwise noted, the behavior of passing a null argument
             * to a constructor or method in this class will cause NullPointerException
             * to be thrown.
             * @since 1.5
             */
            // @ts-ignore
            class Rdn extends java.lang.Object implements java.io.Serializable, java.lang.Comparable<java.lang.Object> {
                /**
                 * Constructs an Rdn from the given attribute set. See
                 * {@link javax.naming.directory.Attributes Attributes}.
                 * <p>
                 * The string attribute values are not interpreted as
                 * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>
                 * formatted RDN strings. That is, the values are used
                 * literally (not parsed) and assumed to be unescaped.
                 * @param attrSet The non-null and non-empty attributes containing
                 *  type/value mappings.
                 * @throws InvalidNameException If contents of <tt>attrSet</tt> cannot
                 *           be used to construct a valid RDN.
                 */
                // @ts-ignore
                constructor(attrSet: javax.naming.directory.Attributes)
                /**
                 * Constructs an Rdn from the given string.
                 * This constructor takes a string formatted according to the rules
                 * defined in <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>
                 * and described in the class description for
                 * {@link javax.naming.ldap.LdapName}.
                 * @param rdnString The non-null and non-empty RFC2253 formatted string.
                 * @throws InvalidNameException If a syntax error occurs during
                 *                   parsing of the rdnString.
                 */
                // @ts-ignore
                constructor(rdnString: string)
                /**
                 * Constructs an Rdn from the given <tt>rdn</tt>.
                 * The contents of the <tt>rdn</tt> are simply copied into the newly
                 * created Rdn.
                 * @param rdn The non-null Rdn to be copied.
                 */
                // @ts-ignore
                constructor(rdn: javax.naming.ldap.Rdn)
                /**
                 * Constructs an Rdn from the given attribute type and
                 * value.
                 * The string attribute values are not interpreted as
                 * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>
                 * formatted RDN strings. That is, the values are used
                 * literally (not parsed) and assumed to be unescaped.
                 * @param type The non-null and non-empty string attribute type.
                 * @param value The non-null and non-empty attribute value.
                 * @throws InvalidNameException If type/value cannot be used to
                 *                   construct a valid RDN.
                 * @see #toString()
                 */
                // @ts-ignore
                constructor(type: string, value: any)
                /**
                 * Retrieves one of this Rdn's value.
                 * This is a convenience method for obtaining the value,
                 * when the RDN contains a single type and value mapping,
                 * which is the common RDN usage.
                 * <p>
                 * For a multi-valued RDN, this method returns value corresponding
                 * to the type returned by {@link #getType() getType()} method.
                 * @return The non-null attribute value.
                 */
                // @ts-ignore
                getValue(): java.lang.Object
                /**
                 * Retrieves one of this Rdn's type.
                 * This is a convenience method for obtaining the type,
                 * when the RDN contains a single type and value mapping,
                 * which is the common RDN usage.
                 * <p>
                 * For a multi-valued RDN, the type/value pairs have
                 * no specific order defined on them. In that case, this method
                 * returns type of one of the type/value pairs.
                 * The {@link #getValue() getValue()} method returns the
                 * value corresponding to the type returned by this method.
                 * @return The non-null attribute type.
                 */
                // @ts-ignore
                getType(): java.lang.String
                /**
                 * Returns this Rdn as a string represented in a format defined by
                 * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a> and described
                 * in the class description for {@link javax.naming.ldap.LdapName LdapName}.
                 * @return The string representation of the Rdn.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Compares this Rdn with the specified Object for order.
                 * Returns a negative integer, zero, or a positive integer as this
                 * Rdn is less than, equal to, or greater than the given Object.
                 * <p>
                 * If obj is null or not an instance of Rdn, ClassCastException
                 * is thrown.
                 * <p>
                 * The attribute type and value pairs of the RDNs are lined up
                 * against each other and compared lexicographically. The order of
                 * components in multi-valued Rdns (such as "ou=Sales+cn=Bob") is not
                 * significant.
                 * @param obj The non-null object to compare against.
                 * @return A negative integer, zero, or a positive integer as this Rdn
                 *           is less than, equal to, or greater than the given Object.
                 * @exception ClassCastException if obj is null or not a Rdn.
                 */
                // @ts-ignore
                compareTo(obj: any): int
                /**
                 * Compares the specified Object with this Rdn for equality.
                 * Returns true if the given object is also a Rdn and the two Rdns
                 * represent the same attribute type and value mappings. The order of
                 * components in multi-valued Rdns (such as "ou=Sales+cn=Bob") is not
                 * significant.
                 * <p>
                 * Type and value equality matching is done as below:
                 * <ul>
                 * <li> The types are compared for equality with their case ignored.
                 * <li> String values with different but equivalent usage of quoting,
                 * escaping, or UTF8-hex-encoding are considered equal.
                 * The case of the values is ignored during the comparison.
                 * </ul>
                 * <p>
                 * If obj is null or not an instance of Rdn, false is returned.
                 * <p>
                 * @param obj object to be compared for equality with this Rdn.
                 * @return true if the specified object is equal to this Rdn.
                 * @see #hashCode()
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns the hash code of this RDN. Two RDNs that are
                 * equal (according to the equals method) will have the same
                 * hash code.
                 * @return An int representing the hash code of this Rdn.
                 * @see #equals
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Retrieves the {@link javax.naming.directory.Attributes Attributes}
                 * view of the type/value mappings contained in this Rdn.
                 * @return The non-null attributes containing the type/value
                 *           mappings of this Rdn.
                 */
                // @ts-ignore
                toAttributes(): javax.naming.directory.Attributes
                /**
                 * Retrieves the number of attribute type/value pairs in this Rdn.
                 * @return The non-negative number of type/value pairs in this Rdn.
                 */
                // @ts-ignore
                size(): int
                /**
                 * Given the value of an attribute, returns a string escaped according
                 * to the rules specified in
                 * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>.
                 * <p>
                 * For example, if the val is "Sue, Grabbit and Runn", the escaped
                 * value returned by this method is "Sue\, Grabbit and Runn".
                 * <p>
                 * A string value is represented as a String and binary value
                 * as a byte array.
                 * @param val The non-null object to be escaped.
                 * @return Escaped string value.
                 * @throws ClassCastException if val is is not a String or byte array.
                 */
                // @ts-ignore
                escapeValue(val: any): java.lang.String
                /**
                 * Given an attribute value string formated according to the rules
                 * specified in
                 * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a>,
                 * returns the unformated value.  Escapes and quotes are
                 * stripped away, and hex-encoded UTF-8 is converted to equivalent
                 * UTF-16 characters. Returns a string value as a String, and a
                 * binary value as a byte array.
                 * <p>
                 * Legal and illegal values are defined in RFC 2253.
                 * This method is generous in accepting the values and does not
                 * catch all illegal values.
                 * Therefore, passing in an illegal value might not necessarily
                 * trigger an <tt>IllegalArgumentException</tt>.
                 * @param val     The non-null string to be unescaped.
                 * @return Unescaped value.
                 * @throws IllegalArgumentException When an Illegal value
                 *                   is provided.
                 */
                // @ts-ignore
                unescapeValue(val: string): java.lang.Object
            }
        }
    }
}
