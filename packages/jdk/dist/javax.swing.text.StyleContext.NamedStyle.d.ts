declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyleContext {
                /**
                 * A collection of attributes, typically used to represent
                 * character and paragraph styles.  This is an implementation
                 * of MutableAttributeSet that can be observed if desired.
                 * These styles will take advantage of immutability while
                 * the sets are small enough, and may be substantially more
                 * efficient than something like SimpleAttributeSet.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 */
                // @ts-ignore
                class NamedStyle extends java.lang.Object implements javax.swing.text.Style, java.io.Serializable {
                    /**
                     * Creates a new named style.
                     * @param name the style name, null for unnamed
                     * @param parent the parent style, null if none
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, parent: javax.swing.text.Style)
                    /**
                     * Creates a new named style.
                     * @param parent the parent style, null if none
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(parent: javax.swing.text.Style)
                    /**
                     * Creates a new named style, with a null name and parent.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * The change listeners for the model.
                     */
                    // @ts-ignore
                    listenerList: javax.swing.event.EventListenerList
                    /**
                     * Only one ChangeEvent is needed per model instance since the
                     * event's only (read-only) state is the source property.  The source
                     * of events generated here is always "this".
                     */
                    // @ts-ignore
                    changeEvent: javax.swing.event.ChangeEvent
                    /**
                     * Converts the style to a string.
                     * @return the string
                     */
                    // @ts-ignore
                    public toString(): string
                    /**
                     * Fetches the name of the style.   A style is not required to be named,
                     * so null is returned if there is no name associated with the style.
                     * @return the name
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * Changes the name of the style.  Does nothing with a null name.
                     * @param name the new name
                     */
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    /**
                     * Adds a change listener.
                     * @param l the change listener
                     */
                    // @ts-ignore
                    public addChangeListener(l: javax.swing.event.ChangeListener): void
                    /**
                     * Removes a change listener.
                     * @param l the change listener
                     */
                    // @ts-ignore
                    public removeChangeListener(l: javax.swing.event.ChangeListener): void
                    /**
                     * Returns an array of all the <code>ChangeListener</code>s added
                     * to this NamedStyle with addChangeListener().
                     * @return all of the <code>ChangeListener</code>s added or an empty
                     *          array if no listeners have been added
                     * @since 1.4
                     */
                    // @ts-ignore
                    public getChangeListeners(): javax.swing.event.ChangeListener[]
                    /**
                     * Notifies all listeners that have registered interest for
                     * notification on this event type.  The event instance
                     * is lazily created using the parameters passed into
                     * the fire method.
                     * @see EventListenerList
                     */
                    // @ts-ignore
                    fireStateChanged(): void
                    /**
                     * Return an array of all the listeners of the given type that
                     * were added to this model.
                     * @return all of the objects receiving <em>listenerType</em> notifications
                     *           from this model
                     * @since 1.3
                     */
                    // @ts-ignore
                    public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
                    /**
                     * Gets the number of attributes that are defined.
                     * @return the number of attributes &gt;= 0
                     * @see AttributeSet#getAttributeCount
                     */
                    // @ts-ignore
                    public getAttributeCount(): number /*int*/
                    /**
                     * Checks whether a given attribute is defined.
                     * @param attrName the non-null attribute name
                     * @return true if the attribute is defined
                     * @see AttributeSet#isDefined
                     */
                    // @ts-ignore
                    public isDefined(attrName: java.lang.Object | any): boolean
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
                     * @param attrName the non-null attribute name
                     * @return the attribute value
                     * @see AttributeSet#getAttribute
                     */
                    // @ts-ignore
                    public getAttribute(attrName: java.lang.Object | any): any
                    /**
                     * Gets the names of all attributes.
                     * @return the attribute names as an enumeration
                     * @see AttributeSet#getAttributeNames
                     */
                    // @ts-ignore
                    public getAttributeNames(): java.util.Enumeration<any>
                    /**
                     * Checks whether a given attribute name/value is defined.
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @return true if the name/value is defined
                     * @see AttributeSet#containsAttribute
                     */
                    // @ts-ignore
                    public containsAttribute(name: java.lang.Object | any, value: java.lang.Object | any): boolean
                    /**
                     * Checks whether the element contains all the attributes.
                     * @param attrs the attributes to check
                     * @return true if the element contains all the attributes
                     * @see AttributeSet#containsAttributes
                     */
                    // @ts-ignore
                    public containsAttributes(attrs: javax.swing.text.AttributeSet): boolean
                    /**
                     * Gets attributes from the parent.
                     * If not overriden, the resolving parent defaults to
                     * the parent element.
                     * @return the attributes from the parent
                     * @see AttributeSet#getResolveParent
                     */
                    // @ts-ignore
                    public getResolveParent(): javax.swing.text.AttributeSet
                    /**
                     * Adds an attribute.
                     * @param name the non-null attribute name
                     * @param value the attribute value
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    public addAttribute(name: java.lang.Object | any, value: java.lang.Object | any): void
                    /**
                     * Adds a set of attributes to the element.
                     * @param attr the attributes to add
                     * @see MutableAttributeSet#addAttribute
                     */
                    // @ts-ignore
                    public addAttributes(attr: javax.swing.text.AttributeSet): void
                    /**
                     * Removes an attribute from the set.
                     * @param name the non-null attribute name
                     * @see MutableAttributeSet#removeAttribute
                     */
                    // @ts-ignore
                    public removeAttribute(name: java.lang.Object | any): void
                    /**
                     * Removes a set of attributes for the element.
                     * @param names the attribute names
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    public removeAttributes(names: java.util.Enumeration<any>): void
                    /**
                     * Removes a set of attributes for the element.
                     * @param attrs the attributes
                     * @see MutableAttributeSet#removeAttributes
                     */
                    // @ts-ignore
                    public removeAttributes(attrs: javax.swing.text.AttributeSet): void
                    /**
                     * Sets the resolving parent.
                     * @param parent the parent, null if none
                     * @see MutableAttributeSet#setResolveParent
                     */
                    // @ts-ignore
                    public setResolveParent(parent: javax.swing.text.AttributeSet): void
                }
            }
        }
    }
}
