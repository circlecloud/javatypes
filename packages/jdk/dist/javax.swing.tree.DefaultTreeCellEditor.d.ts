declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * A <code>TreeCellEditor</code>. You need to supply an
             * instance of <code>DefaultTreeCellRenderer</code>
             * so that the icons can be obtained. You can optionally supply
             * a <code>TreeCellEditor</code> that will be layed out according
             * to the icon in the <code>DefaultTreeCellRenderer</code>.
             * If you do not supply a <code>TreeCellEditor</code>,
             * a <code>TextField</code> will be used. Editing is started
             * on a triple mouse click, or after a click, pause, click and
             * a delay of 1200 milliseconds.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see javax.swing.JTree
             * @author Scott Violet
             */
            // @ts-ignore
            class DefaultTreeCellEditor extends java.lang.Object implements java.awt.event.ActionListener, javax.swing.tree.TreeCellEditor, javax.swing.event.TreeSelectionListener {
                /**
                 * Constructs a <code>DefaultTreeCellEditor</code>
                 * object for a JTree using the specified renderer and
                 * a default editor. (Use this constructor for normal editing.)
                 * @param tree      a <code>JTree</code> object
                 * @param renderer  a <code>DefaultTreeCellRenderer</code> object
                 */
                // @ts-ignore
                constructor(tree: javax.swing.JTree, renderer: javax.swing.tree.DefaultTreeCellRenderer)
                /**
                 * Constructs a <code>DefaultTreeCellEditor</code>
                 * object for a <code>JTree</code> using the
                 * specified renderer and the specified editor. (Use this constructor
                 * for specialized editing.)
                 * @param tree      a <code>JTree</code> object
                 * @param renderer  a <code>DefaultTreeCellRenderer</code> object
                 * @param editor    a <code>TreeCellEditor</code> object
                 */
                // @ts-ignore
                constructor(tree: javax.swing.JTree, renderer: javax.swing.tree.DefaultTreeCellRenderer, editor: javax.swing.tree.TreeCellEditor)
                /**
                 * Editor handling the editing.
                 */
                // @ts-ignore
                realEditor: javax.swing.tree.TreeCellEditor
                /**
                 * Renderer, used to get border and offsets from.
                 */
                // @ts-ignore
                renderer: javax.swing.tree.DefaultTreeCellRenderer
                /**
                 * Editing container, will contain the <code>editorComponent</code>.
                 */
                // @ts-ignore
                editingContainer: java.awt.Container
                /**
                 * Component used in editing, obtained from the
                 * <code>editingContainer</code>.
                 */
                // @ts-ignore
                editingComponent: java.awt.Component
                /**
                 * As of Java 2 platform v1.4 this field should no longer be used. If
                 * you wish to provide similar behavior you should directly override
                 * <code>isCellEditable</code>.
                 */
                // @ts-ignore
                canEdit: boolean
                /**
                 * Used in editing. Indicates x position to place
                 * <code>editingComponent</code>.
                 */
                // @ts-ignore
                offset: number /*int*/
                /**
                 * <code>JTree</code> instance listening too.
                 */
                // @ts-ignore
                tree: javax.swing.JTree
                /**
                 * Last path that was selected.
                 */
                // @ts-ignore
                lastPath: javax.swing.tree.TreePath
                /**
                 * Used before starting the editing session.
                 */
                // @ts-ignore
                timer: javax.swing.Timer
                /**
                 * Row that was last passed into
                 * <code>getTreeCellEditorComponent</code>.
                 */
                // @ts-ignore
                lastRow: number /*int*/
                /**
                 * True if the border selection color should be drawn.
                 */
                // @ts-ignore
                borderSelectionColor: java.awt.Color
                /**
                 * Icon to use when editing.
                 */
                // @ts-ignore
                editingIcon: javax.swing.Icon
                /**
                 * Font to paint with, <code>null</code> indicates
                 * font of renderer is to be used.
                 */
                // @ts-ignore
                font: java.awt.Font
                /**
                 * Sets the color to use for the border.
                 * @param newColor the new border color
                 */
                // @ts-ignore
                public setBorderSelectionColor(newColor: java.awt.Color): void
                /**
                 * Returns the color the border is drawn.
                 * @return the border selection color
                 */
                // @ts-ignore
                public getBorderSelectionColor(): java.awt.Color
                /**
                 * Sets the font to edit with. <code>null</code> indicates
                 * the renderers font should be used. This will NOT
                 * override any font you have set in the editor
                 * the receiver was instantiated with. If <code>null</code>
                 * for an editor was passed in a default editor will be
                 * created that will pick up this font.
                 * @param font  the editing <code>Font</code>
                 * @see #getFont
                 */
                // @ts-ignore
                public setFont(font: java.awt.Font): void
                /**
                 * Gets the font used for editing.
                 * @return the editing <code>Font</code>
                 * @see #setFont
                 */
                // @ts-ignore
                public getFont(): java.awt.Font
                /**
                 * Configures the editor.  Passed onto the <code>realEditor</code>.
                 */
                // @ts-ignore
                public getTreeCellEditorComponent(tree: javax.swing.JTree, value: java.lang.Object | any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number /*int*/): java.awt.Component
                /**
                 * Returns the value currently being edited.
                 * @return the value currently being edited
                 */
                // @ts-ignore
                public getCellEditorValue(): any
                /**
                 * If the <code>realEditor</code> returns true to this
                 * message, <code>prepareForEditing</code>
                 * is messaged and true is returned.
                 */
                // @ts-ignore
                public isCellEditable(event: java.util.EventObject): boolean
                /**
                 * Messages the <code>realEditor</code> for the return value.
                 */
                // @ts-ignore
                public shouldSelectCell(event: java.util.EventObject): boolean
                /**
                 * If the <code>realEditor</code> will allow editing to stop,
                 * the <code>realEditor</code> is removed and true is returned,
                 * otherwise false is returned.
                 */
                // @ts-ignore
                public stopCellEditing(): boolean
                /**
                 * Messages <code>cancelCellEditing</code> to the
                 * <code>realEditor</code> and removes it from this instance.
                 */
                // @ts-ignore
                public cancelCellEditing(): void
                /**
                 * Adds the <code>CellEditorListener</code>.
                 * @param l the listener to be added
                 */
                // @ts-ignore
                public addCellEditorListener(l: javax.swing.event.CellEditorListener): void
                /**
                 * Removes the previously added <code>CellEditorListener</code>.
                 * @param l the listener to be removed
                 */
                // @ts-ignore
                public removeCellEditorListener(l: javax.swing.event.CellEditorListener): void
                /**
                 * Returns an array of all the <code>CellEditorListener</code>s added
                 * to this DefaultTreeCellEditor with addCellEditorListener().
                 * @return all of the <code>CellEditorListener</code>s added or an empty
                 *          array if no listeners have been added
                 * @since 1.4
                 */
                // @ts-ignore
                public getCellEditorListeners(): javax.swing.event.CellEditorListener[]
                /**
                 * Resets <code>lastPath</code>.
                 */
                // @ts-ignore
                public valueChanged(e: javax.swing.event.TreeSelectionEvent): void
                /**
                 * Messaged when the timer fires, this will start the editing
                 * session.
                 */
                // @ts-ignore
                public actionPerformed(e: java.awt.event.ActionEvent): void
                /**
                 * Sets the tree currently editing for. This is needed to add
                 * a selection listener.
                 * @param newTree the new tree to be edited
                 */
                // @ts-ignore
                setTree(newTree: javax.swing.JTree): void
                /**
                 * Returns true if <code>event</code> is a <code>MouseEvent</code>
                 * and the click count is 1.
                 * @param event  the event being studied
                 */
                // @ts-ignore
                shouldStartEditingTimer(event: java.util.EventObject): boolean
                /**
                 * Starts the editing timer.
                 */
                // @ts-ignore
                startEditingTimer(): void
                /**
                 * Returns true if <code>event</code> is <code>null</code>,
                 * or it is a <code>MouseEvent</code> with a click count &gt; 2
                 * and <code>inHitRegion</code> returns true.
                 * @param event the event being studied
                 */
                // @ts-ignore
                canEditImmediately(event: java.util.EventObject): boolean
                /**
                 * Returns true if the passed in location is a valid mouse location
                 * to start editing from. This is implemented to return false if
                 * <code>x</code> is &lt;= the width of the icon and icon gap displayed
                 * by the renderer. In other words this returns true if the user
                 * clicks over the text part displayed by the renderer, and false
                 * otherwise.
                 * @param x the x-coordinate of the point
                 * @param y the y-coordinate of the point
                 * @return true if the passed in location is a valid mouse location
                 */
                // @ts-ignore
                inHitRegion(x: number /*int*/, y: number /*int*/): boolean
                // @ts-ignore
                determineOffset(tree: javax.swing.JTree, value: java.lang.Object | any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number /*int*/): void
                /**
                 * Invoked just before editing is to start. Will add the
                 * <code>editingComponent</code> to the
                 * <code>editingContainer</code>.
                 */
                // @ts-ignore
                prepareForEditing(): void
                /**
                 * Creates the container to manage placement of
                 * <code>editingComponent</code>.
                 */
                // @ts-ignore
                createContainer(): java.awt.Container
                /**
                 * This is invoked if a <code>TreeCellEditor</code>
                 * is not supplied in the constructor.
                 * It returns a <code>TextField</code> editor.
                 * @return a new <code>TextField</code> editor
                 */
                // @ts-ignore
                createTreeCellEditor(): javax.swing.tree.TreeCellEditor
            }
        }
    }
}
