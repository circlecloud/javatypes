declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace vfs {
                            // @ts-ignore
                            abstract class Vfs extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static getDefaultUrlTypes(): Array<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType>
                                // @ts-ignore
                                public static setDefaultURLTypes(urlTypes: java.util.List<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType> | Array<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType>): void
                                // @ts-ignore
                                public static addDefaultURLTypes(urlType: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType): void
                                // @ts-ignore
                                public static fromURL(url: java.net.URL): io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.Dir
                                // @ts-ignore
                                public static fromURL(url: java.net.URL, urlTypes: java.util.List<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType> | Array<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType>): io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.Dir
                                // @ts-ignore
                                public static fromURL(url: java.net.URL, ...urlTypes: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.UrlType[]): io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.Dir
                                // @ts-ignore
                                public static findFiles(inUrls: java.util.Collection<java.net.URL> | Array<java.net.URL>, packagePrefix: java.lang.String | string, nameFilter: object): java.lang.Iterable<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File>
                                // @ts-ignore
                                public static findFiles(inUrls: java.util.Collection<java.net.URL> | Array<java.net.URL>, filePredicate: object): java.lang.Iterable<io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File>
                                // @ts-ignore
                                public static getFile(url: java.net.URL): java.io.File
                            }
                        }
                    }
                }
            }
        }
    }
}
