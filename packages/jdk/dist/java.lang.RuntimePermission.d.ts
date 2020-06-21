declare namespace java {
    namespace lang {
        /**
         * RuntimePermission objects represent access to runtime
         * support.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class RuntimePermission extends java.security.BasicPermission {
            /**
             * Creates an instance of this class with the given name.
             * @author OTI
             * @version initial
             * @param permissionName String
             * 					the name of the new permission.
             */
            // @ts-ignore
            constructor(permissionName: java.lang.String | string)
            /**
             * Creates an instance of this class with the given name and
             * action list. The action list is ignored.
             * @author OTI
             * @version initial
             * @param name String
             * 					the name of the new permission.
             * @param actions String
             * 					ignored.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, actions: java.lang.String | string)
        }
    }
}
