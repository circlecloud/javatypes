declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A pool of styles and their associated resources.  This class determines
             * the lifetime of a group of resources by being a container that holds
             * caches for various resources such as font and color that get reused
             * by the various style definitions.  This can be shared by multiple
             * documents if desired to maximize the sharing of related resources.
             * <p>
             * This class also provides efficient support for small sets of attributes
             * and compresses them by sharing across uses and taking advantage of
             * their immutable nature.  Since many styles are replicated, the potential
             * for sharing is significant, and copies can be extremely cheap.
             * Larger sets reduce the possibility of sharing, and therefore revert
             * automatically to a less space-efficient implementation.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Timothy Prinzing
             */
            // @ts-ignore
            class StyleContext extends java.lang.Object implements java.io.Serializable, javax.swing.text.AbstractDocument.AttributeContext {
                /**
                 * Creates a new StyleContext object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * The name given to the default logical style attached
                 * to paragraphs.
                 */
                // @ts-ignore
                public static readonly DEFAULT_STYLE: java.lang.String | string
                /**
                 * Returns default AttributeContext shared by all documents that
                 * don't bother to define/supply their own context.
                 * @return the context
                 */
                // @ts-ignore
                public static getDefaultStyleContext(): javax.swing.text.StyleContext
                /**
                 * Adds a new style into the style hierarchy.  Style attributes
                 * resolve from bottom up so an attribute specified in a child
                 * will override an attribute specified in the parent.
                 * @param nm   the name of the style (must be unique within the
                 *    collection of named styles in the document).  The name may
                 *    be null if the style is unnamed, but the caller is responsible
                 *    for managing the reference returned as an unnamed style can't
                 *    be fetched by name.  An unnamed style may be useful for things
                 *    like character attribute overrides such as found in a style
                 *    run.
                 * @param parent the parent style.  This may be null if unspecified
                 *    attributes need not be resolved in some other style.
                 * @return the created style
                 */
                // @ts-ignore
                public addStyle(nm: java.lang.String | string, parent: javax.swing.text.Style): javax.swing.text.Style
                /**
                 * Removes a named style previously added to the document.
                 * @param nm  the name of the style to remove
                 */
                // @ts-ignore
                public removeStyle(nm: java.lang.String | string): void
                /**
                 * Fetches a named style previously added to the document
                 * @param nm  the name of the style
                 * @return the style
                 */
                // @ts-ignore
                public getStyle(nm: java.lang.String | string): javax.swing.text.Style
                /**
                 * Fetches the names of the styles defined.
                 * @return the list of names as an enumeration
                 */
                // @ts-ignore
                public getStyleNames(): java.util.Enumeration<any>
                /**
                 * Adds a listener to track when styles are added
                 * or removed.
                 * @param l the change listener
                 */
                // @ts-ignore
                public addChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Removes a listener that was tracking styles being
                 * added or removed.
                 * @param l the change listener
                 */
                // @ts-ignore
                public removeChangeListener(l: javax.swing.event.ChangeListener): void
                /**
                 * Returns an array of all the <code>ChangeListener</code>s added
                 * to this StyleContext with addChangeListener().
                 * @return all of the <code>ChangeListener</code>s added or an empty
                 *          array if no listeners have been added
                 * @since 1.4
                 */
                // @ts-ignore
                public getChangeListeners(): javax.swing.event.ChangeListener[]
                /**
                 * Gets the font from an attribute set.  This is
                 * implemented to try and fetch a cached font
                 * for the given AttributeSet, and if that fails
                 * the font features are resolved and the
                 * font is fetched from the low-level font cache.
                 * @param attr the attribute set
                 * @return the font
                 */
                // @ts-ignore
                public getFont(attr: javax.swing.text.AttributeSet): java.awt.Font
                /**
                 * Takes a set of attributes and turn it into a foreground color
                 * specification.  This might be used to specify things
                 * like brighter, more hue, etc.  By default it simply returns
                 * the value specified by the StyleConstants.Foreground attribute.
                 * @param attr the set of attributes
                 * @return the color
                 */
                // @ts-ignore
                public getForeground(attr: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Takes a set of attributes and turn it into a background color
                 * specification.  This might be used to specify things
                 * like brighter, more hue, etc.  By default it simply returns
                 * the value specified by the StyleConstants.Background attribute.
                 * @param attr the set of attributes
                 * @return the color
                 */
                // @ts-ignore
                public getBackground(attr: javax.swing.text.AttributeSet): java.awt.Color
                /**
                 * Gets a new font.  This returns a Font from a cache
                 * if a cached font exists.  If not, a Font is added to
                 * the cache.  This is basically a low-level cache for
                 * 1.1 font features.
                 * @param family the font family (such as "Monospaced")
                 * @param style the style of the font (such as Font.PLAIN)
                 * @param size the point size &gt;= 1
                 * @return the new font
                 */
                // @ts-ignore
                public getFont(family: java.lang.String | string, style: number /*int*/, size: number /*int*/): java.awt.Font
                /**
                 * Returns font metrics for a font.
                 * @param f the font
                 * @return the metrics
                 */
                // @ts-ignore
                public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                /**
                 * Adds an attribute to the given set, and returns
                 * the new representative set.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param old the old attribute set
                 * @param name the non-null attribute name
                 * @param value the attribute value
                 * @return the updated attribute set
                 * @see MutableAttributeSet#addAttribute
                 */
                // @ts-ignore
                public addAttribute(old: javax.swing.text.AttributeSet, name: java.lang.Object | any, value: java.lang.Object | any): javax.swing.text.AttributeSet
                /**
                 * Adds a set of attributes to the element.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param old the old attribute set
                 * @param attr the attributes to add
                 * @return the updated attribute set
                 * @see MutableAttributeSet#addAttribute
                 */
                // @ts-ignore
                public addAttributes(old: javax.swing.text.AttributeSet, attr: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                /**
                 * Removes an attribute from the set.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param old the old set of attributes
                 * @param name the non-null attribute name
                 * @return the updated attribute set
                 * @see MutableAttributeSet#removeAttribute
                 */
                // @ts-ignore
                public removeAttribute(old: javax.swing.text.AttributeSet, name: java.lang.Object | any): javax.swing.text.AttributeSet
                /**
                 * Removes a set of attributes for the element.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param old the old attribute set
                 * @param names the attribute names
                 * @return the updated attribute set
                 * @see MutableAttributeSet#removeAttributes
                 */
                // @ts-ignore
                public removeAttributes(old: javax.swing.text.AttributeSet, names: java.util.Enumeration<any>): javax.swing.text.AttributeSet
                /**
                 * Removes a set of attributes for the element.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param old the old attribute set
                 * @param attrs the attributes
                 * @return the updated attribute set
                 * @see MutableAttributeSet#removeAttributes
                 */
                // @ts-ignore
                public removeAttributes(old: javax.swing.text.AttributeSet, attrs: javax.swing.text.AttributeSet): javax.swing.text.AttributeSet
                /**
                 * Fetches an empty AttributeSet.
                 * @return the set
                 */
                // @ts-ignore
                public getEmptySet(): javax.swing.text.AttributeSet
                /**
                 * Returns a set no longer needed by the MutableAttributeSet implementation.
                 * This is useful for operation under 1.1 where there are no weak
                 * references.  This would typically be called by the finalize method
                 * of the MutableAttributeSet implementation.
                 * <p>
                 * This method is thread safe, although most Swing methods
                 * are not. Please see
                 * <A HREF="https://docs.oracle.com/javase/tutorial/uiswing/concurrency/index.html">Concurrency
                 * in Swing</A> for more information.
                 * @param a the set to reclaim
                 */
                // @ts-ignore
                public reclaim(a: javax.swing.text.AttributeSet): void
                /**
                 * Returns the maximum number of key/value pairs to try and
                 * compress into unique/immutable sets.  Any sets above this
                 * limit will use hashtables and be a MutableAttributeSet.
                 * @return the threshold
                 */
                // @ts-ignore
                getCompressionThreshold(): number /*int*/
                /**
                 * Create a compact set of attributes that might be shared.
                 * This is a hook for subclasses that want to alter the
                 * behavior of SmallAttributeSet.  This can be reimplemented
                 * to return an AttributeSet that provides some sort of
                 * attribute conversion.
                 * @param a The set of attributes to be represented in the
                 *   the compact form.
                 */
                // @ts-ignore
                createSmallAttributeSet(a: javax.swing.text.AttributeSet): javax.swing.text.StyleContext.SmallAttributeSet
                /**
                 * Create a large set of attributes that should trade off
                 * space for time.  This set will not be shared.  This is
                 * a hook for subclasses that want to alter the behavior
                 * of the larger attribute storage format (which is
                 * SimpleAttributeSet by default).   This can be reimplemented
                 * to return a MutableAttributeSet that provides some sort of
                 * attribute conversion.
                 * @param a The set of attributes to be represented in the
                 *   the larger form.
                 */
                // @ts-ignore
                createLargeAttributeSet(a: javax.swing.text.AttributeSet): javax.swing.text.MutableAttributeSet
                /**
                 * Converts a StyleContext to a String.
                 * @return the string
                 */
                // @ts-ignore
                public toString(): string
                /**
                 * Context-specific handling of writing out attributes
                 */
                // @ts-ignore
                public writeAttributes(out: java.io.ObjectOutputStream, a: javax.swing.text.AttributeSet): void
                /**
                 * Context-specific handling of reading in attributes
                 */
                // @ts-ignore
                public readAttributes(input: java.io.ObjectInputStream, a: javax.swing.text.MutableAttributeSet): void
                /**
                 * Writes a set of attributes to the given object stream
                 * for the purpose of serialization.  This will take
                 * special care to deal with static attribute keys that
                 * have been registered wit the
                 * <code>registerStaticAttributeKey</code> method.
                 * Any attribute key not registered as a static key
                 * will be serialized directly.  All values are expected
                 * to be serializable.
                 * @param out the output stream
                 * @param a the attribute set
                 * @exception IOException on any I/O error
                 */
                // @ts-ignore
                public static writeAttributeSet(out: java.io.ObjectOutputStream, a: javax.swing.text.AttributeSet): void
                /**
                 * Reads a set of attributes from the given object input
                 * stream that have been previously written out with
                 * <code>writeAttributeSet</code>.  This will try to restore
                 * keys that were static objects to the static objects in
                 * the current virtual machine considering only those keys
                 * that have been registered with the
                 * <code>registerStaticAttributeKey</code> method.
                 * The attributes retrieved from the stream will be placed
                 * into the given mutable set.
                 * @param in the object stream to read the attribute data from.
                 * @param a  the attribute set to place the attribute
                 *    definitions in.
                 * @exception ClassNotFoundException passed upward if encountered
                 *   when reading the object stream.
                 * @exception IOException passed upward if encountered when
                 *   reading the object stream.
                 */
                // @ts-ignore
                public static readAttributeSet(input: java.io.ObjectInputStream, a: javax.swing.text.MutableAttributeSet): void
                /**
                 * Registers an object as a static object that is being
                 * used as a key in attribute sets.  This allows the key
                 * to be treated specially for serialization.
                 * <p>
                 * For operation under a 1.1 virtual machine, this
                 * uses the value returned by <code>toString</code>
                 * concatenated to the classname.  The value returned
                 * by toString should not have the class reference
                 * in it (ie it should be reimplemented from the
                 * definition in Object) in order to be the same when
                 * recomputed later.
                 * @param key the non-null object key
                 */
                // @ts-ignore
                public static registerStaticAttributeKey(key: java.lang.Object | any): void
                /**
                 * Returns the object previously registered with
                 * <code>registerStaticAttributeKey</code>.
                 */
                // @ts-ignore
                public static getStaticAttribute(key: java.lang.Object | any): any
                /**
                 * Returns the String that <code>key</code> will be registered with
                 * @see #getStaticAttribute
                 * @see #registerStaticAttributeKey
                 */
                // @ts-ignore
                public static getStaticAttributeKey(key: java.lang.Object | any): any
            }
        }
    }
}
