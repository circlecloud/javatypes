declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    // @ts-ignore
                    class ReflectionUtils extends java.lang.Object {
                        // @ts-ignore
                        public static getConstructor(clazz: java.lang.Class<any>, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>
                        // @ts-ignore
                        public static getConstructor(className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>
                        // @ts-ignore
                        public static instantiateObject(clazz: java.lang.Class<any>, ...arguments: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public static instantiateObject(className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, ...arguments: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public static getMethod(clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                        // @ts-ignore
                        public static getMethod(className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, methodName: java.lang.String | string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method
                        // @ts-ignore
                        public static invokeMethod(instance: java.lang.Object | any, methodName: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public static invokeMethod(instance: java.lang.Object | any, clazz: java.lang.Class<any>, methodName: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public static invokeMethod(instance: java.lang.Object | any, className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, methodName: java.lang.String | string, ...arguments: java.lang.Object[] | any[]): any
                        // @ts-ignore
                        public static getField(clazz: java.lang.Class<any>, declared: boolean, fieldName: java.lang.String | string): java.lang.reflect.Field
                        // @ts-ignore
                        public static getField(className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, declared: boolean, fieldName: java.lang.String | string): java.lang.reflect.Field
                        // @ts-ignore
                        public static getValue(instance: java.lang.Object | any, clazz: java.lang.Class<any>, declared: boolean, fieldName: java.lang.String | string): any
                        // @ts-ignore
                        public static getValue(instance: java.lang.Object | any, className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, declared: boolean, fieldName: java.lang.String | string): any
                        // @ts-ignore
                        public static getValue(instance: java.lang.Object | any, declared: boolean, fieldName: java.lang.String | string): any
                        // @ts-ignore
                        public static setValue(instance: java.lang.Object | any, clazz: java.lang.Class<any>, declared: boolean, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                        // @ts-ignore
                        public static setValue(instance: java.lang.Object | any, className: java.lang.String | string, packageType: io.lumine.xikage.mythicmobs.util.ReflectionUtils.PackageType, declared: boolean, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                        // @ts-ignore
                        public static setValue(instance: java.lang.Object | any, declared: boolean, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                    }
                }
            }
        }
    }
}
