declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace tld {
                        /**
                         * Model of a tag define in a tag library descriptor.
                         * This represents the information as parsed from the XML but differs from
                         * TagInfo in that is does not provide a link back to the tag library that
                         * defined it.
                         */
                        // @ts-ignore
                        class TagXml extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public getTagClass(): string
                            // @ts-ignore
                            public setTagClass(tagClass: java.lang.String | string): void
                            // @ts-ignore
                            public getTeiClass(): string
                            // @ts-ignore
                            public setTeiClass(teiClass: java.lang.String | string): void
                            // @ts-ignore
                            public getBodyContent(): string
                            // @ts-ignore
                            public setBodyContent(bodyContent: java.lang.String | string): void
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
                            // @ts-ignore
                            public hasDynamicAttributes(): boolean
                            // @ts-ignore
                            public setDynamicAttributes(dynamicAttributes: boolean): void
                            // @ts-ignore
                            public getAttributes(): Array<TagAttributeInfo>
                            // @ts-ignore
                            public getVariables(): Array<TagVariableInfo>
                        }
                    }
                }
            }
        }
    }
}
