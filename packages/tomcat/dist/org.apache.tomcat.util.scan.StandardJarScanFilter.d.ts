declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    // @ts-ignore
                    class StandardJarScanFilter extends java.lang.Object implements org.apache.tomcat.JarScanFilter {
                        /**
                         * This is the standard implementation of {@link JarScanFilter}. By default,
                         * the following filtering rules are used:
                         * <ul>
                         * <li>JARs that match neither the skip nor the scan list will be included
                         * in scan results.</li>
                         * <li>JARs that match the skip list but not the scan list will be excluded
                         * from scan results.</li>
                         * <li>JARs that match the scan list will be included from scan results.
                         * </li>
                         * </ul>
                         * The default skip list and default scan list are obtained from the system
                         * properties {@link Constants#SKIP_JARS_PROPERTY} and
                         * {@link Constants#SCAN_JARS_PROPERTY} respectively. These default values
                         * may be over-ridden for the {@link JarScanType#TLD} and
                         * {@link JarScanType#PLUGGABILITY} scans. The filtering rules may also be
                         * modified for these scan types using {@link #setDefaultTldScan(boolean)}
                         * and {@link #setDefaultPluggabilityScan(boolean)}. If set to
                         * <code>false</code>, the following filtering rules are used for associated
                         * type:
                         * <ul>
                         * <li>JARs that match neither the skip nor the scan list will be excluded
                         * from scan results.</li>
                         * <li>JARs that match the scan list but not the skip list will be included
                         * in scan results.</li>
                         * <li>JARs that match the skip list will be excluded from scan results.
                         * </li>
                         * </ul>
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public getTldSkip(): string
                        // @ts-ignore
                        public setTldSkip(tldSkip: java.lang.String | string): void
                        // @ts-ignore
                        public getTldScan(): string
                        // @ts-ignore
                        public setTldScan(tldScan: java.lang.String | string): void
                        // @ts-ignore
                        public isDefaultTldScan(): boolean
                        // @ts-ignore
                        public setDefaultTldScan(defaultTldScan: boolean): void
                        // @ts-ignore
                        public getPluggabilitySkip(): string
                        // @ts-ignore
                        public setPluggabilitySkip(pluggabilitySkip: java.lang.String | string): void
                        // @ts-ignore
                        public getPluggabilityScan(): string
                        // @ts-ignore
                        public setPluggabilityScan(pluggabilityScan: java.lang.String | string): void
                        // @ts-ignore
                        public isDefaultPluggabilityScan(): boolean
                        // @ts-ignore
                        public setDefaultPluggabilityScan(defaultPluggabilityScan: boolean): void
                        // @ts-ignore
                        public check(jarScanType: org.apache.tomcat.JarScanType, jarName: java.lang.String | string): boolean
                    }
                }
            }
        }
    }
}
