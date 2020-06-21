declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This class provides a basic implementation
             * of the Attributes interface.
             * <p>
             * BasicAttributes is either case-sensitive or case-insensitive (case-ignore).
             * This property is determined at the time the BasicAttributes constructor
             * is called.
             * In a case-insensitive BasicAttributes, the case of its attribute identifiers
             * is ignored when searching for an attribute, or adding attributes.
             * In a case-sensitive BasicAttributes, the case is significant.
             * <p>
             * When the BasicAttributes class needs to create an Attribute, it
             * uses BasicAttribute. There is no other dependency on BasicAttribute.
             * <p>
             * Note that updates to BasicAttributes (such as adding or removing an attribute)
             * does not affect the corresponding representation in the directory.
             * Updates to the directory can only be effected
             * using operations in the DirContext interface.
             * <p>
             * A BasicAttributes instance is not synchronized against concurrent
             * multithreaded access. Multiple threads trying to access and modify
             * a single BasicAttributes instance should lock the object.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see DirContext#getAttributes
             * @see DirContext#modifyAttributes
             * @see DirContext#bind
             * @see DirContext#rebind
             * @see DirContext#createSubcontext
             * @see DirContext#search
             * @since 1.3
             */
            // @ts-ignore
            class BasicAttributes extends java.lang.Object implements javax.naming.directory.Attributes {
                /**
                 * Constructs a new instance of Attributes.
                 * The character case of attribute identifiers
                 * is significant when subsequently retrieving or adding attributes.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new instance of Attributes.
                 * If <code>ignoreCase</code> is true, the character case of attribute
                 * identifiers is ignored; otherwise the case is significant.
                 * @param ignoreCase true means this attribute set will ignore
                 *                    the case of its attribute identifiers
                 *                    when retrieving or adding attributes;
                 *                    false means case is respected.
                 */
                // @ts-ignore
                constructor(ignoreCase: boolean)
                /**
                 * Constructs a new instance of Attributes with one attribute.
                 * The attribute specified by attrID and val are added to the newly
                 * created attribute.
                 * The character case of attribute identifiers
                 * is significant when subsequently retrieving or adding attributes.
                 * @param attrID   non-null The id of the attribute to add.
                 * @param val The value of the attribute to add. If null, a null
                 *         value is added to the attribute.
                 */
                // @ts-ignore
                constructor(attrID: java.lang.String | string, val: java.lang.Object | any)
                /**
                 * Constructs a new instance of Attributes with one attribute.
                 * The attribute specified by attrID and val are added to the newly
                 * created attribute.
                 * If <code>ignoreCase</code> is true, the character case of attribute
                 * identifiers is ignored; otherwise the case is significant.
                 * @param attrID   non-null The id of the attribute to add.
                 *            If this attribute set ignores the character
                 *            case of its attribute ids, the case of attrID
                 *            is ignored.
                 * @param val The value of the attribute to add. If null, a null
                 *         value is added to the attribute.
                 * @param ignoreCase true means this attribute set will ignore
                 *                    the case of its attribute identifiers
                 *                    when retrieving or adding attributes;
                 *                    false means case is respected.
                 */
                // @ts-ignore
                constructor(attrID: java.lang.String | string, val: java.lang.Object | any, ignoreCase: boolean)
                // @ts-ignore
                public clone(): any
                // @ts-ignore
                public isCaseIgnored(): boolean
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public get(attrID: java.lang.String | string): javax.naming.directory.Attribute
                // @ts-ignore
                public getAll(): javax.naming.NamingEnumeration<javax.naming.directory.Attribute>
                // @ts-ignore
                public getIDs(): javax.naming.NamingEnumeration<java.lang.String | string>
                // @ts-ignore
                public put(attrID: java.lang.String | string, val: java.lang.Object | any): javax.naming.directory.Attribute
                // @ts-ignore
                public put(attr: javax.naming.directory.Attribute): javax.naming.directory.Attribute
                // @ts-ignore
                public remove(attrID: java.lang.String | string): javax.naming.directory.Attribute
                /**
                 * Generates the string representation of this attribute set.
                 * The string consists of each attribute identifier and the contents
                 * of each attribute. The contents of this string is useful
                 * for debugging and is not meant to be interpreted programmatically.
                 * @return A non-null string listing the contents of this attribute set.
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Determines whether this <tt>BasicAttributes</tt> is equal to another
                 * <tt>Attributes</tt>
                 * Two <tt>Attributes</tt> are equal if they are both instances of
                 * <tt>Attributes</tt>,
                 * treat the case of attribute IDs the same way, and contain the
                 * same attributes. Each <tt>Attribute</tt> in this <tt>BasicAttributes</tt>
                 * is checked for equality using <tt>Object.equals()</tt>, which may have
                 * be overridden by implementations of <tt>Attribute</tt>).
                 * If a subclass overrides <tt>equals()</tt>,
                 * it should override <tt>hashCode()</tt>
                 * as well so that two <tt>Attributes</tt> instances that are equal
                 * have the same hash code.
                 * @param obj the possibly null object to compare against.
                 * @return true If obj is equal to this BasicAttributes.
                 * @see #hashCode
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Calculates the hash code of this BasicAttributes.
                 * <p>
                 * The hash code is computed by adding the hash code of
                 * the attributes of this object. If this BasicAttributes
                 * ignores case of its attribute IDs, one is added to the hash code.
                 * If a subclass overrides <tt>hashCode()</tt>,
                 * it should override <tt>equals()</tt>
                 * as well so that two <tt>Attributes</tt> instances that are equal
                 * have the same hash code.
                 * @return an int representing the hash code of this BasicAttributes instance.
                 * @see #equals
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
