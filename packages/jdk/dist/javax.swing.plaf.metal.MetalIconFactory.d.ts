declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Factory object that vends <code>Icon</code>s for
                 * the Java&trade; look and feel (Metal).
                 * These icons are used extensively in Metal via the defaults mechanism.
                 * While other look and feels often use GIFs for icons, creating icons
                 * in code facilitates switching to other themes.
                 * <p>
                 * Each method in this class returns
                 * either an <code>Icon</code> or <code>null</code>,
                 * where <code>null</code> implies that there is no default icon.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Michael C. Albers
                 */
                // @ts-ignore
                class MetalIconFactory extends java.lang.Object implements java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly DARK: boolean
                    // @ts-ignore
                    readonly LIGHT: boolean
                    // @ts-ignore
                    getFileChooserDetailViewIcon(): javax.swing.Icon
                    // @ts-ignore
                    getFileChooserHomeFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    getFileChooserListViewIcon(): javax.swing.Icon
                    // @ts-ignore
                    getFileChooserNewFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    getFileChooserUpFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    getInternalFrameAltMaximizeIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    getInternalFrameCloseIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    getInternalFrameDefaultMenuIcon(): javax.swing.Icon
                    // @ts-ignore
                    getInternalFrameMaximizeIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    getInternalFrameMinimizeIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    getRadioButtonIcon(): javax.swing.Icon
                    /**
                     * Returns a checkbox icon.
                     * @since 1.3
                     */
                    // @ts-ignore
                    getCheckBoxIcon(): javax.swing.Icon
                    // @ts-ignore
                    getTreeComputerIcon(): javax.swing.Icon
                    // @ts-ignore
                    getTreeFloppyDriveIcon(): javax.swing.Icon
                    // @ts-ignore
                    getTreeFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    getTreeHardDriveIcon(): javax.swing.Icon
                    // @ts-ignore
                    getTreeLeafIcon(): javax.swing.Icon
                    // @ts-ignore
                    getTreeControlIcon(isCollapsed: boolean): javax.swing.Icon
                    // @ts-ignore
                    getMenuArrowIcon(): javax.swing.Icon
                    /**
                     * Returns an icon to be used by <code>JCheckBoxMenuItem</code>.
                     * @return the default icon for check box menu items,
                     *          or <code>null</code> if no default exists
                     */
                    // @ts-ignore
                    getMenuItemCheckIcon(): javax.swing.Icon
                    // @ts-ignore
                    getMenuItemArrowIcon(): javax.swing.Icon
                    // @ts-ignore
                    getCheckBoxMenuItemIcon(): javax.swing.Icon
                    // @ts-ignore
                    getRadioButtonMenuItemIcon(): javax.swing.Icon
                    // @ts-ignore
                    getHorizontalSliderThumbIcon(): javax.swing.Icon
                    // @ts-ignore
                    getVerticalSliderThumbIcon(): javax.swing.Icon
                }
            }
        }
    }
}
