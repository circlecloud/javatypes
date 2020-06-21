declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents Java language constructs (package, class, constructor,
             * method, field) which have comments and have been processed by this
             * run of javadoc.  All Doc objects are unique, that is, they
             * are == comparable.
             * @since 1.2
             * @author Robert Field
             * @author Scott Seligman (generics, enums, annotations)
             */
            // @ts-ignore
            interface Doc extends java.lang.Comparable<java.lang.Object | any> {
                /**
                 * Return the text of the comment for this doc item.
                 * Tags have been removed.
                 */
                // @ts-ignore
                commentText(): string
                /**
                 * Return all tags in this Doc item.
                 * @return an array of {#link Tag} objects containing all tags on
                 *          this Doc item.
                 */
                // @ts-ignore
                tags(): com.sun.javadoc.Tag[]
                /**
                 * Return tags of the specified {@linkplain Tag#kind() kind} in
                 * this Doc item.
                 * For example, if 'tagname' has value "@serial", all tags in
                 * this Doc item of kind "@serial" will be returned.
                 * @param tagname name of the tag kind to search for.
                 * @return an array of Tag containing all tags whose 'kind()'
                 *  matches 'tagname'.
                 */
                // @ts-ignore
                tags(tagname: java.lang.String | string): com.sun.javadoc.Tag[]
                /**
                 * Return the see also tags in this Doc item.
                 * @return an array of SeeTag containing all #see tags.
                 */
                // @ts-ignore
                seeTags(): com.sun.javadoc.SeeTag[]
                /**
                 * Return comment as an array of tags. Includes inline tags
                 * (i.e. {&#64;link <i>reference</i>} tags)  but not
                 * block tags.
                 * Each section of plain text is represented as a {@link Tag}
                 * of {@linkplain Tag#kind() kind} "Text".
                 * Inline tags are represented as a {@link SeeTag} of kind "@see"
                 * and name "@link".
                 * @return an array of {#link Tag}s representing the comment
                 */
                // @ts-ignore
                inlineTags(): com.sun.javadoc.Tag[]
                /**
                 * Return the first sentence of the comment as an array of tags.
                 * Includes inline tags
                 * (i.e. {&#64;link <i>reference</i>} tags)  but not
                 * block tags.
                 * Each section of plain text is represented as a {@link Tag}
                 * of {@linkplain Tag#kind() kind} "Text".
                 * Inline tags are represented as a {@link SeeTag} of kind "@see"
                 * and name "@link".
                 * <p>
                 * If the locale is English language, the first sentence is
                 * determined by the rules described in the Java Language
                 * Specification (first version): &quot;This sentence ends
                 * at the first period that is followed by a blank, tab, or
                 * line terminator or at the first tagline.&quot;, in
                 * addition a line will be terminated by block
                 * HTML tags: &lt;p&gt;  &lt;/p&gt;  &lt;h1&gt;
                 * &lt;h2&gt;  &lt;h3&gt; &lt;h4&gt;  &lt;h5&gt;  &lt;h6&gt;
                 * &lt;hr&gt;  &lt;pre&gt;  or &lt;/pre&gt;.
                 * If the locale is not English, the sentence end will be
                 * determined by
                 * {@link BreakIterator#getSentenceInstance(Locale)}.
                 * @return an array of {#link Tag}s representing the
                 *  first sentence of the comment
                 */
                // @ts-ignore
                firstSentenceTags(): com.sun.javadoc.Tag[]
                /**
                 * Return the full unprocessed text of the comment.  Tags
                 * are included as text.  Used mainly for store and retrieve
                 * operations like internalization.
                 */
                // @ts-ignore
                getRawCommentText(): string
                /**
                 * Set the full unprocessed text of the comment.  Tags
                 * are included as text.  Used mainly for store and retrieve
                 * operations like internalization.
                 */
                // @ts-ignore
                setRawCommentText(rawDocumentation: java.lang.String | string): void
                /**
                 * Returns the non-qualified name of this Doc item.
                 * @return the name
                 */
                // @ts-ignore
                name(): string
                /**
                 * Compares this doc object with the specified object for order.  Returns a
                 * negative integer, zero, or a positive integer as this doc object is less
                 * than, equal to, or greater than the given object.
                 * <p>
                 * This method satisfies the {@link java.lang.Comparable} interface.
                 * @param obj  the <code>Object</code> to be compared.
                 * @return a negative integer, zero, or a positive integer as this Object
                 *       is less than, equal to, or greater than the given Object.
                 * @exception ClassCastException the specified Object's type prevents it
                 *         from being compared to this Object.
                 */
                // @ts-ignore
                compareTo(obj: java.lang.Object | any): number /*int*/
                /**
                 * Is this Doc item a field (but not an enum constant)?
                 * @return true if it represents a field
                 */
                // @ts-ignore
                isField(): boolean
                /**
                 * Is this Doc item an enum constant?
                 * @return true if it represents an enum constant
                 * @since 1.5
                 */
                // @ts-ignore
                isEnumConstant(): boolean
                /**
                 * Is this Doc item a constructor?
                 * @return true if it represents a constructor
                 */
                // @ts-ignore
                isConstructor(): boolean
                /**
                 * Is this Doc item a method (but not a constructor or annotation
                 * type element)?
                 * @return true if it represents a method
                 */
                // @ts-ignore
                isMethod(): boolean
                /**
                 * Is this Doc item an annotation type element?
                 * @return true if it represents an annotation type element
                 * @since 1.5
                 */
                // @ts-ignore
                isAnnotationTypeElement(): boolean
                /**
                 * Is this Doc item an interface (but not an annotation type)?
                 * @return true if it represents an interface
                 */
                // @ts-ignore
                isInterface(): boolean
                /**
                 * Is this Doc item an exception class?
                 * @return true if it represents an exception
                 */
                // @ts-ignore
                isException(): boolean
                /**
                 * Is this Doc item an error class?
                 * @return true if it represents a error
                 */
                // @ts-ignore
                isError(): boolean
                /**
                 * Is this Doc item an enum type?
                 * @return true if it represents an enum type
                 * @since 1.5
                 */
                // @ts-ignore
                isEnum(): boolean
                /**
                 * Is this Doc item an annotation type?
                 * @return true if it represents an annotation type
                 * @since 1.5
                 */
                // @ts-ignore
                isAnnotationType(): boolean
                /**
                 * Is this Doc item an
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#class">ordinary
                 * class</a>?
                 * (i.e. not an interface, annotation type, enum, exception, or error)?
                 * @return true if it represents an ordinary class
                 */
                // @ts-ignore
                isOrdinaryClass(): boolean
                /**
                 * Is this Doc item a
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#class">class</a>
                 * (and not an interface or annotation type)?
                 * This includes ordinary classes, enums, errors and exceptions.
                 * @return true if it represents a class
                 */
                // @ts-ignore
                isClass(): boolean
                /**
                 * Return true if this Doc item is
                 * <a href="{@docRoot}/com/sun/javadoc/package-summary.html#included">included</a>
                 * in the result set.
                 */
                // @ts-ignore
                isIncluded(): boolean
                /**
                 * Return the source position of the first line of the
                 * corresponding declaration, or null if
                 * no position is available.  A default constructor returns
                 * null because it has no location in the source file.
                 * @since 1.4
                 */
                // @ts-ignore
                position(): com.sun.javadoc.SourcePosition
            }
        }
    }
}
