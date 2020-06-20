declare namespace javax {
    namespace swing {
        namespace colorchooser {
            /**
             * This is the abstract superclass for color choosers.  If you want to add
             * a new color chooser panel into a <code>JColorChooser</code>, subclass
             * this class.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Tom Santos
             * @author Steve Wilson
             */
            // @ts-ignore
            class AbstractColorChooserPanel extends javax.swing.JPanel {
                // @ts-ignore
                constructor()
                /**
                 * Invoked automatically when the model's state changes.
                 * It is also called by <code>installChooserPanel</code> to allow
                 * you to set up the initial state of your chooser.
                 * Override this method to update your <code>ChooserPanel</code>.
                 */
                // @ts-ignore
                abstract updateChooser(): void
                /**
                 * Builds a new chooser panel.
                 */
                // @ts-ignore
                abstract buildChooser(): void
                /**
                 * Returns a string containing the display name of the panel.
                 * @return the name of the display panel
                 */
                // @ts-ignore
                abstract getDisplayName(): java.lang.String
                /**
                 * Provides a hint to the look and feel as to the
                 * <code>KeyEvent.VK</code> constant that can be used as a mnemonic to
                 * access the panel. A return value &lt;= 0 indicates there is no mnemonic.
                 * <p>
                 * The return value here is a hint, it is ultimately up to the look
                 * and feel to honor the return value in some meaningful way.
                 * <p>
                 * This implementation returns 0, indicating the
                 * <code>AbstractColorChooserPanel</code> does not support a mnemonic,
                 * subclasses wishing a mnemonic will need to override this.
                 * @return KeyEvent.VK constant identifying the mnemonic; &lt;= 0 for no
                 *          mnemonic
                 * @see #getDisplayedMnemonicIndex
                 * @since 1.4
                 */
                // @ts-ignore
                getMnemonic(): int
                /**
                 * Provides a hint to the look and feel as to the index of the character in
                 * <code>getDisplayName</code> that should be visually identified as the
                 * mnemonic. The look and feel should only use this if
                 * <code>getMnemonic</code> returns a value &gt; 0.
                 * <p>
                 * The return value here is a hint, it is ultimately up to the look
                 * and feel to honor the return value in some meaningful way. For example,
                 * a look and feel may wish to render each
                 * <code>AbstractColorChooserPanel</code> in a <code>JTabbedPane</code>,
                 * and further use this return value to underline a character in
                 * the <code>getDisplayName</code>.
                 * <p>
                 * This implementation returns -1, indicating the
                 * <code>AbstractColorChooserPanel</code> does not support a mnemonic,
                 * subclasses wishing a mnemonic will need to override this.
                 * @return Character index to render mnemonic for; -1 to provide no
                 *                    visual identifier for this panel.
                 * @see #getMnemonic
                 * @since 1.4
                 */
                // @ts-ignore
                getDisplayedMnemonicIndex(): int
                /**
                 * Returns the small display icon for the panel.
                 * @return the small display icon
                 */
                // @ts-ignore
                abstract getSmallDisplayIcon(): javax.swing.Icon
                /**
                 * Returns the large display icon for the panel.
                 * @return the large display icon
                 */
                // @ts-ignore
                abstract getLargeDisplayIcon(): javax.swing.Icon
                /**
                 * Invoked when the panel is added to the chooser.
                 * If you override this, be sure to call <code>super</code>.
                 * @param enclosingChooser  the panel to be added
                 * @exception RuntimeException  if the chooser panel has already been
                 *                           installed
                 */
                // @ts-ignore
                installChooserPanel(enclosingChooser: javax.swing.JColorChooser): void
                /**
                 * Invoked when the panel is removed from the chooser.
                 * If override this, be sure to call <code>super</code>.
                 */
                // @ts-ignore
                uninstallChooserPanel(enclosingChooser: javax.swing.JColorChooser): void
                /**
                 * Returns the model that the chooser panel is editing.
                 * @return the <code>ColorSelectionModel</code> model this panel
                 *          is editing
                 */
                // @ts-ignore
                getColorSelectionModel(): javax.swing.colorchooser.ColorSelectionModel
                /**
                 * Returns the color that is currently selected.
                 * @return the <code>Color</code> that is selected
                 */
                // @ts-ignore
                getColorFromModel(): java.awt.Color
                /**
                 * Draws the panel.
                 * @param g  the <code>Graphics</code> object
                 */
                // @ts-ignore
                paint(g: java.awt.Graphics): void
            }
        }
    }
}
