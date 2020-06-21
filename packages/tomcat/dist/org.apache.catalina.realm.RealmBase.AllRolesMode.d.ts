declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                namespace RealmBase {
                    // @ts-ignore
                    class AllRolesMode extends java.lang.Object {
                        /**
                         * Use the strict servlet spec interpretation which requires that the user
                         * have one of the web-app/security-role/role-name
                         */
                        // @ts-ignore
                        public static readonly STRICT_MODE: org.apache.catalina.realm.RealmBase.AllRolesMode
                        /**
                         * Allow any authenticated user
                         */
                        // @ts-ignore
                        public static readonly AUTH_ONLY_MODE: org.apache.catalina.realm.RealmBase.AllRolesMode
                        /**
                         * Allow any authenticated user only if there are no web-app/security-roles
                         */
                        // @ts-ignore
                        public static readonly STRICT_AUTH_ONLY_MODE: org.apache.catalina.realm.RealmBase.AllRolesMode
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
