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
                    public static readonly DARK: boolean
                    // @ts-ignore
                    public static readonly LIGHT: boolean
                    // @ts-ignore
                    public static getFileChooserDetailViewIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getFileChooserHomeFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getFileChooserListViewIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getFileChooserNewFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getFileChooserUpFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getInternalFrameAltMaximizeIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    public static getInternalFrameCloseIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    public static getInternalFrameDefaultMenuIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getInternalFrameMaximizeIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    public static getInternalFrameMinimizeIcon(size: number /*int*/): javax.swing.Icon
                    // @ts-ignore
                    public static getRadioButtonIcon(): javax.swing.Icon
                    /**
                     * Returns a checkbox icon.
                     * @since 1.3
                     */
                    // @ts-ignore
                    public static getCheckBoxIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getTreeComputerIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getTreeFloppyDriveIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getTreeFolderIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getTreeHardDriveIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getTreeLeafIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getTreeControlIcon(isCollapsed: boolean): javax.swing.Icon
                    // @ts-ignore
                    public static getMenuArrowIcon(): javax.swing.Icon
                    /**
                     * Returns an icon to be used by <code>JCheckBoxMenuItem</code>.
                     * @return the default icon for check box menu items,
                     *          or <code>null</code> if no default exists
                     */
                    // @ts-ignore
                    public static getMenuItemCheckIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getMenuItemArrowIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getCheckBoxMenuItemIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getRadioButtonMenuItemIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getHorizontalSliderThumbIcon(): javax.swing.Icon
                    // @ts-ignore
                    public static getVerticalSliderThumbIcon(): javax.swing.Icon
                }
            }
        }
    }
}
