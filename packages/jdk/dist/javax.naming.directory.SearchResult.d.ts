declare namespace javax {
    namespace naming {
        namespace directory {
            /**
             * This class represents an item in the NamingEnumeration returned as a
             * result of the DirContext.search() methods.
             * <p>
             * A SearchResult instance is not synchronized against concurrent
             * multithreaded access. Multiple threads trying to access and modify
             * a single SearchResult instance should lock the object.
             * @author Rosanna Lee
             * @author Scott Seligman
             * @see DirContext#search
             * @since 1.3
             */
            // @ts-ignore
            class SearchResult extends javax.naming.Binding {
                /**
                 * Constructs a search result using the result's name, its bound object, and
                 * its attributes.
                 * <p>
                 * <tt>getClassName()</tt> will return the class name of <tt>obj</tt>
                 * (or null if <tt>obj</tt> is null) unless the class name has been
                 * explicitly set using <tt>setClassName()</tt>.
                 * @param name The non-null name of the search item. It is relative
                 *              to the <em>target context</em> of the search (which is
                 *  named by the first parameter of the <code>search()</code> method)
                 * @param obj  The object bound to name. Can be null.
                 * @param attrs The attributes that were requested to be returned with
                 *  this search item. Cannot be null.
                 * @see javax.naming.NameClassPair#setClassName
                 * @see javax.naming.NameClassPair#getClassName
                 */
                // @ts-ignore
                constructor(name: string, obj: any, attrs: javax.naming.directory.Attributes)
                /**
                 * Constructs a search result using the result's name, its bound object, and
                 * its attributes, and whether the name is relative.
                 * <p>
                 * <tt>getClassName()</tt> will return the class name of <tt>obj</tt>
                 * (or null if <tt>obj</tt> is null) unless the class name has been
                 * explicitly set using <tt>setClassName()</tt>
                 * @param name The non-null name of the search item.
                 * @param obj  The object bound to name. Can be null.
                 * @param attrs The attributes that were requested to be returned with
                 *  this search item. Cannot be null.
                 * @param isRelative true if <code>name</code> is relative
                 *          to the target context of the search (which is named by
                 *          the first parameter of the <code>search()</code> method);
                 *          false if <code>name</code> is a URL string.
                 * @see javax.naming.NameClassPair#setClassName
                 * @see javax.naming.NameClassPair#getClassName
                 */
                // @ts-ignore
                constructor(name: string, obj: any, attrs: javax.naming.directory.Attributes, isRelative: boolean)
                /**
                 * Constructs a search result using the result's name, its class name,
                 * its bound object, and its attributes.
                 * @param name The non-null name of the search item. It is relative
                 *              to the <em>target context</em> of the search (which is
                 *  named by the first parameter of the <code>search()</code> method)
                 * @param className       The possibly null class name of the object
                 *          bound to <tt>name</tt>. If null, the class name of <tt>obj</tt> is
                 *          returned by <tt>getClassName()</tt>. If <tt>obj</tt> is also null,
                 *          <tt>getClassName()</tt> will return null.
                 * @param obj  The object bound to name. Can be null.
                 * @param attrs The attributes that were requested to be returned with
                 *  this search item. Cannot be null.
                 * @see javax.naming.NameClassPair#setClassName
                 * @see javax.naming.NameClassPair#getClassName
                 */
                // @ts-ignore
                constructor(name: string, className: string, obj: any, attrs: javax.naming.directory.Attributes)
                /**
                 * Constructs a search result using the result's name, its class name,
                 * its bound object, its attributes, and whether the name is relative.
                 * @param name The non-null name of the search item.
                 * @param className       The possibly null class name of the object
                 *          bound to <tt>name</tt>. If null, the class name of <tt>obj</tt> is
                 *          returned by <tt>getClassName()</tt>. If <tt>obj</tt> is also null,
                 *          <tt>getClassName()</tt> will return null.
                 * @param obj  The object bound to name. Can be null.
                 * @param attrs The attributes that were requested to be returned with
                 *  this search item. Cannot be null.
                 * @param isRelative true if <code>name</code> is relative
                 *          to the target context of the search (which is named by
                 *          the first parameter of the <code>search()</code> method);
                 *          false if <code>name</code> is a URL string.
                 * @see javax.naming.NameClassPair#setClassName
                 * @see javax.naming.NameClassPair#getClassName
                 */
                // @ts-ignore
                constructor(name: string, className: string, obj: any, attrs: javax.naming.directory.Attributes, isRelative: boolean)
                /**
                 * Retrieves the attributes in this search result.
                 * @return The non-null attributes in this search result. Can be empty.
                 * @see #setAttributes
                 */
                // @ts-ignore
                getAttributes(): javax.naming.directory.Attributes
                /**
                 * Sets the attributes of this search result to <code>attrs</code>.
                 * @param attrs The non-null attributes to use. Can be empty.
                 * @see #getAttributes
                 */
                // @ts-ignore
                setAttributes(attrs: javax.naming.directory.Attributes): void
                /**
                 * Generates the string representation of this SearchResult.
                 * The string representation consists of the string representation
                 * of the binding and the string representation of
                 * this search result's attributes, separated by ':'.
                 * The contents of this string is useful
                 * for debugging and is not meant to be interpreted programmatically.
                 * @return The string representation of this SearchResult. Cannot be null.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
