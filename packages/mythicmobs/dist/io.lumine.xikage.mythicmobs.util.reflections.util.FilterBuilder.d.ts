declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace util {
                            // @ts-ignore
                            class FilterBuilder extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public include(regex: java.lang.String | string): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public exclude(regex: java.lang.String | string): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public add(filter: object): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public includePackage(aClass: java.lang.Class<any>): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public excludePackage(aClass: java.lang.Class<any>): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public includePackage(...prefixes: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public excludePackage(prefix: java.lang.String | string): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public static prefix(qualifiedName: java.lang.String | string): string
                                // @ts-ignore
                                public toString(): string
                                // @ts-ignore
                                public apply(regex: java.lang.String | string): boolean
                                // @ts-ignore
                                public static parse(includeExcludeString: java.lang.String | string): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                                // @ts-ignore
                                public static parsePackages(includeExcludeString: java.lang.String | string): io.lumine.xikage.mythicmobs.util.reflections.util.FilterBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
