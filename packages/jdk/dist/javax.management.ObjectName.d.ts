declare namespace javax {
    namespace management {
        /**
         * <p>Represents the object name of an MBean, or a pattern that can
         * match the names of several MBeans.  Instances of this class are
         * immutable.</p>
         * <p>An instance of this class can be used to represent:</p>
         * <ul>
         * <li>An object name</li>
         * <li>An object name pattern, within the context of a query</li>
         * </ul>
         * <p>An object name consists of two parts, the domain and the key
         * properties.</p>
         * <p>The <em>domain</em> is a string of characters not including
         * the character colon (<code>:</code>).  It is recommended that the domain
         * should not contain the string "{@code //}", which is reserved for future use.
         * <p>If the domain includes at least one occurrence of the wildcard
         * characters asterisk (<code>*</code>) or question mark
         * (<code>?</code>), then the object name is a pattern.  The asterisk
         * matches any sequence of zero or more characters, while the question
         * mark matches any single character.</p>
         * <p>If the domain is empty, it will be replaced in certain contexts
         * by the <em>default domain</em> of the MBean server in which the
         * ObjectName is used.</p>
         * <p>The <em>key properties</em> are an unordered set of keys and
         * associated values.</p>
         * <p>Each <em>key</em> is a nonempty string of characters which may
         * not contain any of the characters comma (<code>,</code>), equals
         * (<code>=</code>), colon, asterisk, or question mark.  The same key
         * may not occur twice in a given ObjectName.</p>
         * <p>Each <em>value</em> associated with a key is a string of
         * characters that is either unquoted or quoted.</p>
         * <p>An <em>unquoted value</em> is a possibly empty string of
         * characters which may not contain any of the characters comma,
         * equals, colon, or quote.</p>
         * <p>If the <em>unquoted value</em> contains at least one occurrence
         * of the wildcard characters asterisk or question mark, then the object
         * name is a <em>property value pattern</em>. The asterisk matches any
         * sequence of zero or more characters, while the question mark matches
         * any single character.</p>
         * <p>A <em>quoted value</em> consists of a quote (<code>"</code>),
         * followed by a possibly empty string of characters, followed by
         * another quote.  Within the string of characters, the backslash
         * (<code>\</code>) has a special meaning.  It must be followed by
         * one of the following characters:</p>
         * <ul>
         * <li>Another backslash.  The second backslash has no special
         * meaning and the two characters represent a single backslash.</li>
         * <li>The character 'n'.  The two characters represent a newline
         * ('\n' in Java).</li>
         * <li>A quote.  The two characters represent a quote, and that quote
         * is not considered to terminate the quoted value. An ending closing
         * quote must be present for the quoted value to be valid.</li>
         * <li>A question mark (?) or asterisk (*).  The two characters represent
         * a question mark or asterisk respectively.</li>
         * </ul>
         * <p>A quote may not appear inside a quoted value except immediately
         * after an odd number of consecutive backslashes.</p>
         * <p>The quotes surrounding a quoted value, and any backslashes
         * within that value, are considered to be part of the value.</p>
         * <p>If the <em>quoted value</em> contains at least one occurrence of
         * the characters asterisk or question mark and they are not preceded
         * by a backslash, then they are considered as wildcard characters and
         * the object name is a <em>property value pattern</em>. The asterisk
         * matches any sequence of zero or more characters, while the question
         * mark matches any single character.</p>
         * <p>An ObjectName may be a <em>property list pattern</em>. In this
         * case it may have zero or more keys and associated values. It matches
         * a nonpattern ObjectName whose domain matches and that contains the
         * same keys and associated values, as well as possibly other keys and
         * values.</p>
         * <p>An ObjectName is a <em>property value pattern</em> when at least
         * one of its <em>quoted</em> or <em>unquoted</em> key property values
         * contains the wildcard characters asterisk or question mark as described
         * above. In this case it has one or more keys and associated values, with
         * at least one of the values containing wildcard characters. It matches a
         * nonpattern ObjectName whose domain matches and that contains the same
         * keys whose values match; if the property value pattern is also a
         * property list pattern then the nonpattern ObjectName can contain
         * other keys and values.</p>
         * <p>An ObjectName is a <em>property pattern</em> if it is either a
         * <em>property list pattern</em> or a <em>property value pattern</em>
         * or both.</p>
         * <p>An ObjectName is a pattern if its domain contains a wildcard or
         * if the ObjectName is a property pattern.</p>
         * <p>If an ObjectName is not a pattern, it must contain at least one
         * key with its associated value.</p>
         * <p>Examples of ObjectName patterns are:</p>
         * <ul>
         * <li>{@code *:type=Foo,name=Bar} to match names in any domain whose
         * exact set of keys is {@code type=Foo,name=Bar}.</li>
         * <li>{@code d:type=Foo,name=Bar,*} to match names in the domain
         * {@code d} that have the keys {@code type=Foo,name=Bar} plus
         * zero or more other keys.</li>
         * <li>{@code *:type=Foo,name=Bar,*} to match names in any domain
         * that has the keys {@code type=Foo,name=Bar} plus zero or
         * more other keys.</li>
         * <li>{@code d:type=F?o,name=Bar} will match e.g.
         * {@code d:type=Foo,name=Bar} and {@code d:type=Fro,name=Bar}.</li>
         * <li>{@code d:type=F*o,name=Bar} will match e.g.
         * {@code d:type=Fo,name=Bar} and {@code d:type=Frodo,name=Bar}.</li>
         * <li>{@code d:type=Foo,name="B*"} will match e.g.
         * {@code d:type=Foo,name="Bling"}. Wildcards are recognized even
         * inside quotes, and like other special characters can be escaped
         * with {@code \}.</li>
         * </ul>
         * <p>An ObjectName can be written as a String with the following
         * elements in order:</p>
         * <ul>
         * <li>The domain.
         * <li>A colon (<code>:</code>).
         * <li>A key property list as defined below.
         * </ul>
         * <p>A key property list written as a String is a comma-separated
         * list of elements.  Each element is either an asterisk or a key
         * property.  A key property consists of a key, an equals
         * (<code>=</code>), and the associated value.</p>
         * <p>At most one element of a key property list may be an asterisk.
         * If the key property list contains an asterisk element, the
         * ObjectName is a property list pattern.</p>
         * <p>Spaces have no special significance in a String representing an
         * ObjectName.  For example, the String:
         * <pre>
         * domain: key1 = value1 , key2 = value2
         * </pre>
         * represents an ObjectName with two keys.  The name of each key
         * contains six characters, of which the first and last are spaces.
         * The value associated with the key <code>"&nbsp;key1&nbsp;"</code>
         * also begins and ends with a space.
         * <p>In addition to the restrictions on characters spelt out above,
         * no part of an ObjectName may contain a newline character
         * (<code>'\n'</code>), whether the domain, a key, or a value, whether
         * quoted or unquoted.  The newline character can be represented in a
         * quoted value with the sequence <code>\n</code>.
         * <p>The rules on special characters and quoting apply regardless of
         * which constructor is used to make an ObjectName.</p>
         * <p>To avoid collisions between MBeans supplied by different
         * vendors, a useful convention is to begin the domain name with the
         * reverse DNS name of the organization that specifies the MBeans,
         * followed by a period and a string whose interpretation is
         * determined by that organization.  For example, MBeans specified by
         * <code>example.com</code>  would have
         * domains such as <code>com.example.MyDomain</code>.  This is essentially
         * the same convention as for Java-language package names.</p>
         * <p>The <b>serialVersionUID</b> of this class is <code>1081892073854801359L</code>.
         * @since 1.5
         */
        // @ts-ignore
        class ObjectName extends java.lang.Object implements java.lang.Comparable<javax.management.ObjectName>, javax.management.QueryExp {
            /**
             * Construct an object name from the given string.
             * @param name  A string representation of the object name.
             * @exception MalformedObjectNameException The string passed as a
             *  parameter does not have the right format.
             * @exception NullPointerException The <code>name</code> parameter
             *  is null.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Construct an object name with exactly one key property.
             * @param domain  The domain part of the object name.
             * @param key  The attribute in the key property of the object name.
             * @param value The value in the key property of the object name.
             * @exception MalformedObjectNameException The
             *  <code>domain</code>, <code>key</code>, or <code>value</code>
             *  contains an illegal character, or <code>value</code> does not
             *  follow the rules for quoting.
             * @exception NullPointerException One of the parameters is null.
             */
            // @ts-ignore
            constructor(domain: string, key: string, value: string)
            /**
             * Construct an object name with several key properties from a Hashtable.
             * @param domain  The domain part of the object name.
             * @param table A hash table containing one or more key
             *  properties.  The key of each entry in the table is the key of a
             *  key property in the object name.  The associated value in the
             *  table is the associated value in the object name.
             * @exception MalformedObjectNameException The <code>domain</code>
             *  contains an illegal character, or one of the keys or values in
             *  <code>table</code> contains an illegal character, or one of the
             *  values in <code>table</code> does not follow the rules for
             *  quoting.
             * @exception NullPointerException One of the parameters is null.
             */
            // @ts-ignore
            constructor(domain: string, table: java.util.Hashtable<java.lang.String, java.lang.String>)
            /**
             * Defines the wildcard "*:*" ObjectName.
             * @since 1.6
             */
            // @ts-ignore
            readonly WILDCARD: javax.management.ObjectName
            /**
             * <p>Return an instance of ObjectName that can be used anywhere
             * an object obtained with {@link #ObjectName(String) new
             * ObjectName(name)} can be used.  The returned object may be of
             * a subclass of ObjectName.  Calling this method twice with the
             * same parameters may return the same object or two equal but
             * not identical objects.</p>
             * @param name  A string representation of the object name.
             * @return an ObjectName corresponding to the given String.
             * @exception MalformedObjectNameException The string passed as a
             *  parameter does not have the right format.
             * @exception NullPointerException The <code>name</code> parameter
             *  is null.
             */
            // @ts-ignore
            getInstance(name: string): javax.management.ObjectName
            /**
             * <p>Return an instance of ObjectName that can be used anywhere
             * an object obtained with {@link #ObjectName(String, String,
             * String) new ObjectName(domain, key, value)} can be used.  The
             * returned object may be of a subclass of ObjectName.  Calling
             * this method twice with the same parameters may return the same
             * object or two equal but not identical objects.</p>
             * @param domain  The domain part of the object name.
             * @param key  The attribute in the key property of the object name.
             * @param value The value in the key property of the object name.
             * @return an ObjectName corresponding to the given domain,
             *  key, and value.
             * @exception MalformedObjectNameException The
             *  <code>domain</code>, <code>key</code>, or <code>value</code>
             *  contains an illegal character, or <code>value</code> does not
             *  follow the rules for quoting.
             * @exception NullPointerException One of the parameters is null.
             */
            // @ts-ignore
            getInstance(domain: string, key: string, value: string): javax.management.ObjectName
            /**
             * <p>Return an instance of ObjectName that can be used anywhere
             * an object obtained with {@link #ObjectName(String, Hashtable)
             * new ObjectName(domain, table)} can be used.  The returned
             * object may be of a subclass of ObjectName.  Calling this method
             * twice with the same parameters may return the same object or
             * two equal but not identical objects.</p>
             * @param domain  The domain part of the object name.
             * @param table A hash table containing one or more key
             *  properties.  The key of each entry in the table is the key of a
             *  key property in the object name.  The associated value in the
             *  table is the associated value in the object name.
             * @return an ObjectName corresponding to the given domain and
             *  key mappings.
             * @exception MalformedObjectNameException The <code>domain</code>
             *  contains an illegal character, or one of the keys or values in
             *  <code>table</code> contains an illegal character, or one of the
             *  values in <code>table</code> does not follow the rules for
             *  quoting.
             * @exception NullPointerException One of the parameters is null.
             */
            // @ts-ignore
            getInstance(domain: string, table: java.util.Hashtable<java.lang.String, java.lang.String>): javax.management.ObjectName
            /**
             * <p>Return an instance of ObjectName that can be used anywhere
             * the given object can be used.  The returned object may be of a
             * subclass of ObjectName.  If <code>name</code> is of a subclass
             * of ObjectName, it is not guaranteed that the returned object
             * will be of the same class.</p>
             * <p>The returned value may or may not be identical to
             * <code>name</code>.  Calling this method twice with the same
             * parameters may return the same object or two equal but not
             * identical objects.</p>
             * <p>Since ObjectName is immutable, it is not usually useful to
             * make a copy of an ObjectName.  The principal use of this method
             * is to guard against a malicious caller who might pass an
             * instance of a subclass with surprising behavior to sensitive
             * code.  Such code can call this method to obtain an ObjectName
             * that is known not to have surprising behavior.</p>
             * @param name an instance of the ObjectName class or of a subclass
             * @return an instance of ObjectName or a subclass that is known to
             *  have the same semantics.  If <code>name</code> respects the
             *  semantics of ObjectName, then the returned object is equal
             *  (though not necessarily identical) to <code>name</code>.
             * @exception NullPointerException The <code>name</code> is null.
             */
            // @ts-ignore
            getInstance(name: javax.management.ObjectName): javax.management.ObjectName
            /**
             * Checks whether the object name is a pattern.
             * <p>
             * An object name is a pattern if its domain contains a
             * wildcard or if the object name is a property pattern.
             * @return True if the name is a pattern, otherwise false.
             */
            // @ts-ignore
            isPattern(): boolean
            /**
             * Checks whether the object name is a pattern on the domain part.
             * @return True if the name is a domain pattern, otherwise false.
             */
            // @ts-ignore
            isDomainPattern(): boolean
            /**
             * Checks whether the object name is a pattern on the key properties.
             * <p>
             * An object name is a pattern on the key properties if it is a
             * pattern on the key property list (e.g. "d:k=v,*") or on the
             * property values (e.g. "d:k=*") or on both (e.g. "d:k=*,*").
             * @return True if the name is a property pattern, otherwise false.
             */
            // @ts-ignore
            isPropertyPattern(): boolean
            /**
             * Checks whether the object name is a pattern on the key property list.
             * <p>
             * For example, "d:k=v,*" and "d:k=*,*" are key property list patterns
             * whereas "d:k=*" is not.
             * @return True if the name is a property list pattern, otherwise false.
             * @since 1.6
             */
            // @ts-ignore
            isPropertyListPattern(): boolean
            /**
             * Checks whether the object name is a pattern on the value part
             * of at least one of the key properties.
             * <p>
             * For example, "d:k=*" and "d:k=*,*" are property value patterns
             * whereas "d:k=v,*" is not.
             * @return True if the name is a property value pattern, otherwise false.
             * @since 1.6
             */
            // @ts-ignore
            isPropertyValuePattern(): boolean
            /**
             * Checks whether the value associated with a key in a key
             * property is a pattern.
             * @param property The property whose value is to be checked.
             * @return True if the value associated with the given key property
             *  is a pattern, otherwise false.
             * @exception NullPointerException If <code>property</code> is null.
             * @exception IllegalArgumentException If <code>property</code> is not
             *  a valid key property for this ObjectName.
             * @since 1.6
             */
            // @ts-ignore
            isPropertyValuePattern(property: string): boolean
            /**
             * <p>Returns the canonical form of the name; that is, a string
             * representation where the properties are sorted in lexical
             * order.</p>
             * <p>More precisely, the canonical form of the name is a String
             * consisting of the <em>domain part</em>, a colon
             * (<code>:</code>), the <em>canonical key property list</em>, and
             * a <em>pattern indication</em>.</p>
             * <p>The <em>canonical key property list</em> is the same string
             * as described for {@link #getCanonicalKeyPropertyListString()}.</p>
             * <p>The <em>pattern indication</em> is:
             * <ul>
             * <li>empty for an ObjectName
             * that is not a property list pattern;
             * <li>an asterisk for an ObjectName
             * that is a property list pattern with no keys; or
             * <li>a comma and an
             * asterisk (<code>,*</code>) for an ObjectName that is a property
             * list pattern with at least one key.
             * </ul>
             * @return The canonical form of the name.
             */
            // @ts-ignore
            getCanonicalName(): java.lang.String
            /**
             * Returns the domain part.
             * @return The domain.
             */
            // @ts-ignore
            getDomain(): java.lang.String
            /**
             * Obtains the value associated with a key in a key property.
             * @param property The property whose value is to be obtained.
             * @return The value of the property, or null if there is no such
             *  property in this ObjectName.
             * @exception NullPointerException If <code>property</code> is null.
             */
            // @ts-ignore
            getKeyProperty(property: string): java.lang.String
            /**
             * <p>Returns the key properties as a Hashtable.  The returned
             * value is a Hashtable in which each key is a key in the
             * ObjectName's key property list and each value is the associated
             * value.</p>
             * <p>The returned value may be unmodifiable.  If it is
             * modifiable, changing it has no effect on this ObjectName.</p>
             * @return The table of key properties.
             */
            // @ts-ignore
            getKeyPropertyList(): java.util.Hashtable<java.lang.String, java.lang.String>
            /**
             * <p>Returns a string representation of the list of key
             * properties specified at creation time.  If this ObjectName was
             * constructed with the constructor {@link #ObjectName(String)},
             * the key properties in the returned String will be in the same
             * order as in the argument to the constructor.</p>
             * @return The key property list string.  This string is
             *  independent of whether the ObjectName is a pattern.
             */
            // @ts-ignore
            getKeyPropertyListString(): java.lang.String
            /**
             * Returns a string representation of the list of key properties,
             * in which the key properties are sorted in lexical order. This
             * is used in lexicographic comparisons performed in order to
             * select MBeans based on their key property list.  Lexical order
             * is the order implied by {@link String#compareTo(String)
             * String.compareTo(String)}.
             * @return The canonical key property list string.  This string is
             *  independent of whether the ObjectName is a pattern.
             */
            // @ts-ignore
            getCanonicalKeyPropertyListString(): java.lang.String
            /**
             * <p>Returns a string representation of the object name.  The
             * format of this string is not specified, but users can expect
             * that two ObjectNames return the same string if and only if they
             * are equal.</p>
             * @return a string representation of this object name.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Compares the current object name with another object name.  Two
             * ObjectName instances are equal if and only if their canonical
             * forms are equal.  The canonical form is the string described
             * for {@link #getCanonicalName()}.
             * @param object  The object name that the current object name is to be
             *         compared with.
             * @return True if <code>object</code> is an ObjectName whose
             *  canonical form is equal to that of this ObjectName.
             */
            // @ts-ignore
            equals(object: any): boolean
            /**
             * Returns a hash code for this object name.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * <p>Returns a quoted form of the given String, suitable for
             * inclusion in an ObjectName.  The returned value can be used as
             * the value associated with a key in an ObjectName.  The String
             * <code>s</code> may contain any character.  Appropriate quoting
             * ensures that the returned value is legal in an ObjectName.</p>
             * <p>The returned value consists of a quote ('"'), a sequence of
             * characters corresponding to the characters of <code>s</code>,
             * and another quote.  Characters in <code>s</code> appear
             * unchanged within the returned value except:</p>
             * <ul>
             * <li>A quote ('"') is replaced by a backslash (\) followed by a quote.</li>
             * <li>An asterisk ('*') is replaced by a backslash (\) followed by an
             * asterisk.</li>
             * <li>A question mark ('?') is replaced by a backslash (\) followed by
             * a question mark.</li>
             * <li>A backslash ('\') is replaced by two backslashes.</li>
             * <li>A newline character (the character '\n' in Java) is replaced
             * by a backslash followed by the character '\n'.</li>
             * </ul>
             * @param s the String to be quoted.
             * @return the quoted String.
             * @exception NullPointerException if <code>s</code> is null.
             */
            // @ts-ignore
            quote(s: string): java.lang.String
            /**
             * <p>Returns an unquoted form of the given String.  If
             * <code>q</code> is a String returned by {@link #quote quote(s)},
             * then <code>unquote(q).equals(s)</code>.  If there is no String
             * <code>s</code> for which <code>quote(s).equals(q)</code>, then
             * unquote(q) throws an IllegalArgumentException.</p>
             * <p>These rules imply that there is a one-to-one mapping between
             * quoted and unquoted forms.</p>
             * @param q the String to be unquoted.
             * @return the unquoted String.
             * @exception IllegalArgumentException if <code>q</code> could not
             *  have been returned by the {#link #quote} method, for instance
             *  if it does not begin and end with a quote (").
             * @exception NullPointerException if <code>q</code> is null.
             */
            // @ts-ignore
            unquote(q: string): java.lang.String
            /**
             * <p>Test whether this ObjectName, which may be a pattern,
             * matches another ObjectName.  If <code>name</code> is a pattern,
             * the result is false.  If this ObjectName is a pattern, the
             * result is true if and only if <code>name</code> matches the
             * pattern.  If neither this ObjectName nor <code>name</code> is
             * a pattern, the result is true if and only if the two
             * ObjectNames are equal as described for the {@link
             * #equals(Object)} method.</p>
             * @param name The name of the MBean to compare to.
             * @return True if <code>name</code> matches this ObjectName.
             * @exception NullPointerException if <code>name</code> is null.
             */
            // @ts-ignore
            apply(name: javax.management.ObjectName): boolean
            // @ts-ignore
            setMBeanServer(mbs: javax.management.MBeanServer): void
            /**
             * <p>Compares two ObjectName instances. The ordering relation between
             * ObjectNames is not completely specified but is intended to be such
             * that a sorted list of ObjectNames will appear in an order that is
             * convenient for a person to read.</p>
             * <p>In particular, if the two ObjectName instances have different
             * domains then their order is the lexicographical order of the domains.
             * The ordering of the key property list remains unspecified.</p>
             * <p>For example, the ObjectName instances below:</p>
             * <ul>
             * <li>Shapes:type=Square,name=3</li>
             * <li>Colors:type=Red,name=2</li>
             * <li>Shapes:type=Triangle,side=isosceles,name=2</li>
             * <li>Colors:type=Red,name=1</li>
             * <li>Shapes:type=Square,name=1</li>
             * <li>Colors:type=Blue,name=1</li>
             * <li>Shapes:type=Square,name=2</li>
             * <li>JMImplementation:type=MBeanServerDelegate</li>
             * <li>Shapes:type=Triangle,side=scalene,name=1</li>
             * </ul>
             * <p>could be ordered as follows:</p>
             * <ul>
             * <li>Colors:type=Blue,name=1</li>
             * <li>Colors:type=Red,name=1</li>
             * <li>Colors:type=Red,name=2</li>
             * <li>JMImplementation:type=MBeanServerDelegate</li>
             * <li>Shapes:type=Square,name=1</li>
             * <li>Shapes:type=Square,name=2</li>
             * <li>Shapes:type=Square,name=3</li>
             * <li>Shapes:type=Triangle,side=scalene,name=1</li>
             * <li>Shapes:type=Triangle,side=isosceles,name=2</li>
             * </ul>
             * @param name the ObjectName to be compared.
             * @return a negative integer, zero, or a positive integer as this
             *          ObjectName is less than, equal to, or greater than the
             *          specified ObjectName.
             * @since 1.6
             */
            // @ts-ignore
            compareTo(name: javax.management.ObjectName): int
        }
    }
}
