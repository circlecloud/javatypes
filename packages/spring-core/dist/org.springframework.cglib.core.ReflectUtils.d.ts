declare namespace org {
    namespace springframework {
        namespace cglib {
            namespace core {
                /**
                 * @version $Id: ReflectUtils.java,v 1.30 2009/01/11 19:47:49 herbyderby Exp $
                 */
                // @ts-ignore
                class ReflectUtils extends java.lang.Object {
                    // @ts-ignore
                    getProtectionDomain(source: java.lang.Class): java.security.ProtectionDomain
                    // @ts-ignore
                    getExceptionTypes(member: java.lang.reflect.Member): org.springframework.asm.Type[]
                    // @ts-ignore
                    getSignature(member: java.lang.reflect.Member): Signature
                    // @ts-ignore
                    findConstructor(desc: string): java.lang.reflect.Constructor
                    // @ts-ignore
                    findConstructor(desc: string, loader: java.lang.ClassLoader): java.lang.reflect.Constructor
                    // @ts-ignore
                    findMethod(desc: string): java.lang.reflect.Method
                    // @ts-ignore
                    findMethod(desc: string, loader: java.lang.ClassLoader): java.lang.reflect.Method
                    // @ts-ignore
                    newInstance(type: java.lang.Class): java.lang.Object
                    // @ts-ignore
                    newInstance(type: java.lang.Class, parameterTypes: java.lang.Class[], args: any[]): java.lang.Object
                    // @ts-ignore
                    newInstance(cstruct: java.lang.reflect.Constructor, args: any[]): java.lang.Object
                    // @ts-ignore
                    getConstructor(type: java.lang.Class, parameterTypes: java.lang.Class[]): java.lang.reflect.Constructor
                    // @ts-ignore
                    getNames(classes: java.lang.Class[]): java.lang.String[]
                    // @ts-ignore
                    getClasses(objects: any[]): java.lang.Class[]
                    // @ts-ignore
                    findNewInstance(iface: java.lang.Class): java.lang.reflect.Method
                    // @ts-ignore
                    getPropertyMethods(properties: java.beans.PropertyDescriptor[], read: boolean, write: boolean): java.lang.reflect.Method[]
                    // @ts-ignore
                    getBeanProperties(type: java.lang.Class): java.beans.PropertyDescriptor[]
                    // @ts-ignore
                    getBeanGetters(type: java.lang.Class): java.beans.PropertyDescriptor[]
                    // @ts-ignore
                    getBeanSetters(type: java.lang.Class): java.beans.PropertyDescriptor[]
                    // @ts-ignore
                    findDeclaredMethod(type: java.lang.Class, methodName: string, parameterTypes: java.lang.Class[]): java.lang.reflect.Method
                    // @ts-ignore
                    addAllMethods(type: java.lang.Class, list: Array): java.util.List
                    // @ts-ignore
                    addAllInterfaces(type: java.lang.Class, list: Array): java.util.List
                    // @ts-ignore
                    findInterfaceMethod(iface: java.lang.Class): java.lang.reflect.Method
                    // @ts-ignore
                    defineClass(className: string, b: number /*byte*/[], loader: java.lang.ClassLoader): java.lang.Class
                    // @ts-ignore
                    defineClass(className: string, b: number /*byte*/[], loader: java.lang.ClassLoader, protectionDomain: java.security.ProtectionDomain): java.lang.Class
                    // @ts-ignore
                    defineClass(className: string, b: number /*byte*/[], loader: java.lang.ClassLoader, protectionDomain: java.security.ProtectionDomain, contextClass: java.lang.Class<any>): java.lang.Class
                    // @ts-ignore
                    findPackageProtected(classes: java.lang.Class[]): int
                    // @ts-ignore
                    getMethodInfo(member: java.lang.reflect.Member, modifiers: number /*int*/): MethodInfo
                    // @ts-ignore
                    getMethodInfo(member: java.lang.reflect.Member): MethodInfo
                    // @ts-ignore
                    getClassInfo(clazz: java.lang.Class): ClassInfo
                    // @ts-ignore
                    findMethods(namesAndDescriptors: string[], methods: java.lang.reflect.Method[]): java.lang.reflect.Method[]
                }
            }
        }
    }
}
