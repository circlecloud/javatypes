declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                namespace JNDIRealm {
                    /**
                     * A protected class representing a User
                     */
                    // @ts-ignore
                    class User extends java.lang.Object {
                        // @ts-ignore
                        constructor(username: java.lang.String | string, dn: java.lang.String | string, password: java.lang.String | string, roles: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, userRoleId: java.lang.String | string)
                        // @ts-ignore
                        public getUserName(): string
                        // @ts-ignore
                        public getDN(): string
                        // @ts-ignore
                        public getPassword(): string
                        // @ts-ignore
                        public getRoles(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getUserRoleId(): string
                    }
                }
            }
        }
    }
}
