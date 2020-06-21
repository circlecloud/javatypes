declare namespace java {
    namespace text {
        /**
         * An {@code AttributedCharacterIterator} allows iteration through both text and
         * related attribute information.
         * <p>
         * An attribute is a key/value pair, identified by the key.  No two
         * attributes on a given character can have the same key.
         * <p>The values for an attribute are immutable, or must not be mutated
         * by clients or storage.  They are always passed by reference, and not
         * cloned.
         * <p>A <em>run with respect to an attribute</em> is a maximum text range for
         * which:
         * <ul>
         * <li>the attribute is undefined or {@code null} for the entire range, or
         * <li>the attribute value is defined and has the same non-{@code null} value for the
         * entire range.
         * </ul>
         * <p>A <em>run with respect to a set of attributes</em> is a maximum text range for
         * which this condition is met for each member attribute.
         * <p>When getting a run with no explicit attributes specified (i.e.,
         * calling {@link #getRunStart()} and {@link #getRunLimit()}), any
         * contiguous text segments having the same attributes (the same set
         * of attribute/value pairs) are treated as separate runs if the
         * attributes have been given to those text segments separately.
         * <p>The returned indexes are limited to the range of the iterator.
         * <p>The returned attribute information is limited to runs that contain
         * the current character.
         * <p>
         * Attribute keys are instances of {@link AttributedCharacterIterator.Attribute} and its
         * subclasses, such as {@link java.awt.font.TextAttribute}.
         * @see AttributedCharacterIterator.Attribute
         * @see java.awt.font.TextAttribute
         * @see AttributedString
         * @see Annotation
         * @since 1.2
         */
        // @ts-ignore
        interface AttributedCharacterIterator extends java.text.CharacterIterator {
            /**
             * Returns the index of the first character of the run
             * with respect to all attributes containing the current character.
             * <p>Any contiguous text segments having the same attributes (the
             * same set of attribute/value pairs) are treated as separate runs
             * if the attributes have been given to those text segments separately.
             * @return the index of the first character of the run
             */
            // @ts-ignore
            getRunStart(): number /*int*/
            /**
             * Returns the index of the first character of the run
             * with respect to the given {@code attribute} containing the current character.
             * @param attribute the desired attribute.
             * @return the index of the first character of the run
             */
            // @ts-ignore
            getRunStart(attribute: java.text.AttributedCharacterIterator.Attribute): number /*int*/
            /**
             * Returns the index of the first character of the run
             * with respect to the given {@code attributes} containing the current character.
             * @param attributes a set of the desired attributes.
             * @return the index of the first character of the run
             */
            // @ts-ignore
            getRunStart(attributes: java.util.Set<any> | Array<any>): number /*int*/
            /**
             * Returns the index of the first character following the run
             * with respect to all attributes containing the current character.
             * <p>Any contiguous text segments having the same attributes (the
             * same set of attribute/value pairs) are treated as separate runs
             * if the attributes have been given to those text segments separately.
             * @return the index of the first character following the run
             */
            // @ts-ignore
            getRunLimit(): number /*int*/
            /**
             * Returns the index of the first character following the run
             * with respect to the given {@code attribute} containing the current character.
             * @param attribute the desired attribute
             * @return the index of the first character following the run
             */
            // @ts-ignore
            getRunLimit(attribute: java.text.AttributedCharacterIterator.Attribute): number /*int*/
            /**
             * Returns the index of the first character following the run
             * with respect to the given {@code attributes} containing the current character.
             * @param attributes a set of the desired attributes
             * @return the index of the first character following the run
             */
            // @ts-ignore
            getRunLimit(attributes: java.util.Set<any> | Array<any>): number /*int*/
            /**
             * Returns a map with the attributes defined on the current
             * character.
             * @return a map with the attributes defined on the current character
             */
            // @ts-ignore
            getAttributes(): java.util.Map<java.text.AttributedCharacterIterator.Attribute, java.lang.Object | any>
            /**
             * Returns the value of the named {@code attribute} for the current character.
             * Returns {@code null} if the {@code attribute} is not defined.
             * @param attribute the desired attribute
             * @return the value of the named {#code attribute} or {@code null}
             */
            // @ts-ignore
            getAttribute(attribute: java.text.AttributedCharacterIterator.Attribute): any
            /**
             * Returns the keys of all attributes defined on the
             * iterator's text range. The set is empty if no
             * attributes are defined.
             * @return the keys of all attributes
             */
            // @ts-ignore
            getAllAttributeKeys(): Array<java.text.AttributedCharacterIterator.Attribute>
        }
    }
}
