declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace tld {
                        /**
                         * Bare-bone model of a tag file loaded from a TLD.
                         * This does not contain the tag-specific attributes that requiring parsing
                         * the actual tag file to derive.
                         */
                        // @ts-ignore
                        class TagFileXml extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getPath(): string
                            // @ts-ignore
                            public setPath(path: java.lang.String | string): void
                            // @ts-ignore
                            public getDisplayName(): string
                            // @ts-ignore
                            public setDisplayName(displayName: java.lang.String | string): void
                            // @ts-ignore
                            public getSmallIcon(): string
                            // @ts-ignore
                            public setSmallIcon(smallIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getLargeIcon(): string
                            // @ts-ignore
                            public setLargeIcon(largeIcon: java.lang.String | string): void
                            // @ts-ignore
                            public getInfo(): string
                            // @ts-ignore
                            public setInfo(info: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}
