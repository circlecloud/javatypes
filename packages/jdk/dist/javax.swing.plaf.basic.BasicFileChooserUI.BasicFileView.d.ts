declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicFileChooserUI {
                    // @ts-ignore
                    class BasicFileView extends javax.swing.filechooser.FileView {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        iconCache: java.util.Hashtable<java.io.File, javax.swing.Icon>
                        // @ts-ignore
                        clearIconCache(): void
                        // @ts-ignore
                        getName(f: java.io.File): java.lang.String
                        // @ts-ignore
                        getDescription(f: java.io.File): java.lang.String
                        // @ts-ignore
                        getTypeDescription(f: java.io.File): java.lang.String
                        // @ts-ignore
                        getCachedIcon(f: java.io.File): javax.swing.Icon
                        // @ts-ignore
                        cacheIcon(f: java.io.File, i: javax.swing.Icon): void
                        // @ts-ignore
                        getIcon(f: java.io.File): javax.swing.Icon
                        // @ts-ignore
                        isHidden(f: java.io.File): java.lang.Boolean
                    }
                }
            }
        }
    }
}
