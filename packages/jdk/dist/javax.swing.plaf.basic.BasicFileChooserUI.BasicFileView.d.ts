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
                        public clearIconCache(): void
                        // @ts-ignore
                        public getName(f: java.io.File): string
                        // @ts-ignore
                        public getDescription(f: java.io.File): string
                        // @ts-ignore
                        public getTypeDescription(f: java.io.File): string
                        // @ts-ignore
                        public getCachedIcon(f: java.io.File): javax.swing.Icon
                        // @ts-ignore
                        public cacheIcon(f: java.io.File, i: javax.swing.Icon): void
                        // @ts-ignore
                        public getIcon(f: java.io.File): javax.swing.Icon
                        // @ts-ignore
                        public isHidden(f: java.io.File): java.lang.Boolean
                    }
                }
            }
        }
    }
}
