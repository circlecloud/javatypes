declare namespace javax {
    namespace swing {
        namespace colorchooser {
            /**
             * A model that supports selecting a <code>Color</code>.
             * @author Steve Wilson
             * @see java.awt.Color
             */
            // @ts-ignore
            interface ColorSelectionModel {
                /**
                 * Returns the selected <code>Color</code> which should be
                 * non-<code>null</code>.
                 * @return the selected <code>Color</code>
                 * @see #setSelectedColor
                 */
                // @ts-ignore
                getSelectedColor(): java.awt.Color
                /**
                 * Sets the selected color to <code>color</code>.
                 * Note that setting the color to <code>null</code>
                 * is undefined and may have unpredictable results.
                 * This method fires a state changed event if it sets the
                 * current color to a new non-<code>null</code> color.
                 * @param color the new <code>Color</code>
                 * @see #getSelectedColor
                 * @see #addChangeListener
                 */
                // @ts-ignore
                setSelectedColor(color: java.awt.Color): void
                /**
                 * Adds <code>listener</code> as a listener to changes in the model.
                 * @param listener the <code>ChangeListener</code> to be added
                 */
                // @ts-ignore
                addChangeListener(listener: javax.swing.event.ChangeListener): void
                /**
                 * Removes <code>listener</code> as a listener to changes in the model.
                 * @param listener the <code>ChangeListener</code> to be removed
                 */
                // @ts-ignore
                removeChangeListener(listener: javax.swing.event.ChangeListener): void
            }
        }
    }
}
