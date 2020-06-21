declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Token used during the upgrade process.
             */
            // @ts-ignore
            class UpgradeToken extends java.lang.Object {
                // @ts-ignore
                constructor(httpUpgradeHandler: javax.servlet.http.HttpUpgradeHandler, contextBind: org.apache.tomcat.ContextBind, instanceManager: org.apache.tomcat.InstanceManager)
                // @ts-ignore
                public getContextBind(): org.apache.tomcat.ContextBind
                // @ts-ignore
                public getHttpUpgradeHandler(): javax.servlet.http.HttpUpgradeHandler
                // @ts-ignore
                public getInstanceManager(): org.apache.tomcat.InstanceManager
            }
        }
    }
}
