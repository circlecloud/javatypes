declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLEditorKit {
                    /**
                     * InsertHTMLTextAction can be used to insert an arbitrary string of HTML
                     * into an existing HTML document. At least two HTML.Tags need to be
                     * supplied. The first Tag, parentTag, identifies the parent in
                     * the document to add the elements to. The second tag, addTag,
                     * identifies the first tag that should be added to the document as
                     * seen in the HTML string. One important thing to remember, is that
                     * the parser is going to generate all the appropriate tags, even if
                     * they aren't in the HTML string passed in.<p>
                     * For example, lets say you wanted to create an action to insert
                     * a table into the body. The parentTag would be HTML.Tag.BODY,
                     * addTag would be HTML.Tag.TABLE, and the string could be something
                     * like &lt;table&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;.
                     * <p>There is also an option to supply an alternate parentTag and
                     * addTag. These will be checked for if there is no parentTag at
                     * offset.
                     */
                    // @ts-ignore
                    class InsertHTMLTextAction extends javax.swing.text.html.HTMLEditorKit.HTMLTextAction {
                        // @ts-ignore
                        constructor(name: string, html: string, parentTag: javax.swing.text.html.HTML.Tag, addTag: javax.swing.text.html.HTML.Tag)
                        // @ts-ignore
                        constructor(name: string, html: string, parentTag: javax.swing.text.html.HTML.Tag, addTag: javax.swing.text.html.HTML.Tag, alternateParentTag: javax.swing.text.html.HTML.Tag, alternateAddTag: javax.swing.text.html.HTML.Tag)
                        /**
                         * HTML to insert.
                         */
                        // @ts-ignore
                        html: string
                        /**
                         * Tag to check for in the document.
                         */
                        // @ts-ignore
                        parentTag: javax.swing.text.html.HTML.Tag
                        /**
                         * Tag in HTML to start adding tags from.
                         */
                        // @ts-ignore
                        addTag: javax.swing.text.html.HTML.Tag
                        /**
                         * Alternate Tag to check for in the document if parentTag is
                         * not found.
                         */
                        // @ts-ignore
                        alternateParentTag: javax.swing.text.html.HTML.Tag
                        /**
                         * Alternate tag in HTML to start adding tags from if parentTag
                         * is not found and alternateParentTag is found.
                         */
                        // @ts-ignore
                        alternateAddTag: javax.swing.text.html.HTML.Tag
                        /**
                         * A cover for HTMLEditorKit.insertHTML. If an exception it
                         * thrown it is wrapped in a RuntimeException and thrown.
                         */
                        // @ts-ignore
                        insertHTML(editor: javax.swing.JEditorPane, doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/, html: string, popDepth: number /*int*/, pushDepth: number /*int*/, addTag: javax.swing.text.html.HTML.Tag): void
                        /**
                         * This is invoked when inserting at a boundary. It determines
                         * the number of pops, and then the number of pushes that need
                         * to be performed, and then invokes insertHTML.
                         * @since 1.3
                         */
                        // @ts-ignore
                        insertAtBoundary(editor: javax.swing.JEditorPane, doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/, insertElement: javax.swing.text.Element, html: string, parentTag: javax.swing.text.html.HTML.Tag, addTag: javax.swing.text.html.HTML.Tag): void
                        /**
                         * This is invoked when inserting at a boundary. It determines
                         * the number of pops, and then the number of pushes that need
                         * to be performed, and then invokes insertHTML.
                         * @deprecated As of Java 2 platform v1.3, use insertAtBoundary
                         */
                        // @ts-ignore
                        insertAtBoundry(editor: javax.swing.JEditorPane, doc: javax.swing.text.html.HTMLDocument, offset: number /*int*/, insertElement: javax.swing.text.Element, html: string, parentTag: javax.swing.text.html.HTML.Tag, addTag: javax.swing.text.html.HTML.Tag): void
                        /**
                         * Inserts the HTML into the document.
                         * @param ae the event
                         */
                        // @ts-ignore
                        actionPerformed(ae: java.awt.event.ActionEvent): void
                    }
                }
            }
        }
    }
}
