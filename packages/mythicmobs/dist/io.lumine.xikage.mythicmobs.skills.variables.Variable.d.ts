declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace variables {
                        // @ts-ignore
                        abstract class Variable extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(expirationTime: number /*long*/)
                            // @ts-ignore
                            public shouldExpire(): boolean
                            // @ts-ignore
                            public shouldSave(): boolean
                            // @ts-ignore
                            public abstract get(): any
                            // @ts-ignore
                            public static ofType(type: io.lumine.xikage.mythicmobs.skills.variables.VariableType, value: java.lang.String | string): io.lumine.xikage.mythicmobs.skills.variables.Variable
                            // @ts-ignore
                            public static ofType(type: io.lumine.xikage.mythicmobs.skills.variables.VariableType, value: java.lang.String | string, save: boolean): io.lumine.xikage.mythicmobs.skills.variables.Variable
                            // @ts-ignore
                            public static ofType(type: io.lumine.xikage.mythicmobs.skills.variables.VariableType, value: java.lang.String | string, expire: number /*long*/): io.lumine.xikage.mythicmobs.skills.variables.Variable
                            // @ts-ignore
                            public static toType(variable: io.lumine.xikage.mythicmobs.skills.variables.Variable, type: io.lumine.xikage.mythicmobs.skills.variables.VariableType): io.lumine.xikage.mythicmobs.skills.variables.Variable
                        }
                    }
                }
            }
        }
    }
}
