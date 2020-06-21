declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLDocument {
                    /**
                     * An iterator to iterate over a particular type of
                     * tag.  The iterator is not thread safe.  If reliable
                     * access to the document is not already ensured by
                     * the context under which the iterator is being used,
                     * its use should be performed under the protection of
                     * Document.render.
                     */
                    // @ts-ignore
                    abstract class Iterator extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Return the attributes for this tag.
                         * @return the <code>AttributeSet</code> for this tag, or
                         *       <code>null</code> if none can be found
                         */
                        // @ts-ignore
                        public abstract getAttributes(): javax.swing.text.AttributeSet
                        /**
                         * Returns the start of the range for which the current occurrence of
                         * the tag is defined and has the same attributes.
                         * @return the start of the range, or -1 if it can't be found
                         */
                        // @ts-ignore
                        public abstract getStartOffset(): number /*int*/
                        /**
                         * Returns the end of the range for which the current occurrence of
                         * the tag is defined and has the same attributes.
                         * @return the end of the range
                         */
                        // @ts-ignore
                        public abstract getEndOffset(): number /*int*/
                        /**
                         * Move the iterator forward to the next occurrence
                         * of the tag it represents.
                         */
                        // @ts-ignore
                        public abstract next(): void
                        /**
                         * Indicates if the iterator is currently
                         * representing an occurrence of a tag.  If
                         * false there are no more tags for this iterator.
                         * @return true if the iterator is currently representing an
                         *               occurrence of a tag, otherwise returns false
                         */
                        // @ts-ignore
                        public abstract isValid(): boolean
                        /**
                         * Type of tag this iterator represents.
                         */
                        // @ts-ignore
                        public abstract getTag(): javax.swing.text.html.HTML.Tag
                    }
                }
            }
        }
    }
}
