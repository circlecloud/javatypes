declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace tld {
                        /**
                         * Common representation of a Tag Library Descriptor (TLD) XML file.
                         * <p>
                         * This stores the raw result of parsing an TLD XML file, flattening different
                         * version of the descriptors to a common format. This is different to a
                         * TagLibraryInfo instance that would be passed to a tag validator in that it
                         * does not contain the uri and prefix values used by a JSP to reference this
                         * tag library.
                         */
                        // @ts-ignore
                        class TaglibXml extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getTlibVersion(): string
                            // @ts-ignore
                            public setTlibVersion(tlibVersion: java.lang.String | string): void
                            // @ts-ignore
                            public getJspVersion(): string
                            // @ts-ignore
                            public setJspVersion(jspVersion: java.lang.String | string): void
                            // @ts-ignore
                            public getShortName(): string
                            // @ts-ignore
                            public setShortName(shortName: java.lang.String | string): void
                            // @ts-ignore
                            public getUri(): string
                            // @ts-ignore
                            public setUri(uri: java.lang.String | string): void
                            // @ts-ignore
                            public getInfo(): string
                            // @ts-ignore
                            public setInfo(info: java.lang.String | string): void
                            // @ts-ignore
                            public getValidator(): org.apache.tomcat.util.descriptor.tld.ValidatorXml
                            // @ts-ignore
                            public setValidator(validator: org.apache.tomcat.util.descriptor.tld.ValidatorXml): void
                            // @ts-ignore
                            public addTag(tag: org.apache.tomcat.util.descriptor.tld.TagXml): void
                            // @ts-ignore
                            public getTags(): Array<org.apache.tomcat.util.descriptor.tld.TagXml>
                            // @ts-ignore
                            public addTagFile(tag: org.apache.tomcat.util.descriptor.tld.TagFileXml): void
                            // @ts-ignore
                            public getTagFiles(): Array<org.apache.tomcat.util.descriptor.tld.TagFileXml>
                            // @ts-ignore
                            public addListener(listener: java.lang.String | string): void
                            // @ts-ignore
                            public getListeners(): Array<java.lang.String | string>
                            // @ts-ignore
                            public addFunction(name: java.lang.String | string, klass: java.lang.String | string, signature: java.lang.String | string): void
                            // @ts-ignore
                            public getFunctions(): Array<FunctionInfo>
                        }
                    }
                }
            }
        }
    }
}
