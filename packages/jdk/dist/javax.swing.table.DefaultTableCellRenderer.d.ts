declare namespace javax {
    namespace swing {
        namespace table {
            /**
             * The standard class for rendering (displaying) individual cells
             * in a <code>JTable</code>.
             * <p>
             * <strong><a name="override">Implementation Note:</a></strong>
             * This class inherits from <code>JLabel</code>, a standard component class.
             * However <code>JTable</code> employs a unique mechanism for rendering
             * its cells and therefore requires some slightly modified behavior
             * from its cell renderer.
             * The table class defines a single cell renderer and uses it as a
             * as a rubber-stamp for rendering all cells in the table;
             * it renders the first cell,
             * changes the contents of that cell renderer,
             * shifts the origin to the new location, re-draws it, and so on.
             * The standard <code>JLabel</code> component was not
             * designed to be used this way and we want to avoid
             * triggering a <code>revalidate</code> each time the
             * cell is drawn. This would greatly decrease performance because the
             * <code>revalidate</code> message would be
             * passed up the hierarchy of the container to determine whether any other
             * components would be affected.
             * As the renderer is only parented for the lifetime of a painting operation
             * we similarly want to avoid the overhead associated with walking the
             * hierarchy for painting operations.
             * So this class
             * overrides the <code>validate</code>, <code>invalidate</code>,
             * <code>revalidate</code>, <code>repaint</code>, and
             * <code>firePropertyChange</code> methods to be
             * no-ops and override the <code>isOpaque</code> method solely to improve
             * performance.  If you write your own renderer,
             * please keep this performance consideration in mind.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Philip Milne
             * @see JTable
             */
            // @ts-ignore
            class DefaultTableCellRenderer extends javax.swing.JLabel implements javax.swing.table.TableCellRenderer, java.io.Serializable {
                /**
                 * Creates a default table cell renderer.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                static noFocusBorder: javax.swing.border.Border
                /**
                 * Overrides <code>JComponent.setForeground</code> to assign
                 * the unselected-foreground color to the specified color.
                 * @param c set the foreground color to this value
                 */
                // @ts-ignore
                public setForeground(c: java.awt.Color): void
                /**
                 * Overrides <code>JComponent.setBackground</code> to assign
                 * the unselected-background color to the specified color.
                 * @param c set the background color to this value
                 */
                // @ts-ignore
                public setBackground(c: java.awt.Color): void
                /**
                 * Notification from the <code>UIManager</code> that the look and feel
                 * [L&amp;F] has changed.
                 * Replaces the current UI object with the latest version from the
                 * <code>UIManager</code>.
                 * @see JComponent#updateUI
                 */
                // @ts-ignore
                public updateUI(): void
                /**
                 * Returns the default table cell renderer.
                 * <p>
                 * During a printing operation, this method will be called with
                 * <code>isSelected</code> and <code>hasFocus</code> values of
                 * <code>false</code> to prevent selection and focus from appearing
                 * in the printed output. To do other customization based on whether
                 * or not the table is being printed, check the return value from
                 * {@link javax.swing.JComponent#isPaintingForPrint()}.
                 * @param table  the <code>JTable</code>
                 * @param value  the value to assign to the cell at
                 *                   <code>[row, column]</code>
                 * @param isSelected true if cell is selected
                 * @param hasFocus true if cell has focus
                 * @param row  the row of the cell to render
                 * @param column the column of the cell to render
                 * @return the default table cell renderer
                 * @see javax.swing.JComponent#isPaintingForPrint()
                 */
                // @ts-ignore
                public getTableCellRendererComponent(table: javax.swing.JTable, value: java.lang.Object | any, isSelected: boolean, hasFocus: boolean, row: number /*int*/, column: number /*int*/): java.awt.Component
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public isOpaque(): boolean
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 * @since 1.5
                 */
                // @ts-ignore
                public invalidate(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public validate(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public revalidate(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public repaint(tm: number /*long*/, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public repaint(r: java.awt.Rectangle): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 * @since 1.5
                 */
                // @ts-ignore
                public repaint(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                firePropertyChange(propertyName: java.lang.String | string, oldValue: java.lang.Object | any, newValue: java.lang.Object | any): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: boolean, newValue: boolean): void
                /**
                 * Sets the <code>String</code> object for the cell being rendered to
                 * <code>value</code>.
                 * @param value  the string value for this cell; if value is
                 *           <code>null</code> it sets the text value to an empty string
                 * @see JLabel#setText
                 */
                // @ts-ignore
                setValue(value: java.lang.Object | any): void
            }
        }
    }
}
