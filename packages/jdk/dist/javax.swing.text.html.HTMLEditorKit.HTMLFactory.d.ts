declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace HTMLEditorKit {
                    /**
                     * A factory to build views for HTML.  The following
                     * table describes what this factory will build by
                     * default.
                     * <table summary="Describes the tag and view created by this factory by default">
                     * <tr>
                     * <th align=left>Tag<th align=left>View created
                     * </tr><tr>
                     * <td>HTML.Tag.CONTENT<td>InlineView
                     * </tr><tr>
                     * <td>HTML.Tag.IMPLIED<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.P<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.H1<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.H2<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.H3<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.H4<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.H5<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.H6<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.DT<td>javax.swing.text.html.ParagraphView
                     * </tr><tr>
                     * <td>HTML.Tag.MENU<td>ListView
                     * </tr><tr>
                     * <td>HTML.Tag.DIR<td>ListView
                     * </tr><tr>
                     * <td>HTML.Tag.UL<td>ListView
                     * </tr><tr>
                     * <td>HTML.Tag.OL<td>ListView
                     * </tr><tr>
                     * <td>HTML.Tag.LI<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.DL<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.DD<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.BODY<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.HTML<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.CENTER<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.DIV<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.BLOCKQUOTE<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.PRE<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.BLOCKQUOTE<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.PRE<td>BlockView
                     * </tr><tr>
                     * <td>HTML.Tag.IMG<td>ImageView
                     * </tr><tr>
                     * <td>HTML.Tag.HR<td>HRuleView
                     * </tr><tr>
                     * <td>HTML.Tag.BR<td>BRView
                     * </tr><tr>
                     * <td>HTML.Tag.TABLE<td>javax.swing.text.html.TableView
                     * </tr><tr>
                     * <td>HTML.Tag.INPUT<td>FormView
                     * </tr><tr>
                     * <td>HTML.Tag.SELECT<td>FormView
                     * </tr><tr>
                     * <td>HTML.Tag.TEXTAREA<td>FormView
                     * </tr><tr>
                     * <td>HTML.Tag.OBJECT<td>ObjectView
                     * </tr><tr>
                     * <td>HTML.Tag.FRAMESET<td>FrameSetView
                     * </tr><tr>
                     * <td>HTML.Tag.FRAME<td>FrameView
                     * </tr>
                     * </table>
                     */
                    // @ts-ignore
                    class HTMLFactory extends java.lang.Object implements javax.swing.text.ViewFactory {
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a view from an element.
                         * @param elem the element
                         * @return the view
                         */
                        // @ts-ignore
                        public create(elem: javax.swing.text.Element): javax.swing.text.View
                    }
                }
            }
        }
    }
}
