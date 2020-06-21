declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Metal L&amp;F implementation of a FileChooser.
                 * @author Jeff Dinkins
                 */
                // @ts-ignore
                class MetalFileChooserUI extends javax.swing.plaf.basic.BasicFileChooserUI {
                    // @ts-ignore
                    constructor(filechooser: javax.swing.JFileChooser)
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallComponents(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    public installComponents(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    getButtonPanel(): javax.swing.JPanel
                    // @ts-ignore
                    getBottomPanel(): javax.swing.JPanel
                    // @ts-ignore
                    installStrings(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    installListeners(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    getActionMap(): javax.swing.ActionMap
                    // @ts-ignore
                    createActionMap(): javax.swing.ActionMap
                    // @ts-ignore
                    createList(fc: javax.swing.JFileChooser): javax.swing.JPanel
                    // @ts-ignore
                    createDetailsView(fc: javax.swing.JFileChooser): javax.swing.JPanel
                    /**
                     * Creates a selection listener for the list of files and directories.
                     * @param fc a <code>JFileChooser</code>
                     * @return a <code>ListSelectionListener</code>
                     */
                    // @ts-ignore
                    public createListSelectionListener(fc: javax.swing.JFileChooser): javax.swing.event.ListSelectionListener
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Returns the preferred size of the specified
                     * <code>JFileChooser</code>.
                     * The preferred size is at least as large,
                     * in both height and width,
                     * as the preferred size recommended
                     * by the file chooser's layout manager.
                     * @param c  a <code>JFileChooser</code>
                     * @return a <code>Dimension</code> specifying the preferred
                     *            width and height of the file chooser
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the minimum size of the <code>JFileChooser</code>.
                     * @param c  a <code>JFileChooser</code>
                     * @return a <code>Dimension</code> specifying the minimum
                     *            width and height of the file chooser
                     */
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the maximum size of the <code>JFileChooser</code>.
                     * @param c  a <code>JFileChooser</code>
                     * @return a <code>Dimension</code> specifying the maximum
                     *            width and height of the file chooser
                     */
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public createPropertyChangeListener(fc: javax.swing.JFileChooser): java.beans.PropertyChangeListener
                    // @ts-ignore
                    removeControlButtons(): void
                    // @ts-ignore
                    addControlButtons(): void
                    // @ts-ignore
                    public ensureFileIsVisible(fc: javax.swing.JFileChooser, f: java.io.File): void
                    // @ts-ignore
                    public rescanCurrentDirectory(fc: javax.swing.JFileChooser): void
                    // @ts-ignore
                    public getFileName(): string
                    // @ts-ignore
                    public setFileName(filename: java.lang.String | string): void
                    /**
                     * Property to remember whether a directory is currently selected in the UI.
                     * This is normally called by the UI on a selection event.
                     * @param directorySelected if a directory is currently selected.
                     * @since 1.4
                     */
                    // @ts-ignore
                    setDirectorySelected(directorySelected: boolean): void
                    // @ts-ignore
                    public getDirectoryName(): string
                    // @ts-ignore
                    public setDirectoryName(dirname: java.lang.String | string): void
                    // @ts-ignore
                    createDirectoryComboBoxRenderer(fc: javax.swing.JFileChooser): javax.swing.plaf.metal.MetalFileChooserUI.DirectoryComboBoxRenderer
                    // @ts-ignore
                    createDirectoryComboBoxModel(fc: javax.swing.JFileChooser): javax.swing.plaf.metal.MetalFileChooserUI.DirectoryComboBoxModel
                    // @ts-ignore
                    createFilterComboBoxRenderer(): javax.swing.plaf.metal.MetalFileChooserUI.FilterComboBoxRenderer
                    // @ts-ignore
                    createFilterComboBoxModel(): javax.swing.plaf.metal.MetalFileChooserUI.FilterComboBoxModel
                    // @ts-ignore
                    public valueChanged(e: javax.swing.event.ListSelectionEvent): void
                    // @ts-ignore
                    getApproveButton(fc: javax.swing.JFileChooser): javax.swing.JButton
                }
            }
        }
    }
}
