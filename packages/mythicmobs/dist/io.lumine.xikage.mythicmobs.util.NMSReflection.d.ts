declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    // @ts-ignore
                    class NMSReflection extends java.lang.Object {
                        // @ts-ignore
                        public static getVersion(): string
                        // @ts-ignore
                        public static getNMSClass(className: java.lang.String | string): java.lang.Class<any>
                        // @ts-ignore
                        public static getOBCClass(className: java.lang.String | string): java.lang.Class<any>
                        // @ts-ignore
                        public static getHandle(obj: java.lang.Object | any): any
                        // @ts-ignore
                        public static getField(clazz: java.lang.Class<any>, name: java.lang.String | string): java.lang.reflect.Field
                        // @ts-ignore
                        public static getMethod(clazz: java.lang.Class<any>, name: java.lang.String | string, ...args: java.lang.Class<any>[]): java.lang.reflect.Method
                    }
                }
            }
        }
    }
}
