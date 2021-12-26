declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace variables {
                        // @ts-ignore
                        class VariableRegistry extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(value: java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.skills.variables.Variable>)
                            // @ts-ignore
                            public put(key: java.lang.String | string, value: io.lumine.xikage.mythicmobs.skills.variables.Variable): void
                            // @ts-ignore
                            public putAll(value: java.util.Map<java.lang.String | string, any>): void
                            // @ts-ignore
                            public remove(key: java.lang.String | string): void
                            // @ts-ignore
                            public has(key: java.lang.String | string): boolean
                            // @ts-ignore
                            public get(key: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.variables.Variable
                            // @ts-ignore
                            public getOrDefault(key: java.lang.String | string, def: io.lumine.xikage.mythicmobs.skills.variables.Variable): io.lumine.xikage.mythicmobs.skills.variables.Variable
                            // @ts-ignore
                            public putInt(key: java.lang.String | string, value: number /*int*/): void
                            // @ts-ignore
                            public getInt(key: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public putString(key: java.lang.String | string, value: java.lang.String | string): void
                            // @ts-ignore
                            public getString(key: java.lang.String | string): string
                            // @ts-ignore
                            public putFloat(key: java.lang.String | string, value: number /*float*/): void
                            // @ts-ignore
                            public getFloat(key: java.lang.String | string): number /*float*/
                            // @ts-ignore
                            public putObject(key: java.lang.String | string, value: java.lang.Object | any): void
                            // @ts-ignore
                            public asMap(): object
                            // @ts-ignore
                            public clean(): void
                            // @ts-ignore
                            public unload(): void
                        }
                    }
                }
            }
        }
    }
}
