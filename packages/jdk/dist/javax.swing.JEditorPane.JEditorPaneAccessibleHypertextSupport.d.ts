declare namespace javax {
    namespace swing {
        namespace JEditorPane {
            /**
             * What's returned by
             * <code>AccessibleJEditorPaneHTML.getAccessibleText</code>.
             * Provides support for <code>AccessibleHypertext</code> in case
             * there is an HTML document being displayed in this
             * <code>JEditorPane</code>.
             */
            // @ts-ignore
            class JEditorPaneAccessibleHypertextSupport extends javax.swing.JEditorPane.AccessibleJEditorPane implements javax.accessibility.AccessibleHypertext {
                /**
                 * Make one of these puppies
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the number of links within this hypertext doc.
                 * @return number of links in this hypertext doc.
                 */
                // @ts-ignore
                public getLinkCount(): number /*int*/
                /**
                 * Returns the index into an array of hyperlinks that
                 * is associated with this character index, or -1 if there
                 * is no hyperlink associated with this index.
                 * @param charIndex index within the text
                 * @return index into the set of hyperlinks for this hypertext doc.
                 */
                // @ts-ignore
                public getLinkIndex(charIndex: number /*int*/): number /*int*/
                /**
                 * Returns the index into an array of hyperlinks that
                 * index.  If there is no hyperlink at this index, it returns
                 * null.
                 * @param linkIndex into the set of hyperlinks for this hypertext doc.
                 * @return string representation of the hyperlink
                 */
                // @ts-ignore
                public getLink(linkIndex: number /*int*/): javax.accessibility.AccessibleHyperlink
                /**
                 * Returns the contiguous text within the document that
                 * is associated with this hyperlink.
                 * @param linkIndex into the set of hyperlinks for this hypertext doc.
                 * @return the contiguous text sharing the link at this index
                 */
                // @ts-ignore
                public getLinkText(linkIndex: number /*int*/): string
            }
        }
    }
}
