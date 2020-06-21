declare namespace javax {
    namespace naming {
        /**
         * This class represents a composite name -- a sequence of
         * component names spanning multiple namespaces.
         * Each component is a string name from the namespace of a
         * naming system. If the component comes from a hierarchical
         * namespace, that component can be further parsed into
         * its atomic parts by using the CompoundName class.
         * <p>
         * The components of a composite name are numbered.  The indexes of a
         * composite name with N components range from 0 up to, but not including, N.
         * This range may be written as [0,N).
         * The most significant component is at index 0.
         * An empty composite name has no components.
         * <h1>JNDI Composite Name Syntax</h1>
         * JNDI defines a standard string representation for composite names. This
         * representation is the concatenation of the components of a composite name
         * from left to right using the component separator (a forward
         * slash character (/)) to separate each component.
         * The JNDI syntax defines the following meta characters:
         * <ul>
         * <li>escape (backward slash \),
         * <li>quote characters  (single (') and double quotes (")), and
         * <li>component separator (forward slash character (/)).
         * </ul>
         * Any occurrence of a leading quote, an escape preceding any meta character,
         * an escape at the end of a component, or a component separator character
         * in an unquoted component must be preceded by an escape character when
         * that component is being composed into a composite name string.
         * Alternatively, to avoid adding escape characters as described,
         * the entire component can be quoted using matching single quotes
         * or matching double quotes. A single quote occurring within a double-quoted
         * component is not considered a meta character (and need not be escaped),
         * and vice versa.
         * <p>
         * When two composite names are compared, the case of the characters
         * is significant.
         * <p>
         * A leading component separator (the composite name string begins with
         * a separator) denotes a leading empty component (a component consisting
         * of an empty string).
         * A trailing component separator (the composite name string ends with
         * a separator) denotes a trailing empty component.
         * Adjacent component separators denote an empty component.
         * <h1>Composite Name Examples</h1>
         * This table shows examples of some composite names. Each row shows
         * the string form of a composite name and its corresponding structural form
         * (<tt>CompositeName</tt>).
         * <table border="1" cellpadding=3 summary="examples showing string form of composite name and its corresponding structural form (CompositeName)">
         * <tr>
         * <th>String Name</th>
         * <th>CompositeName</th>
         * </tr>
         * <tr>
         * <td>
         * ""
         * </td>
         * <td>{} (the empty name == new CompositeName("") == new CompositeName())
         * </td>
         * </tr>
         * <tr>
         * <td>
         * "x"
         * </td>
         * <td>{"x"}
         * </td>
         * </tr>
         * <tr>
         * <td>
         * "x/y"
         * </td>
         * <td>{"x", "y"}</td>
         * </tr>
         * <tr>
         * <td>"x/"</td>
         * <td>{"x", ""}</td>
         * </tr>
         * <tr>
         * <td>"/x"</td>
         * <td>{"", "x"}</td>
         * </tr>
         * <tr>
         * <td>"/"</td>
         * <td>{""}</td>
         * </tr>
         * <tr>
         * <td>"//"</td>
         * <td>{"", ""}</td>
         * </tr>
         * <tr><td>"/x/"</td>
         * <td>{"", "x", ""}</td>
         * </tr>
         * <tr><td>"x//y"</td>
         * <td>{"x", "", "y"}</td>
         * </tr>
         * </table>
         * <h1>Composition Examples</h1>
         * Here are some composition examples.  The right column shows composing
         * string composite names while the left column shows composing the
         * corresponding <tt>CompositeName</tt>s.  Notice that composing the
         * string forms of two composite names simply involves concatenating
         * their string forms together.
         * <table border="1" cellpadding=3 summary="composition examples showing string names and composite names">
         * <tr>
         * <th>String Names</th>
         * <th>CompositeNames</th>
         * </tr>
         * <tr>
         * <td>
         * "x/y"           + "/"   = x/y/
         * </td>
         * <td>
         * {"x", "y"}      + {""}  = {"x", "y", ""}
         * </td>
         * </tr>
         * <tr>
         * <td>
         * ""              + "x"   = "x"
         * </td>
         * <td>
         * {}              + {"x"} = {"x"}
         * </td>
         * </tr>
         * <tr>
         * <td>
         * "/"             + "x"   = "/x"
         * </td>
         * <td>
         * {""}            + {"x"} = {"", "x"}
         * </td>
         * </tr>
         * <tr>
         * <td>
         * "x"   + ""      + ""    = "x"
         * </td>
         * <td>
         * {"x"} + {}      + {}    = {"x"}
         * </td>
         * </tr>
         * </table>
         * <h1>Multithreaded Access</h1>
         * A <tt>CompositeName</tt> instance is not synchronized against concurrent
         * multithreaded access. Multiple threads trying to access and modify a
         * <tt>CompositeName</tt> should lock the object.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @since 1.3
         */
        // @ts-ignore
        class CompositeName extends java.lang.Object implements javax.naming.Name {
            /**
             * Constructs a new composite name instance using the components
             * specified by 'comps'. This protected method is intended to be
             * to be used by subclasses of CompositeName when they override
             * methods such as clone(), getPrefix(), getSuffix().
             * @param comps A non-null enumeration containing the components for the new
             *               composite name. Each element is of class String.
             *                The enumeration will be consumed to extract its
             *                elements.
             */
            // @ts-ignore
            constructor(comps: java.util.Enumeration<java.lang.String | string>)
            /**
             * Constructs a new composite name instance by parsing the string n
             * using the composite name syntax (left-to-right, slash separated).
             * The composite name syntax is described in detail in the class
             * description.
             * @param n       The non-null string to parse.
             * @exception InvalidNameException If n has invalid composite name syntax.
             */
            // @ts-ignore
            constructor(n: java.lang.String | string)
            /**
             * Constructs a new empty composite name. Such a name returns true
             * when <code>isEmpty()</code> is invoked on it.
             */
            // @ts-ignore
            constructor()
            /**
             * Generates the string representation of this composite name.
             * The string representation consists of enumerating in order
             * each component of the composite name and separating
             * each component by a forward slash character. Quoting and
             * escape characters are applied where necessary according to
             * the JNDI syntax, which is described in the class description.
             * An empty component is represented by an empty string.
             * The string representation thus generated can be passed to
             * the CompositeName constructor to create a new equivalent
             * composite name.
             * @return A non-null string representation of this composite name.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Determines whether two composite names are equal.
             * If obj is null or not a composite name, false is returned.
             * Two composite names are equal if each component in one is equal
             * to the corresponding component in the other. This implies
             * both have the same number of components, and each component's
             * equals() test against the corresponding component in the other name
             * returns true.
             * @param obj     The possibly null object to compare against.
             * @return true if obj is equal to this composite name, false otherwise.
             * @see #hashCode
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Computes the hash code of this composite name.
             * The hash code is the sum of the hash codes of individual components
             * of this composite name.
             * @return An int representing the hash code of this name.
             * @see #equals
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Compares this CompositeName with the specified Object for order.
             * Returns a
             * negative integer, zero, or a positive integer as this Name is less
             * than, equal to, or greater than the given Object.
             * <p>
             * If obj is null or not an instance of CompositeName, ClassCastException
             * is thrown.
             * <p>
             * See equals() for what it means for two composite names to be equal.
             * If two composite names are equal, 0 is returned.
             * <p>
             * Ordering of composite names follows the lexicographical rules for
             * string comparison, with the extension that this applies to all
             * the components in the composite name. The effect is as if all the
             * components were lined up in their specified ordered and the
             * lexicographical rules applied over the two line-ups.
             * If this composite name is "lexicographically" lesser than obj,
             * a negative number is returned.
             * If this composite name is "lexicographically" greater than obj,
             * a positive number is returned.
             * @param obj The non-null object to compare against.
             * @return a negative integer, zero, or a positive integer as this Name
             *           is less than, equal to, or greater than the given Object.
             * @exception ClassCastException if obj is not a CompositeName.
             */
            // @ts-ignore
            public compareTo(obj: java.lang.Object | any): number /*int*/
            /**
             * Generates a copy of this composite name.
             * Changes to the components of this composite name won't
             * affect the new copy and vice versa.
             * @return A non-null copy of this composite name.
             */
            // @ts-ignore
            public clone(): any
            /**
             * Retrieves the number of components in this composite name.
             * @return The nonnegative number of components in this composite name.
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Determines whether this composite name is empty. A composite name
             * is empty if it has zero components.
             * @return true if this composite name is empty, false otherwise.
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Retrieves the components of this composite name as an enumeration
             * of strings.
             * The effects of updates to this composite name on this enumeration
             * is undefined.
             * @return A non-null enumeration of the components of
             *          this composite name. Each element of the enumeration is of
             *          class String.
             */
            // @ts-ignore
            public getAll(): java.util.Enumeration<java.lang.String | string>
            /**
             * Retrieves a component of this composite name.
             * @param posn    The 0-based index of the component to retrieve.
             *                  Must be in the range [0,size()).
             * @return The non-null component at index posn.
             * @exception ArrayIndexOutOfBoundsException if posn is outside the
             *          specified range.
             */
            // @ts-ignore
            public get(posn: number /*int*/): string
            /**
             * Creates a composite name whose components consist of a prefix of the
             * components in this composite name. Subsequent changes to
             * this composite name does not affect the name that is returned.
             * @param posn    The 0-based index of the component at which to stop.
             *                  Must be in the range [0,size()].
             * @return A composite name consisting of the components at indexes in
             *          the range [0,posn).
             * @exception ArrayIndexOutOfBoundsException
             *          If posn is outside the specified range.
             */
            // @ts-ignore
            public getPrefix(posn: number /*int*/): javax.naming.Name
            /**
             * Creates a composite name whose components consist of a suffix of the
             * components in this composite name. Subsequent changes to
             * this composite name does not affect the name that is returned.
             * @param posn    The 0-based index of the component at which to start.
             *                  Must be in the range [0,size()].
             * @return A composite name consisting of the components at indexes in
             *          the range [posn,size()).  If posn is equal to
             *          size(), an empty composite name is returned.
             * @exception ArrayIndexOutOfBoundsException
             *          If posn is outside the specified range.
             */
            // @ts-ignore
            public getSuffix(posn: number /*int*/): javax.naming.Name
            /**
             * Determines whether a composite name is a prefix of this composite name.
             * A composite name 'n' is a prefix if it is equal to
             * getPrefix(n.size())--in other words, this composite name
             * starts with 'n'. If 'n' is null or not a composite name, false is returned.
             * @param n       The possibly null name to check.
             * @return true if n is a CompositeName and
             *          is a prefix of this composite name, false otherwise.
             */
            // @ts-ignore
            public startsWith(n: javax.naming.Name): boolean
            /**
             * Determines whether a composite name is a suffix of this composite name.
             * A composite name 'n' is a suffix if it it is equal to
             * getSuffix(size()-n.size())--in other words, this
             * composite name ends with 'n'.
             * If n is null or not a composite name, false is returned.
             * @param n       The possibly null name to check.
             * @return true if n is a CompositeName and
             *          is a suffix of this composite name, false otherwise.
             */
            // @ts-ignore
            public endsWith(n: javax.naming.Name): boolean
            /**
             * Adds the components of a composite name -- in order -- to the end of
             * this composite name.
             * @param suffix   The non-null components to add.
             * @return The updated CompositeName, not a new one. Cannot be null.
             * @exception InvalidNameException If suffix is not a composite name.
             */
            // @ts-ignore
            public addAll(suffix: javax.naming.Name): javax.naming.Name
            /**
             * Adds the components of a composite name -- in order -- at a specified
             * position within this composite name.
             * Components of this composite name at or after the index of the first
             * new component are shifted up (away from index 0)
             * to accommodate the new components.
             * @param n        The non-null components to add.
             * @param posn     The index in this name at which to add the new
             *                  components.  Must be in the range [0,size()].
             * @return The updated CompositeName, not a new one. Cannot be null.
             * @exception InvalidNameException If n is not a composite name.
             * @exception ArrayIndexOutOfBoundsException
             *          If posn is outside the specified range.
             */
            // @ts-ignore
            public addAll(posn: number /*int*/, n: javax.naming.Name): javax.naming.Name
            /**
             * Adds a single component to the end of this composite name.
             * @param comp     The non-null component to add.
             * @return The updated CompositeName, not a new one. Cannot be null.
             * @exception InvalidNameException If adding comp at end of the name
             *                          would violate the name's syntax.
             */
            // @ts-ignore
            public add(comp: java.lang.String | string): javax.naming.Name
            /**
             * Adds a single component at a specified position within this
             * composite name.
             * Components of this composite name at or after the index of the new
             * component are shifted up by one (away from index 0) to accommodate
             * the new component.
             * @param comp    The non-null component to add.
             * @param posn    The index at which to add the new component.
             *                  Must be in the range [0,size()].
             * @return The updated CompositeName, not a new one. Cannot be null.
             * @exception ArrayIndexOutOfBoundsException
             *          If posn is outside the specified range.
             * @exception InvalidNameException If adding comp at the specified position
             *                          would violate the name's syntax.
             */
            // @ts-ignore
            public add(posn: number /*int*/, comp: java.lang.String | string): javax.naming.Name
            /**
             * Deletes a component from this composite name.
             * The component of this composite name at position 'posn' is removed,
             * and components at indices greater than 'posn'
             * are shifted down (towards index 0) by one.
             * @param posn    The index of the component to delete.
             *                  Must be in the range [0,size()).
             * @return The component removed (a String).
             * @exception ArrayIndexOutOfBoundsException
             *          If posn is outside the specified range (includes case where
             *          composite name is empty).
             * @exception InvalidNameException If deleting the component
             *                          would violate the name's syntax.
             */
            // @ts-ignore
            public remove(posn: number /*int*/): any
        }
    }
}
