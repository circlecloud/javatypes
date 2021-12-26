declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace placeholders {
                        // @ts-ignore
                        class PlaceholderParser extends java.lang.Object {
                            // @ts-ignore
                            constructor(string: java.lang.String | string)
                            // @ts-ignore
                            readonly strValue: java.lang.String | string
                            // @ts-ignore
                            readonly strUnparsedValue: java.lang.String | string
                            // @ts-ignore
                            readonly papi: boolean
                            // @ts-ignore
                            doMath: boolean
                            // @ts-ignore
                            public checkForVariables(): void
                            // @ts-ignore
                            parse(data: io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderMeta, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): string
                            // @ts-ignore
                            getPlaceholderManager(): io.lumine.xikage.mythicmobs.skills.placeholders.PlaceholderManager
                            // @ts-ignore
                            public isDoMath(): boolean
                            // @ts-ignore
                            public setDoMath(doMath: boolean): void
                        }
                    }
                }
            }
        }
    }
}
