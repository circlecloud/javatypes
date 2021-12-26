declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace clock {
                    // @ts-ignore
                    class TimingsHandler extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public enable(): void
                        // @ts-ignore
                        public disable(): void
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        public isEnabled(): boolean
                        // @ts-ignore
                        public markTotalNew(): void
                        // @ts-ignore
                        public markTotalComplete(): void
                        // @ts-ignore
                        public getStartTime(): number /*long*/
                        // @ts-ignore
                        public getRunTime(): number /*long*/
                        // @ts-ignore
                        public getRunTimeMillis(): number /*double*/
                        // @ts-ignore
                        public getTimeTotal(): number /*long*/
                        // @ts-ignore
                        public markScannerNew(): void
                        // @ts-ignore
                        public markScannerComplete(): void
                        // @ts-ignore
                        public getTimeScanner(): number /*long*/
                        // @ts-ignore
                        public markSkillsNew(): void
                        // @ts-ignore
                        public markSkillsComplete(): void
                        // @ts-ignore
                        public getTimeSkills(): number /*long*/
                        // @ts-ignore
                        public markRandomSpawnersNew(): void
                        // @ts-ignore
                        public markRandomSpawnersComplete(): void
                        // @ts-ignore
                        public getTimeRandomSpawners(): number /*long*/
                        // @ts-ignore
                        public markRandomGeneratorsNew(): void
                        // @ts-ignore
                        public markRandomGeneratorsComplete(): void
                        // @ts-ignore
                        public getTimeRandomGenerators(): number /*long*/
                        // @ts-ignore
                        public markSpawnersNew(): void
                        // @ts-ignore
                        public markSpawnersComplete(): void
                        // @ts-ignore
                        public getTimeSpawners(): number /*long*/
                        // @ts-ignore
                        public markThreatTablesNew(): void
                        // @ts-ignore
                        public markThreatTablesComplete(): void
                        // @ts-ignore
                        public getTimeThreatTables(): number /*long*/
                        // @ts-ignore
                        public markSpawnerNew(s: java.lang.String | string): void
                        // @ts-ignore
                        public markSpawnerComplete(s: java.lang.String | string): void
                        // @ts-ignore
                        public getAllSpawnerTimes(): java.util.HashMap<java.lang.String | string, java.lang.Long | number>
                        // @ts-ignore
                        public markSkillNew(s: java.lang.String | string): void
                        // @ts-ignore
                        public markSkillComplete(s: java.lang.String | string): void
                        // @ts-ignore
                        public getAllSkillTimes(): java.util.HashMap<java.lang.String | string, java.lang.Long | number>
                    }
                }
            }
        }
    }
}
