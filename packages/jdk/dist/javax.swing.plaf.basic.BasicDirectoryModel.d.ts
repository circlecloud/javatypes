declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basic implementation of a file list.
                 * @author Jeff Dinkins
                 */
                // @ts-ignore
                class BasicDirectoryModel extends javax.swing.AbstractListModel<java.lang.Object> implements java.beans.PropertyChangeListener {
                    // @ts-ignore
                    constructor(filechooser: javax.swing.JFileChooser)
                    // @ts-ignore
                    propertyChange(e: java.beans.PropertyChangeEvent): void
                    /**
                     * This method is used to interrupt file loading thread.
                     */
                    // @ts-ignore
                    invalidateFileCache(): void
                    // @ts-ignore
                    getDirectories(): java.util.Vector<java.io.File>
                    // @ts-ignore
                    getFiles(): java.util.Vector<java.io.File>
                    // @ts-ignore
                    validateFileCache(): void
                    /**
                     * Renames a file in the underlying file system.
                     * @param oldFile a <code>File</code> object representing
                     *         the existing file
                     * @param newFile a <code>File</code> object representing
                     *         the desired new file name
                     * @return <code>true</code> if rename succeeded,
                     *         otherwise <code>false</code>
                     * @since 1.4
                     */
                    // @ts-ignore
                    renameFile(oldFile: java.io.File, newFile: java.io.File): boolean
                    // @ts-ignore
                    fireContentsChanged(): void
                    // @ts-ignore
                    getSize(): int
                    // @ts-ignore
                    contains(o: any): boolean
                    // @ts-ignore
                    indexOf(o: any): int
                    // @ts-ignore
                    getElementAt(index: number /*int*/): java.lang.Object
                    /**
                     * Obsolete - not used.
                     */
                    // @ts-ignore
                    intervalAdded(e: javax.swing.event.ListDataEvent): void
                    /**
                     * Obsolete - not used.
                     */
                    // @ts-ignore
                    intervalRemoved(e: javax.swing.event.ListDataEvent): void
                    // @ts-ignore
                    sort(v: java.util.Vector<java.io.File>): void
                    // @ts-ignore
                    lt(a: java.io.File, b: java.io.File): boolean
                    /**
                     * Adds a PropertyChangeListener to the listener list. The listener is
                     * registered for all bound properties of this class.
                     * <p>
                     * If <code>listener</code> is <code>null</code>,
                     * no exception is thrown and no action is performed.
                     * @param listener  the property change listener to be added
                     * @see #removePropertyChangeListener
                     * @see #getPropertyChangeListeners
                     * @since 1.6
                     */
                    // @ts-ignore
                    addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Removes a PropertyChangeListener from the listener list.
                     * <p>
                     * If listener is null, no exception is thrown and no action is performed.
                     * @param listener the PropertyChangeListener to be removed
                     * @see #addPropertyChangeListener
                     * @see #getPropertyChangeListeners
                     * @since 1.6
                     */
                    // @ts-ignore
                    removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                    /**
                     * Returns an array of all the property change listeners
                     * registered on this component.
                     * @return all of this component's <code>PropertyChangeListener</code>s
                     *          or an empty array if no property change
                     *          listeners are currently registered
                     * @see #addPropertyChangeListener
                     * @see #removePropertyChangeListener
                     * @see java.beans.PropertyChangeSupport#getPropertyChangeListeners
                     * @since 1.6
                     */
                    // @ts-ignore
                    getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
                    /**
                     * Support for reporting bound property changes for boolean properties.
                     * This method can be called when a bound property has changed and it will
                     * send the appropriate PropertyChangeEvent to any registered
                     * PropertyChangeListeners.
                     * @param propertyName the property whose value has changed
                     * @param oldValue the property's previous value
                     * @param newValue the property's new value
                     * @since 1.6
                     */
                    // @ts-ignore
                    firePropertyChange(propertyName: string, oldValue: any, newValue: any): void
                }
            }
        }
    }
}
