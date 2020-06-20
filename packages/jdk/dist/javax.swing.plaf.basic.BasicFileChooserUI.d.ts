declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basic L&amp;F implementation of a FileChooser.
                 * @author Jeff Dinkins
                 */
                // @ts-ignore
                class BasicFileChooserUI extends javax.swing.plaf.FileChooserUI {
                    // @ts-ignore
                    constructor(b: javax.swing.JFileChooser)
                    // @ts-ignore
                    directoryIcon: javax.swing.Icon
                    // @ts-ignore
                    fileIcon: javax.swing.Icon
                    // @ts-ignore
                    computerIcon: javax.swing.Icon
                    // @ts-ignore
                    hardDriveIcon: javax.swing.Icon
                    // @ts-ignore
                    floppyDriveIcon: javax.swing.Icon
                    // @ts-ignore
                    newFolderIcon: javax.swing.Icon
                    // @ts-ignore
                    upFolderIcon: javax.swing.Icon
                    // @ts-ignore
                    homeFolderIcon: javax.swing.Icon
                    // @ts-ignore
                    listViewIcon: javax.swing.Icon
                    // @ts-ignore
                    detailsViewIcon: javax.swing.Icon
                    // @ts-ignore
                    viewMenuIcon: javax.swing.Icon
                    // @ts-ignore
                    saveButtonMnemonic: number /*int*/
                    // @ts-ignore
                    openButtonMnemonic: number /*int*/
                    // @ts-ignore
                    cancelButtonMnemonic: number /*int*/
                    // @ts-ignore
                    updateButtonMnemonic: number /*int*/
                    // @ts-ignore
                    helpButtonMnemonic: number /*int*/
                    /**
                     * The mnemonic keycode used for the approve button when a directory
                     * is selected and the current selection mode is FILES_ONLY.
                     * @since 1.4
                     */
                    // @ts-ignore
                    directoryOpenButtonMnemonic: number /*int*/
                    // @ts-ignore
                    saveButtonText: string
                    // @ts-ignore
                    openButtonText: string
                    // @ts-ignore
                    cancelButtonText: string
                    // @ts-ignore
                    updateButtonText: string
                    // @ts-ignore
                    helpButtonText: string
                    /**
                     * The label text displayed on the approve button when a directory
                     * is selected and the current selection mode is FILES_ONLY.
                     * @since 1.4
                     */
                    // @ts-ignore
                    directoryOpenButtonText: string
                    // @ts-ignore
                    saveButtonToolTipText: string
                    // @ts-ignore
                    openButtonToolTipText: string
                    // @ts-ignore
                    cancelButtonToolTipText: string
                    // @ts-ignore
                    updateButtonToolTipText: string
                    // @ts-ignore
                    helpButtonToolTipText: string
                    /**
                     * The tooltip text displayed on the approve button when a directory
                     * is selected and the current selection mode is FILES_ONLY.
                     * @since 1.4
                     */
                    // @ts-ignore
                    directoryOpenButtonToolTipText: string
                    /**
                     * Creates a {@code BasicFileChooserUI} implementation
                     * for the specified component. By default
                     * the {@code BasicLookAndFeel} class uses
                     * {@code createUI} methods of all basic UIs classes
                     * to instantiate UIs.
                     * @param c the {#code JFileChooser} which needs a UI
                     * @return the {#code BasicFileChooserUI} object
                     * @see UIDefaults#getUI(JComponent)
                     * @since 1.7
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installComponents(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    uninstallComponents(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    installListeners(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    uninstallListeners(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    installDefaults(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    installIcons(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    installStrings(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    uninstallDefaults(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    uninstallIcons(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    uninstallStrings(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    createModel(): void
                    // @ts-ignore
                    getModel(): javax.swing.plaf.basic.BasicDirectoryModel
                    // @ts-ignore
                    createPropertyChangeListener(fc: javax.swing.JFileChooser): java.beans.PropertyChangeListener
                    // @ts-ignore
                    getFileName(): java.lang.String
                    // @ts-ignore
                    getDirectoryName(): java.lang.String
                    // @ts-ignore
                    setFileName(filename: string): void
                    // @ts-ignore
                    setDirectoryName(dirname: string): void
                    // @ts-ignore
                    rescanCurrentDirectory(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    ensureFileIsVisible(fc: javax.swing.JFileChooser, f: java.io.File): void
                    // @ts-ignore
                    getFileChooser(): javax.swing.JFileChooser
                    // @ts-ignore
                    getAccessoryPanel(): javax.swing.JPanel
                    // @ts-ignore
                    getApproveButton(fc: javax.swing.JFileChooser): javax.swing.JButton
                    // @ts-ignore
                    getDefaultButton(fc: javax.swing.JFileChooser): javax.swing.JButton
                    // @ts-ignore
                    getApproveButtonToolTipText(fc: javax.swing.JFileChooser): java.lang.String
                    // @ts-ignore
                    clearIconCache(): void
                    // @ts-ignore
                    createDoubleClickListener(fc: javax.swing.JFileChooser, list: javax.swing.JList): java.awt.event.MouseListener
                    // @ts-ignore
                    createListSelectionListener(fc: javax.swing.JFileChooser): javax.swing.event.ListSelectionListener
                    /**
                     * Property to remember whether a directory is currently selected in the UI.
                     * @return <code>true</code> iff a directory is currently selected.
                     * @since 1.4
                     */
                    // @ts-ignore
                    isDirectorySelected(): boolean
                    /**
                     * Property to remember whether a directory is currently selected in the UI.
                     * This is normally called by the UI on a selection event.
                     * @param b iff a directory is currently selected.
                     * @since 1.4
                     */
                    // @ts-ignore
                    setDirectorySelected(b: boolean): void
                    /**
                     * Property to remember the directory that is currently selected in the UI.
                     * @return the value of the <code>directory</code> property
                     * @see #setDirectory
                     * @since 1.4
                     */
                    // @ts-ignore
                    getDirectory(): java.io.File
                    /**
                     * Property to remember the directory that is currently selected in the UI.
                     * This is normally called by the UI on a selection event.
                     * @param f the <code>File</code> object representing the directory that is
                     *           currently selected
                     * @since 1.4
                     */
                    // @ts-ignore
                    setDirectory(f: java.io.File): void
                    /**
                     * Returns the default accept all file filter
                     */
                    // @ts-ignore
                    getAcceptAllFileFilter(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
                    // @ts-ignore
                    getFileView(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileView
                    /**
                     * Returns the title of this dialog
                     */
                    // @ts-ignore
                    getDialogTitle(fc: javax.swing.JFileChooser): java.lang.String
                    // @ts-ignore
                    getApproveButtonMnemonic(fc: javax.swing.JFileChooser): int
                    // @ts-ignore
                    getApproveButtonText(fc: javax.swing.JFileChooser): java.lang.String
                    // @ts-ignore
                    getNewFolderAction(): javax.swing.Action
                    // @ts-ignore
                    getGoHomeAction(): javax.swing.Action
                    // @ts-ignore
                    getChangeToParentDirectoryAction(): javax.swing.Action
                    // @ts-ignore
                    getApproveSelectionAction(): javax.swing.Action
                    // @ts-ignore
                    getCancelSelectionAction(): javax.swing.Action
                    // @ts-ignore
                    getUpdateAction(): javax.swing.Action
                }
            }
        }
    }
}
