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
                    saveButtonText: java.lang.String | string
                    // @ts-ignore
                    openButtonText: java.lang.String | string
                    // @ts-ignore
                    cancelButtonText: java.lang.String | string
                    // @ts-ignore
                    updateButtonText: java.lang.String | string
                    // @ts-ignore
                    helpButtonText: java.lang.String | string
                    /**
                     * The label text displayed on the approve button when a directory
                     * is selected and the current selection mode is FILES_ONLY.
                     * @since 1.4
                     */
                    // @ts-ignore
                    directoryOpenButtonText: java.lang.String | string
                    // @ts-ignore
                    saveButtonToolTipText: java.lang.String | string
                    // @ts-ignore
                    openButtonToolTipText: java.lang.String | string
                    // @ts-ignore
                    cancelButtonToolTipText: java.lang.String | string
                    // @ts-ignore
                    updateButtonToolTipText: java.lang.String | string
                    // @ts-ignore
                    helpButtonToolTipText: java.lang.String | string
                    /**
                     * The tooltip text displayed on the approve button when a directory
                     * is selected and the current selection mode is FILES_ONLY.
                     * @since 1.4
                     */
                    // @ts-ignore
                    directoryOpenButtonToolTipText: java.lang.String | string
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
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public installComponents(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    public uninstallComponents(fc: javax.swing.JFileChooser): void
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
                    public getModel(): javax.swing.plaf.basic.BasicDirectoryModel
                    // @ts-ignore
                    public createPropertyChangeListener(fc: javax.swing.JFileChooser): java.beans.PropertyChangeListener
                    // @ts-ignore
                    public getFileName(): string
                    // @ts-ignore
                    public getDirectoryName(): string
                    // @ts-ignore
                    public setFileName(filename: java.lang.String | string): void
                    // @ts-ignore
                    public setDirectoryName(dirname: java.lang.String | string): void
                    // @ts-ignore
                    public rescanCurrentDirectory(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    public ensureFileIsVisible(fc: javax.swing.JFileChooser, f: java.io.File): void
                    // @ts-ignore
                    public getFileChooser(): javax.swing.JFileChooser
                    // @ts-ignore
                    public getAccessoryPanel(): javax.swing.JPanel
                    // @ts-ignore
                    getApproveButton(fc: javax.swing.JFileChooser): javax.swing.JButton
                    // @ts-ignore
                    public getDefaultButton(fc: javax.swing.JFileChooser): javax.swing.JButton
                    // @ts-ignore
                    public getApproveButtonToolTipText(fc: javax.swing.JFileChooser): string
                    // @ts-ignore
                    public clearIconCache(): void
                    // @ts-ignore
                    createDoubleClickListener(fc: javax.swing.JFileChooser, list: javax.swing.JList<any>): java.awt.event.MouseListener
                    // @ts-ignore
                    public createListSelectionListener(fc: javax.swing.JFileChooser): javax.swing.event.ListSelectionListener
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
                    public getAcceptAllFileFilter(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileFilter
                    // @ts-ignore
                    public getFileView(fc: javax.swing.JFileChooser): javax.swing.filechooser.FileView
                    /**
                     * Returns the title of this dialog
                     */
                    // @ts-ignore
                    public getDialogTitle(fc: javax.swing.JFileChooser): string
                    // @ts-ignore
                    public getApproveButtonMnemonic(fc: javax.swing.JFileChooser): number /*int*/
                    // @ts-ignore
                    public getApproveButtonText(fc: javax.swing.JFileChooser): string
                    // @ts-ignore
                    public getNewFolderAction(): javax.swing.Action
                    // @ts-ignore
                    public getGoHomeAction(): javax.swing.Action
                    // @ts-ignore
                    public getChangeToParentDirectoryAction(): javax.swing.Action
                    // @ts-ignore
                    public getApproveSelectionAction(): javax.swing.Action
                    // @ts-ignore
                    public getCancelSelectionAction(): javax.swing.Action
                    // @ts-ignore
                    public getUpdateAction(): javax.swing.Action
                }
            }
        }
    }
}
