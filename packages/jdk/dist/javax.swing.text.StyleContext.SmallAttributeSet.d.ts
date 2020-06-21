declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyleContext {
                /**
                 * This class holds a small number of attributes in an array.
                 * The storage format is key, value, key, value, etc.  The size
                 * of the set is the length of the array divided by two.  By
                 * default, this is the class that will be used to store attributes
                 * when held in the compact sharable form.
                 */
                // @ts-ignore
                class SmallAttributeSet extends java.lang.Object implements javax.swing.text.AttributeSet {
                    // @ts-ignore
                    constructor(attributes: java.lang.Object[] | any[])
                    // @ts-ignore
                    constructor(attrs: javax.swing.text.AttributeSet)
                    /**
                     * Returns a string showing the key/value pairs
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Returns a hashcode for this set of attributes.
                     * @return a hashcode value for this set of attributes.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Compares this object to the specified object.
                     * The result is <code>true</code> if the object is an equivalent
                     * set of attributes.
                     * @param obj   the object to compare with.
                     * @return <code>true</code> if the objects are equal;
                     *             <code>false</code> otherwise.
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Clones a set of attributes.  Since the set is immutable, a
                     * clone is basically the same set.
                     * @return the set of attributes
                     */
                    // @ts-ignore
                    public clone(): any
                    /**
                     * Gets the number of attributes that are defined.
                     * @return the number of attributes
                     * @see AttributeSet#getAttributeCount
                     */
                    // @ts-ignore
                    public getAttributeCount(): number /*int*/
                    /**
                     * Checks whether a given attribute is defined.
                     * @param key the attribute key
                     * @return true if the attribute is defined
                     * @see AttributeSet#isDefined
                     */
                    // @ts-ignore
                    public isDefined(key: java.lang.Object | any): boolean
                    /**
                     * Checks whether two attribute sets are equal.
                     * @param attr the attribute set to check against
                     * @return true if the same
                     * @see AttributeSet#isEqual
                     */
                    // @ts-ignore
                    public isEqual(attr: javax.swing.text.AttributeSet): boolean
                    /**
                     * Copies a set of attributes.
                     * @return the copy
                     * @see AttributeSet#copyAttributes
                     */
                    // @ts-ignore
                    public copyAttributes(): javax.swing.text.AttributeSet
                    /**
                     * Gets the value of an attribute.
                     * @param key the attribute name
                     * @return the attribute value
                     * @see AttributeSet#getAttribute
                     */
                    // @ts-ignore
                    public getAttribute(key: java.lang.Object | any): any
                    /**
                     * Gets the names of all attributes.
                     * @return the attribute names
                     * @see AttributeSet#getAttributeNames
                     */
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<any>
                    /**
                     * Checks whether a given attribute name/value is defined.
                     * @param name the attribute name
                     * @param value the attribute value
                     * @return true if the name/value is defined
                     * @see AttributeSet#containsAttribute
                     */
                    // @ts-ignore
                    public containsAttribute(name: java.lang.Object | any, value: java.lang.Object | any): boolean
                    /**
                     * Checks whether the attribute set contains all of
                     * the given attributes.
                     * @param attrs the attributes to check
                     * @return true if the element contains all the attributes
                     * @see AttributeSet#containsAttributes
                     */
                    // @ts-ignore
                    public containsAttributes(attrs: javax.swing.text.AttributeSet): boolean
                    /**
                     * If not overriden, the resolving parent defaults to
                     * the parent element.
                     * @return the attributes from the parent
                     * @see AttributeSet#getResolveParent
                     */
                    // @ts-ignore
                    public getResolveParent(): javax.swing.text.AttributeSet
                }
            }
        }
    }
}
